import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-26", "day": "Back" };
const _2024_1_26 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1xtxogi">Super nice back pump today. Form and technique is getting better, but I suspect some muscle imbalances between my left and right side. Either that or my anatomy is just set up that way.</p> <p data-svelte-h="svelte-ljo0pp">Haven’t worn shorts to the gym since I got here because of the weather. Lifts and everything felt better because I was able to see the vascularity pop up as the lifts went on. Having fun and enjoying the process.</p> <p data-svelte-h="svelte-pmc1e2">Gonna do the same thing as last week and pre-buy a wrap to microwave tomorrow morning so I can hit arms right when the gym opens.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_26 as default,
  metadata
};
