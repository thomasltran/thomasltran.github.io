import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-6", "day": "Back" };
const _2024_1_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1sbrs4y">Santa came through and got me lifting straps for Christmas. Been getting pretty good pumps on back days because of them. Weight is maintaining pretty nicely (+1 ish pounds), and I’ll probably sit here for a bit.</p> <p data-svelte-h="svelte-f5e2q5">Super good lift today. Dropped weights on basically all of the machines and focused on getting a better contraction. Freaky pump, but I gotta learn how to properly pose to get the full effect.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_6 as default,
  metadata
};
