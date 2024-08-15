import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-7-21", "day": "Legs" };
const _2024_7_21 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-of4h84">Hopping on creatine tomorrow. Been drinking a lot more water, but I’m not sure if it’s enough yet.</p> <p data-svelte-h="svelte-fvrror">Legs were okay today. Ate at a buffet before so I felt pretty lethargic. Not sure if staying within the 4-6 rep range is good because I barely feel it afterwards. Like it’s nice to lift pretty heavy, but at the same time I don’t feel the muscle working that much. Definitely getting stronger though.</p> <p data-svelte-h="svelte-lxby12">Trying to learn how to make friends at the gym. I’ve been a lot more social lately in terms of like offering to let people work in. It’s a nice feeling seeing how happy they get.</p> <p data-svelte-h="svelte-gyggrn">Can’t wait to see the changes in the next couple of weeks.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_7_21 as default,
  metadata
};
