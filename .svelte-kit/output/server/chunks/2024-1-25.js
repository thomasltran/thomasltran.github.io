import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-25", "day": "Chest" };
const _2024_1_25 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1slemha">Pretty much followed the routine today. Chest only took like an hour and 10 minutes. Working on controlling the eccentric part of my movements more to get a better stretch.</p> <p data-svelte-h="svelte-1sdjfzh">Still trying to figure out dumbbell lateral raises. It feels super awkward doing it on a bench because the dumbbells keep hitting my legs. Also don’t feel it as much compared to cables or the machine back at home. Gonna do some research to find possible solutions, or just ramp up the number of sets I do on cables.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_25 as default,
  metadata
};
