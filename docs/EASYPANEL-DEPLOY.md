# 🚀 Despliegue en Easypanel

## 📋 Requisitos Previos

- ✅ Easypanel instalado en tu VM
- ✅ Acceso al panel de Easypanel (puerto 3000)
- ✅ Dominio configurado (opcional)

## 🎯 Configuración Rápida

### Método 1: Desde Repositorio Git (Recomendado)

1. **Acceder a Easypanel**
   ```
   https://tu-vm-ip:3000
   ```

2. **Crear Nueva Aplicación**
   - Click en "Create App"
   - Nombre: `odontologiadeluz`
   - Tipo: `Docker Compose`

3. **Configurar Repositorio**
   - Repository URL: `https://github.com/tu-usuario/odontologiadeluz.cl.git`
   - Branch: `main`
   - Build Path: `/`
   - Compose File: `easypanel.yml`

4. **Configurar Dominio**
   - Domain: `odontologiadeluz.cl`
   - Enable HTTPS: ✅
   - Force HTTPS: ✅
   - Auto SSL (Let's Encrypt): ✅

5. **Deploy**
   - Click en "Deploy"
   - Esperar build (~2-3 minutos)
   - ✅ Listo!

### Método 2: Desde Docker Hub

1. **Build y Push a Docker Hub**
   ```bash
   docker build -t tu-usuario/odontologiadeluz:latest .
   docker push tu-usuario/odontologiadeluz:latest
   ```

2. **En Easypanel**
   - Create App → Docker Image
   - Image: `tu-usuario/odontologiadeluz:latest`
   - Port: `80`
   - Domain: `odontologiadeluz.cl`
   - Enable HTTPS: ✅

### Método 3: Upload Manual

1. **Build local**
   ```bash
   npm run build
   ```

2. **Comprimir dist**
   ```bash
   cd dist
   tar -czf ../odontologiadeluz.tar.gz .
   ```

3. **En Easypanel**
   - Create App → Static Site
   - Upload: `odontologiadeluz.tar.gz`
   - Domain: `odontologiadeluz.cl`

## ⚙️ Configuración del Archivo easypanel.yml

```yaml
version: "3.8"

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    image: odontologiadeluz:latest
    container_name: odontologiadeluz-web
    restart: unless-stopped
    
    expose:
      - "80"
    
    environment:
      - NODE_ENV=production
    
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 128M
    
    labels:
      - "easypanel.enable=true"
      - "easypanel.name=odontologiadeluz"
      - "easypanel.domain=odontologiadeluz.cl"
      - "easypanel.port=80"
      - "easypanel.https=true"
      - "easypanel.https.redirect=true"
```

## 🔧 Configuración de Dominio

### Opción A: Dominio Propio

1. **En tu proveedor DNS (Cloudflare, GoDaddy, etc.)**
   ```
   Tipo: A
   Nombre: @
   Valor: IP-DE-TU-VM
   TTL: Auto
   
   Tipo: A
   Nombre: www
   Valor: IP-DE-TU-VM
   TTL: Auto
   ```

2. **En Easypanel**
   - Settings → Domains
   - Add Domain: `odontologiadeluz.cl`
   - Add Domain: `www.odontologiadeluz.cl`
   - Enable SSL: ✅

### Opción B: Subdominio de Easypanel

```
odontologiadeluz.tu-easypanel-domain.com
```

## 📊 Monitoreo en Easypanel

### Dashboard
- CPU Usage
- Memory Usage
- Network I/O
- Logs en tiempo real

### Logs
```bash
# Ver logs desde Easypanel UI
Apps → odontologiadeluz → Logs

# O desde SSH
docker logs -f odontologiadeluz-web
```

### Métricas
- Requests/segundo
- Response time
- Error rate
- Uptime

## 🔄 Actualización de la Aplicación

### Auto-Deploy desde Git

1. **Configurar Webhook**
   - En Easypanel: Settings → Webhooks
   - Copiar URL del webhook
   
2. **En GitHub**
   - Settings → Webhooks → Add webhook
   - Payload URL: [URL del webhook de Easypanel]
   - Content type: `application/json`
   - Events: `push`

3. **Push cambios**
   ```bash
   git add .
   git commit -m "Update"
   git push origin main
   # Auto-deploy en Easypanel ✅
   ```

### Deploy Manual

```bash
# En Easypanel UI
Apps → odontologiadeluz → Deploy → Rebuild
```

## 🔒 Variables de Entorno (Opcional)

Si necesitas agregar variables de entorno:

```yaml
environment:
  - NODE_ENV=production
  - API_URL=https://api.odontologiadeluz.cl
  - ANALYTICS_ID=G-XXXXXXXXXX
```

En Easypanel UI:
```
Settings → Environment Variables
```

## 💾 Backup

### Backup Automático en Easypanel

1. **Configurar Backup**
   - Settings → Backups
   - Enable: ✅
   - Frequency: Daily
   - Retention: 7 days

### Backup Manual

```bash
# Desde SSH
docker commit odontologiadeluz-web odontologiadeluz-backup:$(date +%Y%m%d)
docker save odontologiadeluz-backup:$(date +%Y%m%d) | gzip > backup-$(date +%Y%m%d).tar.gz
```

## 🎯 Checklist de Despliegue

- [ ] Easypanel instalado y accesible
- [ ] Repositorio Git configurado (o imagen Docker)
- [ ] Archivo `easypanel.yml` en el root del proyecto
- [ ] Dominio apuntando a la IP de la VM
- [ ] SSL/HTTPS habilitado en Easypanel
- [ ] Healthcheck funcionando
- [ ] Logs visibles en el dashboard
- [ ] Webhook configurado para auto-deploy (opcional)
- [ ] Backup configurado

## 🚨 Troubleshooting

### Problema: Build falla

```bash
# Ver logs de build en Easypanel
Apps → odontologiadeluz → Build Logs

# Verificar Dockerfile localmente
docker build -t test .
```

### Problema: Contenedor no inicia

```bash
# Ver logs del contenedor
Apps → odontologiadeluz → Logs

# Verificar healthcheck
docker inspect odontologiadeluz-web | grep Health
```

### Problema: Dominio no resuelve

```bash
# Verificar DNS
nslookup odontologiadeluz.cl

# Verificar en Easypanel
Settings → Domains → Verify DNS
```

### Problema: SSL no funciona

```bash
# En Easypanel
Settings → SSL → Force Renew Certificate

# Verificar que el puerto 443 esté abierto
sudo ufw status
sudo ufw allow 443/tcp
```

## 📈 Optimización de Recursos

### Para VM con 1GB RAM:
```yaml
deploy:
  resources:
    limits:
      memory: 256M
    reservations:
      memory: 64M
```

### Para VM con 2GB+ RAM:
```yaml
deploy:
  resources:
    limits:
      memory: 512M
    reservations:
      memory: 128M
```

## 🔗 Enlaces Útiles

- **Easypanel Docs**: https://easypanel.io/docs
- **Docker Compose**: https://docs.docker.com/compose/
- **Nginx Docs**: https://nginx.org/en/docs/

## 📞 Soporte

Si tienes problemas:
1. Revisar logs en Easypanel
2. Verificar configuración DNS
3. Comprobar recursos de la VM
4. Revisar firewall (puertos 80, 443)

---

**Creado por:** Sergio Hidalgo - CDX Codex SpA
**Stack:** React + Vite + Nginx + Docker + Easypanel
