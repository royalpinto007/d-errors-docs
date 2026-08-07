import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Define groups in desired order
export const groups = ['Overview', 'General', 'Errors', 'Codes', 'Internals', 'Diagnostics', 'Interactive', 'Advanced', 'Case'] as const

// Astro 6 removed legacy content collections: the config moves to
// src/content.config.ts and every collection declares an explicit loader
// instead of relying on the src/content/<name> convention.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.enum(groups).optional(),
    priority: z.number().optional(),
  }),
})

export const collections = {
  docs,
}
