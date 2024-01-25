import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: '.svelte-bhf8sx{font-family:system-ui,\n			-apple-system,\n			BlinkMacSystemFont,\n			"Segoe UI",\n			Roboto,\n			Oxygen,\n			Ubuntu,\n			Cantarell,\n			"Open Sans",\n			"Helvetica Neue",\n			sans-serif;font-size:1em;padding:1em 0;color:#0e1111}body.svelte-bhf8sx{background:#faf9f6}.centered-content.svelte-bhf8sx{display:flex;justify-content:center;align-items:center;margin:0}.content.svelte-bhf8sx{width:50vh;text-align:left}',
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { day } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.day === void 0 && $$bindings.day && day !== void 0)
    $$bindings.day(day);
  $$result.css.add(css);
  return `  <body class="svelte-bhf8sx"><article class="centered-content svelte-bhf8sx"><div class="content svelte-bhf8sx"><h1 class="svelte-bhf8sx">${escape(date)}</h1> <p class="svelte-bhf8sx">Day: ${escape(day)}</p> ${slots.default ? slots.default({}) : ``}</div></article> </body>`;
});
export {
  Post as P
};
