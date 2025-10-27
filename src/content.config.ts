import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      hook: z.string(),
      liveLink: z.string().url().optional(),
      repoLink: z.string().url(),
      techStack: z.array(z.string()),
      coverImage: image().optional(),
      projectType: z.string(),
      duration: z.string(),
      role: z.string(),
      overview: z.array(z.string()),
      startDate: z.coerce.date(),
      featured: z.number(),
    }),
});

export const collections = { projects };
