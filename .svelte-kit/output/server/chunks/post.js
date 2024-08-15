import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: '.svelte-bhf8sx{font-family:system-ui,\n			-apple-system,\n			BlinkMacSystemFont,\n			"Segoe UI",\n			Roboto,\n			Oxygen,\n			Ubuntu,\n			Cantarell,\n			"Open Sans",\n			"Helvetica Neue",\n			sans-serif;font-size:1em;padding:1em 0;color:#0e1111}body.svelte-bhf8sx{background:#faf9f6}.centered-content.svelte-bhf8sx{display:flex;justify-content:center;align-items:center;margin:0}.content.svelte-bhf8sx{width:50vh;text-align:left}',
  map: '{"version":3,"file":"post.svelte","sources":["post.svelte"],"sourcesContent":["<!-- post.svelte -->\\n<script>\\n\\texport let date;\\n\\texport let day;\\n<\/script>\\n\\n<body>\\n\\t<article class=\\"centered-content\\">\\n\\t\\t<div class=\\"content\\">\\n\\t\\t\\t<h1>{date}</h1>\\n\\n\\t\\t\\t<p>Day: {day}</p>\\n\\n\\t\\t\\t<slot />\\n\\t\\t</div>\\n\\t</article>\\n</body>\\n\\n<style>\\n\\t* {\\n\\t\\tfont-family:\\n\\t\\t\\tsystem-ui,\\n\\t\\t\\t-apple-system,\\n\\t\\t\\tBlinkMacSystemFont,\\n\\t\\t\\t\\"Segoe UI\\",\\n\\t\\t\\tRoboto,\\n\\t\\t\\tOxygen,\\n\\t\\t\\tUbuntu,\\n\\t\\t\\tCantarell,\\n\\t\\t\\t\\"Open Sans\\",\\n\\t\\t\\t\\"Helvetica Neue\\",\\n\\t\\t\\tsans-serif;\\n\\n\\t\\tfont-size: 1em;\\n\\n\\t\\tpadding: 1em 0;\\n\\n\\t\\tcolor: #0e1111;\\n\\t}\\n\\n\\tbody {\\n\\t\\tbackground: #faf9f6;\\n\\t}\\n\\n\\t.centered-content {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t.content {\\n\\t\\twidth: 50vh;\\n\\t\\ttext-align: left;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmBC,cAAE,CACD,WAAW,CACV,SAAS,CAAC;AACb,GAAG,aAAa,CAAC;AACjB,GAAG,kBAAkB,CAAC;AACtB,GAAG,UAAU,CAAC;AACd,GAAG,MAAM,CAAC;AACV,GAAG,MAAM,CAAC;AACV,GAAG,MAAM,CAAC;AACV,GAAG,SAAS,CAAC;AACb,GAAG,WAAW,CAAC;AACf,GAAG,gBAAgB,CAAC;AACpB,GAAG,UAAU,CAEX,SAAS,CAAE,GAAG,CAEd,OAAO,CAAE,GAAG,CAAC,CAAC,CAEd,KAAK,CAAE,OACR,CAEA,kBAAK,CACJ,UAAU,CAAE,OACb,CAEA,+BAAkB,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CACT,CAEA,sBAAS,CACR,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACb"}'
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { day } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.day === void 0 && $$bindings.day && day !== void 0) $$bindings.day(day);
  $$result.css.add(css);
  return `  <body class="svelte-bhf8sx"><article class="centered-content svelte-bhf8sx"><div class="content svelte-bhf8sx"><h1 class="svelte-bhf8sx">${escape(date)}</h1> <p class="svelte-bhf8sx">Day: ${escape(day)}</p> ${slots.default ? slots.default({}) : ``}</div></article> </body>`;
});
export {
  Post as P
};
