import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-5", "day": "Chest" };
const _2024_1_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-tv2zck">Strength been disappearing pretty noticeably lately. Working on being smarter with what weights I choose to get better hypertrophy. Probably gonna switch back to dumbbell incline instead of incline bench when I go back on campus.</p> <p data-svelte-h="svelte-1ei3zmk">Started using the lateral raise machine when I got home Thanksgiving break. Love the tension that it gives compared to dumbbells or cables, but the alignment could be better. Tried to line up the muscle fibers better by sitting a little bit further back and letting arms stretch out a bit further; I get a nice stretch, but not sure if it’s engaging more front than side delts.</p> <p data-svelte-h="svelte-k2vyx9">Pretty freaky pump today.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_5 as default,
  metadata
};
