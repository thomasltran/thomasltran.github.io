import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-2", "day": "Legs" };
const _2024_2_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-23stue">Stayed up a little too late doing work yesterday. Need to avoid spreading myself too thin and just focus on the right stuff. The plan was to go hit legs in my dorm gym anyways, so it wasn’t too big of a deal.</p> <p data-svelte-h="svelte-1w7dswj">Legs are feeling pretty weak now. Pretty much dropping weight every time again, but my technique has arguably gotten better. Hopefully that correlates to more gains.</p> <p data-svelte-h="svelte-uh12o2">Since I woke up at like 8:30, I tried to work out on an empty stomach instead of eating breakfast first like I usually do. There’s always been a bunch of people talking about how they wake up at 6 and work out right away to “earn their meal”, but that never made much sense to me. I think it’s essential to have fuel inside of you (particularly carbs) before working out to help pump up your muscles. It wasn’t as bad as I thought it would be, but I’m gonna stick to eating before I hit a workout.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_2 as default,
  metadata
};
