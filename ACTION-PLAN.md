# Plan de Acción SEO — HL Consulting
**Generado:** 2026-04-12 | **Revisado:** 2026-04-12
**Score actual:** 22/100 → **Score proyectado post-fixes:** 75-82/100

---

## CRÍTICO — Implementar hoy

### ~~1. Corregir idioma HTML + Title + Meta Description + OG Tags~~ ✅ HECHO
**Archivo:** `hl-consulting/index.html`
**Tiempo:** ~30 min

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- SEO Primario -->
    <title>HL Consulting | Contabilidad y Asesoría Fiscal para PYMEs en Paraguay</title>
    <meta name="description" content="Estudio contable en Asunción, Paraguay. Declaraciones juradas, inscripción RUC, constitución de EAS y auditoría para PYMEs. Primera consulta gratis." />
    <link rel="canonical" href="https://hlconsulting.com.py/" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hlconsulting.com.py/" />
    <meta property="og:title" content="HL Consulting | Contabilidad para PYMEs en Paraguay" />
    <meta property="og:description" content="Soluciones contables y financieras en Asunción, Paraguay. Declaraciones juradas, RUC, EAS, auditoría. Primera consulta sin costo." />
    <meta property="og:image" content="https://hlconsulting.com.py/og-image.jpg" />
    <meta property="og:locale" content="es_PY" />
    <meta property="og:site_name" content="HL Consulting" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="HL Consulting | Contabilidad para PYMEs en Paraguay" />
    <meta name="twitter:description" content="Soluciones contables y financieras en Asunción, Paraguay. Primera consulta gratis." />
    <meta name="twitter:image" content="https://hlconsulting.com.py/og-image.jpg" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://hlconsulting.com.py/#website",
          "url": "https://hlconsulting.com.py/",
          "name": "HL Consulting",
          "description": "Soluciones contables y financieras para PYMEs y personas físicas en Paraguay."
        },
        {
          "@type": "AccountingService",
          "@id": "https://hlconsulting.com.py/#business",
          "name": "HL Consulting",
          "description": "Soluciones contables y financieras para PYMEs y personas físicas en Paraguay.",
          "url": "https://hlconsulting.com.py",
          "telephone": "+595981000000",
          "email": "contacto@hlconsulting.com.py",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Asunción",
            "addressCountry": "PY"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Paraguay"
          },
          "priceRange": "$$",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios Contables",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Declaración Jurada de Impuestos" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inscripción en el RUC" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Constitución de EAS" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formalización de Negocios" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Evaluación del Control Interno" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auditoría de Procesos" } }
            ]
          }
        }
      ]
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### ~~2. Crear robots.txt~~ ✅ HECHO
**Archivo:** `hl-consulting/public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://hlconsulting.com.py/sitemap.xml
```

---

### ~~3. Crear sitemap.xml~~ ✅ HECHO
**Archivo:** `hl-consulting/public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hlconsulting.com.py/</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

### ~~4. Agregar enlace WhatsApp~~ ✅ HECHO
`BRAND.whatsapp` en `content.js` y enlace activo en `Contact.jsx`.

---

## ALTO — Esta semana

### 5. Optimizar Google Fonts (reducir variantes) ⚠️ PENDIENTE
**Archivo:** `hl-consulting/src/index.css:1`

Actualmente carga 6 variantes (`400, 500, 600, 700, 800 + italic 400`). Reducir a solo las usadas:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
```
Eliminar `wght@500` e `ital,wght@1,400` si no se usan en ningún componente.

### ~~6. Arreglar footer links~~ ✅ HECHO
La sección "Legal" fue eliminada. `FOOTER_LINKS` solo tiene "Servicios" (todos apuntan a `#servicios`) y "Empresa" (apuntan a `#nosotros` y `#contacto`).

### 7. Crear y verificar Google Business Profile ⚠️ PENDIENTE (tarea manual)
- Ir a `business.google.com`
- Crear perfil con NAP completo (nombre, dirección real, teléfono real)
- Verificar por postal o teléfono
- Agregar fotos, horarios, descripción, servicios

---

## MEDIO — Este mes

### 8. Pre-rendering con vite-plugin-prerender ⚠️ PENDIENTE
```bash
npm install -D vite-plugin-prerender
```
En `vite.config.js`:
```js
import prerender from 'vite-plugin-prerender'
// ...
plugins: [
  react(),
  prerender({ staticDir: 'dist', routes: ['/'] })
]
```

### ~~9. Crear llms.txt~~ ✅ HECHO
**Archivo:** `hl-consulting/public/llms.txt`

```
# HL Consulting
> Estudio de contabilidad y asesoría fiscal en Asunción, Paraguay.

HL Consulting ofrece servicios contables para PYMEs y personas físicas: declaraciones juradas de impuestos, inscripción en el RUC, constitución de empresas (EAS), formalización de negocios, evaluación de control interno y auditoría de procesos.

## Servicios
- Declaración Jurada de Impuestos
- Inscripción en el RUC (Registro Único del Contribuyente)
- Constitución de EAS (Empresa por Acciones Simplificada)
- Formalización de Negocios
- Evaluación del Control Interno
- Auditoría de Procesos

## Contacto
- Email: contacto@hlconsulting.com.py
- Teléfono: +595 981 000 000
- Ubicación: Asunción, Paraguay
```

### 10. Agregar imagen OG ⚠️ PENDIENTE
- Crear imagen 1200×630px con logo HL Consulting, tagline y fondo brand
- Subir como `hl-consulting/public/og-image.jpg` (JPEG optimizado, <200KB)
- El `<meta property="og:image">` ya está declarado en `index.html`, solo falta el archivo físico

### 11. Agregar apple-touch-icon ⚠️ PENDIENTE (parcial)
- El `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />` ya está en `index.html`
- Falta crear el archivo PNG 180×180 y colocarlo en `hl-consulting/public/apple-touch-icon.png`

---

## Score proyectado por categoría después de implementar CRÍTICO + ALTO

| Categoría | Actual | Proyectado |
|-----------|--------|-----------|
| Technical SEO | 12 | 58 |
| Content Quality | 35 | 42 |
| On-Page SEO | 15 | 72 |
| Schema / Structured Data | 0 | 65 |
| Performance (CWV) | 55 | 68 |
| AI Search Readiness | 10 | 35 |
| Images | 40 | 55 |
| **TOTAL** | **22** | **~57** |

Con todas las mejoras MEDIO implementadas: **~75-82/100**
