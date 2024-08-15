import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-18", "day": "Rest" };
const _2024_2_18 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-qkc7eo">Spent basically the entire day at D2. Just ate food and did work. Maybe ate a little too much, but it was pretty good food. Only paid like $5 or something too for an entire day’s worth of eating. Feel pretty full right now while on the bike doing cardio, so I probably won’t get hungry during classes tomorrow. Might be the move to load up on food Sundays and Tuesdays so that I don’t get hungry during classes the next day, although it’s a little counterproductive for trying to get a six-pack. Cut has gone on for longer than I anticipated now, and I miss being able to eat anything I want. The six-pack is gonna be worth it though, and I can always eat after I get it.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_18 as default,
  metadata
};
