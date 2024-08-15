import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-19", "day": "Chest" };
const _2024_2_19 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-sit0ui">Freaky chest pump. Felt stronger than usual because of the surplus of food from yesterday. Gained like 1-2 lbs but it should shed right off by like tomorrow. Bumping the new Yeat album helped set the tone. Pretty happy with the intensity today.</p> <p data-svelte-h="svelte-13x9gxn">Got cardio done before classes again. Looking forward to back tomorrow. Pretty sure I eat too much at lunch when I eat at D2, so gonna restrain myself tomorrow when I go.</p> <p data-svelte-h="svelte-1wsp0h8">Six-pack before I turn 20. Gonna maintain for a bit, then 1 month before if there’s no significant changes I’m going sub-1500 calories a day.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_19 as default,
  metadata
};
