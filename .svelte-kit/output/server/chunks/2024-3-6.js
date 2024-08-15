import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-3-6", "day": "Back" };
const _2024_3_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1emhfbt">Good back pump. Just focused on shutting down the muscle groups as best I could. Cranked up the intensity a lot more today.</p> <p data-svelte-h="svelte-tghks3">Going through a rough time with food and stuff. Gained a pound (probably off of fruit alone), and it’s not a big deal but I feel bad about eating stuff. I think I’m just gonna eat whatever I want—besides junk food—regardless of quantity. Feels like I’ve been cutting for way too long now and it’s taken a toll. Also got other things to focus on besides my body and food, and I think I want to prioritize them now.</p> <p data-svelte-h="svelte-fqd0l">Not where I want to be in terms of work done so far during spring break. Been cranking it up a lot, but I still have more to do. Trying to get clarity or something I don’t know. Guess the best thing to do is keep working. Almost 4 AM right now. Been awhile since I stayed up—reminds me of high school.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_3_6 as default,
  metadata
};
