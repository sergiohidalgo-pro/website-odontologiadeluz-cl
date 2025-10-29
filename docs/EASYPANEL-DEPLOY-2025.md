# 🚀 EasyPanel Deployment Guide 2025

## 📋 Resumen Ejecutivo

Esta guía actualizada para 2025 presenta las mejores prácticas de seguridad y optimización para el despliegue de **Odontología de Luz** en EasyPanel, incluyendo las últimas características de seguridad, monitoreo avanzado y configuraciones optimizadas.

## 🔒 Características de Seguridad 2025

### ✅ Implementadas en este proyecto:
- **Contenedores sin privilegios root** - Mayor seguridad del sistema
- **Contenedores de solo lectura** - Prevención de modificaciones maliciosas
- **Content Security Policy (CSP)** - Protección contra XSS
- **HSTS Preload** - Forzar HTTPS y prevenir downgrade attacks
- **Rate Limiting** - Protección contra DDoS y fuerza bruta
- **Security Headers avanzados** - Protección comprehensive contra vulnerabilidades web
- **Configuración nginx hardened** - Configuración de seguridad robusta
- **Escaneo automático de vulnerabilidades** - Labels para integración con herramientas de seguridad

## 🎯 Requisitos del Sistema 2025

### Servidor Mínimo Recomendado:
```yaml
CPU: 2 vCPUs (mínimo 1 vCPU)
RAM: 4GB (mínimo 2GB)
Disco: 20GB SSD
SO: Ubuntu 22.04 LTS o superior
Docker: v24.0+ 
EasyPanel: Última versión
```

### Puertos Requeridos:
```bash
80/tcp    # HTTP (redirects to HTTPS)
443/tcp   # HTTPS
3000/tcp  # EasyPanel Dashboard
22/tcp    # SSH (opcional, solo para administración)
```

## 🔧 Instalación de EasyPanel 2025

### 1. Preparación del Servidor

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias
sudo apt install -y curl wget git ufw fail2ban

# Configurar firewall básico
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 3000/tcp
sudo ufw --force enable

# Configurar fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 2. Instalación de Docker (Última Versión)

```bash
# Remover versiones antiguas
sudo apt remove docker docker-engine docker.io containerd runc

# Instalar Docker desde repositorio oficial
curl -fsSL https://get.docker.com | sh

# Agregar usuario al grupo docker
sudo usermod -aG docker $USER

# Reiniciar sesión o ejecutar:
newgrp docker

# Verificar instalación
docker --version
docker compose version
```

### 3. Instalación de EasyPanel

```bash
# Método oficial recomendado 2025
curl -sSL https://get.easypanel.io | sh

# O método manual para mayor control
docker run --rm -it \
  -v /etc/easypanel:/etc/easypanel \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  easypanel/easypanel setup

# Verificar instalación
docker ps | grep easypanel
```

### 4. Configuración Inicial

```bash
# Acceder al dashboard
https://tu-servidor-ip:3000

# Configuración inicial recomendada:
# - Cambiar password admin por defecto
# - Configurar backup automático
# - Habilitar notificaciones de seguridad
# - Configurar limites de recursos globales
```

## 🎯 Despliegue del Proyecto

### Método 1: Desde Repositorio Git (Recomendado)

#### 1. Preparar Repositorio

```bash
# Clonar proyecto localmente para verificar
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd odontologiadeluz.cl

# Verificar configuración antes del despliegue
pnpm run verify:deploy

# Push a repositorio remoto
git add .
git commit -m "Deploy: Ready for EasyPanel 2025"
git push origin main
```

#### 2. Crear Aplicación en EasyPanel

```bash
# En EasyPanel Dashboard:
1. Click "Create App" → "From Git Repository"
2. Repository URL: https://github.com/YOUR_USERNAME/REPO_NAME.git
3. Branch: main
4. Build Type: Docker Compose
5. Compose File: easypanel.yml
6. App Name: odontologiadeluz
```

#### 3. Configuración de Variables de Entorno

```yaml
# Variables automáticas del sistema
NODE_ENV=production
TZ=America/Santiago
NGINX_WORKER_PROCESSES=auto
NGINX_WORKER_CONNECTIONS=1024

# Variables personalizadas (opcional)
DOMAIN=odontologiadeluz.cl
SSL_PROVIDER=letsencrypt
MONITORING_ENABLED=true
```

#### 4. Configuración de Dominio y SSL

```yaml
# Dominios principales
Primary Domain: odontologiadeluz.cl
WWW Domain: www.odontologiadeluz.cl

# Configuración SSL
SSL Provider: Let's Encrypt
Auto Renewal: Enabled
Force HTTPS: Enabled
HSTS Preload: Enabled

# Configuración DNS (en tu proveedor)
Type: A
Name: @
Value: [IP-DE-TU-SERVIDOR]
TTL: 300

Type: A  
Name: www
Value: [IP-DE-TU-SERVIDOR]
TTL: 300
```

#### 5. Ejecutar Despliegue

```bash
# En EasyPanel Dashboard:
1. Click "Deploy"
2. Monitorear logs de build (2-4 minutos)
3. Verificar estado de contenedores
4. Probar acceso HTTPS
```

### Método 2: Desde Imagen Docker Pre-construida

```bash
# Build y push manual
docker build -t tu-usuario/odontologiadeluz:2025-latest .
docker push tu-usuario/odontologiadeluz:2025-latest

# En EasyPanel:
1. Create App → "From Docker Image"
2. Image: tu-usuario/odontologiadeluz:2025-latest
3. Port: 80
4. Configurar dominio y SSL igual que método 1
```

## 📊 Monitoreo y Observabilidad 2025

### 1. Métricas Básicas Incluidas

```yaml
# Métricas de aplicación
- HTTP Response Times
- Request Rate (req/sec)
- Error Rate (%)
- SSL Certificate Status
- Memory Usage
- CPU Usage
- Disk Usage

# Métricas de seguridad
- Failed Login Attempts
- Blocked IPs (Rate Limiting)
- Security Header Compliance
- SSL/TLS Grade
```

### 2. Logs Estructurados

```bash
# Configuración automática en easypanel.yml
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
    labels: "service,environment"

# Acceso a logs en tiempo real
# EasyPanel Dashboard → Apps → odontologiadeluz → Logs
```

### 3. Alertas y Notificaciones

```yaml
# Configuración recomendada en EasyPanel
Health Check Failures: Alert after 3 consecutive failures
High Memory Usage: Alert at 80%
High CPU Usage: Alert at 85%
SSL Certificate Expiry: Alert 30 days before
Disk Space: Alert at 85%
```

## 🔄 CI/CD y Auto-Deploy 2025

### 1. Configuración de Webhook

```bash
# En EasyPanel:
1. Settings → Webhooks → Generate Webhook URL
2. Copiar URL generada

# En GitHub:
1. Settings → Webhooks → Add webhook
2. Payload URL: [URL del webhook de EasyPanel]
3. Content type: application/json
4. Secret: [opcional, pero recomendado]
5. Events: Just the push event
6. Active: ✓
```

### 2. GitHub Actions Integration (Opcional)

```yaml
# .github/workflows/deploy.yml
name: Deploy to EasyPanel

on:
  push:
    branches: [ main ]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run security scan
        run: |
          docker run --rm -v $(pwd):/src \
            securecodewarrior/docker-security-scan /src
      
  deploy:
    needs: security-scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Trigger EasyPanel Deploy
        run: |
          curl -X POST ${{ secrets.EASYPANEL_WEBHOOK_URL }}
```

### 3. Rollback Automático

```yaml
# Configurado automáticamente en easypanel.yml
rollback_config:
  parallelism: 1
  delay: 0s
  failure_action: pause
  monitor: 60s
  order: stop-first
```

## 🛡️ Mejores Prácticas de Seguridad

### 1. Configuración del Servidor

```bash
# Hardening del servidor
# Deshabilitar root login por SSH
sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config

# Configurar fail2ban para EasyPanel
sudo tee /etc/fail2ban/jail.local << EOF
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 3

[sshd]
enabled = true

[nginx-http-auth]
enabled = true
EOF

sudo systemctl restart fail2ban
```

### 2. Monitoreo de Seguridad

```bash
# Instalar herramientas de monitoreo
sudo apt install -y lynis chkrootkit rkhunter

# Configurar escaneo automático
sudo crontab -e
# Agregar:
0 2 * * 0 /usr/bin/lynis audit system --quiet
```

### 3. Backup y Recuperación

```yaml
# Configuración de backup en EasyPanel
Backup Schedule: Daily at 2 AM
Retention Period: 30 days
Backup Location: External Storage (AWS S3/BackBlaze)
Backup Verification: Enabled

# Backup manual
# EasyPanel Dashboard → Settings → Backups → Create Backup
```

## 🔧 Optimización de Recursos

### Para diferentes tamaños de VM:

#### VM Pequeña (2GB RAM):
```yaml
resources:
  limits:
    cpus: '0.5'
    memory: 256M
    pids: 50
  reservations:
    cpus: '0.1'
    memory: 64M
```

#### VM Mediana (4GB RAM):
```yaml
resources:
  limits:
    cpus: '1.0'
    memory: 512M
    pids: 100
  reservations:
    cpus: '0.25'
    memory: 128M
```

#### VM Grande (8GB+ RAM):
```yaml
resources:
  limits:
    cpus: '2.0'
    memory: 1G
    pids: 200
  reservations:
    cpus: '0.5'
    memory: 256M
```

## 🚨 Troubleshooting 2025

### Problemas Comunes y Soluciones

#### 1. Build Falla

```bash
# Verificar localmente
pnpm run verify:deploy

# Ver logs detallados en EasyPanel
Dashboard → Apps → odontologiadeluz → Build Logs

# Limpiar cache de Docker
docker system prune -a
```

#### 2. Contenedor No Inicia

```bash
# Verificar recursos disponibles
docker stats

# Verificar logs del contenedor
docker logs odontologiadeluz-web

# Verificar configuración de salud
docker inspect odontologiadeluz-web | grep -A 10 Health
```

#### 3. SSL No Funciona

```bash
# Verificar DNS
nslookup odontologiadeluz.cl
dig +short odontologiadeluz.cl

# Forzar renovación de certificado
# EasyPanel → Settings → SSL → Force Renew Certificate

# Verificar puertos
sudo netstat -tlnp | grep :443
```

#### 4. Alto Uso de Recursos

```bash
# Verificar procesos
docker exec odontologiadeluz-web top

# Ajustar límites de recursos
# Editar easypanel.yml y redesplegar

# Optimizar configuración nginx
# Ajustar worker_processes y worker_connections
```

## 📈 Métricas de Performance

### Objetivos 2025:
```yaml
Page Load Speed: < 2 segundos
First Contentful Paint: < 1.5 segundos
Time to Interactive: < 3 segundos
SSL Labs Grade: A+
GTmetrix Score: A (90%+)
Lighthouse Score: 95%+
Uptime: 99.9%
```

### Herramientas de Monitoreo:
- **UptimeRobot**: Monitoreo de uptime
- **GTmetrix**: Performance monitoring
- **SSL Labs**: SSL configuration testing
- **Security Headers**: Security headers validation

## 🔗 Recursos Adicionales

### Documentación Oficial:
- [EasyPanel Docs](https://easypanel.io/docs)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [Nginx Security Guide](https://nginx.org/en/docs/http/configuring_https_servers.html)

### Herramientas de Seguridad:
- [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/)
- [Security Headers Scanner](https://securityheaders.com/)
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)

### Comunidad y Soporte:
- [EasyPanel Discord](https://discord.gg/easypanel)
- [EasyPanel GitHub](https://github.com/easypanel-io)

## 📞 Soporte y Mantenimiento

### Mantenimiento Rutinario:
```bash
# Semanal
- Verificar logs de aplicación
- Revisar uso de recursos
- Verificar certificados SSL
- Comprobar backups

# Mensual  
- Actualizar EasyPanel
- Revisar métricas de seguridad
- Ejecutar auditorías de seguridad
- Optimizar configuración

# Trimestral
- Auditoría completa de seguridad
- Revisión de configuraciones
- Pruebas de disaster recovery
- Capacitación del equipo
```

### Contacto de Emergencia:
```yaml
Desarrollador: Sergio Hidalgo
Email: contacto@cdx.cl
Empresa: CDX - Codex SpA
Teléfono: [Your Phone Number]
Horario: Lunes a Viernes, 9:00-18:00 CLT
```

---

**Última Actualización:** Octubre 2024  
**Versión del Stack:** React 19 + Vite + Nginx + Docker + EasyPanel  
**Nivel de Seguridad:** Producción Enterprise  
**Mantenedor:** CDX - Codex SpA