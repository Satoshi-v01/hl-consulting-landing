# SEO Full Audit Report — HL Consulting
**URL:** http://localhost:5173/ (producción: hlconsulting.com.py)
**Fecha:** 2026-04-12
**Negocio:** Agencia de contabilidad — Asunción, Paraguay
**Tipo:** Local Service (SAB/Brick & Mortar)

---

## SEO Health Score: 22 / 100

| Categoría | Peso | Puntuación | Ponderado |
|-----------|------|-----------|-----------|
| Technical SEO | 22% | 12/100 | 2.6 |
| Content Quality | 23% | 35/100 | 8.1 |
| On-Page SEO | 20% | 15/100 | 3.0 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 10/100 | 1.0 |
| Images | 5% | 40/100 | 2.0 |
| **TOTAL** | **100%** | | **22.2 / 100** |

> Score bajo esperado en un proyecto nuevo sin SEO configurado. Con las correcciones de este reporte se puede alcanzar 75-85+.

---

## Top 5 Problemas Críticos

1. **`lang="en"` en `<html>`** — el sitio está en español pero declara idioma inglés
2. **Sin `<title>` optimizado** — "hl-consulting" es genérico e inútil para rankings
3. **Sin `<meta name="description">`** — Google genera snippets aleatorios
4. **Sin Schema.org** — cero structured data; imposible Rich Results
5. **SPA sin SSR/pre-rendering** — todo el contenido es JS-renderizado; Googlebot lo ve como página vacía en el primer crawl

---

## Top 5 Quick Wins

1. Corregir `lang="es"` en index.html (2 min)
2. Agregar `<title>` y `<meta description>` optimizados (10 min)
3. Agregar Open Graph / Twitter Card tags (15 min)
4. Agregar `LocalBusiness` JSON-LD schema (20 min)
5. Agregar `<link rel="preconnect">` para Google Fonts (5 min)

---

## 1. Technical SEO — 12/100

### Crítico

#### C-1 · `lang` incorrecto en `<html>`
- **Archivo:** `hl-consulting/index.html:2`
- **Actual:** `<html lang="en">`
- **Correcto:** `<html lang="es">`
- **Impacto:** Google usa el atributo lang para determinar el idioma del contenido. Declara "en" cuando el contenido es español → señal incorrecta al índice.

#### C-2 · SPA sin pre-rendering (JavaScript SEO risk)
- Todo el contenido visible está renderizado por React en el cliente.
- Googlebot indexa en dos pasadas: primero HTML estático (vacío salvo `<div id="root">`), luego rendering JS (demorado días).
- **Recomendación:** Implementar pre-rendering estático con Vite SSG (`vite-ssg` o `vite-plugin-ssr`) o migrar a SSR con un framework como Astro, Remix, o Next.js para producción.

#### C-3 · Sin `robots.txt`
- No existe `/public/robots.txt`
- Los crawlers asumen acceso total pero no tienen directivas claras.
- **Corrección:** Crear `/public/robots.txt` básico.

#### C-4 · Sin `sitemap.xml`
- No existe `/public/sitemap.xml`
- Impide que Googlebot descubra eficientemente la URL canónica.
- **Corrección:** Crear sitemap básico con la URL de producción.

### Alto

#### H-1 · Sin etiqueta canónica
- No hay `<link rel="canonical">` en el `<head>`.
- Si el sitio es accesible con y sin `www`, o con trailing slash, genera contenido duplicado.

#### H-2 · Sin HTTPS (en desarrollo — verificar en producción)
- Producción debe servir exclusivamente por HTTPS.
- Sin SSL/TLS, Google aplica penalización y Chrome muestra advertencia.

#### H-3 · Sin `apple-touch-icon`
- Sólo existe `favicon.svg`. Falta el icono para iOS (180×180 PNG).

#### H-4 · Sin meta viewport para theme-color
- `<meta name="theme-color">` ausente — pierde personalización de Chrome mobile.

### Medio

#### M-1 · Cabeceras de seguridad HTTP (verificar en servidor de producción)
- Confirmar presencia de: `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`, `Referrer-Policy`.

#### M-2 · Sin `manifest.json`
- No hay Web App Manifest para soporte PWA básico ni instalación en home screen.

---

## 2. On-Page SEO — 15/100

### Crítico

#### C-5 · `<title>` genérico e inoptimizado
- **Actual:** `hl-consulting`
- **Recomendado:** `HL Consulting | Contabilidad y Asesoría Fiscal para PYMEs en Paraguay`
- Longitud ideal: 50–60 caracteres. Incluir keyword primaria + ubicación geográfica.

#### C-6 · Sin `<meta name="description">`
- **Ausente completamente.**
- **Recomendado:** `Somos HL Consulting, estudio contable en Asunción, Paraguay. Declaraciones juradas, inscripción RUC, constitución de EAS y auditoría para PYMEs. Primera consulta gratis.`
- Longitud: 150–160 caracteres.

#### C-7 · Sin Open Graph / Social Media tags
- Sin `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
- Al compartir en WhatsApp, LinkedIn o Facebook, no se genera preview de tarjeta.

### Alto

#### H-5 · H1 dependiente de JavaScript
- El único H1 ("Tu contabilidad, sin complicaciones.") está en `Hero.jsx:39`.
- No aparece en el HTML estático que ve Googlebot en primer crawl.
- **Solución a corto plazo:** pre-rendering. A largo plazo: SSG/SSR.

#### H-6 · Keyword targeting débil en headings
- H1 actual es aspiracional pero no incluye keywords de búsqueda ("contabilidad Paraguay", "contador PYME Asunción").
- Considerar reformulación: "Contabilidad profesional para PYMEs en Paraguay — sin complicaciones."

#### H-7 · Footer links rotos (todos apuntan a `"#"`)
- `Footer.jsx:38`: todos los enlaces de `FOOTER_LINKS` apuntan a `href="#"`.
- "Política de privacidad", "Términos de servicio", "Quiénes somos" no tienen páginas destino.
- Google puede interpretar enlaces muertos como señal de baja calidad.

### Medio

#### M-3 · Anchor text genérico en CTAs de servicios
- `Services.jsx:76`: todos los CTAs de servicio dicen "Consultar" — muy genérico.
- Mejor: "Consultar sobre Declaración Jurada", "Inscribirse en el RUC", etc. (descriptivos y con keywords).

#### M-4 · Sin `aria-label` en logo link
- `Navbar.jsx:26`: `<a href="#">` sin texto alt descriptivo. Screen readers y bots leen el dominio del href.

---

## 3. Content Quality — 35/100

### Positivo ✓
- Copy coherente, en español, profesional y sin errores gramaticales aparentes
- Propuesta de valor clara en el Hero
- Estadísticas de confianza presentes (clientes, satisfacción, experiencia)
- Datos de contacto visibles (email, teléfono, dirección)

### Crítico

#### C-8 · Sin página "Quiénes somos" / Equipo
- Google E-E-A-T requiere señales de **Expertise** y **Authoritativeness**.
- No hay información sobre los profesionales: nombres, titulaciones, matrículas, años de experiencia real.
- Una landing de servicios financieros sin información del equipo tiene E-E-A-T muy bajo.

#### C-9 · Testimonios o reseñas ausentes
- "98% satisfacción" aparece como estadística, pero sin reseñas verificables.
- Agregar al menos 3-5 testimonios con nombre completo y empresa aumenta E-E-A-T y conversión.

### Alto

#### H-8 · Descripciones de servicios muy cortas
- Cada servicio tiene ~20-35 palabras. Muy escaso para contenido indexable.
- Para páginas de servicio individuales (si se crean), el mínimo recomendado es 300 palabras.

#### H-9 · Sin blog ni contenido editorial
- Cero artículos o recursos. Imposible rankear para long-tail keywords ("cómo inscribirse en el RUC Paraguay", "qué es una EAS en Paraguay").
- Blog de mínimo 4 artículos iniciales aumentaría significativamente la superficie indexable.

#### H-10 · Datos de contacto son placeholders
- Teléfono `+595 981 000 000` parece un número ficticio de ejemplo.
- Dirección "Asunción, Paraguay" sin calle ni número.
- Estos datos deben ser los reales en producción para consistencia NAP.

### Medio

#### M-5 · Sin FAQ visible
- No hay sección de preguntas frecuentes. Para servicios contables, hay alta demanda de búsquedas tipo pregunta.
- (Nota: FAQPage schema no genera rich results en Google para sitios comerciales desde 2023, pero sí mejora visibilidad en AI/LLM.)

---

## 4. Schema / Structured Data — 0/100

**Cero structured data implementado.** Es la categoría más impactante para un local service.

### Crítico

#### C-10 · Sin `LocalBusiness` / `AccountingService` JSON-LD
```json
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
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
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": []
}
```

#### C-11 · Sin `WebSite` schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HL Consulting",
  "url": "https://hlconsulting.com.py"
}
```

### Alto

#### H-11 · Sin `Service` schema para cada servicio ofrecido
- Cada uno de los 6 servicios debería tener su propio `Service` con `provider`, `description`, `areaServed`.

---

## 5. Performance (CWV Estimado) — 55/100

> Sin datos de campo (CrUX) disponibles — estimación basada en análisis de código. El sitio aún no está en producción con un dominio público.

### Positivo ✓
- Vite build: code-splitting automático, tree-shaking ✓
- Tailwind CSS v4: CSS generado mínimo ✓
- Lucide React: importación individual (tree-shakeable) ✓
- `font-display: swap` en Google Fonts ✓
- `prefers-reduced-motion` implementado ✓
- Animaciones CSS puras (no JS-driven) ✓

### Alto

#### H-12 · Sin `<link rel="preconnect">` para Google Fonts
- `index.css:1` importa desde `fonts.googleapis.com` sin preconexión DNS.
- **Agregar en `index.html`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```
- Reduce LCP en ~150-300ms.

#### H-13 · Fuente Montserrat carga 12 variantes de peso/estilo
- `index.css:1`: carga pesos 300, 400, 500, 600, 700, 800, 900 + itálicas 300 y 400.
- Limitar a los pesos realmente usados (400, 600, 700, 800) reduce el payload de fuentes ~35%.

#### H-14 · Hero image `hero.png` no se usa
- Existe `src/assets/hero.png` pero `Hero.jsx` no lo importa.
- Si se planea usar, convertir a WebP y agregar `loading="eager"` + `fetchpriority="high"` como imagen LCP.

### Medio

#### M-6 · Animaciones de entrada pueden causar CLS
- `.reveal { opacity: 0; transform: translateY(28px) }` en `index.css:63`.
- Si el IntersectionObserver falla o es lento, los elementos invisible causan layout shift.
- Mitigación: `min-height` reservado o `will-change: transform, opacity`.

---

## 6. Images — 40/100

### Positivo ✓
- Todos los iconos de Lucide tienen `aria-hidden="true"` ✓
- `favicon.svg` existe ✓

### Crítico

#### C-12 · Sin imagen OG (Open Graph Image)
- Sin `og:image`, los shares sociales mostrarán imagen genérica o ninguna.
- Crear imagen de 1200×630px con branding HL Consulting.

### Alto

#### H-15 · `hero.png` sin usar — oportunidad de imagen hero optimizada
- Si se incorpora imagen al hero, usar formato WebP/AVIF con fallback.
- Agregar `alt` descriptivo: `alt="Equipo de HL Consulting, contadores especializados en PYMEs en Paraguay"`.

#### H-16 · Sin `apple-touch-icon` (180×180 PNG)
- Necesario para iOS home screen y resultados de búsqueda de Safari.

---

## 7. AI Search Readiness (GEO) — 10/100

### Crítico

#### C-13 · Sin `llms.txt`
- No existe `/public/llms.txt`.
- Perplexity, ChatGPT, Gemini usan este archivo para entender el propósito del sitio.

#### C-14 · Contenido no citable — todo JS-renderizado
- Los LLMs crawlers (GPTBot, ClaudeBot, PerplexityBot) enfrentan el mismo problema que Googlebot: la SPA no tiene contenido en el HTML estático.

#### C-15 · Sin señales de autoridad para AI
- Sin nombres de profesionales, titulaciones, matrículas profesionales.
- Sin referencias externas (colegio de contadores, SET Paraguay, fuentes regulatorias).
- Los AI search engines priorizan fuentes con señales E-E-A-T verificables.

---

## 8. Local SEO — Análisis Específico

**Detectado: Local Service (Accounting / Financial Services, Asunción, Paraguay)**

### Crítico

#### C-16 · Sin perfil de Google Business Profile verificado
- No hay señales de GBP en la página (reseñas embed, mapa, GBP badge).
- GBP es el factor #1 para aparecer en el "Local Pack" de Google Maps.
- **Acción:** Crear y verificar perfil en `business.google.com`.

#### C-17 · NAP incompleto y con datos de ejemplo
- **Name:** HL Consulting ✓
- **Address:** "Asunción, Paraguay" — sin calle ni número ✗
- **Phone:** "+595 981 000 000" — parece placeholder ✗
- El NAP debe ser idéntico en el sitio, GBP, directorios y schema.

#### C-18 · Sin enlace a WhatsApp
- El label del contacto dice "Teléfono / WhatsApp" pero el `href` es `tel:` sin link de WhatsApp.
- Paraguay tiene alta tasa de conversión por WhatsApp.
- **Agregar:** `https://wa.me/595981000000` como enlace secundario o flotante.

### Alto

#### H-17 · Sin testimonios/reseñas en la página
- Las reseñas son el segundo factor más importante para local SEO.
- Integrar testimonios con schema `Review` o embed de reseñas de Google.

#### H-18 · Sin Google Maps embed
- Un mapa embed mejora la relevancia local y facilita a los usuarios encontrar la ubicación.
- Incluso si el negocio es de servicios a domicilio (SAB), el mapa con área de cobertura es positivo.

#### H-19 · Sin menciones en directorios locales
- No se detectan señales de listado en directorios paraguayos o latinoamericanos.
- Registrarse en: Páginas Amarillas Paraguay, Infonegocios, Cylex Paraguay.

---

## Plan de Acción Priorizado

### CRÍTICO — Inmediato

| # | Acción | Archivo | Esfuerzo |
|---|--------|---------|---------|
| 1 | Cambiar `lang="en"` → `lang="es"` | `index.html:2` | 2 min |
| 2 | Optimizar `<title>` | `index.html:6` | 5 min |
| 3 | Agregar `<meta description>` | `index.html` | 5 min |
| 4 | Agregar Open Graph + Twitter Card tags | `index.html` | 15 min |
| 5 | Agregar JSON-LD `LocalBusiness` + `WebSite` | `index.html` | 20 min |
| 6 | Crear `public/robots.txt` | nuevo archivo | 5 min |
| 7 | Crear `public/sitemap.xml` | nuevo archivo | 10 min |
| 8 | Actualizar datos reales (NAP) | `content.js` | 5 min |

### ALTO — Esta semana

| # | Acción | Archivo | Esfuerzo |
|---|--------|---------|---------|
| 9 | Agregar `<link rel="preconnect">` Google Fonts | `index.html` | 5 min |
| 10 | Limitar variantes de Montserrat a pesos usados | `index.css:1` | 10 min |
| 11 | Arreglar footer links rotos | `Footer.jsx` + `content.js` | 30 min |
| 12 | Agregar enlace WhatsApp en Contact | `Contact.jsx` + `content.js` | 10 min |
| 13 | Agregar `canonical` tag | `index.html` | 5 min |
| 14 | Crear y verificar Google Business Profile | GBP | 30 min |
| 15 | Implementar pre-rendering con `vite-plugin-prerender` o similar | `vite.config.js` | 2-4 horas |

### MEDIO — Este mes

| # | Acción | Esfuerzo |
|---|--------|---------|
| 16 | Agregar sección de testimonios con schema `Review` | 4h |
| 17 | Crear página/sección "Quiénes somos" con info del equipo | 3h |
| 18 | Crear `public/llms.txt` | 15 min |
| 19 | Agregar FAQ section (beneficio LLM/AI) | 2h |
| 20 | Añadir `apple-touch-icon` (180×180 PNG) | 20 min |
| 21 | Crear imagen OG 1200×630 con branding | 1h |
| 22 | Agregar `schema.org/Service` por cada servicio | 1h |
| 23 | Registrar en directorios locales paraguayos | 2h |

### BAJO — Backlog

| # | Acción |
|---|--------|
| 24 | Evaluar migración a Astro/Next.js para SSG/SSR real |
| 25 | Iniciar blog con 4 artículos de long-tail keywords locales |
| 26 | Google Maps embed en sección de contacto |
| 27 | `manifest.json` para PWA |
| 28 | `theme-color` meta tag |

---

## Notas Adicionales

### Sobre el SPA y SEO
El mayor riesgo técnico es que todo el contenido es renderizado por JavaScript. Googlebot puede renderizar JS pero:
1. Lo hace en una segunda pasada (puede demorar días o semanas)
2. Otros crawlers (Bing, bots de AI) no siempre renderizan JS
3. Las métricas de CWV en campo se verán afectadas por el tiempo de hidratación

**Solución recomendada a largo plazo:** Migrar a [Astro](https://astro.build) con islands architecture, o usar `vite-ssg` para pre-rendering estático de la SPA. Astro es particularmente adecuado para landing pages de conversión.

### Sobre los datos de placeholder
Varios datos en `content.js` parecen ser de desarrollo (teléfono, email con `.com.py`). Antes del lanzamiento a producción, todos deben reemplazarse con datos reales verificables.
