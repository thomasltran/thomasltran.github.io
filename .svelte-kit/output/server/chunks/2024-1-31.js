import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-31", "day": "Back" };
const _2024_1_31 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1qof8d7">Decent back pump today. Lot’s of waiting in between sets for machines again—pretty much 5-10 minutes every time. Still made it work.</p> <p data-svelte-h="svelte-1hq9nxg">Felt a lot stronger today. I went up on weight, and will probably need to keep doing so in small increments. Haven’t focused a lot on progressive overload during the cut because it felt like I was either maintaining or losing my strength. Felt nice to be moving heavier weight today.</p> <p data-svelte-h="svelte-l4tijf">Also been intaking a lot more carbs lately. Not a huge amount, but enough to keep me fueled. Both yesterday and today for dinner, I ate a chicken sandwich since it was more convenient/the spots with my usual chicken breast and vegetables wasn’t open. Bread tastes so good, and based on the nutrition facts, I’m still staying at like 1700-1800 calories a day.</p> <p data-svelte-h="svelte-q5rn08">Pretty sure I’ve been getting leaner since I came back from break. Hopefully visible abs appear by spring break.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_31 as default,
  metadata
};
