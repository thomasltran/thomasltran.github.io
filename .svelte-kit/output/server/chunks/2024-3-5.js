import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-5", "day": "Chest" };
const _2024_3_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-ixubd6">Great chest pump. Incline bench on the smith machine and the lateral raise machine felt so nice today. Got a bunch of tension on my chest and side delts, but for some reason I don’t feel fully pumped up.</p> <p data-svelte-h="svelte-1p7rcte">Still have lots to do over spring break. Been losing my usual rhythm ever since I stopped doing cardio after coming home. Need to get the momentum back to make the next couple of weeks easier to get through.</p> <p data-svelte-h="svelte-3jx8q2">Not dropping weight like I hoped would happen when I came back. Been eating 2 meals a day but they’re pretty big, plus the huge amount of fruit I’ve been getting. Definitely feel healthier, but just not losing weight as a result.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_5 as default,
  metadata
};
