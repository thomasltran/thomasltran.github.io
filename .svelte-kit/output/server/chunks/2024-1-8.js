import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-8", "day": "Legs" };
const _2024_1_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-7691c5">Continuing to drop weight on pretty much every machine. Probably a smart move since I think I tweaked my lower back again doing leg extensions a couple weeks ago. Also found out that leg press was feeling off because the back rest angle was adjusted too far back, so fixing it solved some problems.</p> <p data-svelte-h="svelte-dg1doz">Making it a priority to improve on tempo/breathing more. My ability to do this drastically decreased when I opted for a quicker style of training where I pumped out as many reps as I could then switched to partials. Lots of Mentzer clips have been popping up on my algorithm lately so it’s probably a sign to slow down the reps.</p> <p data-svelte-h="svelte-80cyun">Body is a little roughed up from the cut. Test levels 100% took a hit. It’s difficult to feel that same energy and almost primal state of mind I had during the bulk/journey to 225. In the future I gotta take it much slower instead of depriving myself of food. Super funny was seriously considering taking creatine or pre-workout to compensate for this but I’d rather just give it time.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_8 as default,
  metadata
};
