import { format } from "@formkit/tempo";

export default function (plop) {
  const today = new Date();
  const createdAt = format(today, "YYYY-MM-DD");
  const pathname = `${createdAt}-${today.getMilliseconds()}`;

  plop.setGenerator("blog", {
    description: "blog post",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `src/content/post/${pathname}.md`,
        templateFile: "plop-templates/blog/index.md.hbs",
        data: {
          createdAt,
          pathname,
        },
      },
    ],
  });
}
