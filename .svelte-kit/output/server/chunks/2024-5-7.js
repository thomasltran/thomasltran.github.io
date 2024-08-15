import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-5-7", "day": "Arms" };
const _2024_5_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1gymcfk">Been awhile.</p> <p data-svelte-h="svelte-lp24ue">I have a some entries in the backlog, but I don’t think I’m gonna post them up. Like a week after the cut ended I just went through a phase. Not having a physical goal to dedicate my time to sort of made things fall apart. Still went to the gym and stuff, but obviously my diet was trash and I was just eating whatever I craved. Sitting at like 168 lbs right now, so almost back to peak weight. Haven’t done cardio in awhile too</p> <p data-svelte-h="svelte-3mtoaf">I guess that means I’m technically on a bulk, but I just kind of want to maintain between 160-170 for now. It feels like a good balance where I’m strong in the gym, but I can eat pretty much whatever I want.</p> <p data-svelte-h="svelte-1vylw97">Came back home Sunday. Hit back in the morning before I went back though. There was a lat pulldown attachment that felt super good, so I’m thinking of buying it and bringing it to the gym on back days. Not too sure if I want to do that though. Arms today back at Audrey Moore. Pretty good pump, but I didn’t put too much focus on controlling the weight. Just did whatever I was feeling.</p> <p data-svelte-h="svelte-64ww3l">Gonna try to get consistent with this blog again.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_5_7 as default,
  metadata
};
