import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-7-12", "day": "Chest" };
const _2024_7_12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-ub74o3">Decent past couple of days. Been having some good interactions at the gym.</p> <p data-svelte-h="svelte-q6gt9a">Went up again for incline bench today. Did like 175 for 6 reps 2 sets. Trying to be mindful of slowing on the way down to maximize muscle growth. Used a different bench today for incline db bench, but I think I screwed up the angle. Front delts felt toasted way before chest did.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_7_12 as default,
  metadata
};
