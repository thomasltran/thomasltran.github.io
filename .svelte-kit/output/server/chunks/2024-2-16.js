import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-16", "day": "Arms" };
const _2024_2_16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-oxfhz8">Didn’t wake up as early as I’d like, but still ate breakfast and made it out to McComas. Pretty good arm pump. Form on tricep movements still need some work I think, but I don’t really know whether or not to pump out reps versus keeping it controlled. I’ve seen lots of people do both, so I guess I’ll keep trying things out and pick something I like.</p> <p data-svelte-h="svelte-1crl1qp">Biceps are looking pretty crazy. Felt a little stronger today so I think I was hitting higher rep ranges. Having a lot of fun. Cutting out things that don’t matter and dialing in now. I’m gonna keep sticking with the diet until I get a six-pack then eat relatively normally again.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_16 as default,
  metadata
};
