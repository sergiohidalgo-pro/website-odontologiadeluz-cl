#!/bin/bash

# Script de verificación pre-deploy para Easypanel
# Ejecutar antes de hacer deploy: bash verify-deploy.sh

echo "🔍 Verificando configuración para Easypanel..."
echo ""

# Verificar archivos necesarios
echo "📁 Verificando archivos..."
files=("Dockerfile" "nginx.conf" "easypanel.yml" "package.json")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file existe"
    else
        echo "❌ $file NO encontrado"
        exit 1
    fi
done
echo ""

# Verificar build local
echo "🔨 Verificando build local..."
if npm run build; then
    echo "✅ Build exitoso"
else
    echo "❌ Build falló"
    exit 1
fi
echo ""

# Verificar Docker build
echo "🐳 Verificando Docker build..."
if docker build -t odontologiadeluz-test . > /dev/null 2>&1; then
    echo "✅ Docker build exitoso"
    docker rmi odontologiadeluz-test > /dev/null 2>&1
else
    echo "❌ Docker build falló"
    exit 1
fi
echo ""

# Verificar tamaño de la imagen
echo "📊 Verificando tamaño de imagen..."
docker build -t odontologiadeluz-test . > /dev/null 2>&1
size=$(docker images odontologiadeluz-test --format "{{.Size}}")
echo "📦 Tamaño de imagen: $size"
docker rmi odontologiadeluz-test > /dev/null 2>&1
echo ""

# Resumen
echo "✅ Todas las verificaciones pasaron!"
echo ""
echo "🚀 Listo para deploy en Easypanel"
echo ""
echo "Próximos pasos:"
echo "1. Push a tu repositorio Git"
echo "2. En Easypanel: Create App → From Git"
echo "3. Configurar dominio y SSL"
echo "4. Deploy!"
