import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-20", "day": "Back" };
const _2024_2_20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1dj4lgp">Decent back pump today. Went a little higher on weight. Probably want to throw in some days where I just focus on moving as much weight as possible. Does increase the risk of injury but it does sound fun. Also want to try out a new attachment for lat pulldowns next time. Been using the straight bar this entire time, so I want to see what the other ones feel like. Used the high-low row machine today too since it was open. Didn’t feel that good—I think I might prefer the cables more, but it’s nice to change it up every once in awhile.</p> <p data-svelte-h="svelte-19bbfgd">Basically back to pre-Sunday weight. Digestive system got messed up past 2 days. Hopefully it’s back to normal now. I guess introducing too much of a significant change into my diet doesn’t work out.</p>`;
    }
  })}`;
});
export {
  _2024_2_20 as default,
  metadata
};
