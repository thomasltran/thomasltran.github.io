import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-29", "day": "Rest" };
const _2024_1_29 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-bhvqdf">Doing cardio right now before classes. Gonna be a lot nicer when I come back from my last one at like 6:45 and be able to eat dinner right away. The only downside of doing it so early is that I’m not that recovered from legs and cardio yesterday. Normally I have at least a 24 hour period between my cardio sessions, so this one is pretty early. The convenience factor is definitely more beneficial though.</p> <p data-svelte-h="svelte-w2uo7z">Been feeling super groggy walking around day to day. Probably because my caloric deficit has been higher recently, but some of it can be attributed to me not being locked in enough. Have to keep focusing on the work and stick with it even though the six pack is taking longer than expected. Mental fortitude.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_29 as default,
  metadata
};
