import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-8", "day": "Rest" };
const _2024_2_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-94gtn6">Settling in pretty decently into the school + gym balance. Routine is fine overall, but just need to get more sleep for recovery. Only been managing like 7 hours at most.</p> <p data-svelte-h="svelte-1ljhwfo">Ate 3 french fries today because the person gave them to me when I only asked for chicken. No complaints—I’ve been craving junk food since I started cutting. In the grand scheme of things 3 fries won’t do anything (probably like 30 calories), but it felt so nice to eat them. Definitely won’t make eating junk food a part of my diet, but maybe a bite every once in a while since I’m still trying to get a 6 pack. I think as long as the junk food doesn’t equate to more than like 50 calories it’s fine to have a taste once every month or so.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_8 as default,
  metadata
};
