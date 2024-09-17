import type { APIContext, APIRoute } from "astro";
import { getEntry } from "astro:content";
import { getOgImage } from "./_OgImage2";

export const prerender = false;

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
