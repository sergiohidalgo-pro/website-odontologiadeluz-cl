# 📊 Configuración de Analytics y Tracking

## 🎯 Google Analytics 4 (Recomendado)

### 1. Instalación

```bash
npm install react-ga4
```

### 2. Configuración en main.jsx

```javascript
import ReactGA from 'react-ga4';

// Inicializar GA4
ReactGA.initialize('G-XXXXXXXXXX');

// Tracking de página
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
```

### 3. Tracking de Eventos

```javascript
// En App.jsx - agregar tracking a botones
import ReactGA from 'react-ga4';

// Botón de llamada
<button onClick={() => {
  ReactGA.event({
    category: 'Contact',
    action: 'Click Phone',
    label: 'Hero Section'
  });
}}>
  Llamar Ahora
</button>

// Botón de WhatsApp
<button onClick={() => {
  ReactGA.event({
    category: 'Contact',
    action: 'Click WhatsApp',
    label: 'Contact Section'
  });
}}>
  WhatsApp
</button>
```

## 📞 Call Tracking

### Google Tag Manager

```html
<!-- En index.html, antes de </head> -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Después de <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

## 🔥 Facebook Pixel

```html
<!-- En index.html -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 📱 WhatsApp Click Tracking

```javascript
// En App.jsx
const trackWhatsAppClick = () => {
  // Google Analytics
  ReactGA.event({
    category: 'Contact',
    action: 'WhatsApp Click',
    label: window.location.pathname
  });
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Contact');
  }
  
  // Abrir WhatsApp
  window.open('https://wa.me/56223456789', '_blank');
};

<button onClick={trackWhatsAppClick}>
  WhatsApp
</button>
```

## 📧 Email Click Tracking

```javascript
const trackEmailClick = () => {
  ReactGA.event({
    category: 'Contact',
    action: 'Email Click',
    label: 'contacto@odontologiadeluz.cl'
  });
};

<a href="mailto:contacto@odontologiadeluz.cl" onClick={trackEmailClick}>
  Email
</a>
```

## 🎯 Conversion Tracking

### Google Ads Conversion

```html
<!-- En index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>
```

### Tracking de Conversión

```javascript
// Cuando el usuario hace clic en "Reservar"
const trackConversion = () => {
  // Google Ads
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXX/CONVERSION_ID'
    });
  }
  
  // Facebook
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }
  
  // Google Analytics
  ReactGA.event({
    category: 'Conversion',
    action: 'Booking Attempt',
    value: 1
  });
};
```

## 🔍 Hotjar (Heatmaps & Recordings)

```html
<!-- En index.html -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 📊 Microsoft Clarity (Gratis)

```html
<!-- En index.html -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

## 🎨 Implementación Completa

### src/utils/analytics.js

```javascript
import ReactGA from 'react-ga4';

// Inicializar
export const initGA = () => {
  ReactGA.initialize('G-XXXXXXXXXX');
};

// Page view
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Eventos
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// Conversiones
export const logConversion = (type) => {
  logEvent('Conversion', type, window.location.pathname);
  
  // Google Ads
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXX/CONVERSION_ID'
    });
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }
};

// Clicks en contacto
export const logContactClick = (method) => {
  logEvent('Contact', `Click ${method}`, window.location.pathname);
};
```

### src/main.jsx

```javascript
import { initGA, logPageView } from './utils/analytics';

// Inicializar analytics
initGA();
logPageView();

// Tracking de navegación
window.addEventListener('hashchange', logPageView);
```

### Uso en componentes

```javascript
import { logContactClick, logConversion } from './utils/analytics';

// Botón de teléfono
<a 
  href="tel:+56223456789"
  onClick={() => logContactClick('Phone')}
>
  Llamar
</a>

// Botón de WhatsApp
<a 
  href="https://wa.me/56223456789"
  onClick={() => logContactClick('WhatsApp')}
  target="_blank"
>
  WhatsApp
</a>

// Botón de reserva
<button onClick={() => {
  logConversion('Booking');
  // ... lógica de reserva
}}>
  Reservar Cita
</button>
```

## 📈 Eventos Recomendados

```javascript
// Scroll depth
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
  if (scrollPercent > 75) {
    logEvent('Engagement', 'Scroll', '75%');
  }
});

// Tiempo en página
setTimeout(() => {
  logEvent('Engagement', 'Time on Page', '30 seconds');
}, 30000);

// Click en secciones
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    logEvent('Navigation', 'Internal Link', e.target.href);
  });
});
```

## 🎯 Goals en Google Analytics

### Configurar en GA4:

1. **Conversión: Llamada**
   - Event: contact_phone
   - Valor: 1

2. **Conversión: WhatsApp**
   - Event: contact_whatsapp
   - Valor: 1

3. **Conversión: Email**
   - Event: contact_email
   - Valor: 1

4. **Engagement: Scroll 75%**
   - Event: scroll_depth
   - Parámetro: 75

5. **Engagement: Tiempo 30s+**
   - Event: time_on_page
   - Parámetro: 30

## 📊 Dashboard Recomendado

### Métricas Clave:
- Usuarios totales
- Sesiones
- Tasa de rebote
- Duración promedio
- Páginas por sesión
- Conversiones (llamadas, WhatsApp, email)
- Fuentes de tráfico
- Dispositivos
- Ubicación geográfica

---

**Nota:** Reemplazar todos los IDs de ejemplo (G-XXXXXXXXXX, etc.) con tus IDs reales.
