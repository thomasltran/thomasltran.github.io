import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-28", "day": "Rest" };
const _2024_2_28 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-14hq4p4">Good eating today. Cutting back a little for lunch. I’ve probably been eating like 700-800 calories worth of chicken for lunch at D2, which isn’t exactly conducive to cutting. Learned that jasmine rice doesn’t have a lot of fiber either. Pretty much have been getting 0 fiber in my diet. Explains a lot of the digestive issues, as well as my high cholesterol. Been trying to eat a bunch of fruit and berries to compensate. Forgot the banana today.</p> <p data-svelte-h="svelte-2g7qht">Can’t wait to go home for spring break. Food here has gotten a bit boring since I’ve been eating the same thing every day. Looking forward to having more fruits and veggies that aren’t frozen or loaded with butter.</p> <p data-svelte-h="svelte-1paov2r">Skipped a class to do cardio today. No way I’m gonna do it at night after my last class. Legs are still hurting from yesterday but pushing through best I can. Not sure if I’ll be spending tomorrow here or going home, but I’ll be getting a chest pump either way.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_28 as default,
  metadata
};
