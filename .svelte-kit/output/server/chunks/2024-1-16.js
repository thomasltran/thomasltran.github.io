import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-16", "day": "Back" };
const _2024_1_16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1dt2hpp">Went at 9 AM and it was basically full again. Just gonna have to deal with it. Wasn’t too bad because I was done around 10:20, which is about an extra 20 minutes more or less.</p> <p data-svelte-h="svelte-35oinr">Pretty good pump. Only mistake was going too heavy on lat pulldowns so I couldn’t focus on the muscles as much. Learned something about the high to low machine row I usually do too—if you lean too far back, it’s essentially like doing standard cable rows because of the scapular plane. Not too sure if I should continue keeping this in the routine, or switch over to lat pullovers.</p> <p data-svelte-h="svelte-1fumcx2">Back looks pretty different now. A lot of mass loss, but the lower back definition is starting to kick in. Pretty pumped about that. Gotta learn how to properly do some poses too.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_16 as default,
  metadata
};
