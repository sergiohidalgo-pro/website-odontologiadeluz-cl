# 🐳 Despliegue con Docker + Nginx

## Inicio Rápido

```bash
# Opción 1: Docker Compose (Recomendado)
npm run compose:up

# Opción 2: Docker directo
npm run docker:build
npm run docker:run

# Ver en navegador
open http://localhost
```

## Comandos Disponibles

```bash
npm run docker:build      # Build imagen Docker
npm run docker:run        # Ejecutar contenedor
npm run docker:stop       # Detener contenedor
npm run docker:logs       # Ver logs

npm run compose:up        # Iniciar con docker-compose
npm run compose:down      # Detener docker-compose
npm run compose:logs      # Ver logs compose
```

## Características

✅ Multi-stage build (Node + Nginx)
✅ Imagen optimizada (~40MB)
✅ Gzip compression
✅ Caché agresivo
✅ Security headers
✅ SPA routing
✅ Healthcheck

## Producción

### Easypanel (Recomendado)
Ver [EASYPANEL-DEPLOY.md](./EASYPANEL-DEPLOY.md) para despliegue en Easypanel.

### Otros Servicios
Ver [DOCKER-DEPLOY.md](./DOCKER-DEPLOY.md) para AWS, GCP, VPS, etc.

## Estructura

- `Dockerfile` - Build multi-stage
- `nginx.conf` - Configuración Nginx optimizada
- `docker-compose.yml` - Orquestación
- `.dockerignore` - Archivos excluidos

---

**Stack:** React + Vite + Nginx + Docker
