import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-12", "day": "Legs" };
const _2024_2_12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1o94i9v">Pretty bad leg day if I gotta be honest. Did it at my dorm gym as usual for convenience. Should probably start going back to McComas for legs for the better leg press and calf machine. Even though I ate breakfast felt super groggy and weak. My belly was having some issues by the time I got to doing abs too. Had to cut it off halfway through the last set.</p> <p data-svelte-h="svelte-1ra1z63">Got the feeling of almost fainting again after the workout. Not fun. Can probably blame the lack of calories yesterday carrying over into today. Obviously didn’t want to do cardio after replenishing myself at lunch. Super low energy, but I’m doing it anyways so I don’t have to after classes. Gonna feel good when I go to bed tonight.</p> <p data-svelte-h="svelte-1ataap8">Slept pretty late yesterday too. In reality, I don’t have a ton of pressure coming from school. It’s mainly just trying to get ahead of everything so I can chill before spring break. Got more work ahead of me then too. Pretty needed rest day tomorrow—got an errand to run early in the morning. Definitely gonna try to get at least 7-8 hours of sleep tonight to compensate for the lack of yesterday and fewer calories coming in.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_12 as default,
  metadata
};
