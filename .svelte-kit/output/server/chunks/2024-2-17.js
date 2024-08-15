import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-17", "day": "Legs" };
const _2024_2_17 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1c5ljhv">Failed pretty bad today. Had breakfast and everything to go, woke up in time, but didn’t walk over to McComas. Hit legs in the dorm gym again. Can’t grow if I don’t make the effort to put myself in the best position to do so. Can’t remember the last time I hit legs at McComas.</p> <p data-svelte-h="svelte-1xktz72">Dude at dinner griefed my diet yesterday. Charged and gave me 2 1/4 pieces of chicken so I paid for and ate more than I wanted to. Trying to not get hung over on these type of things, especially regarding my diet. Just gotta be flexible. As a result, I only ate 2 meals today totaling around 1.2-1.3k calories. Don’t feel that hungry to be honest, but I’ll see after finishing cardio.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_17 as default,
  metadata
};
