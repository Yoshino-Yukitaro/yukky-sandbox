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
export const collections = {
  post: blogCollection,
};
