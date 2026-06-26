import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const skills = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/skills" }),
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
  loader: glob({ pattern: "*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    location: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    summary: z.string().max(180),
    website: z.url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    summary: z.string().max(180),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    url: z.url().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/education" }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    type: z.enum(["degree", "technical", "academic"]),
    summary: z.string().max(160).optional(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/certifications" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.date(),
    category: z.enum(["cloud", "data", "development", "management"]),
    credentialUrl: z.url().optional(),
  }),
});

export const collections = {
  skills,
  experience,
  projects,
  education,
  certifications,
};
