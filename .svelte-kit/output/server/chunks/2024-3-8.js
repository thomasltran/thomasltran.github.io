import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-8", "day": "Legs" };
const _2024_3_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1l1i7bn">Didn’t like the way I hit legs today. Mentally was not there at all. After leg extensions my intensity pretty much dropped all the way, and I started get too distracted with my phone. Not happy.</p> <p data-svelte-h="svelte-1ru58pr">Still experimenting with abs. Weight for no weight/lighter weight on decline sit-ups today. Not sure if I’m doing it right, but it feels difficult to actually round my back out and curl.</p> <p data-svelte-h="svelte-1gw7of6">Finished up a thing I had going on in the side. Need to focus on wrapping things up with school as quickly as possible over the weekend. Heading back on campus tomorrow. Gonna miss having an actual bed and fruits to eat.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_8 as default,
  metadata
};
