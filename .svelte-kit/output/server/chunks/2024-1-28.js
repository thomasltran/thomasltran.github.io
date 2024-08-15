import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-28", "day": "Legs" };
const _2024_1_28 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1rb6k23">Focused in on tempo for legs today, but felt super weak. I think it’s because I had no carbs for breakfast (only beef and broccoli), so the fuel wasn’t there. Need to keep experimenting with diet throughout the day. Haven’t weighed myself in a couple of days, but I think I’m still around 150 give or take 1 or 2 pounds.</p> <p data-svelte-h="svelte-1ggw27d">Post-workout fatigue hit a little harder today. Again, probably because the lack of carbs, but it didn’t feel good. My body and mind overall just feels a lot weaker than like last week when I had higher food intake. Not exactly optimal for school, but it’s whatever.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_28 as default,
  metadata
};
