import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "ゆっきーの砂場",
    description:
      "ポケモンと旅行、美味しい料理が好きなエンジニア「ゆっきー」のブログ兼実験場です。",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./post/**/*.{md,mdx}")),
  });
}
