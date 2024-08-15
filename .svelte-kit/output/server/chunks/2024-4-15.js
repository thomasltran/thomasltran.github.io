import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-4-15", "day": "Back" };
const _2024_4_15 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-smw3cf">Didn’t turn on the ringer so I woke up pretty late. Went to the gym around 10 and got about my day as usual. Back felt pretty pumped. Weather is like 70-80 degrees this week so my body is like primed for the gym—I think that warmer temperatures allows for like your muscles to stay ready and stuff.</p> <p data-svelte-h="svelte-11zdu4a">Typing this at 2:18 AM on the 16th. Doing some work and watching Jason’s stream right now. Turned 20. I want to work my butt off. Cardio tomorrow—probably gonna do the bike like 5 times a week because of classes on Mondays and Wednesdays.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_4_15 as default,
  metadata
};
