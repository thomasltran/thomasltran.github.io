import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-15", "day": "Back" };
const _2024_2_15 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-we137h">Rough start to the day. Woke up at like 8:45, so there was no chance of getting breakfast and walking over to McComas at a reasonable time. Decided to opt for the dorm gym and skip breakfast altogether in favor of brunch.</p> <p data-svelte-h="svelte-ku595j">Glad that I spent time watching gym content. Learned a lot about movements to target specific muscles, so I was able to get a pretty decent back pump using just the cables. Was actually a pretty good workout all things considered—pump was comparable to hitting back using the regular stuff at McComas. Been doing my cable rear delt flies at more of an angle where my elbows are flared out. I think it’s targeting it better. Just wish I had some breakfast in me though.</p> <p data-svelte-h="svelte-spebis">Digestion has been a bit sketchy the past week since I started cutting down the calories. Super sketchy. Not sure if this is sustainable, but I don’t feel that much tired. Probably operating at like 80-90% of my usual self. Might increase the calories a bit in the coming weeks before spring break. I miss those waffles. Been watching a bunch of food eating videos by Joel Hansen on the side while I do work. Probably a sign I should eat more.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_15 as default,
  metadata
};
