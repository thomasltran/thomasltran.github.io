import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-4", "day": "Rest" };
const _2024_3_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-15lnszt">Just ate a bunch of food again today. Probably having like triple the amount of my daily fruit intake at home compared to school. Been sitting at like 146.4 when I wake up, and gaining anywhere from 3-5 lbs throughout the day from food.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_4 as default,
  metadata
};
