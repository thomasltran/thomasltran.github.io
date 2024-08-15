import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-10", "day": "Chest" };
const _2024_1_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1ts1mbk">Tried to do incline dumbbells instead of bench this time. Don’t like it at all. Felt like I wasted a ton of energy on the setup and front delts were definitely way more activated. In general, I don’t think it’s smart to start off with incline dumbbells. You don’t wanna lead with a movement that relies on stretching/slowing stuff down without already being warmed up, and it also wastes being able to initially push around higher weights like on the incline bench.</p> <p data-svelte-h="svelte-1az1iqg">Tried to switch up the exercise order today; it went okay. Also focused more on high-low flies and my positioning. I watched a Sam Sulek video talking about the most tension occurring at the contracted position of the movement since it’s cables. Chest flies haven’t been feeling that good recently which is a shame.</p> <p data-svelte-h="svelte-oyggj8">Watching one of <a href="https://youtu.be/c8CXe7PvEXo?si=HqUkyGAtF6x77kQ0" rel="nofollow">Mentzer’s</a> seminars right now and I’m thoroughly enjoying it.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_10 as default,
  metadata
};
