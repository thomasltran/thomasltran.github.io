import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-17", "day": "Arms" };
const _2024_1_17 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-84xt47">Was about to go to gym at 9-ish but then saw that it was halfway full—means I’d have to wait like 15 minutes for cables. Decided to switch to dorm gym instead. Even though it doesn’t have all of the equipment I’d typically use like a straight bar or preacher curl, I made do. Gonna try to go earlier tomorrow for legs.</p> <p data-svelte-h="svelte-b7wnha">Had a pretty decent pump. Improvised on several movements by switching up the angle and/or range of motion. Studying exercise philosophy and body anatomy has definitely been helpful.</p> <p data-svelte-h="svelte-1h3yd18">Starting to increase calories by a bit. The bike here feels a lot more difficult than the one at home to hit 300 calories. Also have been walking a lot more since I’m back on campus, and it’s super cold too so I reckon my body is spending a lot more energy to stay warm.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_17 as default,
  metadata
};
