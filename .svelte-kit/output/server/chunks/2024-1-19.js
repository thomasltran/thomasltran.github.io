import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-19", "day": "Rest" };
const _2024_1_19 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1wff029">Got plenty of food today. Working towards finding the optimal amount to maintain current weight at. Still pretty sure that I’m losing weight though.</p> <p data-svelte-h="svelte-kmzhtr">Not sure if I’m going mad, but I’m pretty sure abs are like 5 pounds from peeking out. Definitely need to drop to 140 to get them more defined. Looking forward to chest day tomorrow—got a wrap ready to go for the microwave for breakfast so that I can go right when the gym opens at 10.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_19 as default,
  metadata
};
