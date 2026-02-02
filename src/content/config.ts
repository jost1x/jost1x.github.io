import { defineCollection, z } from "astro:content";

const skills = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    proficiency: z.string().optional(),
    level: z.number().min(0).max(5).default(0),
    keywords: z.array(z.string()).default([]),
    hidden: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    position: z.string(),
    location: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    summary: z.string().max(180),
    website: z.string().url().optional(),
  }),
});

export const collections = {
  skills,
  experience,
};
