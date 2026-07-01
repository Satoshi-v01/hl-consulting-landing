# Configurar envío de formulario a correo (Formspree)

## Pasos

1. Ir a **https://formspree.io** → clic en **"Get Started"** (gratis)
2. Crear un nuevo formulario con el email `hiaralugovill@gmail.com`
3. Copiar el ID que te da (ejemplo: `xpznabcd`)
4. Abrir `hl-consulting/src/data/content.js`
5. Reemplazar `'YOUR_FORM_ID'` por el ID copiado:

```js
formspreeId: 'xpznabcd',  // ← tu ID real acá
```

6. Hacer build y subir al servidor.

## Límite del plan gratuito

- 50 envíos / mes
- Si se necesita más: plan pago en formspree.io/pricing
