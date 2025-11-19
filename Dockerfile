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

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy security.txt
COPY public/security.txt /usr/share/nginx/html/security.txt

# Security labels
LABEL maintainer="CDX - Codex SpA <contacto@cdx.cl>" \
      description="Odontología de Luz - Dental Clinic Website" \
      version="2025.1"

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
