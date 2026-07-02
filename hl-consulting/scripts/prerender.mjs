// Post-build step: renders <App /> to static HTML via Vite's SSR pipeline and
// injects it into dist/index.html, so crawlers that don't execute JS (Bing,
// most social-share scrapers, several AI crawlers) get real content on first
// response. The client still mounts with createRoot in main.jsx as normal.
import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const distIndexPath = path.join(root, 'dist/index.html')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const appHtml = renderToString(React.createElement(App))

  const distHtml = await readFile(distIndexPath, 'utf-8')
  const prerenderedHtml = distHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )

  await writeFile(distIndexPath, prerenderedHtml)
  console.log('✓ Prerendered content injected into dist/index.html')
} finally {
  await vite.close()
}
