import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-1-21", "day": "Back" };
const _2024_1_21 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1mdiz9t">Not the best back day. Exercise order got a little messed up because I didn’t wanna wait for people to finish. Working on improving form and technique.</p> <p data-svelte-h="svelte-177mi8p">Weight going up a little bit. If I had to guess maybe 1-2 lbs in the last couple days. Probably all from Uber Eats since they’ve been running the usual beginning of year offers. Once I run out of discounts and free trials it’ll be back to a pretty substantial deficit. Chinese food is so good.</p> <p data-svelte-h="svelte-x22xhc">Got griefed on the bike today. Haven’t had a problem where someone was on it when I went to do cardio before. Decided to switch to treadmill, cranked out some random settings, and getting after it now. More chinese food coming in half an hour.</p> <p data-svelte-h="svelte-mycgmx">To better days ahead.</p>`;
    }
  })}`;
});
export {
  _2024_1_21 as default,
  metadata
};
