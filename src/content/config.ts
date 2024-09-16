import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
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
