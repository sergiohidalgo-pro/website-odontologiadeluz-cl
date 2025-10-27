#!/bin/bash

# Script de verificación pre-deploy para Easypanel 2025
# Incluye verificaciones de seguridad y optimización
# Ejecutar antes de hacer deploy: bash verify-deploy.sh

set -e  # Exit on any error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

log "🔍 Verificación de Deploy para EasyPanel 2025"
echo "================================================="
echo ""

# 1. Verificar archivos necesarios
log "📁 Verificando archivos requeridos..."
required_files=("Dockerfile" "nginx.conf" "easypanel.yml" "package.json")
security_files=("public/security.txt" "public/humans.txt")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        success "$file existe"
    else
        error "$file NO encontrado"
    fi
done

for file in "${security_files[@]}"; do
    if [ -f "$file" ]; then
        success "$file existe (seguridad)"
    else
        warning "$file no encontrado (recomendado para seguridad)"
    fi
done
echo ""

# 2. Verificar configuración de package.json
log "📦 Verificando configuración de package.json..."
if command -v jq >/dev/null 2>&1; then
    if jq -e '.scripts.build' package.json >/dev/null 2>&1; then
        success "Script de build configurado"
    else
        error "Script de build no encontrado en package.json"
    fi
    
    if jq -e '.scripts.lint' package.json >/dev/null 2>&1; then
        success "Script de lint configurado"
    else
        warning "Script de lint no encontrado (recomendado)"
    fi
else
    warning "jq no instalado, saltando verificación de package.json"
fi
echo ""

# 3. Verificar configuración de seguridad en nginx.conf
log "🔒 Verificando configuración de seguridad en nginx.conf..."
security_checks=(
    "Content-Security-Policy:CSP headers"
    "Strict-Transport-Security:HSTS headers"
    "X-Frame-Options:Clickjacking protection"
    "X-Content-Type-Options:MIME type sniffing protection"
    "server_tokens off:Hide nginx version"
    "limit_req_zone:Rate limiting"
)

for check in "${security_checks[@]}"; do
    search_term="${check%%:*}"
    description="${check##*:}"
    
    if grep -q "$search_term" nginx.conf; then
        success "$description configurado"
    else
        warning "$description no encontrado en nginx.conf"
    fi
done
echo ""

# 4. Verificar configuración de Dockerfile
log "🐳 Verificando configuración de seguridad en Dockerfile..."
docker_checks=(
    "USER:Non-root user"
    "HEALTHCHECK:Health check"
    "dumb-init:Signal handling"
    "security.*=.*enabled:Security labels"
)

for check in "${docker_checks[@]}"; do
    search_term="${check%%:*}"
    description="${check##*:}"
    
    if grep -q "$search_term" Dockerfile; then
        success "$description configurado"
    else
        warning "$description no encontrado en Dockerfile"
    fi
done
echo ""

# 5. Verificar dependencias y build local
log "🔨 Verificando build local..."
if command -v pnpm >/dev/null 2>&1; then
    BUILD_CMD="pnpm run build"
elif command -v npm >/dev/null 2>&1; then
    BUILD_CMD="npm run build"
else
    error "No se encontró npm o pnpm"
fi

if $BUILD_CMD >/dev/null 2>&1; then
    success "Build local exitoso"
else
    error "Build local falló"
fi

# Verificar tamaño del build
if [ -d "dist" ]; then
    build_size=$(du -sh dist | cut -f1)
    success "Tamaño del build: $build_size"
    
    # Verificar que existan archivos esenciales
    if [ -f "dist/index.html" ]; then
        success "index.html generado"
    else
        error "index.html no encontrado en dist/"
    fi
fi
echo ""

# 6. Verificar Docker build con análisis de seguridad
log "🐳 Verificando Docker build y seguridad..."

# Build de prueba
if docker build -t odontologiadeluz-security-test . >/dev/null 2>&1; then
    success "Docker build exitoso"
    
    # Verificar que el contenedor use usuario no-root
    if docker run --rm odontologiadeluz-security-test whoami 2>/dev/null | grep -v root >/dev/null; then
        success "Contenedor ejecuta como usuario no-root"
    else
        warning "Contenedor podría estar ejecutando como root"
    fi
    
    # Verificar tamaño de imagen
    image_size=$(docker images odontologiadeluz-security-test --format "{{.Size}}")
    success "Tamaño de imagen Docker: $image_size"
    
    # Limpiar imagen de prueba
    docker rmi odontologiadeluz-security-test >/dev/null 2>&1
else
    error "Docker build falló"
fi
echo ""

# 7. Verificar configuración de EasyPanel
log "⚙️ Verificando configuración de EasyPanel..."
easypanel_checks=(
    "version.*3.9:Docker Compose version 3.9"
    "security_opt:Security options"
    "read_only.*true:Read-only filesystem"
    "no-new-privileges:No new privileges"
    "easypanel.enable.*true:EasyPanel labels"
    "easypanel.https.*true:HTTPS configuration"
)

for check in "${easypanel_checks[@]}"; do
    search_term="${check%%:*}"
    description="${check##*:}"
    
    if grep -q "$search_term" easypanel.yml; then
        success "$description configurado"
    else
        warning "$description no encontrado en easypanel.yml"
    fi
done
echo ""

# 8. Verificaciones adicionales de seguridad
log "🛡️ Verificaciones adicionales de seguridad..."

# Verificar que no hay secretos en el código
log "Escaneando secretos potenciales..."
if command -v grep >/dev/null 2>&1; then
    secret_patterns=("password.*=" "api.*key.*=" "secret.*=" "token.*=")
    secrets_found=false
    
    for pattern in "${secret_patterns[@]}"; do
        if find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.env*" | \
           xargs grep -il "$pattern" 2>/dev/null | grep -v node_modules >/dev/null; then
            warning "Posible secreto encontrado con patrón: $pattern"
            secrets_found=true
        fi
    done
    
    if [ "$secrets_found" = false ]; then
        success "No se encontraron secretos obvios en el código"
    fi
fi

# Verificar permisos de archivos
if [ -f ".env" ]; then
    env_perms=$(stat -f "%A" .env 2>/dev/null || stat -c "%a" .env 2>/dev/null)
    if [ "$env_perms" = "600" ] || [ "$env_perms" = "644" ]; then
        success "Permisos de .env son seguros"
    else
        warning "Revisar permisos de .env (actual: $env_perms)"
    fi
fi
echo ""

# 9. Verificaciones de performance
log "⚡ Verificaciones de performance..."

# Verificar configuración de compresión
if grep -q "gzip on" nginx.conf; then
    success "Compresión gzip habilitada"
else
    warning "Compresión gzip no configurada"
fi

if grep -q "brotli on" nginx.conf; then
    success "Compresión brotli habilitada"
else
    warning "Compresión brotli no configurada"
fi

# Verificar cache headers
if grep -q "expires" nginx.conf; then
    success "Headers de cache configurados"
else
    warning "Headers de cache no configurados"
fi
echo ""

# 10. Resumen final
log "📊 Resumen de verificación..."
echo ""

# Generar reporte final
log "📝 Generando reporte de verificación..."
cat > deploy-verification-report.txt << EOF
Reporte de Verificación de Deploy - $(date)
==========================================

Archivos Verificados:
$(for file in "${required_files[@]}"; do echo "- $file: $([ -f "$file" ] && echo "✅" || echo "❌")"; done)

Configuración de Seguridad:
- Headers de seguridad: $(grep -q "Content-Security-Policy" nginx.conf && echo "✅" || echo "❌")
- Usuario no-root: $(grep -q "USER" Dockerfile && echo "✅" || echo "❌")
- Filesystem read-only: $(grep -q "read_only.*true" easypanel.yml && echo "✅" || echo "❌")

Build:
- Build local: Exitoso
- Docker build: Exitoso
- Tamaño imagen: $image_size

Próximos Pasos:
1. Review este reporte
2. Push cambios a Git
3. Deploy en EasyPanel
4. Configurar dominio y SSL
5. Ejecutar pruebas post-deploy
EOF

success "Reporte guardado en deploy-verification-report.txt"
echo ""

# Mensaje final
echo "================================================="
success "🚀 VERIFICACIÓN COMPLETADA"
echo ""
log "📋 Checklist final:"
echo "  □ Revisar deploy-verification-report.txt"
echo "  □ Confirmar configuración de seguridad"
echo "  □ Push a repositorio Git"
echo "  □ Deploy en EasyPanel"
echo "  □ Configurar dominio y SSL"
echo "  □ Ejecutar pruebas de seguridad post-deploy"
echo ""
log "📚 Documentación disponible:"
echo "  • EASYPANEL-DEPLOY-2025.md - Guía completa"
echo "  • deploy-security.md - Guía de seguridad"
echo ""
log "🎯 El proyecto está listo para deploy seguro en EasyPanel 2025!"
