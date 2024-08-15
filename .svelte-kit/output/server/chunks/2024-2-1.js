import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-1", "day": "Arms" };
const _2024_2_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-3t7vkg">Another arm day. Been getting pretty good pumps for arms. Want to see bigger triceps though, but probably not feasible to get that on the cut.</p> <p data-svelte-h="svelte-he6r0j">Getting better at controlling tempo for arms too. Need to improve at that aspect when I do partials as well, and focus on maintaining form as much as possible. Other than that, biceps are getting freakier by the day. Also loving the forearm pump too, but I’m pretty sure that I’m doing the movement incorrectly.</p> <p data-svelte-h="svelte-7d9zx0">Settling into a pretty good rhythm with my diet. Only thing that blocks me is if I get third partied by a dining hall not having chicken or if it just doesn’t open at all on the day. Pretty sure the latter is happening today, so it’s probably another chicken sandwich for dinner. Not complaining.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_1 as default,
  metadata
};
