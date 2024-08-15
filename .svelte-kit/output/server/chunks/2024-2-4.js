import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-4", "day": "Chest" };
const _2024_2_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-i1hmx2">Freaky chest pumpy today. Upped the intensity at the beginning of the lift, so towards the end I felt weaker than usual. Pretty much gave it everything every set.</p> <p data-svelte-h="svelte-1v9eou">I think I lost weight? Not too sure, but just gonna keep up with my intuitive diet since it seems to be providing me with enough fuel for the gym and work outside of it.</p> <p data-svelte-h="svelte-12k31cu">Also got tentatively accepted to a fitness study or something on campus. Applied because I’m curious about my body fat percentage, so I guess I’ll see how it goes. Was pretty spontaneous on my part but it should be interesting. Just wanna do cool stuff.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_4 as default,
  metadata
};
