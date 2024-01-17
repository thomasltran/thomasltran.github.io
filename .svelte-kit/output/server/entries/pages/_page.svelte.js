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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fixedColumnWidth === void 0 && $$bindings.fixedColumnWidth && fixedColumnWidth !== void 0)
    $$bindings.fixedColumnWidth(fixedColumnWidth);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.span === void 0 && $$bindings.span && span !== void 0)
    $$bindings.span(span);
  if ($$props.spanDevices === void 0 && $$bindings.spanDevices && spanDevices !== void 0)
    $$bindings.spanDevices(spanDevices);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
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
  code: '.svelte-16gfurv.svelte-16gfurv{text-align:center;color:#0e1111;overflow:hidden}p.svelte-16gfurv.svelte-16gfurv{font-size:1.2em}img.svelte-16gfurv.svelte-16gfurv{width:auto;height:auto;max-width:50%;max-height:30%;margin-top:10%;border-radius:2%}.icons.svelte-16gfurv.svelte-16gfurv,a.svelte-16gfurv.svelte-16gfurv{display:flex;justify-content:center;align-items:center;height:10em;margin-bottom:-1em}.icons.svelte-16gfurv img.svelte-16gfurv{margin:0 1em}.cell.intro.svelte-16gfurv.svelte-16gfurv{width:60vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1em}.cell.content.svelte-16gfurv.svelte-16gfurv{width:40vw;height:100vh}.cells.svelte-16gfurv.svelte-16gfurv{display:flex}.caption.svelte-16gfurv.svelte-16gfurv{font-size:1em;font-weight:300;font-style:italic;color:#0e1111}figure.svelte-16gfurv.svelte-16gfurv{margin-top:2em}button.svelte-16gfurv.svelte-16gfurv{background:#0e1111;border:#0e1111;color:#faf9f6;border-radius:2%;padding:0 2em /* Adjust padding as needed */;margin:-7em 0 0 0.4em;cursor:pointer}button.svelte-16gfurv h2.svelte-16gfurv{color:#faf9f6;letter-spacing:0.15em}.button-content.svelte-16gfurv.svelte-16gfurv{display:flex;align-items:center;justify-content:center}.material-symbols-outlined.svelte-16gfurv.svelte-16gfurv{font-variation-settings:"FILL" 0,\n            "wght" 400,\n            "GRAD" 0,\n            "opsz" 24;margin-right:1em}.material-icons.svelte-16gfurv.svelte-16gfurv{color:#faf9f6}.material-icons.svelte-16gfurv.svelte-16gfurv:hover{cursor:pointer}@media only screen and (max-width: 1100px){.cell.intro.svelte-16gfurv.svelte-16gfurv{width:100%;height:50vh;margin-left:-1em}.cell.content.svelte-16gfurv.svelte-16gfurv{width:100%;height:50vh}figure.svelte-16gfurv.svelte-16gfurv{display:none}.cells.svelte-16gfurv.svelte-16gfurv{display:flex;flex-direction:column}}',
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="cells svelte-16gfurv">${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="cell intro svelte-16gfurv" data-svelte-h="svelte-18pwi50"><h1 class="svelte-16gfurv">Hi! My name is Thomas Tran.</h1> <p class="svelte-16gfurv">I&#39;m an aspiring software engineer majoring in Computer
                    Science with a minor in Math at Virginia Tech.</p> <p class="svelte-16gfurv">My interests revolve around software development, cloud
                    computing, and big data analytics.</p></div>`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="cell content svelte-16gfurv" data-svelte-h="svelte-1pec0zi"><figure class="svelte-16gfurv"><img src="./current_book.jpg" alt="current book" class="svelte-16gfurv"> <figcaption class="caption svelte-16gfurv">Currently reading...</figcaption></figure> <div class="icons svelte-16gfurv"><a href="https://github.com/thomasltran" target="_blank" class="svelte-16gfurv"><img src="./github-mark.svg" alt="github" class="svelte-16gfurv"></a> <a href="https://www.linkedin.com/in/thomasltran/" target="_blank" class="svelte-16gfurv"><img src="./linkedin.svg" alt="linkedin" class="svelte-16gfurv"></a> <a href="mailto:thomastran@vt.edu" target="_blank" class="svelte-16gfurv"><img src="./email.svg" alt="email" class="svelte-16gfurv"></a></div> <div class="svelte-16gfurv"><a href="https://drive.google.com/drive/folders/1Ekb0FtVa2NcVclDTTbxhV0jgX6sPi0sh?usp=sharing" target="_blank" class="svelte-16gfurv"><button class="svelte-16gfurv"><div class="button-content svelte-16gfurv"><span class="material-symbols-outlined material-icons svelte-16gfurv">link</span> <h2 class="svelte-16gfurv">Resume</h2></div></button></a></div></div>`;
        }
      })}</div>`;
    }
  })}`;
});
const css$2 = {
  code: '.header.svelte-9fxr6f.svelte-9fxr6f{font-size:2em;text-align:center;padding-bottom:3em}.svelte-9fxr6f.svelte-9fxr6f{padding:0;margin:0;box-sizing:border-box}.main.svelte-9fxr6f.svelte-9fxr6f{width:100%;height:auto;display:grid;place-items:center;padding:50px 0}.container.svelte-9fxr6f.svelte-9fxr6f{width:23%;height:auto;margin:auto 0;position:relative;transform:translateX(20px)}.container.svelte-9fxr6f ul.svelte-9fxr6f{list-style:none}.container.svelte-9fxr6f ul.svelte-9fxr6f::after{content:" ";position:absolute;width:2px;height:100%;left:-20px;top:0;transform:translateX(-50%);background-image:linear-gradient(to bottom, #faf9f6, #faf9f6)}.container.svelte-9fxr6f ul li.svelte-9fxr6f{width:100%;float:none;clear:none;margin-bottom:80px;height:auto;padding:15px 20px;background-color:#faf9f6;border-radius:8px;box-shadow:1px 1px 15px rgba(0, 0, 0, 0.218);position:relative;z-index:99}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(6){margin-bottom:0}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{position:absolute;width:20px;height:20px;border-radius:50%;background-color:#dedede;top:0;display:grid;place-items:center;left:-20px;transform:translate(-50%, -50%)}.circle.svelte-9fxr6f.svelte-9fxr6f::after{content:" ";width:12px;height:12px;background-color:#faf9f6;border-radius:50%}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{left:-20px;transform:translate(-50%, -50%)}ul.svelte-9fxr6f li .date.svelte-9fxr6f{position:absolute;width:130px;height:33px;background-image:linear-gradient(to right, #cdcbcb, #cdcbcb);border-radius:15px;top:-45px;left:0;display:grid;place-items:center;color:#0e1111;font-size:0.85em;box-shadow:1px 2px 12px rgba(0, 0, 0, 0.318);font-weight:500}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(odd){float:right;clear:left;transform:translateX(0px);text-align:left}ul.svelte-9fxr6f li:nth-child(odd) .date.svelte-9fxr6f{left:0}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(even){float:right;clear:left;transform:translateX(0px)}ul.svelte-9fxr6f li .heading.svelte-9fxr6f{font-size:1.2em;width:100%;color:#0e1111}ul.svelte-9fxr6f li p.svelte-9fxr6f{font-size:1em;color:#666;line-height:18px;margin:6px 0 4px 0}@media only screen and (min-width: 798px) and (max-width: 1100px){.container.svelte-9fxr6f.svelte-9fxr6f{width:80%}}@media only screen and (max-width: 798px){.container.svelte-9fxr6f.svelte-9fxr6f{width:70%;transform:translateX(20px)}.container.svelte-9fxr6f ul.svelte-9fxr6f::after{left:-40px}.container.svelte-9fxr6f ul li.svelte-9fxr6f{width:100%;float:none;clear:none;margin-bottom:80px}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{left:-40px;transform:translate(-50%, -50%)}.container.svelte-9fxr6f ul li .date.svelte-9fxr6f{left:0}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(odd){transform:translateX(0px);text-align:left}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(even){transform:translateX(0px)}}@media only screen and (max-width: 550px){.container.svelte-9fxr6f.svelte-9fxr6f{width:80%;transform:translateX(20px)}.container.svelte-9fxr6f ul li.svelte-9fxr6f{width:100%;float:none;clear:none;margin-bottom:80px}.container.svelte-9fxr6f ul.svelte-9fxr6f::after{left:-20px}.container.svelte-9fxr6f ul li .circle.svelte-9fxr6f{left:-20px;transform:translate(-50%, -50%)}.container.svelte-9fxr6f ul li .date.svelte-9fxr6f{left:0}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(odd){transform:translateX(0px);text-align:left}.container.svelte-9fxr6f ul li.svelte-9fxr6f:nth-child(even){transform:translateX(0px)}}',
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<body class="svelte-9fxr6f" data-svelte-h="svelte-1x7s6ph"><div class="main svelte-9fxr6f"><h1 class="header svelte-9fxr6f">Timeline</h1> <div class="container svelte-9fxr6f"><ul class="svelte-9fxr6f"><li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">Commonwealth Cyber Initiative</p> <p class="svelte-9fxr6f">Cybersecurity Intern</p> <span class="date svelte-9fxr6f">June-July 2021</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">ManTech International Corporation</p> <p class="svelte-9fxr6f">Software Engineer Intern</p> <span class="date svelte-9fxr6f">July-Aug. 2021</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">W.T. Woodson High School</p> <p class="svelte-9fxr6f">Graduated</p> <span class="date svelte-9fxr6f">May 2022</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">ManTech International Corporation</p> <p class="svelte-9fxr6f">Technical Intern</p> <span class="date svelte-9fxr6f">June-Aug. 2022</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">Virginia Tech</p> <p class="svelte-9fxr6f">Undergraduate Student</p> <span class="date svelte-9fxr6f">Sept. 2022</span> <span class="circle svelte-9fxr6f"></span></li> <li class="svelte-9fxr6f"><p class="heading svelte-9fxr6f">Parsons Corporation</p> <p class="svelte-9fxr6f">Software Engineer Intern</p> <span class="date svelte-9fxr6f">June 2023</span> <span class="circle svelte-9fxr6f"></span></li></ul></div></div> </body>`;
});
const css$1 = {
  code: ".svelte-1q00mj6.svelte-1q00mj6{color:#0e1111;overflow:hidden}h1.svelte-1q00mj6.svelte-1q00mj6{text-align:center;padding:50px 0}p.svelte-1q00mj6.svelte-1q00mj6{font-size:1.2em}.cells.svelte-1q00mj6.svelte-1q00mj6{display:flex;align-items:center;justify-content:center}.text.svelte-1q00mj6.svelte-1q00mj6{width:60vw;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}.content.svelte-1q00mj6.svelte-1q00mj6{width:40vw;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}img.svelte-1q00mj6.svelte-1q00mj6{width:auto;height:auto;min-width:100%;min-height:100%;max-width:100%;max-height:100%;border-radius:2%}.caption.svelte-1q00mj6.svelte-1q00mj6{font-size:1em;font-weight:300;font-style:italic;color:#0e1111;text-align:center}figure.svelte-1q00mj6.svelte-1q00mj6{padding:0 2em}.svelte-1q00mj6.svelte-1q00mj6:link{color:#0000ee}.svelte-1q00mj6.svelte-1q00mj6:visited{color:#551a8b}h1.svelte-1q00mj6>a.svelte-1q00mj6{color:#0e1111 !important;text-decoration:none !important}@media only screen and (max-width: 1100px){figure.svelte-1q00mj6.svelte-1q00mj6{display:none}.cells.svelte-1q00mj6.svelte-1q00mj6{display:flex;flex-direction:column;align-items:center;text-align:center}}",
  map: null
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
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-rkzfuy"> <div class="svelte-rkzfuy"><div class="card white svelte-rkzfuy"><div class="content svelte-rkzfuy">${validate_component(Intro, "IntroText").$$render($$result, {}, {}, {})}</div></div> <div class="card-timeline black svelte-rkzfuy"><div class="content-timeline svelte-rkzfuy">${validate_component(Experience, "Timeline").$$render($$result, {}, {}, {})}</div></div> <div class="card white svelte-rkzfuy"><div class="content svelte-rkzfuy">${validate_component(Interests, "Interests").$$render($$result, {}, {}, {})}</div></div></div>  </body>`;
});
export {
  Page as default
};
