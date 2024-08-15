import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-11", "day": "Arms" };
const _2024_2_11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-190xtf3">Standard arm day. Tried to go up higher in weights for tricep movements. Typically got like 6-8 reps. Not sure if I like being in this range compared to like 8-10 reps, but I get a good pump either way. Still trying to figure out a good spot for volume.</p> <p data-svelte-h="svelte-dma18">Finished up pretty quickly too. I sort of timed my rest in-between sets. Usually I just go when I feel good, but wanted to save time today. Doesn’t feel too bad doing it this way, but I definitely felt like I needed more rest sometimes during the workout.</p> <p data-svelte-h="svelte-u5q5cq">Also got a bit distracted with the vascularity by the time I got to incline dumbbell curls. Looked super sick, but it distracted me from focusing on the movement. Pretty happy with how it looked, but my arms without a pump are super skinny so that’s an unfortunate side effect of the cut.</p> <p data-svelte-h="svelte-13vibyo">Probably gonna end off the day on like 1400-1500 calories. Didn’t have a lot of options for food today, but I’m trying to dial in the diet this week anyways so it’s not an issue.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_11 as default,
  metadata
};
