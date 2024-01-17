import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-12", "day": "Arms" };
const _2024_1_12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-lsmolx">Improving at my technique for arms. Still don’t think I’m fully there yet for triceps, but pumps have been feeling super good. Gonna miss the preacher curl machine here when I go back on campus Sunday.</p> <p data-svelte-h="svelte-1ui0qkj">Haven’t took any progress pictures in awhile. Not sure what it is, but I’d much rather just do a quick pump check in the mirror and be done with it.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_12 as default,
  metadata
};
