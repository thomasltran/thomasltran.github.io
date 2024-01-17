import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-11", "day": "Back" };
const _2024_1_11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1fh7ws5">About a week or so of maintenance calories doing absolute wonders. Still sitting at 150 waking up. Not going down on weight for lifts as much anymore.</p> <p data-svelte-h="svelte-1hm51l">Super solid back day. Tempo has improved a bit and it consequently led to a better pump. Trying to un-learn gripping stuff so hard now that I have straps to assist.</p> <p data-svelte-h="svelte-z0vwdu">Also this is probably peak bro science but I’m pretty sure the feeling of my brain being fried after a workout is because of the weight loss. Lowkey makes sense because if you have more weight, the impact of lifting intensively on the CNS is less—the body can withstand more stuff.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_11 as default,
  metadata
};
