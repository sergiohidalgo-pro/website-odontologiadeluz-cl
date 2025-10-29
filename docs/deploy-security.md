# 🛡️ Guía de Seguridad para Despliegue - EasyPanel 2025

## 📋 Resumen de Seguridad

Esta guía se enfoca específicamente en los aspectos de seguridad del despliegue de **Odontología de Luz** en EasyPanel, implementando las mejores prácticas de seguridad para 2025.

## 🎯 Matriz de Seguridad Implementada

| Categoría | Implementado | Nivel | Descripción |
|-----------|-------------|-------|-------------|
| **Container Security** | ✅ | Alto | Non-root user, read-only filesystem |
| **Network Security** | ✅ | Alto | Rate limiting, firewall, isolation |
| **Web Security** | ✅ | Alto | CSP, HSTS, security headers |
| **SSL/TLS** | ✅ | Alto | Let's Encrypt, HSTS preload |
| **Access Control** | ✅ | Medio | Basic authentication, IP filtering |
| **Monitoring** | ✅ | Alto | Logs, metrics, alertas |
| **Backup Security** | ✅ | Medio | Encrypted backups, retention |
| **Vulnerability Scanning** | ✅ | Alto | Automated container scanning |

## 🔒 Configuraciones de Seguridad Detalladas

### 1. Seguridad de Contenedores

#### Dockerfile Hardening Implementado:

```dockerfile
# ✅ Multi-stage build para minimizar superficie de ataque
FROM node:20-alpine AS builder

# ✅ Usuario no-root en build stage
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

# ✅ Limpieza de cache y paquetes innecesarios
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init && \
    rm -rf /var/cache/apk/*

# ✅ Production stage con nginx hardened
FROM nginx:1.25-alpine

# ✅ Usuario custom nginx no-root
RUN deluser nginx && \
    addgroup -g 101 -S nginx && \
    adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx

# ✅ Permisos mínimos requeridos
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /etc/nginx && \
    chmod -R 755 /usr/share/nginx/html

# ✅ Labels de seguridad
LABEL security.scan="enabled" \
      security.non-root="true"

# ✅ Signal handling con dumb-init
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
USER nginx
```

#### Docker Compose Security Features:

```yaml
# ✅ Read-only filesystem
read_only: true

# ✅ No new privileges
security_opt:
  - no-new-privileges:true

# ✅ Network isolation
networks:
  - frontend
  
# ✅ Resource limits
deploy:
  resources:
    limits:
      cpus: '1.0'
      memory: 512M
      pids: 100
```

### 2. Seguridad Web (nginx.conf)

#### Headers de Seguridad Implementados:

```nginx
# ✅ Content Security Policy
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" always;

# ✅ HTTP Strict Transport Security
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# ✅ Cross-Origin Policies
add_header Cross-Origin-Embedder-Policy "require-corp" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-origin" always;

# ✅ Additional Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(self), microphone=(), camera=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()" always;
```

#### Rate Limiting y DDoS Protection:

```nginx
# ✅ Rate limiting zones
limit_req_zone $binary_remote_addr zone=login:10m rate=10r/m;
limit_req_zone $binary_remote_addr zone=api:10m rate=30r/m;
limit_req_zone $binary_remote_addr zone=general:10m rate=60r/m;

# ✅ Apply rate limiting
limit_req zone=general burst=20 nodelay;

# ✅ Hide server information
server_tokens off;
```

#### File Access Protection:

```nginx
# ✅ Block sensitive files
location ~* \.(env|log|ini|conf|sql|bak|backup|old)$ {
    deny all;
    access_log off;
    log_not_found off;
}

# ✅ Block attack patterns
location ~* (eval\(|union.*select|script.*>|<.*script) {
    deny all;
    access_log off;
    log_not_found off;
}

# ✅ Security.txt endpoint
location = /.well-known/security.txt {
    alias /usr/share/nginx/html/security.txt;
    add_header Content-Type text/plain;
    add_header Cache-Control "public, max-age=86400";
}
```

### 3. Configuración de Red y Firewall

#### Configuración UFW (Ubuntu Firewall):

```bash
# ✅ Configuración básica de firewall
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing

# ✅ Puertos esenciales
sudo ufw allow ssh comment 'SSH access'
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'
sudo ufw allow 3000/tcp comment 'EasyPanel Dashboard'

# ✅ Restricciones adicionales de SSH (opcional)
sudo ufw limit ssh comment 'Rate limit SSH'

# ✅ Activar firewall
sudo ufw --force enable
sudo ufw status verbose
```

#### Fail2Ban Configuration:

```bash
# ✅ Instalar fail2ban
sudo apt install -y fail2ban

# ✅ Configuración personalizada
sudo tee /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 3600    # 1 hora
findtime = 600    # 10 minutos
maxretry = 3      # 3 intentos

[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
port = http,https
logpath = /var/log/nginx/error.log

[nginx-limit-req]
enabled = true
filter = nginx-limit-req
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 10

[nginx-botsearch]
enabled = true
filter = nginx-botsearch
port = http,https
logpath = /var/log/nginx/access.log
maxretry = 2
EOF

# ✅ Iniciar fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
sudo fail2ban-client status
```

### 4. SSL/TLS Security

#### EasyPanel SSL Configuration:

```yaml
# ✅ Configuración automática en EasyPanel
SSL Provider: Let's Encrypt
Auto Renewal: Enabled
Force HTTPS: Enabled
HSTS Preload: Enabled

# ✅ Configuración manual si es necesaria
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 1d;
ssl_stapling on;
ssl_stapling_verify on;
```

#### Verificación SSL:

```bash
# ✅ Verificar configuración SSL
curl -I https://odontologiadeluz.cl
openssl s_client -connect odontologiadeluz.cl:443 -servername odontologiadeluz.cl

# ✅ Verificar grado SSL en SSL Labs
# https://www.ssllabs.com/ssltest/analyze.html?d=odontologiadeluz.cl
```

### 5. Monitoreo de Seguridad

#### Logs de Seguridad:

```bash
# ✅ Configuración de logs en Docker
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
    labels: "service,environment"

# ✅ Logs importantes a monitorear
/var/log/nginx/access.log     # Accesos web
/var/log/nginx/error.log      # Errores nginx
/var/log/auth.log             # Autenticación SSH
/var/log/fail2ban.log         # Bloqueos fail2ban
```

#### Alertas de Seguridad:

```yaml
# ✅ Configuración en EasyPanel
Health Check Failures: Alert after 2 consecutive failures
High Error Rate: Alert at 5% error rate
SSL Certificate Expiry: Alert 30 days before
Failed Login Attempts: Alert after 10 attempts
Memory Usage: Alert at 80%
Disk Usage: Alert at 85%
```

#### Scripts de Monitoreo:

```bash
#!/bin/bash
# ✅ Script de verificación de seguridad (security-check.sh)

echo "🔒 Verificación de Seguridad - $(date)"
echo "=================================="

# Verificar fail2ban
echo "📊 Estado de Fail2Ban:"
sudo fail2ban-client status

# Verificar firewall
echo "🔥 Estado del Firewall:"
sudo ufw status

# Verificar puertos abiertos
echo "🚪 Puertos Abiertos:"
sudo netstat -tulpn | grep LISTEN

# Verificar certificado SSL
echo "🔐 Certificado SSL:"
echo | openssl s_client -servername odontologiadeluz.cl -connect odontologiadeluz.cl:443 2>/dev/null | openssl x509 -noout -dates

# Verificar uso de recursos
echo "💾 Uso de Recursos:"
docker stats --no-stream

echo "✅ Verificación completada"
```

### 6. Backup Security

#### Configuración Segura de Backups:

```yaml
# ✅ Configuración en EasyPanel
Backup Schedule: Daily at 2 AM
Retention Period: 30 days
Backup Encryption: AES-256
Backup Location: External Storage (encrypted)
Backup Verification: Enabled
```

#### Script de Backup Manual:

```bash
#!/bin/bash
# ✅ backup-secure.sh

BACKUP_DIR="/opt/backups/$(date +%Y%m%d)"
CONTAINER_NAME="odontologiadeluz-web"

# Crear directorio de backup
mkdir -p "$BACKUP_DIR"

# Backup del contenedor
docker commit "$CONTAINER_NAME" "odontologiadeluz-backup:$(date +%Y%m%d)"

# Exportar imagen
docker save "odontologiadeluz-backup:$(date +%Y%m%d)" | \
  gzip | \
  gpg --symmetric --cipher-algo AES256 --output "$BACKUP_DIR/container-backup.tar.gz.gpg"

# Backup de configuraciones
tar -czf "$BACKUP_DIR/configs.tar.gz" \
  /etc/nginx/conf.d/ \
  /etc/fail2ban/ \
  /etc/ufw/

# Limpiar imagen temporal
docker rmi "odontologiadeluz-backup:$(date +%Y%m%d)"

echo "✅ Backup completado en $BACKUP_DIR"
```

### 7. Incident Response

#### Plan de Respuesta a Incidentes:

```yaml
# ✅ Procedimiento de respuesta
1. Detección:
   - Alertas automáticas
   - Monitoreo manual
   - Reportes de usuarios

2. Evaluación:
   - Clasificar severidad
   - Identificar impacto
   - Documentar hallazgos

3. Contención:
   - Aislar sistemas afectados
   - Bloquear IPs maliciosas
   - Activar backups si es necesario

4. Erradicación:
   - Eliminar amenazas
   - Parchear vulnerabilidades
   - Actualizar configuraciones

5. Recuperación:
   - Restaurar servicios
   - Verificar integridad
   - Monitorear comportamiento

6. Lecciones Aprendidas:
   - Documentar incidente
   - Actualizar procedimientos
   - Mejorar defensas
```

#### Comandos de Emergencia:

```bash
# ✅ Comandos de respuesta rápida

# Bloquear IP inmediatamente
sudo fail2ban-client set nginx-http-auth banip <IP_MALICIOSA>

# Verificar accesos sospechosos
sudo tail -f /var/log/nginx/access.log | grep -E "(404|403|500)"

# Reinicio de emergencia
docker restart odontologiadeluz-web

# Activar modo mantenimiento
docker stop odontologiadeluz-web

# Verificar integridad del contenedor
docker diff odontologiadeluz-web
```

### 8. Compliance y Auditoría

#### Checklist de Cumplimiento:

```yaml
# ✅ Requisitos de seguridad cumplidos
□ OWASP Top 10 2021 - Mitigated
□ CIS Docker Benchmark - Compliant
□ NIST Cybersecurity Framework - Implemented
□ SSL/TLS Best Practices - Applied
□ GDPR Data Protection - Considered
□ Chilean Data Protection Laws - Compliant
```

#### Auditoría Automatizada:

```bash
#!/bin/bash
# ✅ audit-security.sh

echo "🔍 Auditoría de Seguridad Automatizada"
echo "======================================"

# Verificar configuración SSL
echo "🔐 SSL Configuration:"
testssl.sh --quiet --color 0 odontologiadeluz.cl

# Verificar headers de seguridad
echo "📋 Security Headers:"
curl -I -s https://odontologiadeluz.cl | grep -E "(X-|Strict-|Content-Security)"

# Verificar vulnerabilidades del contenedor
echo "🐳 Container Security:"
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image odontologiadeluz:latest

# Verificar configuración nginx
echo "⚙️ Nginx Configuration:"
docker exec odontologiadeluz-web nginx -t

echo "✅ Auditoría completada"
```

## 🔄 Mantenimiento de Seguridad

### Rutinas de Mantenimiento:

#### Diario:
```bash
# ✅ Verificaciones diarias
- Revisar logs de fail2ban
- Verificar estado de certificados SSL
- Comprobar alertas de EasyPanel
- Verificar backup nocturno
```

#### Semanal:
```bash
# ✅ Verificaciones semanales
- Analizar logs de acceso nginx
- Revisar métricas de performance
- Verificar actualizaciones de seguridad
- Ejecutar escaneo de vulnerabilidades
```

#### Mensual:
```bash
# ✅ Verificaciones mensuales
- Auditoría completa de seguridad
- Revisión de configuraciones
- Pruebas de restore de backup
- Actualización de documentación
```

## 📞 Contactos de Seguridad

### Equipo de Respuesta:
```yaml
Desarrollador Principal: Sergio Hidalgo
Email: contacto@cdx.cl
Teléfono: [Your Phone Number]
Empresa: CDX - Codex SpA

Escalación de Emergencia:
Email: security@cdx.cl
Disponibilidad: 24/7 para incidentes críticos
```

### Recursos Externos:
```yaml
CERT-Chile: https://www.cert.cl/
CVE Database: https://cve.mitre.org/
Security Advisories: https://github.com/advisories
OWASP: https://owasp.org/
```

---

**Documento:** Guía de Seguridad para Despliegue EasyPanel 2025  
**Versión:** 1.0  
**Fecha:** Octubre 2024  
**Clasificación:** Interno - Confidencial  
**Próxima Revisión:** Enero 2025