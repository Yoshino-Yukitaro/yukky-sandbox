export default function (plop) {
  const today = new Date();
  const pathname = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}-${today.getMilliseconds()}`;

  plop.setGenerator("blog", {
    description: "blog post",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `src/pages/post/${pathname}/index.md`,
        templateFile: "plop-templates/blog/index.md.hbs",
        data: {
          createdAt: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
          pathname,
        },
      },
    ],
  });
}
