import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-20", "day": "Chest" };
const _2024_1_20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-n4pw0l">Super solid pump. Got to the gym pretty much right at 10 and wrapped everything up in like an hour and 15. Getting better at incline dumbbell press, and smarter with weight choices for lifts.</p> <p data-svelte-h="svelte-1e06kjo">Made a change where I didn’t grip the dumbbells as much. I noticed that using more energy on the grip engages more parts of the forearm when I want to be allocating that to my chest.</p> <p data-svelte-h="svelte-kqn6l1">Cardio is getting more enjoyable now that league is back. Watching LCS on the bike right now.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_20 as default,
  metadata
};
