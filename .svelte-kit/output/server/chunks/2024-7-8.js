import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-7-8", "day": "Back" };
const _2024_7_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1s0akab">Didn’t really go up in weight today. Did different things for rear delts and upper back since machines/cables for those weren’t open. Did the reverse pec fly for the former and facepulls for the latter. Haven’t really been able to feel my upper back super pumped up since leaving the school gym for the summer. There’s like no machine that really allows me to get a good squeeze. Might try like single arm rows again and improvise or something for upper back.</p> <p data-svelte-h="svelte-9aeqdv">Trying to get bigger traps too. Not sure if I have to switch over to barbell shrugs (which would be way more inconvenient/time-consuming compared to db’s), or just try to focus on better form for db’s. I could just be not at that stage of my development yet too. Can’t wait to hop on creatine.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_7_8 as default,
  metadata
};
