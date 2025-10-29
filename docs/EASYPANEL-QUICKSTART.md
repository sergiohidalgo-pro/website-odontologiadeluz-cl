# ⚡ Easypanel - Inicio Rápido

## 🎯 Deploy en 5 Pasos

### 1️⃣ Verificar Proyecto
```bash
npm run verify:deploy
```

### 2️⃣ Push a Git
```bash
git add .
git commit -m "Ready for Easypanel"
git push origin main
```

### 3️⃣ Crear App en Easypanel
```
1. Abrir Easypanel: https://tu-vm-ip:3000
2. Click "Create App"
3. Seleccionar "From Git Repository"
4. Pegar URL del repo
5. Branch: main
6. Compose file: easypanel.yml
```

### 4️⃣ Configurar Dominio
```
1. Settings → Domains
2. Add: odontologiadeluz.cl
3. Enable HTTPS ✅
4. Force HTTPS ✅
```

### 5️⃣ Deploy
```
Click "Deploy" → Esperar 2-3 min → ✅ Listo!
```

## 🌐 Configurar DNS

En tu proveedor DNS (Cloudflare, etc.):
```
Tipo: A
Nombre: @
Valor: [IP-DE-TU-VM]

Tipo: A  
Nombre: www
Valor: [IP-DE-TU-VM]
```

## 📊 Recursos Recomendados

| VM RAM | CPU Limit | Memory Limit |
|--------|-----------|--------------|
| 1GB    | 0.5       | 256M         |
| 2GB    | 1         | 512M         |
| 4GB+   | 2         | 1G           |

## 🔄 Auto-Deploy

### Configurar Webhook
```
1. Easypanel → Settings → Webhooks → Copy URL
2. GitHub → Settings → Webhooks → Add webhook
3. Paste URL → Content type: application/json
4. Events: push
5. ✅ Cada push = auto-deploy
```

## 📝 Comandos Útiles

```bash
# Verificar antes de deploy
npm run verify:deploy

# Ver logs (desde SSH)
docker logs -f odontologiadeluz-web

# Rebuild manual
# Easypanel UI → Apps → odontologiadeluz → Rebuild
```

## 🆘 Problemas Comunes

### Build falla
```bash
# Verificar localmente
docker build -t test .
```

### Dominio no resuelve
```bash
# Verificar DNS
nslookup odontologiadeluz.cl
```

### SSL no funciona
```
Easypanel → Settings → SSL → Force Renew
```

## 📚 Documentación Completa

Ver [EASYPANEL-DEPLOY.md](./EASYPANEL-DEPLOY.md)

---

**Stack:** React + Vite + Nginx + Docker + Easypanel
