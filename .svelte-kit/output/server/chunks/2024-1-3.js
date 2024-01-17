import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-3", "day": "Legs" };
const _2024_1_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-9zonov">Legs have probably suffered the most from cutting in terms of strength. Lifts were pretty rough today, and energy felt off. I have this brain fog that kicks in after I do leg press that makes me feels super sleepy. Still powered through best I could though.</p> <p data-svelte-h="svelte-1jb97h6">Might try to find a different exercise for lower abs. Been doing hanging leg raises but I can’t feel it that much compared to the crunch machine, where my middle abs get a lot of tension.</p> <p data-svelte-h="svelte-xvcrfp">Definitely need to fix sleep schedule too. Since coming home from break I’ve slept in like two four hour intervals. One after dinner, and the second around 5 AM after doing work.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_3 as default,
  metadata
};
