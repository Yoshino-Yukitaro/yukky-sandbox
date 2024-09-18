import type { APIContext } from "astro";
import { getCollection, getEntry } from "astro:content";
import { getOgImage } from "./_getOgImage";

export const getStaticPaths = async () => {
  const posts = await getCollection("post");
  return posts.map((post) => ({ params: { slug: post.slug } }));
};

export async function GET({ params, redirect }: APIContext) {
  const { slug } = params;
  if (slug === undefined) {
    return new Response(null, {
      status: 500,
      statusText: "No slug provided",
    });
  }
  const post = await getEntry("post", slug);
  if (post === undefined) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }
  const body = await getOgImage(post?.data.title ?? "No title");
  return new Response(body);
}
