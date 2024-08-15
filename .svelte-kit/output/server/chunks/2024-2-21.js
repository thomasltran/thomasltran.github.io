import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-21", "day": "Arms" };
const _2024_2_21 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-g3m5ci">Arm day. Still looking to improve on form for triceps. Went heavier today and got fewer reps, but I still felt pretty pumped. Watching Sam Sulek again has definitely got me doing heavier weight, although the form has to be sacrificed to some extent.</p> <p data-svelte-h="svelte-9fjso6">Griefed myself from getting 100 on a midterm but pretty much done until spring break next week. Gotta wrap up 1 or 2 things but other than that I’m dialed into the gym. Got a buddy of mine coming back in July so it’ll be nice to hit the gym then. In the meantime there’s a 100% chance I’m hitting legs at McComas tomorrow. It’s been way too long.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_21 as default,
  metadata
};
