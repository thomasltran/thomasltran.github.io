import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/markdown/2024-1-1.md": () => import("../../../../chunks/2024-1-1.js"), "/src/routes/blog/markdown/2024-1-10.md": () => import("../../../../chunks/2024-1-10.js"), "/src/routes/blog/markdown/2024-1-11.md": () => import("../../../../chunks/2024-1-11.js"), "/src/routes/blog/markdown/2024-1-12.md": () => import("../../../../chunks/2024-1-12.js"), "/src/routes/blog/markdown/2024-1-13.md": () => import("../../../../chunks/2024-1-13.js"), "/src/routes/blog/markdown/2024-1-14.md": () => import("../../../../chunks/2024-1-14.js"), "/src/routes/blog/markdown/2024-1-15.md": () => import("../../../../chunks/2024-1-15.js"), "/src/routes/blog/markdown/2024-1-16.md": () => import("../../../../chunks/2024-1-16.js"), "/src/routes/blog/markdown/2024-1-17.md": () => import("../../../../chunks/2024-1-17.js"), "/src/routes/blog/markdown/2024-1-18.md": () => import("../../../../chunks/2024-1-18.js"), "/src/routes/blog/markdown/2024-1-19.md": () => import("../../../../chunks/2024-1-19.js"), "/src/routes/blog/markdown/2024-1-2.md": () => import("../../../../chunks/2024-1-2.js"), "/src/routes/blog/markdown/2024-1-20.md": () => import("../../../../chunks/2024-1-20.js"), "/src/routes/blog/markdown/2024-1-21.md": () => import("../../../../chunks/2024-1-21.js"), "/src/routes/blog/markdown/2024-1-22.md": () => import("../../../../chunks/2024-1-22.js"), "/src/routes/blog/markdown/2024-1-23.md": () => import("../../../../chunks/2024-1-23.js"), "/src/routes/blog/markdown/2024-1-24.md": () => import("../../../../chunks/2024-1-24.js"), "/src/routes/blog/markdown/2024-1-25.md": () => import("../../../../chunks/2024-1-25.js"), "/src/routes/blog/markdown/2024-1-26.md": () => import("../../../../chunks/2024-1-26.js"), "/src/routes/blog/markdown/2024-1-27.md": () => import("../../../../chunks/2024-1-27.js"), "/src/routes/blog/markdown/2024-1-28.md": () => import("../../../../chunks/2024-1-28.js"), "/src/routes/blog/markdown/2024-1-29.md": () => import("../../../../chunks/2024-1-29.js"), "/src/routes/blog/markdown/2024-1-3.md": () => import("../../../../chunks/2024-1-3.js"), "/src/routes/blog/markdown/2024-1-30.md": () => import("../../../../chunks/2024-1-30.js"), "/src/routes/blog/markdown/2024-1-31.md": () => import("../../../../chunks/2024-1-31.js"), "/src/routes/blog/markdown/2024-1-4.md": () => import("../../../../chunks/2024-1-4.js"), "/src/routes/blog/markdown/2024-1-5.md": () => import("../../../../chunks/2024-1-5.js"), "/src/routes/blog/markdown/2024-1-6.md": () => import("../../../../chunks/2024-1-6.js"), "/src/routes/blog/markdown/2024-1-7.md": () => import("../../../../chunks/2024-1-7.js"), "/src/routes/blog/markdown/2024-1-8.md": () => import("../../../../chunks/2024-1-8.js"), "/src/routes/blog/markdown/2024-1-9.md": () => import("../../../../chunks/2024-1-9.js"), "/src/routes/blog/markdown/2024-2-1.md": () => import("../../../../chunks/2024-2-1.js"), "/src/routes/blog/markdown/2024-2-10.md": () => import("../../../../chunks/2024-2-10.js"), "/src/routes/blog/markdown/2024-2-11.md": () => import("../../../../chunks/2024-2-11.js"), "/src/routes/blog/markdown/2024-2-12.md": () => import("../../../../chunks/2024-2-12.js"), "/src/routes/blog/markdown/2024-2-13.md": () => import("../../../../chunks/2024-2-13.js"), "/src/routes/blog/markdown/2024-2-14.md": () => import("../../../../chunks/2024-2-14.js"), "/src/routes/blog/markdown/2024-2-15.md": () => import("../../../../chunks/2024-2-15.js"), "/src/routes/blog/markdown/2024-2-16.md": () => import("../../../../chunks/2024-2-16.js"), "/src/routes/blog/markdown/2024-2-17.md": () => import("../../../../chunks/2024-2-17.js"), "/src/routes/blog/markdown/2024-2-18.md": () => import("../../../../chunks/2024-2-18.js"), "/src/routes/blog/markdown/2024-2-19.md": () => import("../../../../chunks/2024-2-19.js"), "/src/routes/blog/markdown/2024-2-2.md": () => import("../../../../chunks/2024-2-2.js"), "/src/routes/blog/markdown/2024-2-20.md": () => import("../../../../chunks/2024-2-20.js"), "/src/routes/blog/markdown/2024-2-21.md": () => import("../../../../chunks/2024-2-21.js"), "/src/routes/blog/markdown/2024-2-22.md": () => import("../../../../chunks/2024-2-22.js"), "/src/routes/blog/markdown/2024-2-23.md": () => import("../../../../chunks/2024-2-23.js"), "/src/routes/blog/markdown/2024-2-24.md": () => import("../../../../chunks/2024-2-24.js"), "/src/routes/blog/markdown/2024-2-25.md": () => import("../../../../chunks/2024-2-25.js"), "/src/routes/blog/markdown/2024-2-26.md": () => import("../../../../chunks/2024-2-26.js"), "/src/routes/blog/markdown/2024-2-27.md": () => import("../../../../chunks/2024-2-27.js"), "/src/routes/blog/markdown/2024-2-28.md": () => import("../../../../chunks/2024-2-28.js"), "/src/routes/blog/markdown/2024-2-29.md": () => import("../../../../chunks/2024-2-29.js"), "/src/routes/blog/markdown/2024-2-3.md": () => import("../../../../chunks/2024-2-3.js"), "/src/routes/blog/markdown/2024-2-4.md": () => import("../../../../chunks/2024-2-4.js"), "/src/routes/blog/markdown/2024-2-5.md": () => import("../../../../chunks/2024-2-5.js"), "/src/routes/blog/markdown/2024-2-6.md": () => import("../../../../chunks/2024-2-6.js"), "/src/routes/blog/markdown/2024-2-7.md": () => import("../../../../chunks/2024-2-7.js"), "/src/routes/blog/markdown/2024-2-8.md": () => import("../../../../chunks/2024-2-8.js"), "/src/routes/blog/markdown/2024-2-9.md": () => import("../../../../chunks/2024-2-9.js"), "/src/routes/blog/markdown/2024-3-1.md": () => import("../../../../chunks/2024-3-1.js"), "/src/routes/blog/markdown/2024-3-10.md": () => import("../../../../chunks/2024-3-10.js"), "/src/routes/blog/markdown/2024-3-2.md": () => import("../../../../chunks/2024-3-2.js"), "/src/routes/blog/markdown/2024-3-3.md": () => import("../../../../chunks/2024-3-3.js"), "/src/routes/blog/markdown/2024-3-4.md": () => import("../../../../chunks/2024-3-4.js"), "/src/routes/blog/markdown/2024-3-5.md": () => import("../../../../chunks/2024-3-5.js"), "/src/routes/blog/markdown/2024-3-6.md": () => import("../../../../chunks/2024-3-6.js"), "/src/routes/blog/markdown/2024-3-7.md": () => import("../../../../chunks/2024-3-7.js"), "/src/routes/blog/markdown/2024-3-8.md": () => import("../../../../chunks/2024-3-8.js"), "/src/routes/blog/markdown/2024-3-9.md": () => import("../../../../chunks/2024-3-9.js"), "/src/routes/blog/markdown/2024-4-14.md": () => import("../../../../chunks/2024-4-14.js"), "/src/routes/blog/markdown/2024-4-15.md": () => import("../../../../chunks/2024-4-15.js"), "/src/routes/blog/markdown/2024-5-7.md": () => import("../../../../chunks/2024-5-7.js"), "/src/routes/blog/markdown/2024-7-12.md": () => import("../../../../chunks/2024-7-12.js"), "/src/routes/blog/markdown/2024-7-21.md": () => import("../../../../chunks/2024-7-21.js"), "/src/routes/blog/markdown/2024-7-22.md": () => import("../../../../chunks/2024-7-22.js"), "/src/routes/blog/markdown/2024-7-4.md": () => import("../../../../chunks/2024-7-4.js"), "/src/routes/blog/markdown/2024-7-7.md": () => import("../../../../chunks/2024-7-7.js"), "/src/routes/blog/markdown/2024-7-8.md": () => import("../../../../chunks/2024-7-8.js"), "/src/routes/blog/markdown/2024-8-14.md": () => import("../../../../chunks/2024-8-14.js"), "/src/routes/blog/markdown/2024-8-7.md": () => import("../../../../chunks/2024-8-7.js") });
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
