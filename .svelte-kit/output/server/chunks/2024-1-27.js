import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-27", "day": "Arms" };
const _2024_1_27 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-uff5gb">Pretty freaky arm day. Not quite there yet on the form for tricep movements, but the vascularity is getting better each time. Ate bread for the first time today (chicken sandwich) after months. It tasted so good.</p> <p data-svelte-h="svelte-13zm0f7">The veins popping out when I do forearms and bicep movements look so cool. Not lean enough for the abs to show yet, but I’m pretty happy all things considered. Exercise order was all over the place today, but I switched to cable curls instead of preacher; it feels marginally better than preacher, but at least my wrist hurts less. Gonna keep experimenting with different angles/grip positions.</p> <p data-svelte-h="svelte-1vbwzgy">Not sure whether or not I wanna hit legs in my dorm gym or McComas tomorrow. Last leg day in the former was pretty good, but the only downside is not having an angled leg press and calf machine. Planning on pre-getting food again so I can go at 10 either way.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_27 as default,
  metadata
};
