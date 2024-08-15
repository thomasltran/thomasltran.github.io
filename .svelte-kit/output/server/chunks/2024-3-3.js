import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-3", "day": "Legs" };
const _2024_3_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-hgztd2">Hit legs before noon today. Went pretty alright. Wasn’t able to reach my usual intensity early on in the workout, but got there towards the end. Just a different vibe I be getting at the Audrey Moore gym compared to McComas.</p> <p data-svelte-h="svelte-5tpjri">The ab machine there feels way better than the one at school. Just get a bunch of tension at the stretched part of the movement. Also decline curl-ups felt good today. Repped out a 25 lb weight, but not sure if my form is good or if I’m holding it right. Might be better to do decline stuff without any weights at all so that I can get more spinal flexion going on.</p> <p data-svelte-h="svelte-26jw1d">Ate 2 meals today. Some eggs and rice and the morning and hot pot for dinner. Bunch of fruit in-between too. Fruit is huge every time I come back. Definitely something I under-appreciated at home before college. Ate a bunch of beef and vegetables at hot pot. Restrained myself with the ramen and egg combo (only got 2 of each), but spent the rest of the time loading up on beef and other stuff. Coming home saved my digestive system for sure. So many nutrients.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_3 as default,
  metadata
};
