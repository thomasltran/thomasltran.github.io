import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-7", "day": "Arms" };
const _2024_3_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1s1aire">Just tried to pump out reps today. Couldn’t feel as much squeeze and tension as I usually do. Left elbow felt a bit funky on tricep movements too. Love the preacher curl machine back home. Just did a bunch of volume and stopped the movements when I felt like it was enough.</p> <p data-svelte-h="svelte-1p9obhf">Probably gonna clean bulk for a bit. Restricting myself with food for over 1/3 of a year was a bit too taxing. Like physically I maybe had another month of super strict dieting left in me, but mentally it wasn’t gonna happen. Still gonna eat pretty healthy as far as food goes, so I don’t expect to gain that much weight. The good thing is if I stay within like a 10 lb range of 150, I can get to lower weight on my next cut and hopefully the six pack comes out then.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_7 as default,
  metadata
};
