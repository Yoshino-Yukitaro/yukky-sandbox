import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/post" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.string().date(),
    description: z.string(),
    link: z.string(),
    pubDate: z.string().date(),
  }),
});

const careersCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/careers" }),
  schema: z.object({
    period: z.string(),
    title: z.string(),
    badgeColor: z.enum(["orange", "amber", "yellow"]),
    description: z.string(),
    isFirst: z.boolean().optional(),
    isLast: z.boolean().optional(),
  }),
});

export const collections = {
  post: blogCollection,
  careers: careersCollection,
};
