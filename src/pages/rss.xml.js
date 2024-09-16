import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("post");
  return rss({
    title: "ゆっきーの砂場",
    description:
      "ポケモンと旅行、美味しい料理が好きなエンジニア「ゆっきー」のブログ兼実験場です。",
    site: context.site,
    items: blog
      .sort((postA, postB) => {
        return new Date(postA.data.createdAt) < new Date(postB.data.createdAt)
          ? 1
          : -1;
      })
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/post/${post.slug}/`,
      })),
  });
}
