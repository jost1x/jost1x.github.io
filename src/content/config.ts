import { defineCollection, z } from 'astro:content';

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    proficiency: z.string().optional(),
    level: z.number().min(0).max(5).default(0),
    keywords: z.array(z.string()).default([]),
    hidden: z.boolean().default(false),
  }),
});

export const collections = {
  skills,
};