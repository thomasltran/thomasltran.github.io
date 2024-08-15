import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-4-14", "day": "Chest" };
const _2024_4_14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-185tta5">On the bike right now. Been awhile. Working on changing my perceptions of what limits are.</p> <p data-svelte-h="svelte-z60jl9">Chest was good today. Up around 160-ish, so been lifting a lot heavier. Pretty close to my old strength level. Gonna keep working and working and working. I want to run a half-marathon after graduating in 2025. Obviously if I put more cardio/running into my routine, I won’t look as big. But I think it’s something I want to do. Always had an issue with long-distance running.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_4_14 as default,
  metadata
};
