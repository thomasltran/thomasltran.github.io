const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../markdown/2024-1-1.md": () => import("../../../../chunks/2024-1-1.js"), "../markdown/2024-1-10.md": () => import("../../../../chunks/2024-1-10.js"), "../markdown/2024-1-11.md": () => import("../../../../chunks/2024-1-11.js"), "../markdown/2024-1-12.md": () => import("../../../../chunks/2024-1-12.js"), "../markdown/2024-1-13.md": () => import("../../../../chunks/2024-1-13.js"), "../markdown/2024-1-14.md": () => import("../../../../chunks/2024-1-14.js"), "../markdown/2024-1-15.md": () => import("../../../../chunks/2024-1-15.js"), "../markdown/2024-1-16.md": () => import("../../../../chunks/2024-1-16.js"), "../markdown/2024-1-2.md": () => import("../../../../chunks/2024-1-2.js"), "../markdown/2024-1-3.md": () => import("../../../../chunks/2024-1-3.js"), "../markdown/2024-1-4.md": () => import("../../../../chunks/2024-1-4.js"), "../markdown/2024-1-5.md": () => import("../../../../chunks/2024-1-5.js"), "../markdown/2024-1-6.md": () => import("../../../../chunks/2024-1-6.js"), "../markdown/2024-1-7.md": () => import("../../../../chunks/2024-1-7.js"), "../markdown/2024-1-8.md": () => import("../../../../chunks/2024-1-8.js"), "../markdown/2024-1-9.md": () => import("../../../../chunks/2024-1-9.js") }), `../markdown/${params.slug}.md`);
  const { date } = post.metadata;
  const content = post.default;
  return {
    content,
    date
  };
}
export {
  load
};
