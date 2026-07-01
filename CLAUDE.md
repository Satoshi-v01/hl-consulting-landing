# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**HL Consulting** — landing page de embudo de conversión para agencia de contabilidad. Nicho: soluciones financieras para PYMEs y personas físicas en Paraguay.

El código del proyecto vive en `hl-consulting/`.

## Stack

- **Frontend:** React 19 + Vite 8 + Tailwind CSS v4 (plugin `@tailwindcss/vite`)
- **Íconos:** Lucide React (nunca emojis como íconos)
- **Font:** Montserrat (Google Fonts, cargada en `index.css`)
- **Runtime:** Node.js

## Commands

Ejecutar desde `hl-consulting/`:

```bash
npm run dev       # servidor de desarrollo en localhost:5173
npm run build     # build de producción
npm run preview   # previsualizar el build
npm run lint      # lint con ESLint
```

## Brand & Design System

### Colores
| Token CSS | Hex | Uso |
|-----------|-----|-----|
| `--color-primary` | `#1c3045` | Azul oscuro — fondos hero/process, navbar, texto de headings |
| `--color-accent` | `#b8956a` | Dorado cálido — CTAs primarios, íconos, highlights, hovers |
| `--color-surface` | `#faf9f7` | Fondo principal (secciones claras) |
| `--color-surface-alt` | `#f3f1ed` | Fondo alternado (WhyUs) |
| `--color-text-muted` | `#5a6070` | Texto secundario / descripciones |

Los tokens se definen en `src/index.css` bajo `@theme {}` (Tailwind v4). Se usan como `style={{ color: '#1c3045' }}` inline o como variables CSS. **No hardcodear colores fuera de `index.css` y `content.js`.**

### Tipografía
- **Montserrat** en todos los pesos. Headings en ExtraBold/Bold, body en Regular/Medium.
- Line-height body: 1.6–1.75. Headings: `leading-tight`.

### Identidad
- Tono: profesional y serio, con calidez y cercanía. Nunca frío ni distante.
- Copy en **español** siempre.
- Posicionamiento: alcanzable, confiable, para negocios reales.

## Architecture

SPA de una sola página con secciones apiladas. No hay router — navegación por scroll con anchor IDs.

```
hl-consulting/src/
  data/
    content.js       ← ÚNICA fuente de verdad para todo el copy y datos
  components/
    Navbar.jsx       → fixed, glass scroll, mobile menu
    Hero.jsx         → sección primaria con stats card (fondo primary)
    Services.jsx     → grid 3×2 de los 6 servicios
    WhyUs.jsx        → diferenciadores + stats (fondo surface-alt)
    Process.jsx      → 3 pasos del proceso (fondo primary)
    Contact.jsx      → formulario controlado + info de contacto
    Footer.jsx       → links + copyright
  App.jsx            → monta secciones en orden
  index.css          → @theme tokens + import Tailwind v4
```

**Regla clave:** todo el copy, títulos, descripciones, opciones de formulario y datos de contacto viven exclusivamente en `src/data/content.js`. Los componentes consumen esos datos — nunca strings hardcodeados dentro de JSX.

## Instrucciones claras para el codigo

El proyecto debe estar con las mejores practicas de coding, sin hardcodeo, que sea escalable, mantenible con el tiempo y bajo NINGUN concepto HARDCODEO que lleve a muy malas practicas. Si es necesario, SOLO SI ES NECESARIO, consultar con el usuario el hardcodeo. 
El disenho del codigo debe responder a las practicas de un Dev Senior.  
