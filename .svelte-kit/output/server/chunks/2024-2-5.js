import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-5", "day": "Back" };
const _2024_2_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-r52z1g">Decent back pump today. Trying to keep going up on weight, but sometimes I get too ambitious and it ends up ruining the set. Training back lately has been super focused on tempo. Also, I think that I leaned/tilt a bit to my left side when doing lat pulldowns. Not sure if it’s because of my shoulder abnormalities there, but need to be more cognizant of this to prevent imbalances.</p> <p data-svelte-h="svelte-1aa407e">Doing cardio before classes start again. Instead of eating at D2 for lunch, decided to get a chicken sandwich to save time. Whoever made it loaded me up with chicken. I love eating bread. Also love it once I get to around the 150 calories mark. Sometimes I enter a flow state and just get hyper-focused on the rhythm of the bike. Live for these moments.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_5 as default,
  metadata
};
