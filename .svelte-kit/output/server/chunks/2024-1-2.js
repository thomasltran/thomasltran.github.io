import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-2", "day": "Arms" };
const _2024_1_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1jd66ig">First lift of 202024. Was wearing a long-sleeved shirt so I wasn’t able to feel the muscles working as much—100% has to be a correlation between shirt length and mind-muscle connection. Managed to get in cardio too.</p> <p data-svelte-h="svelte-1xjez7y">Tried out single-arm pushdowns for triceps today instead of usual straight/V-bar. Not sure how I like it, but will default to it if none of the other two are available or if I feel like it.</p> <p data-svelte-h="svelte-t5zzyp">Also, pump check was kinda enlightening. Did hammer curls for my last set, and as usual, my left arm failed before my right. However, I felt more tension in my left bicep, and I’m pretty sure it looked more pumped than my right. Looked it up and people said since the left side is closer to the heart, more blood is able to be supplied to that region. Kinda makes sense except for the fact that my left arm is weaker than my right. Could just not be an issue at all though.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_2 as default,
  metadata
};
