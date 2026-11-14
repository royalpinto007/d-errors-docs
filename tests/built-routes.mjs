import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Exercise the actual Vercel bundle, including MDX rendering and Svelte SSR.
const functionRoot = resolve('.vercel/output/functions/_render.func')
const config = JSON.parse(await readFile(resolve(functionRoot, '.vc-config.json'), 'utf8'))
const { default: handler } = await import(pathToFileURL(resolve(functionRoot, config.handler)))
const pages = JSON.parse(await readFile('.vercel/output/static/api/search.json', 'utf8'))
assert(pages.length > 0, 'built search index contains documentation')

for (const page of pages) {
  const path = page.slug === '/index' ? '/' : page.slug
  const response = await handler.fetch(new Request(`https://docs.example.test${path}`))
  assert.equal(response.status, 200, `render ${path}`)
  const html = await response.text()
  assert(html.includes('<html'), `HTML document at ${path}`)
  assert(html.includes(page.title), `page title at ${path}`)
}
console.log(`Built documentation smoke test passed: ${pages.length} routes and search index`)
