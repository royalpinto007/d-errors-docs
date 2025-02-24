import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel'

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  markdown: {
    syntaxHighlight: 'prism',
    prism: {
      languages: ['typescript', 'javascript', 'css', 'markup', 'bash', 'jsx'],
    },
  },
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
      },
    },
  },
})
