import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-2", "day": "Arms" };
const _2024_3_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1l368bi">Woke up at like 5:30 to eat and get arms in before leaving. Went to the dorm gym again since it’s the only option. Decent arm pump, although I didn’t particularly enjoy the my bicep and forearm movements. Didn’t get a good enough pump that I forgot to do a pump check for the first time in ages.</p> <p data-svelte-h="svelte-1k269iv">Finally back home. Got to eat good food. I think a good rule to follow is to not let my diet get in the way of family meals. Of course I’ll still watch what I eat, but skipping a meal entirely because of a diet doesn’t seem like the move. Ate lots of fruits and veggies too. Probably a little too heavy on the fats today (ate pork and fish), but it was super good. Nothing beats home cooking. Sitting at around 146 lbs on an empty stomach. If I stick to 2 heavy meals a day—as I usually do at home—during spring break it should either maintain or go down. Although it’s a little questionable since I can’t do cardio everyday. I’ll just enjoy this week, but best believe I ain’t missing legs tomorrow.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_2 as default,
  metadata
};
