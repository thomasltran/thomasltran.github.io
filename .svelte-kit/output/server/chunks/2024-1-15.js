import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-15", "day": "Chest" };
const _2024_1_15 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-hks6o1">First lift back on campus. Went to the gym 5 minutes after it opened and it was basically full. Defaulted to incline dumbbell press since the benches were all taken. Didn’t feel that bad compared to last time I did it—possibly because the equipment here is better than at home. Got a pretty good chest pump and it’s looking pretty freaky.</p> <p data-svelte-h="svelte-1phjorr">Missed the lateral raise machine a lot. Didn’t get as good a side delt pump, but worked with what I had.</p> <p data-svelte-h="svelte-tab3r4">Gonna keep trying to wake up earlier and get workouts in before 10 AM. Hopefully it’s not as crowded during this time interval.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_1_15 as default,
  metadata
};
