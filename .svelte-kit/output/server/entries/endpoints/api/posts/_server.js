import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/markdown/2024-1-1.md": () => import("../../../../chunks/2024-1-1.js"), "/src/routes/blog/markdown/2024-1-10.md": () => import("../../../../chunks/2024-1-10.js"), "/src/routes/blog/markdown/2024-1-11.md": () => import("../../../../chunks/2024-1-11.js"), "/src/routes/blog/markdown/2024-1-12.md": () => import("../../../../chunks/2024-1-12.js"), "/src/routes/blog/markdown/2024-1-13.md": () => import("../../../../chunks/2024-1-13.js"), "/src/routes/blog/markdown/2024-1-14.md": () => import("../../../../chunks/2024-1-14.js"), "/src/routes/blog/markdown/2024-1-15.md": () => import("../../../../chunks/2024-1-15.js"), "/src/routes/blog/markdown/2024-1-16.md": () => import("../../../../chunks/2024-1-16.js"), "/src/routes/blog/markdown/2024-1-2.md": () => import("../../../../chunks/2024-1-2.js"), "/src/routes/blog/markdown/2024-1-3.md": () => import("../../../../chunks/2024-1-3.js"), "/src/routes/blog/markdown/2024-1-4.md": () => import("../../../../chunks/2024-1-4.js"), "/src/routes/blog/markdown/2024-1-5.md": () => import("../../../../chunks/2024-1-5.js"), "/src/routes/blog/markdown/2024-1-6.md": () => import("../../../../chunks/2024-1-6.js"), "/src/routes/blog/markdown/2024-1-7.md": () => import("../../../../chunks/2024-1-7.js"), "/src/routes/blog/markdown/2024-1-8.md": () => import("../../../../chunks/2024-1-8.js"), "/src/routes/blog/markdown/2024-1-9.md": () => import("../../../../chunks/2024-1-9.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const blog = path.slice(11, path.indexOf("markdown") - 1);
      const postfix = path.slice(path.indexOf("markdown") + 8, path.indexOf("."));
      const postPath = blog + postfix;
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(a.meta.date) - new Date(b.meta.date);
  });
  return json(sortedPosts);
};
export {
  GET
};
