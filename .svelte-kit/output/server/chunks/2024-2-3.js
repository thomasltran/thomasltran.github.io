import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { P as Post } from "./post.js";
const metadata = { "date": "2024-2-3", "day": "Rest" };
const _2024_2_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-166nkqm">Stayed up pretty late again. Woke up the latest I’ve done so far this semester at like 11:30. Doesn’t feel good to start off the day so late, but I’m making do and getting after cardio right now. Definitely want to fix up the sleep schedule as soon as possible, which requires the sacrifice of leisure time in favor of work.</p> <p data-svelte-h="svelte-9wqoq5">Gonna try to get a wrap again to heat up in the microwave for breakfast tomorrow. Looking forward to getting a freaky chest pump and getting back to more work to finish off the weekend.</p> <p data-svelte-h="svelte-ps3hsh">To better days ahead…</p>`;
    }
  })}`;
});
export {
  _2024_2_3 as default,
  metadata
};
