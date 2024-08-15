import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-7-7", "day": "Chest" };
const _2024_7_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1hb8g0t">Turns out the gym closed early on Saturday. Ended up taking two days off. Wasn’t too bad though, got a lot of rest in and did work.</p> <p data-svelte-h="svelte-1lm2gb">Went heavy today. Got to repping like 170 on incline bench for like 6 reps. Felt super nice. Afterwards decided to go up on incline db’s too and got like 5-6 reps of 70. Looking to max out Audrey Moore’s db’s by the end of the summer—goes up to 75.</p> <p data-svelte-h="svelte-1wlj9ch">Not super happy with the way the body is looking right now. Pretty much like 75% bulked right now, so pretty little definition and my chest looks pretty small. Planning to hop on creatine soon. If I can find it at Costco it’s wraps. Feeling like it’s the next phase of this journey once I hop on it. Not like 100% sure though because I have to change my water intake habits first.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_7_7 as default,
  metadata
};
