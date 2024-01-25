import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-22", "day": "Arms" };
const _2024_1_22 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-hsxdkj">Decent arm day. Still working on technique and stuff. Noticeably a bit fatter now. Gonna finish last of chinese leftovers for dinner and dial the diet back in.</p> <p data-svelte-h="svelte-17n7fmk">Watching some more lifting philosophy stuff. Pretty interesting. One thing I want to experiment with is bicep exercises, and going between cable, machine, and/or dumbbells. For one thing, I get significantly better pumps on the cables. However, the issue is that compared to dumbbells, they don’t seem to be as conducive to strength—based on random Reddit threads I’ve read. The important factor is determining the strength curve of a movement. One thing that I’m sure of is to not use the preacher curl machine here anymore. It just feels so awkward, and I can barely feel my biceps engaging.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_22 as default,
  metadata
};
