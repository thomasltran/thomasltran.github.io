import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-9", "day": "Chest" };
const _2024_2_9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-9dfsoi">Chest pumps keep getting freakier. No complaints about the lift today—everything went pretty smoothly. Need to dial back in the diet though. I’ve been getting too caught up on my waffle yogurt fruit bowl concoction. Granted it adds like an extra 120 calories to my daily total, but it’s gotta slow down the rate at which I get a six-pack. For the greater good.</p> <p data-svelte-h="svelte-1lbxixt">Pre-bought food again as always for Saturdays. Looking forward to hitting back tomorrow.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_9 as default,
  metadata
};
