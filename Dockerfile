# Build stage
FROM node:20-alpine AS builder

# Security: Update packages and add security packages
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init && \
    rm -rf /var/cache/apk/*

# Create non-root user for build
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@latest

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (needed for build)
RUN pnpm install --frozen-lockfile && pnpm store prune

# Copy source code
COPY . .

# Change ownership to nodeuser and ensure write permissions
RUN chown -R nodeuser:nodejs /app && \
    chmod -R u+w /app

# Build as non-root user
USER nodeuser
RUN pnpm run build

# Production stage
FROM nginx:1.25-alpine

# Security: Update packages and install security tools
RUN apk update && apk upgrade && \
    apk add --no-cache \
        dumb-init \
        curl \
        ca-certificates && \
    rm -rf /var/cache/apk/* && \
    # Remove default nginx user and create custom one
    deluser nginx && \
    addgroup -g 101 -S nginx && \
    adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx

# Create required directories with proper permissions
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
             /tmp/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /etc/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /tmp/nginx && \
    # Give nginx user write permission to /var/run for PID file
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Copy built assets from builder
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

# Copy security.txt to be accessible via /.well-known/security.txt
COPY --chown=nginx:nginx public/security.txt /usr/share/nginx/html/security.txt

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Security labels
LABEL maintainer="CDX - Codex SpA <contacto@cdx.cl>" \
      description="Odontología de Luz - Secure Dental Clinic Website" \
      version="2025.1" \
      security.scan="enabled" \
      security.non-root="true"

# Enhanced healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Run as non-root user
USER nginx

# Use dumb-init to handle signals properly
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

EXPOSE 8080

CMD ["nginx", "-g", "daemon off; pid /tmp/nginx/nginx.pid;"]
