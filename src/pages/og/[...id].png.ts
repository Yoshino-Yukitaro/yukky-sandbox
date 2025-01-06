import type { APIContext } from "astro";
import { getCollection, getEntry } from "astro:content";
import { getOgImage } from "./_getOgImage";

export const getStaticPaths = async () => {
  const posts = await getCollection("post");
  return posts.map((post) => ({ params: { id: post.id } }));
};

export async function GET({ params, redirect }: APIContext) {
  const { id } = params;
  if (id === undefined) {
    return new Response(null, {
      status: 500,
      statusText: "No slug provided",
    });
  }
  const post = await getEntry("post", id);
  if (post === undefined) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }
  const body = await getOgImage(post?.data.title ?? "No title");
  return new Response(body);
}
