import { c as create_ssr_component, l as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: '.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc{color:#0e1111;overflow:hidden}h1.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc{text-align:center;padding:50px 0}p.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc{font-size:1.2em;text-align:center}ul.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc{list-style:none;padding:0}ul.svelte-c98cnc>li.svelte-c98cnc>p.svelte-c98cnc{padding:0;margin:0.3em 0;font-size:1em}body.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc{font-family:system-ui,\n            -apple-system,\n            BlinkMacSystemFont,\n            "Segoe UI",\n            Roboto,\n            Oxygen,\n            Ubuntu,\n            Cantarell,\n            "Open Sans",\n            "Helvetica Neue",\n            sans-serif;background:#faf9f6}.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc:link{color:#0000ee}.svelte-c98cnc.svelte-c98cnc.svelte-c98cnc:visited{color:#551a8b}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body class="svelte-c98cnc"><div class="svelte-c98cnc"><h1 class="svelte-c98cnc" data-svelte-h="svelte-dbxyy8">Blog</h1> <p class="description svelte-c98cnc" data-svelte-h="svelte-1x5sh2u">Written during daily cardio session. Content updating on a weekly basis.</p> <div class="svelte-c98cnc"><ul class="svelte-c98cnc">${each(data.posts, (post) => {
    return `<li class="svelte-c98cnc"><p class="svelte-c98cnc"><a${add_attribute("href", post.path, 0)} target="_blank" class="svelte-c98cnc">${escape(post.meta.date)} </a></p> </li>`;
  })}</ul></div></div> </body>`;
});
export {
  Page as default
};
