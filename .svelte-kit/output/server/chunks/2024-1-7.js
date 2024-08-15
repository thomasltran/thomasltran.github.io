import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-7", "day": "Arms" };
const _2024_1_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-mh0d62">Good lift. Realized I was doing rope tricep extensions incorrectly. Needed to step back further to get more tension. Getting more and more vascular and ever since I added forearms back into the mix, pumps are looking pretty freaky.</p> <p data-svelte-h="svelte-1owk5d">Switched back to doing incline curls and hammer curls on the bench instead of cables. Based on my exercise order, it should save time when I go back on campus. The stimulus I got from curls on cables felt pretty similar to the preacher curl machine anyways, so it should be better overall.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_7 as default,
  metadata
};
