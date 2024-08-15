import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-26", "day": "Arms" };
const _2024_2_26 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1aio1pf">Good arm day. Woke up earlier than usual and got stuff done before 10. Today felt more like a move weight around type of day. Still controlled the weight on the eccentric though. Triceps felt good pumped up, and working on form for cable bicep curls to prevent too much back usage.</p> <p data-svelte-h="svelte-1xxnr2i">Digestion is still wack. Turns out I’ve been griefing myself this whole time. Thought yogurt had fiber but it doesn’t. Been eating 3 bowls a day sometimes for nothing. Adding a banana to the mix for breakfast. Tried to incorporate it into my yogurt fruit bowl concoction today, but it pretty much ruined the whole thing. Probably gonna have to just eat it separate. Need to cut back on protein too since my weight went down. Pretty sure I get like 160+ grams on some days still.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_26 as default,
  metadata
};
