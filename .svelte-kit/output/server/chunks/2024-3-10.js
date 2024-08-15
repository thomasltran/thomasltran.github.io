import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-10", "day": "Chest" };
const _2024_3_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1p4tus6">Daylight savings time change wasn’t too bad. Went to the gym around 10:45 instead of 10. Trapped is still tweaked so I didn’t push to actual failure for a lot of my sets. Doesn’t feel good, but it’s whatever. Gotta do better next time.</p> <p data-svelte-h="svelte-1yr81s9">Belly is getting bigger. I think my hormone levels have started recovering too. Feel a lot happier and not hungry all the time. Also probably gonna cut cardio to 5 days a week. Got classes all day Monday and Wednesday, so it’s just more convenient to skip it on those days. Saves me money too since I can just eat at D2 for breakfast/lunch everyday. Switching over to a more relaxed/intuitive style of lifting until the next cut I guess.</p> <p data-svelte-h="svelte-gcvq9g">I think in the future I’m gonna limit cuts to around 50 days or so. I feel like it’s counterproductive to eat below what’s necessary to replenish your energy levels for a long period of time. Sure it’s required to lose weight, but the trade-off isn’t worth it to me. Got other stuff I need to focus my attention to besides the gym. I want to think of the gym as a supplement to my lifestyle rather than a chore. Like having a six-pack and insane physique sounds good to me, but I can’t let it take over everything else in my life. It’s not gonna pay off my bills in the future or anything. Looking forward to eating 1/2 a waffle with my yogurt fruit bowl concoction tomorrow.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_10 as default,
  metadata
};
