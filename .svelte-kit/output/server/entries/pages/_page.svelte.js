import { c as create_ssr_component, d as get_current_component, f as add_attribute, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component } from "../../chunks/ssr.js";
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function bubble(e) {
    const callbacks = component.$$.callbacks[e.type];
    if (callbacks) {
      callbacks.slice().forEach((fn) => fn.call(this, e));
    }
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = parts.slice(1).reduce((obj, mod) => {
          obj[mod] = true;
          return obj;
        }, {});
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
        if (eventOptions.stopImmediatePropagation) {
          handler = stop_immediate_propagation(handler);
        }
        if (eventOptions.self) {
          handler = self_event(node, handler);
        }
        if (eventOptions.trusted) {
          handler = trusted_event(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, bubble);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function(event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
function stop_propagation(fn) {
  return function(event) {
    event.stopPropagation();
    return fn.call(this, event);
  };
}
function stop_immediate_propagation(fn) {
  return function(event) {
    event.stopImmediatePropagation();
    return fn.call(this, event);
  };
}
function self_event(node, fn) {
  return function(event) {
    if (event.target !== node) {
      return;
    }
    return fn.call(this, event);
  };
}
function trusted_event(fn) {
  return function(event) {
    if (!event.isTrusted) {
      return;
    }
    return fn.call(this, event);
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
const InnerGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${add_attribute(
    "class",
    classMap({
      [className]: true,
      "mdc-layout-grid__inner": true
    }),
    0
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const LayoutGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fixedColumnWidth", "align", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fixedColumnWidth = false } = $$props;
  let { align = void 0 } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.fixedColumnWidth === void 0 && $$bindings.fixedColumnWidth && fixedColumnWidth !== void 0) $$bindings.fixedColumnWidth(fixedColumnWidth);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-layout-grid": true,
          "mdc-layout-grid--fixed-column-width": fixedColumnWidth,
          ["mdc-layout-grid--align-" + align]: align != null
        }))
      },
      escape_object(exclude($$restProps, ["innerGrid$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}>${validate_component(InnerGrid, "InnerGrid").$$render($$result, Object.assign({}, prefixFilter($$restProps, "innerGrid$")), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} </div>`;
});
const Cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "order", "span", "spanDevices", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = void 0 } = $$props;
  let { order = void 0 } = $$props;
  let { span = void 0 } = $$props;
  let { spanDevices = {} } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0) $$bindings.order(order);
  if ($$props.span === void 0 && $$bindings.span && span !== void 0) $$bindings.span(span);
  if ($$props.spanDevices === void 0 && $$bindings.spanDevices && spanDevices !== void 0) $$bindings.spanDevices(spanDevices);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-layout-grid__cell": true,
          ["mdc-layout-grid__cell--align-" + align]: align != null,
          ["mdc-layout-grid__cell--order-" + order]: order != null,
          ["mdc-layout-grid__cell--span-" + span]: span != null,
          ...Object.fromEntries(Object.entries(spanDevices).map(([device, span2]) => [`mdc-layout-grid__cell--span-${span2}-${device}`, true]))
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const css$3 = {
  code: ".svelte-16gfurv.svelte-16gfurv{text-align:center;color:#0e1111;overflow:hidden}p.svelte-16gfurv.svelte-16gfurv{font-size:1.2em}img.svelte-16gfurv.svelte-16gfurv{width:auto;height:auto;max-width:50%;max-height:30%;margin-top:10%;border-radius:2%}.icons.svelte-16gfurv.svelte-16gfurv,a.svelte-16gfurv.svelte-16gfurv{display:flex;justify-content:center;align-items:center;height:10em;margin-bottom:-1em}.icons.svelte-16gfurv img.svelte-16gfurv{margin:0 1em}.cell.intro.svelte-16gfurv.svelte-16gfurv{width:60vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1em}.cell.content.svelte-16gfurv.svelte-16gfurv{width:40vw;height:100vh}.cells.svelte-16gfurv.svelte-16gfurv{display:flex}.caption.svelte-16gfurv.svelte-16gfurv{font-size:1em;font-weight:300;font-style:italic;color:#0e1111}figure.svelte-16gfurv.svelte-16gfurv{margin-top:2em}@media only screen and (max-width: 1100px){.cell.intro.svelte-16gfurv.svelte-16gfurv{width:100%;height:50vh;margin-left:-1em}.cell.content.svelte-16gfurv.svelte-16gfurv{width:100%;height:50vh}figure.svelte-16gfurv.svelte-16gfurv{display:none}.cells.svelte-16gfurv.svelte-16gfurv{display:flex;flex-direction:column}}",
  map: `{"version":3,"file":"intro.svelte","sources":["intro.svelte"],"sourcesContent":["<script>\\n    import LayoutGrid, { Cell } from \\"@smui/layout-grid\\";\\n<\/script>\\n\\n<LayoutGrid>\\n    <div class=\\"cells\\">\\n        <Cell>\\n            <div class=\\"cell intro\\">\\n                <h1>Hi! My name is Thomas Tran.</h1>\\n                <p>\\n                    I'm an aspiring software engineer majoring in Computer\\n                    Science with a minor in Math at Virginia Tech.\\n                </p>\\n                <p>\\n                    My interests revolve around cloud\\n                    computing and operating systems.\\n                </p>\\n            </div>\\n        </Cell>\\n\\n        <Cell>\\n            <div class=\\"cell content\\">\\n                <figure>\\n                    <img src=\\"./current_book.jpg\\" alt=\\"current book\\" />\\n                    <figcaption class=\\"caption\\">\\n                        Currently reading...\\n                    </figcaption>\\n                </figure>\\n\\n                <div class=\\"icons\\">\\n                    <a href=\\"https://github.com/thomasltran\\" target=\\"_blank\\">\\n                        <img src=\\"./github-mark.svg\\" alt=\\"github\\" />\\n                    </a>\\n\\n                    <a\\n                        href=\\"https://www.linkedin.com/in/thomasltran/\\"\\n                        target=\\"_blank\\"\\n                    >\\n                        <img src=\\"./linkedin.svg\\" alt=\\"linkedin\\" />\\n                    </a>\\n\\n                    <a href=\\"mailto:thomastran@vt.edu\\" target=\\"_blank\\">\\n                        <img src=\\"./email.svg\\" alt=\\"email\\" />\\n                    </a>\\n                </div>\\n\\n                <!-- <div>\\n                    <a\\n                        href=\\"https://drive.google.com/drive/folders/1Ekb0FtVa2NcVclDTTbxhV0jgX6sPi0sh?usp=sharing\\"\\n                        target=\\"_blank\\"\\n                    >\\n                        <button>\\n                            <div class=\\"button-content\\">\\n                                <span\\n                                    class=\\"material-symbols-outlined material-icons\\"\\n                                >\\n                                    link\\n                                </span>\\n                                <h2>Resume</h2>\\n                            </div>\\n                        </button>\\n                    </a>\\n                </div> -->\\n            </div>\\n        </Cell>\\n    </div>\\n</LayoutGrid>\\n\\n<style>\\n    * {\\n        text-align: center;\\n        color: #0e1111;\\n        overflow: hidden;\\n    }\\n\\n    p {\\n        font-size: 1.2em;\\n    }\\n\\n    img {\\n        width: auto;\\n        height: auto;\\n        max-width: 50%;\\n        max-height: 30%;\\n        margin-top: 10%;\\n        border-radius: 2%;\\n    }\\n\\n    .icons,\\n    a {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        height: 10em;\\n        margin-bottom: -1em;\\n    }\\n\\n    .icons img {\\n        margin: 0 1em;\\n    }\\n\\n    .cell.intro {\\n        width: 60vw;\\n        height: 100vh;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        padding: 0 1em;\\n    }\\n\\n    .cell.content {\\n        width: 40vw;\\n        height: 100vh;\\n    }\\n\\n    .cells {\\n        display: flex;\\n    }\\n\\n    .caption {\\n        font-size: 1em;\\n        font-weight: 300;\\n        font-style: italic;\\n        color: #0e1111; /* Adjust the color to your preference */\\n    }\\n\\n    figure {\\n        margin-top: 2em;\\n    }\\n\\n    button {\\n        background: #0e1111;\\n        border: #0e1111;\\n        color: #faf9f6;\\n        border-radius: 2%;\\n        padding: 0 2em /* Adjust padding as needed */;\\n        margin: -7em 0 0 0.4em;\\n        cursor: pointer;\\n    }\\n\\n    button h2 {\\n        color: #faf9f6;\\n        letter-spacing: 0.15em;\\n    }\\n\\n    .button-content {\\n        display: flex;\\n        align-items: center; /* Center vertically */\\n        justify-content: center;\\n    }\\n\\n    .material-symbols-outlined {\\n        font-variation-settings:\\n            \\"FILL\\" 0,\\n            \\"wght\\" 400,\\n            \\"GRAD\\" 0,\\n            \\"opsz\\" 24;\\n        margin-right: 1em; /* Adjust spacing between icon and text */\\n    }\\n\\n    .material-icons {\\n        color: #faf9f6;\\n    }\\n\\n    .material-icons:hover {\\n        cursor: pointer;\\n    }\\n\\n    @media only screen and (max-width: 1100px) {\\n        .cell.intro {\\n            width: 100%;\\n            height: 50vh;\\n            margin-left: -1em;\\n        }\\n\\n        .cell.content {\\n            width: 100%;\\n            height: 50vh;\\n        }\\n\\n        figure {\\n            display: none;\\n        }\\n\\n        .cells {\\n            display: flex;\\n            flex-direction: column;\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"AAqEI,8BAAE,CACE,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,CACd,QAAQ,CAAE,MACd,CAEA,+BAAE,CACE,SAAS,CAAE,KACf,CAEA,iCAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,EACnB,CAEA,oCAAM,CACN,+BAAE,CACE,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IACnB,CAEA,qBAAM,CAAC,kBAAI,CACP,MAAM,CAAE,CAAC,CAAC,GACd,CAEA,KAAK,oCAAO,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,CAAC,CAAC,GACf,CAEA,KAAK,sCAAS,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KACZ,CAEA,oCAAO,CACH,OAAO,CAAE,IACb,CAEA,sCAAS,CACL,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OACX,CAEA,oCAAO,CACH,UAAU,CAAE,GAChB,CAwCA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACvC,KAAK,oCAAO,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IACjB,CAEA,KAAK,sCAAS,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CAEA,oCAAO,CACH,OAAO,CAAE,IACb,CAEA,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACJ"}`
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="cells svelte-16gfurv">${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="cell intro svelte-16gfurv" data-svelte-h="svelte-1tb3xkt"><h1 class="svelte-16gfurv">Hi! My name is Thomas Tran.</h1> <p class="svelte-16gfurv">I&#39;m an aspiring software engineer majoring in Computer
                    Science with a minor in Math at Virginia Tech.</p> <p class="svelte-16gfurv">My interests revolve around cloud
                    computing and operating systems.</p></div>`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="cell content svelte-16gfurv" data-svelte-h="svelte-11ul7kj"><figure class="svelte-16gfurv"><img src="./current_book.jpg" alt="current book" class="svelte-16gfurv"> <figcaption class="caption svelte-16gfurv">Currently reading...</figcaption></figure> <div class="icons svelte-16gfurv"><a href="https://github.com/thomasltran" target="_blank" class="svelte-16gfurv"><img src="./github-mark.svg" alt="github" class="svelte-16gfurv"></a> <a href="https://www.linkedin.com/in/thomasltran/" target="_blank" class="svelte-16gfurv"><img src="./linkedin.svg" alt="linkedin" class="svelte-16gfurv"></a> <a href="mailto:thomastran@vt.edu" target="_blank" class="svelte-16gfurv"><img src="./email.svg" alt="email" class="svelte-16gfurv"></a></div> </div>`;
        }
      })}</div>`;
    }
  })}`;
});
const css$2 = {
  code: '.header.svelte-9fxr6f.svelte-9fxr6f{font-size:2em;text-align:center;padding-bottom:3em}.svelte-9fxr6f.svelte-9fxr6f{padding:0;margin:0;box-sizing:border-box}.main.svelte-9fxr6f.svelte-9fxr6f{width:100%;height:auto;display:grid;place-items:center;padding:50px 0}.container.svelte-9fxr6f.svelte-9fxr6f{width:23%;height:auto;margin:auto 0;position:relative;transform:translateX(20px)}.container.svelte-9fxr6f ul.svelte-9fxr6f{list-style:none}.container.svelte-9fxr6f ul.svelte-9fxr6f::after{content:" ";position:absolute;width:2px;height:100%;left:-20px;top:0;transform:translateX(-50%);background-image:linear-gradient(to bottom, #faf9f6, #faf9f6)}.container.svelte-9fxr6f ul li.svelte-9fxr6f{width:100%;float:none;clear:none;margin-bottom:80px;height:auto;padding:15px 20px;background-color:#faf9f6;border-radius:8px;box-shadow:1px 1px 15px rgba(0, 0, 0, 0.218);position:relative;z-index:99}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(6){margin-bottom:0}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{position:absolute;width:20px;height:20px;border-radius:50%;background-color:#dedede;top:0;display:grid;place-items:center;left:-20px;transform:translate(-50%, -50%)}.circle.svelte-9fxr6f.svelte-9fxr6f::after{content:" ";width:12px;height:12px;background-color:#faf9f6;border-radius:50%}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{left:-20px;transform:translate(-50%, -50%)}ul.svelte-9fxr6f li .date.svelte-9fxr6f{position:absolute;width:130px;height:33px;background-image:linear-gradient(to right, #cdcbcb, #cdcbcb);border-radius:15px;top:-45px;left:0;display:grid;place-items:center;color:#0e1111;font-size:0.85em;box-shadow:1px 2px 12px rgba(0, 0, 0, 0.318);font-weight:500}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(odd){float:right;clear:left;transform:translateX(0px);text-align:left}ul.svelte-9fxr6f li:nth-child(odd) .date.svelte-9fxr6f{left:0}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(even){float:right;clear:left;transform:translateX(0px)}ul.svelte-9fxr6f li .heading.svelte-9fxr6f{font-size:1.2em;width:100%;color:#0e1111}ul.svelte-9fxr6f li p.svelte-9fxr6f{font-size:1em;color:#666;line-height:18px;margin:6px 0 4px 0}@media only screen and (min-width: 798px) and (max-width: 1100px){.container.svelte-9fxr6f.svelte-9fxr6f{width:80%}}@media only screen and (max-width: 798px){.container.svelte-9fxr6f.svelte-9fxr6f{width:70%;transform:translateX(20px)}.container.svelte-9fxr6f ul.svelte-9fxr6f::after{left:-40px}.container.svelte-9fxr6f ul li.svelte-9fxr6f{width:100%;float:none;clear:none;margin-bottom:80px}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{left:-40px;transform:translate(-50%, -50%)}.container.svelte-9fxr6f ul li .date.svelte-9fxr6f{left:0}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(odd){transform:translateX(0px);text-align:left}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(even){transform:translateX(0px)}}@media only screen and (max-width: 550px){.container.svelte-9fxr6f.svelte-9fxr6f{width:80%;transform:translateX(20px)}.container.svelte-9fxr6f ul li.svelte-9fxr6f{width:100%;float:none;clear:none;margin-bottom:80px}.container.svelte-9fxr6f ul.svelte-9fxr6f::after{left:-20px}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{left:-20px;transform:translate(-50%, -50%)}.container.svelte-9fxr6f ul li .date.svelte-9fxr6f{left:0}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(odd){transform:translateX(0px);text-align:left}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(even){transform:translateX(0px)}}',
  map: '{"version":3,"file":"experience.svelte","sources":["experience.svelte"],"sourcesContent":["<body>\\n    <div class=\\"main\\">\\n        <h1 class=\\"header\\">Timeline</h1>\\n        <div class=\\"container\\">\\n            \\n            <ul>\\n                <li>\\n                    <p class=\\"heading\\">Commonwealth Cyber Initiative</p>\\n                    <p>Cybersecurity Intern</p>\\n                    <span class=\\"date\\">June-July 2021</span>\\n                    <span class=\\"circle\\"></span>\\n                </li>\\n                <li>\\n                    <p class=\\"heading\\">ManTech International Corporation</p>\\n                    <p>Software Engineer Intern</p>\\n                    <span class=\\"date\\">July-Aug. 2021</span>\\n                    <span class=\\"circle\\"></span>\\n                </li>\\n                <li>\\n                    <p class=\\"heading\\">W.T. Woodson High School</p>\\n                    <p>Graduated</p>\\n                    <span class=\\"date\\">May 2022</span>\\n                    <span class=\\"circle\\"></span>\\n                </li>\\n                <li>\\n                    <p class=\\"heading\\">ManTech International Corporation</p>\\n                    <p>Technical Intern</p>\\n                    <span class=\\"date\\">June-Aug. 2022</span>\\n                    <span class=\\"circle\\"></span>\\n                </li>\\n\\n                <li>\\n                    <p class=\\"heading\\">Virginia Tech</p>\\n                    <p>Undergraduate Student</p>\\n                    <span class=\\"date\\">Sept. 2022</span>\\n                    <span class=\\"circle\\"></span>\\n                </li>\\n\\n                <li>\\n                    <p class=\\"heading\\">Parsons Corporation</p>\\n                    <p>Software Engineer Intern</p>\\n                    <span class=\\"date\\">June 2023</span>\\n                    <span class=\\"circle\\"></span>\\n                </li>\\n            </ul>\\n        </div>\\n    </div>\\n</body>\\n\\n<style>\\n\\n    .header {\\n        font-size: 2em;\\n        text-align: center;\\n        padding-bottom: 3em;\\n    }\\n    * {\\n        padding: 0;\\n        margin: 0;\\n        box-sizing: border-box;\\n    }\\n\\n    .main {\\n        width: 100%;\\n        height: auto;\\n        display: grid;\\n        place-items: center;\\n        padding: 50px 0;\\n    }\\n\\n    /* Container Css Start  */\\n\\n    .container {\\n        width: 23%;\\n        height: auto;\\n        margin: auto 0;\\n        position: relative;\\n        transform: translateX(20px);\\n    }\\n    .container ul {\\n        list-style: none;\\n    }\\n    .container ul::after {\\n        content: \\" \\";\\n        position: absolute;\\n        width: 2px;\\n        height: 100%;\\n        left: -20px;\\n        top: 0;\\n        transform: translateX(-50%);\\n        background-image: linear-gradient(to bottom, #faf9f6, #faf9f6);\\n    }\\n    .container ul li {\\n        width: 100%;\\n\\n        float: none;\\n        clear: none;\\n        margin-bottom: 80px;\\n        height: auto;\\n        padding: 15px 20px;\\n        background-color: #faf9f6;\\n        border-radius: 8px;\\n        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.218);\\n        position: relative;\\n        z-index: 99;\\n    }\\n    .container ul li:nth-child(6) {\\n        margin-bottom: 0;\\n    }\\n    .container ul li .circle {\\n        position: absolute;\\n        width: 20px;\\n        height: 20px;\\n        border-radius: 50%;\\n        background-color: #dedede;\\n        top: 0;\\n        display: grid;\\n        place-items: center;\\n        left: -20px;\\n        transform: translate(-50%, -50%);\\n    }\\n    .circle::after {\\n        content: \\" \\";\\n        width: 12px;\\n        height: 12px;\\n        background-color: #faf9f6;\\n        border-radius: 50%;\\n    }\\n    .container ul li .circle {\\n        left: -20px;\\n        transform: translate(-50%, -50%);\\n    }\\n    ul li .date {\\n        position: absolute;\\n        width: 130px;\\n        height: 33px;\\n        background-image: linear-gradient(to right, #cdcbcb, #cdcbcb);\\n        border-radius: 15px;\\n        top: -45px;\\n        left: 0;\\n        display: grid;\\n        place-items: center;\\n        color: #0e1111;\\n        font-size: 0.85em;\\n        box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.318);\\n        font-weight: 500;\\n    }\\n    .container ul li:nth-child(odd) {\\n        float: right;\\n        clear: left;\\n        transform: translateX(0px);\\n        text-align: left;\\n    }\\n    ul li:nth-child(odd) .date {\\n        left: 0;\\n    }\\n    .container ul li:nth-child(even) {\\n        float: right;\\n        clear: left;\\n        transform: translateX(0px);\\n    }\\n    ul li .heading {\\n        font-size: 1.2em;\\n        width: 100%;\\n        color: #0e1111;\\n    }\\n    ul li p {\\n        font-size: 1em;\\n        color: #666;\\n        line-height: 18px;\\n        margin: 6px 0 4px 0;\\n    }\\n\\n    @media only screen and (min-width: 798px) and (max-width: 1100px) {\\n        .container {\\n            width: 80%;\\n        }\\n    }\\n\\n    @media only screen and (max-width: 798px) {\\n        .container {\\n            width: 70%;\\n            transform: translateX(20px);\\n        }\\n        .container ul::after {\\n            left: -40px;\\n        }\\n        .container ul li {\\n            width: 100%;\\n            float: none;\\n            clear: none;\\n            margin-bottom: 80px;\\n        }\\n        .container ul li .circle {\\n            left: -40px;\\n            transform: translate(-50%, -50%);\\n        }\\n        .container ul li .date {\\n            left: 0;\\n        }\\n        .container ul li:nth-child(odd) {\\n            transform: translateX(0px);\\n            text-align: left;\\n        }\\n        .container ul li:nth-child(even) {\\n            transform: translateX(0px);\\n        }\\n    }\\n\\n    @media only screen and (max-width: 550px) {\\n        .container {\\n            width: 80%;\\n            transform: translateX(20px);\\n        }\\n        .container ul li {\\n            width: 100%;\\n            float: none;\\n            clear: none;\\n            margin-bottom: 80px;\\n        }\\n        .container ul::after {\\n            left: -20px;\\n        }\\n        .container ul li .circle {\\n            left: -20px;\\n            transform: translate(-50%, -50%);\\n        }\\n        .container ul li .date {\\n            left: 0;\\n        }\\n        .container ul li:nth-child(odd) {\\n            transform: translateX(0px);\\n            text-align: left;\\n        }\\n        .container ul li:nth-child(even) {\\n            transform: translateX(0px);\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<body class="svelte-9fxr6f" data-svelte-h="svelte-1x7s6ph"><div class="main svelte-9fxr6f"><h1 class="header svelte-9fxr6f">Timeline</h1> <div class="container svelte-9fxr6f"><ul class="svelte-9fxr6f"><li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">Commonwealth Cyber Initiative</p> <p class="svelte-9fxr6f">Cybersecurity Intern</p> <span class="date svelte-9fxr6f">June-July 2021</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">ManTech International Corporation</p> <p class="svelte-9fxr6f">Software Engineer Intern</p> <span class="date svelte-9fxr6f">July-Aug. 2021</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">W.T. Woodson High School</p> <p class="svelte-9fxr6f">Graduated</p> <span class="date svelte-9fxr6f">May 2022</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">ManTech International Corporation</p> <p class="svelte-9fxr6f">Technical Intern</p> <span class="date svelte-9fxr6f">June-Aug. 2022</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">Virginia Tech</p> <p class="svelte-9fxr6f">Undergraduate Student</p> <span class="date svelte-9fxr6f">Sept. 2022</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">Parsons Corporation</p> <p class="svelte-9fxr6f">Software Engineer Intern</p> <span class="date svelte-9fxr6f">June 2023</span> <span class="circle svelte-9fxr6f"></span></li></ul></div></div> </body>`;
});
const css$1 = {
  code: ".svelte-1q00mj6.svelte-1q00mj6{color:#0e1111;overflow:hidden}h1.svelte-1q00mj6.svelte-1q00mj6{text-align:center;padding:50px 0}p.svelte-1q00mj6.svelte-1q00mj6{font-size:1.2em}.cells.svelte-1q00mj6.svelte-1q00mj6{display:flex;align-items:center;justify-content:center}.text.svelte-1q00mj6.svelte-1q00mj6{width:60vw;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}.content.svelte-1q00mj6.svelte-1q00mj6{width:40vw;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}img.svelte-1q00mj6.svelte-1q00mj6{width:auto;height:auto;min-width:100%;min-height:100%;max-width:100%;max-height:100%;border-radius:2%}.caption.svelte-1q00mj6.svelte-1q00mj6{font-size:1em;font-weight:300;font-style:italic;color:#0e1111;text-align:center}figure.svelte-1q00mj6.svelte-1q00mj6{padding:0 2em}.svelte-1q00mj6.svelte-1q00mj6:link{color:#0000ee}.svelte-1q00mj6.svelte-1q00mj6:visited{color:#551a8b}h1.svelte-1q00mj6>a.svelte-1q00mj6{color:#0e1111 !important;text-decoration:none !important}@media only screen and (max-width: 1100px){figure.svelte-1q00mj6.svelte-1q00mj6{display:none}.cells.svelte-1q00mj6.svelte-1q00mj6{display:flex;flex-direction:column;align-items:center;text-align:center}}",
  map: `{"version":3,"file":"interests.svelte","sources":["interests.svelte"],"sourcesContent":["<script>\\n    import LayoutGrid, { Cell } from \\"@smui/layout-grid\\";\\n\\n    const loaded = new Map();\\n\\n    function lazy(node, data) {\\n        if (loaded.has(data.src)) {\\n            node.setAttribute(\\"src\\", data.src);\\n        }\\n    }\\n<\/script>\\n\\n<h1><a href=\\"/blog\\" target=\\"_blank\\">Blog</a></h1>\\n\\n<LayoutGrid>\\n    <div class=\\"cells\\">\\n        <Cell>\\n            <div class=\\"text\\">\\n                <p>\\n                    Outside of my academics and career, I'm also an avid lifter.\\n                </p>\\n                <p>\\n                    I enjoy chatting with others, moving heavy weight, and\\n                    seeing my progress.\\n                </p>\\n                <p>\\n                    Plus, I get to catch up on my favorite <a\\n                        href=\\"https://podcasts.apple.com/us/podcast/behind-the-baller-podcast-with-ben-baller/id1475680946\\"\\n                        target=\\"_blank\\">podcasts</a\\n                    >\\n                    and\\n                    <a\\n                        href=\\"https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq\\"\\n                        target=\\"blank\\">artists</a\\n                    > during this time.\\n                </p>\\n                <p>\\n                    Feel free to check out my <a\\n                        class=\\"blog\\"\\n                        href=\\"/blog\\"\\n                        target=\\"_blank\\">blog</a\\n                    > where I detail my journey.\\n                </p>\\n            </div>\\n        </Cell>\\n        <Cell>\\n            <div class=\\"content\\">\\n                <figure>\\n                    <img\\n                        src=\\"./bench.jpg\\"\\n                        alt=\\"current book\\"\\n                        use:lazy={{ src: \\"./bench.jpg\\" }}\\n                    />\\n                    <figcaption class=\\"caption\\">\\n                        10/23/2023—225 Bench\\n                    </figcaption>\\n                </figure>\\n            </div>\\n        </Cell>\\n    </div>\\n</LayoutGrid>\\n\\n<style>\\n    * {\\n        color: #0e1111;\\n        overflow: hidden;\\n    }\\n\\n    h1 {\\n        text-align: center;\\n        padding: 50px 0;\\n    }\\n\\n    p {\\n        font-size: 1.2em;\\n    }\\n\\n    .cells {\\n        display: flex;\\n        align-items: center; /* Add this line */\\n        justify-content: center;\\n    }\\n\\n    .text {\\n        width: 60vw;\\n        height: auto;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n\\n    .content {\\n        width: 40vw;\\n        height: auto;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n\\n    img {\\n        width: auto;\\n        height: auto;\\n        min-width: 100%;\\n        min-height: 100%;\\n        max-width: 100%;\\n        max-height: 100%;\\n        border-radius: 2%;\\n    }\\n\\n    .caption {\\n        font-size: 1em;\\n        font-weight: 300;\\n        font-style: italic;\\n        color: #0e1111; /* Adjust the color to your preference */\\n        text-align: center;\\n    }\\n\\n    figure {\\n        padding: 0 2em;\\n    }\\n\\n    :link {\\n        color: #0000ee;\\n    }\\n    :visited {\\n        color: #551a8b;\\n    }\\n\\n    h1 > a {\\n        color: #0e1111 !important; /* Adjust the color to your preference */\\n\\n        text-decoration: none !important;\\n    }\\n\\n    @media only screen and (max-width: 1100px){\\n\\n        figure {\\n            display: none;\\n        }\\n\\n        .cells {\\n            display: flex;\\n            flex-direction:column;\\n            align-items: center;\\n            text-align: center;\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"AA+DI,8BAAE,CACE,KAAK,CAAE,OAAO,CACd,QAAQ,CAAE,MACd,CAEA,gCAAG,CACC,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,CAClB,CAEA,+BAAE,CACE,SAAS,CAAE,KACf,CAEA,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEA,mCAAM,CACF,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEA,sCAAS,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEA,iCAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,EACnB,CAEA,sCAAS,CACL,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,MAChB,CAEA,oCAAO,CACH,OAAO,CAAE,CAAC,CAAC,GACf,+BAEA,KAAM,CACF,KAAK,CAAE,OACX,+BACA,QAAS,CACL,KAAK,CAAE,OACX,CAEA,iBAAE,CAAG,gBAAE,CACH,KAAK,CAAE,OAAO,CAAC,UAAU,CAEzB,eAAe,CAAE,IAAI,CAAC,UAC1B,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAEtC,oCAAO,CACH,OAAO,CAAE,IACb,CAEA,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAChB,CACJ"}`
};
const Interests = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<h1 class="svelte-1q00mj6" data-svelte-h="svelte-1mlg933"><a href="/blog" target="_blank" class="svelte-1q00mj6">Blog</a></h1> ${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="cells svelte-1q00mj6">${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text svelte-1q00mj6" data-svelte-h="svelte-v1rtkq"><p class="svelte-1q00mj6">Outside of my academics and career, I&#39;m also an avid lifter.</p> <p class="svelte-1q00mj6">I enjoy chatting with others, moving heavy weight, and
                    seeing my progress.</p> <p class="svelte-1q00mj6">Plus, I get to catch up on my favorite <a href="https://podcasts.apple.com/us/podcast/behind-the-baller-podcast-with-ben-baller/id1475680946" target="_blank" class="svelte-1q00mj6">podcasts</a>
                    and
                    <a href="https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq" target="blank" class="svelte-1q00mj6">artists</a> during this time.</p> <p class="svelte-1q00mj6">Feel free to check out my <a class="blog svelte-1q00mj6" href="/blog" target="_blank">blog</a> where I detail my journey.</p></div>`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="content svelte-1q00mj6"><figure class="svelte-1q00mj6"><img src="./bench.jpg" alt="current book" class="svelte-1q00mj6"> <figcaption class="caption svelte-1q00mj6" data-svelte-h="svelte-y51yh1">10/23/2023—225 Bench</figcaption></figure></div>`;
        }
      })}</div>`;
    }
  })}`;
});
const css = {
  code: '.svelte-rkzfuy{margin:0;padding:0;box-sizing:border-box}.white.svelte-rkzfuy{background:#faf9f6}.black.svelte-rkzfuy{background:#0e1111}body.svelte-rkzfuy{font-family:system-ui,\n            -apple-system,\n            BlinkMacSystemFont,\n            "Segoe UI",\n            Roboto,\n            Oxygen,\n            Ubuntu,\n            Cantarell,\n            "Open Sans",\n            "Helvetica Neue",\n            sans-serif}.card.svelte-rkzfuy{width:100%;height:100vh;color:black;position:sticky;top:0}.card-timeline.svelte-rkzfuy{width:100%;height:247vh;color:white;position:sticky;top:0;overflow:hidden}.content-timeline.svelte-rkzfuy{position:absolute;top:0;width:100%;height:100%;padding:25px 0;object-fit:cover;z-index:2;display:flex;justify-content:center;align-items:start}.content.svelte-rkzfuy{position:absolute;top:0;width:100%;height:100%;object-fit:cover;z-index:2}@media only screen and (max-width: 1100px){.card-timeline.svelte-rkzfuy{height:265vh}.content.svelte-rkzfuy{padding:0 1em}}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    // import TopAppBar from '@smui/top-app-bar';\\n    import IntroText from \\"./home/intro.svelte\\";\\n    import Timeline from \\"./home/experience.svelte\\";\\n    import Interests from \\"./home/interests.svelte\\";\\n<\/script>\\n\\n<body>\\n    <!-- <div class=\\"header black\\">Header</div> -->\\n    <div>\\n        <div class=\\"card white\\">\\n            <div class=\\"content\\">\\n                <IntroText></IntroText>\\n            </div>\\n        </div>\\n        <div class=\\"card-timeline black\\">\\n            <div class=\\"content-timeline\\">\\n                <Timeline></Timeline>\\n            </div>\\n        </div>\\n        <div class=\\"card white\\">\\n            <div class=\\"content\\">\\n                <Interests></Interests>\\n            </div>\\n        </div>\\n    </div>\\n    <!-- <div class=\\"footer white\\">\\n        <Footer></Footer>\\n    </div> -->\\n</body>\\n\\n<style>\\n    * {\\n        margin: 0;\\n        padding: 0;\\n        box-sizing: border-box;\\n    }\\n\\n    .white {\\n        background: #faf9f6;\\n    }\\n\\n    .black {\\n        background: #0e1111;\\n    }\\n\\n    body {\\n        font-family:\\n            system-ui,\\n            -apple-system,\\n            BlinkMacSystemFont,\\n            \\"Segoe UI\\",\\n            Roboto,\\n            Oxygen,\\n            Ubuntu,\\n            Cantarell,\\n            \\"Open Sans\\",\\n            \\"Helvetica Neue\\",\\n            sans-serif;\\n    }\\n\\n    /* .header,\\n    .footer {\\n        height: auto;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        color: #0e1111;\\n    } */\\n\\n    .card {\\n        width: 100%;\\n        height: 100vh;\\n        color: black;\\n        position: sticky;\\n        top: 0;\\n    }\\n\\n    .card-timeline {\\n        width: 100%;\\n        height: 247vh;\\n        color: white;\\n        position: sticky;\\n        top: 0;\\n        overflow: hidden;\\n    }\\n\\n    .content-timeline {\\n        position: absolute;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n        padding: 25px 0;\\n        object-fit: cover;\\n        z-index: 2;\\n        display: flex;\\n        justify-content: center;\\n        align-items: start;\\n    }\\n\\n    .content {\\n        position: absolute;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n        object-fit: cover;\\n        z-index: 2;\\n    }\\n\\n    @media only screen and (max-width: 1100px){\\n        .card-timeline {\\n            height: 265vh;\\n        }\\n\\n        .content {\\n            padding: 0 1em;\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"AAgCI,cAAE,CACE,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAChB,CAEA,oBAAO,CACH,UAAU,CAAE,OAChB,CAEA,oBAAO,CACH,UAAU,CAAE,OAChB,CAEA,kBAAK,CACD,WAAW,CACP,SAAS,CAAC;AACtB,YAAY,aAAa,CAAC;AAC1B,YAAY,kBAAkB,CAAC;AAC/B,YAAY,UAAU,CAAC;AACvB,YAAY,MAAM,CAAC;AACnB,YAAY,MAAM,CAAC;AACnB,YAAY,MAAM,CAAC;AACnB,YAAY,SAAS,CAAC;AACtB,YAAY,WAAW,CAAC;AACxB,YAAY,gBAAgB,CAAC;AAC7B,YAAY,UACR,CAWA,mBAAM,CACF,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CACT,CAEA,4BAAe,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,QAAQ,CAAE,MACd,CAEA,+BAAkB,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,KACjB,CAEA,sBAAS,CACL,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CACb,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CACtC,4BAAe,CACX,MAAM,CAAE,KACZ,CAEA,sBAAS,CACL,OAAO,CAAE,CAAC,CAAC,GACf,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-rkzfuy"> <div class="svelte-rkzfuy"><div class="card white svelte-rkzfuy"><div class="content svelte-rkzfuy">${validate_component(Intro, "IntroText").$$render($$result, {}, {}, {})}</div></div> <div class="card-timeline black svelte-rkzfuy"><div class="content-timeline svelte-rkzfuy">${validate_component(Experience, "Timeline").$$render($$result, {}, {}, {})}</div></div> <div class="card white svelte-rkzfuy"><div class="content svelte-rkzfuy">${validate_component(Interests, "Interests").$$render($$result, {}, {}, {})}</div></div></div>  </body>`;
});
export {
  Page as default
};
