import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-14", "day": "Chest" };
const _2024_2_14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1t0uomn">Didn’t get that sleep. Still got a pretty freaky chest pump. There’s like an underlying vein on my left pec that would look super cool once I get leaner. Scale still says that I’m the same weight-ish, so maybe just cutting out the waffles isn’t enough.</p> <p data-svelte-h="svelte-1d5adot">Felt like 80% strength in the gym today. I think it’s because I changed my bedding yesterday, and lifting up the mattress and stuff took a toll on my muscles. Probably gonna time that  better and do it the day before a rest day or something for optimal recovery.</p> <p data-svelte-h="svelte-yfhwzl">Feeling super tired today. Cardio hasn’t been good for me lately. Still doing my best right now to hammer it out before classes, but I honestly could use a nap. Pacing is super off right now and I’d be happy if I can reach 300 calories before 30 minutes today. Also could spend the 30 minutes doing other things, but I can’t bring myself to skip it. Just gonna keep powering through.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_14 as default,
  metadata
};
