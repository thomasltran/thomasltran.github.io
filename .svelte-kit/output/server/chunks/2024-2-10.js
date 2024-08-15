import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-10", "day": "Back" };
const _2024_2_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1t506ux">Quick back day. Got through everything pretty nicely. Haven’t done the underhand grip high-low machine row in a while. I switched over to the single-arm lat pullover thing I saw Sam Sulek doing, and it feels pretty good. Plus it’s a good alternative to save time when the other machine isn’t open. Trying out different angles to see which works best with this movement.</p> <p data-svelte-h="svelte-16s75t6">Decent pump. Still haven’t learned how to pose, but I guess I’ll get to it when my physique gets better. Had a lot of fun running into some old buddies at the gym. I go by myself 99% of the time, so having a chat every now and then is a welcome thing. Gonna try to keep the diet pretty strict this week (this means no waffles for breakfast) so I’ll see how maintainable it is alongside my increased academic activity.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_10 as default,
  metadata
};
