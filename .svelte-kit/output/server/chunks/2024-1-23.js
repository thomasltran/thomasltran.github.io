import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-23", "day": "Legs" };
const _2024_1_23 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-5eq0wp">Stayed up a little too late doing work. Unfortunate to have other things to worry about than the gym, but that’s just how it is. Ended up doing legs at my dorm gym to avoid the long wait times at McComas.</p> <p data-svelte-h="svelte-1sc7g30">The leg extension/curl machine hybrid at my dorm gym is actually super good. Leg extensions feel a bit awkward, but other than that the tension feels nice. Did a pretty quick—I think sub-one hour—workout today because of school work. Ain’t no way I’m skipping a pump check just because school trying to third party my gains.</p> <p data-svelte-h="svelte-2afkl0">Found a pretty good setting/range on the bike for cardio now.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_23 as default,
  metadata
};
