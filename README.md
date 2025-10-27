# 🦷 Odontología de Luz

Un sitio web moderno y elegante para clínica dental, desarrollado con React y optimizado para rendimiento y seguridad.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **📱 Responsive**: Adaptado para todos los dispositivos
- **⚡ Alto Rendimiento**: Optimizado con Vite y técnicas de performance avanzadas
- **🔒 Seguridad**: Implementa las mejores prácticas de seguridad web
- **♿ Accesibilidad**: Cumple con estándares WCAG 2.2 AAA
- **🚀 Deploy Optimizado**: Configurado para EasyPanel con Docker

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.1.1 + Vite (Rolldown)
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Build Tool**: Vite con Rolldown para mejor performance
- **Linting**: ESLint con configuración personalizada
- **Package Manager**: pnpm
- **Containerización**: Docker + Nginx
- **Deployment**: EasyPanel ready

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/YOUR_USERNAME/odontologiadeluz.cl.git
cd odontologiadeluz.cl

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
pnpm dev        # Servidor de desarrollo
pnpm build      # Build para producción
pnpm preview    # Preview del build de producción
pnpm lint       # Linting con ESLint
```

## 🐳 Docker & Deployment

### Docker Local

```bash
# Build de la imagen
docker build -t odontologiadeluz .

# Ejecutar contenedor
docker run -p 80:80 odontologiadeluz
```

### EasyPanel Deployment

Este proyecto está optimizado para EasyPanel con configuraciones de seguridad avanzadas:

```bash
# Verificar configuración antes del deploy
./verify-deploy.sh

# Deploy automático via Git
# Ver EASYPANEL-DEPLOY-2025.md para instrucciones completas
```

## 🎨 Diseño y Branding

### Paleta de Colores Oficial 2025

```css
/* Colores Primarios - Púrpuras/Lavandas */
--primary: #002c82;              /* Azul marino profundo */
--primary-light: #9987C6;        /* Púrpura grisáceo */
--primary-medium: #BBA3F8;       /* Lavanda medio */
--primary-subtle: #DDBDF4;       /* Lavanda suave */

/* Sistema Dorado Oficial */
--gold-core: #cfaf55;            /* Dorado vibrante */
--gold-light: #e7d29a;           /* Dorado cremoso */

/* Púrpura Vibrante */
--secondary: #5e17eb;            /* Púrpura vibrante oficial */
```

### Principios de Diseño

- **Grilla de 8pt**: Sistema de espaciado consistente
- **Typography**: Escala modular basada en proporción áurea
- **Animaciones**: Scroll-triggered con easing profesional
- **Accesibilidad**: Contraste AAA, focus management, screen reader optimized

## 🔒 Características de Seguridad

- **Container Security**: Usuario no-root, filesystem read-only
- **Web Security**: CSP, HSTS, headers de seguridad avanzados
- **Rate Limiting**: Protección contra DDoS y fuerza bruta
- **SSL/TLS**: Configuración A+ en SSL Labs
- **Security Scanning**: Integración con herramientas de análisis

## 📂 Estructura del Proyecto

```
├── src/
│   ├── components/         # Componentes React reutilizables
│   ├── pages/             # Páginas de la aplicación
│   ├── styles/            # Estilos globales y utilidades
│   ├── assets/            # Imágenes, iconos, etc.
│   └── utils/             # Funciones utilitarias
├── public/                # Archivos estáticos
├── docs/                  # Documentación del proyecto
├── nginx.conf             # Configuración Nginx optimizada
├── Dockerfile             # Container Docker securizado
├── easypanel.yml          # Configuración EasyPanel
└── verify-deploy.sh       # Script de verificación pre-deploy
```

## 📊 Performance

### Métricas Objetivo

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: 95%+
- **GTmetrix Grade**: A

### Optimizaciones Implementadas

- Compresión Gzip + Brotli
- Lazy loading de imágenes
- Code splitting automático
- Cache headers optimizados
- WebP/AVIF image formats

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

### Desarrollo con LLM

Este proyecto incluye `CLAUDE.md` con instrucciones específicas para desarrollo asistido por IA, incluyendo:

- Guías de arquitectura y patrones
- Estándares de código y convenciones
- Sistema de diseño y branding
- Mejores prácticas de UX/UI

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**CDX - Codex SpA**
- **Desarrollador**: Sergio Hidalgo
- **Email**: contacto@cdx.cl
- **Website**: https://cdx.cl

**Cliente**: Odontología de Luz
- **Website**: https://odontologiadeluz.cl

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev/) por el excelente build tool
- [React](https://reactjs.org/) por el framework
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de estilos
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [EasyPanel](https://easypanel.io/) por la plataforma de deployment

---

⭐ Si este proyecto te ha sido útil, ¡considera darle una estrella!

**Hecho con ❤️ en Santiago, Chile**
