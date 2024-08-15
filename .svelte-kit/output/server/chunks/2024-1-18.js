import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-18", "day": "Legs" };
const _2024_1_18 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1vpt36o">Legs were pretty decent. Waited a bit for machines, but not too bad. Still working on overcoming the pain barrier on legs to squeeze out the last few partials.</p> <p data-svelte-h="svelte-k4m9og">Leg extension machine was kind of scuffed. The track of it was semi-ribbed or something, so it wasn’t smooth when moving. Still trying to find a good routine to fall into in terms of warm-up reps and working sets that properly activates the muscle but doesn’t take too much time.</p> <p data-svelte-h="svelte-11muhw">As always, doing cardio right now and my legs are about to give out any second. Might try find a way to get in cardio before leg days, but I don’t fancy the idea of waking up even earlier.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_18 as default,
  metadata
};
