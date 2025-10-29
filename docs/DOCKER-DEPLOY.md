# Guía de Despliegue con Docker + Nginx

## 🐳 Arquitectura

- **Build Stage**: Node.js 20 Alpine para compilar el proyecto
- **Production Stage**: Nginx Alpine (imagen ligera ~40MB)
- **Optimizaciones**: Gzip, caché, security headers

## 🚀 Comandos Rápidos

### Desarrollo Local

```bash
# Build de la imagen
docker build -t odontologiadeluz:latest .

# Ejecutar contenedor
docker run -d -p 80:80 --name odontologiadeluz odontologiadeluz:latest

# Ver logs
docker logs -f odontologiadeluz

# Detener y eliminar
docker stop odontologiadeluz && docker rm odontologiadeluz
```

### Con Docker Compose (Recomendado)

```bash
# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down

# Rebuild y reiniciar
docker-compose up -d --build
```

## 📦 Estructura de Archivos

```
.
├── Dockerfile              # Multi-stage build
├── docker-compose.yml      # Orquestación
├── nginx.conf             # Configuración Nginx
└── .dockerignore          # Archivos a ignorar
```

## ⚙️ Configuración Nginx

### Características implementadas:

✅ **Compresión Gzip**
- Reduce tamaño de archivos en ~70%
- Tipos: HTML, CSS, JS, JSON, SVG

✅ **Caché Agresivo**
- Imágenes: 1 año
- CSS/JS: 1 año con immutable
- HTML: no-cache (para SPA)

✅ **Security Headers**
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: activado
- Referrer-Policy

✅ **SPA Routing**
- Todas las rutas redirigen a index.html
- Perfecto para React Router

## 🌐 Despliegue en Producción

### Opción 1: VPS (DigitalOcean, AWS EC2, etc.)

```bash
# 1. Conectar al servidor
ssh user@your-server.com

# 2. Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 3. Clonar repositorio
git clone https://github.com/tu-usuario/odontologiadeluz.cl.git
cd odontologiadeluz.cl

# 4. Ejecutar
docker-compose up -d

# 5. Configurar dominio (opcional)
# Editar nginx.conf y cambiar server_name
```

### Opción 2: AWS ECS/Fargate

```bash
# 1. Build y push a ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ECR_URL
docker build -t odontologiadeluz .
docker tag odontologiadeluz:latest YOUR_ECR_URL/odontologiadeluz:latest
docker push YOUR_ECR_URL/odontologiadeluz:latest

# 2. Crear task definition y service en ECS
```

### Opción 3: Google Cloud Run

```bash
# 1. Build y push a GCR
gcloud builds submit --tag gcr.io/PROJECT_ID/odontologiadeluz

# 2. Deploy
gcloud run deploy odontologiadeluz \
  --image gcr.io/PROJECT_ID/odontologiadeluz \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Opción 4: Docker Hub + VPS

```bash
# 1. Build y push a Docker Hub
docker build -t tu-usuario/odontologiadeluz:latest .
docker push tu-usuario/odontologiadeluz:latest

# 2. En el servidor
docker pull tu-usuario/odontologiadeluz:latest
docker run -d -p 80:80 tu-usuario/odontologiadeluz:latest
```

## 🔒 HTTPS con Let's Encrypt

### Usando Nginx Proxy Manager (Recomendado)

```yaml
# docker-compose.yml actualizado
version: '3.8'

services:
  web:
    build: .
    container_name: odontologiadeluz-web
    expose:
      - "80"
    restart: unless-stopped
    networks:
      - proxy

  nginx-proxy-manager:
    image: jc21/nginx-proxy-manager:latest
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    restart: unless-stopped
    networks:
      - proxy

networks:
  proxy:
    driver: bridge
```

### Usando Certbot directo

```bash
# 1. Instalar certbot
apt-get install certbot python3-certbot-nginx

# 2. Obtener certificado
certbot --nginx -d odontologiadeluz.cl -d www.odontologiadeluz.cl

# 3. Auto-renovación
certbot renew --dry-run
```

## 📊 Monitoreo

### Healthcheck

```bash
# Verificar estado del contenedor
docker ps
docker inspect odontologiadeluz | grep Health

# Healthcheck manual
curl http://localhost/
```

### Logs

```bash
# Ver logs en tiempo real
docker logs -f odontologiadeluz

# Últimas 100 líneas
docker logs --tail 100 odontologiadeluz
```

## 🔧 Troubleshooting

### Problema: Contenedor no inicia

```bash
# Ver logs detallados
docker logs odontologiadeluz

# Verificar configuración Nginx
docker exec odontologiadeluz nginx -t
```

### Problema: Puerto 80 ocupado

```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "8080:80"  # Usar puerto 8080 en lugar de 80
```

### Problema: Cambios no se reflejan

```bash
# Rebuild sin caché
docker-compose build --no-cache
docker-compose up -d
```

## 📈 Optimizaciones Adicionales

### 1. Multi-stage build más pequeño

```dockerfile
# Ya implementado - imagen final ~40MB
```

### 2. CDN (Cloudflare)

```bash
# 1. Agregar dominio a Cloudflare
# 2. Activar proxy (nube naranja)
# 3. Configurar SSL/TLS: Full
# 4. Activar Auto Minify (JS, CSS, HTML)
```

### 3. Monitoring con Prometheus

```yaml
# Agregar a docker-compose.yml
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"
```

## 🎯 Checklist de Producción

- [ ] Build exitoso sin errores
- [ ] Healthcheck funcionando
- [ ] HTTPS configurado
- [ ] Dominio apuntando correctamente
- [ ] Gzip activado (verificar con curl -I)
- [ ] Security headers presentes
- [ ] Caché funcionando
- [ ] Logs configurados
- [ ] Backup automatizado
- [ ] Monitoreo activo

## 📝 Comandos Útiles

```bash
# Ver tamaño de la imagen
docker images odontologiadeluz

# Limpiar imágenes antiguas
docker image prune -a

# Ver uso de recursos
docker stats odontologiadeluz

# Ejecutar comando dentro del contenedor
docker exec -it odontologiadeluz sh

# Copiar archivos del contenedor
docker cp odontologiadeluz:/usr/share/nginx/html ./backup
```

---

**Creado por:** Sergio Hidalgo - CDX Codex SpA
**Última actualización:** 2024
