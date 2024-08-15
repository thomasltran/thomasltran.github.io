import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-23", "day": "Rest" };
const _2024_2_23 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-f91lve">Hitting legs at McComas is the move. Legs are still hurting from yesterday. Could’ve done a better job stretching, but the machines there just stimulated my muscles so much better. Powering through cardio right now before dinner.</p> <p data-svelte-h="svelte-1fudkgt">Early morning errand took longer than expected so I had to skip breakfast and pay the lunch price at D2 for brunch instead. Felt like I ate a lot. I did compensate for missing breakfast, so having a big meal all at once was super satisfying. Reminded me of a last year’s bulk. Food was super good too.</p> <p data-svelte-h="svelte-b3aalh">Digestive system has been acting up a whole lot since Sunday. I have been eating a bunch of yogurt fruit bowl concoctions and fruits (pineapples and strawberries) at D2, so that might be a factor. On the other hand, also been getting a whole lot of protein in without that many vegetables due to the food options so that’s probably another factor. Looking forward to chest tomorrow.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_23 as default,
  metadata
};
