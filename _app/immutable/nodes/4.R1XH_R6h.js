import{_ as g}from"../chunks/preload-helper.0HuHagjb.js";import{s as $}from"../chunks/scheduler.PVTGYrHz.js";import{S as v,i as y,q as l,g as h,r as u,h as b,j as w,u as P,f as m,a as E,v as f,t as _,b as j,d,w as p,p as k}from"../chunks/index.pV1t1UdC.js";const q=(r,e)=>{const t=r[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((a,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function O({params:r}){const e=await q(Object.assign({"../1.md":()=>g(()=>import("../chunks/1.tLnXga5F.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)}),`../${r.slug}.md`),{title:t,date:a}=e.metadata;return{content:e.default,title:t,date:a}}const R=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));function S(r){let e,t,a;var n=r[0].content;function s(o,i){return{}}return n&&(t=l(n,s())),{c(){e=h("article"),t&&u(t.$$.fragment)},l(o){e=b(o,"ARTICLE",{});var i=w(e);t&&P(t.$$.fragment,i),i.forEach(m)},m(o,i){E(o,e,i),t&&f(t,e,null),a=!0},p(o,[i]){if(i&1&&n!==(n=o[0].content)){if(t){k();const c=t;_(c.$$.fragment,1,0,()=>{p(c,1)}),j()}n?(t=l(n,s()),u(t.$$.fragment),d(t.$$.fragment,1),f(t,e,null)):t=null}},i(o){a||(t&&d(t.$$.fragment,o),a=!0)},o(o){t&&_(t.$$.fragment,o),a=!1},d(o){o&&m(e),t&&p(t)}}}function T(r,e,t){let{data:a}=e;return r.$$set=n=>{"data"in n&&t(0,a=n.data)},[a]}class A extends v{constructor(e){super(),y(this,e,T,S,$,{data:0})}}export{A as component,R as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/1.tLnXga5F.js","../chunks/scheduler.PVTGYrHz.js","../chunks/index.pV1t1UdC.js","../chunks/spread.rEx3vLA9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}