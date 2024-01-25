import { c as create_ssr_component, l as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: '.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq{color:#0e1111}h1.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq{text-align:center;padding:50px 0 25px 0}p.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq{font-size:1.2em;text-align:center}p.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq,.description.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq{padding-bottom:1em}ul.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq{list-style:none;padding:0}ul.svelte-y5iqq>li.svelte-y5iqq>p.svelte-y5iqq{padding:0.1em 0;margin:0.3em 0;font-size:1em}body.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq{font-family:system-ui,\n            -apple-system,\n            BlinkMacSystemFont,\n            "Segoe UI",\n            Roboto,\n            Oxygen,\n            Ubuntu,\n            Cantarell,\n            "Open Sans",\n            "Helvetica Neue",\n            sans-serif;background:#faf9f6}.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq:link{color:#0000ee}.svelte-y5iqq.svelte-y5iqq.svelte-y5iqq:visited{color:#551a8b}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body class="svelte-y5iqq"><div class="svelte-y5iqq"><h1 class="svelte-y5iqq" data-svelte-h="svelte-dbxyy8">Blog</h1> <p class="description svelte-y5iqq" data-svelte-h="svelte-1x5sh2u">Written during daily cardio session. Content updating on a weekly basis.</p> <div class="svelte-y5iqq"><ul class="svelte-y5iqq">${each(data.posts, (post) => {
    return `<li class="svelte-y5iqq"><p class="svelte-y5iqq"><a${add_attribute("href", post.path, 0)} target="_blank" class="svelte-y5iqq">${escape(post.meta.date)} </a></p> </li>`;
  })}</ul></div></div> </body>`;
});
export {
  Page as default
};
