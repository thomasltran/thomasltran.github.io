import{_ as s}from"../chunks/preload-helper.0HuHagjb.js";import{s as g}from"../chunks/scheduler.PVTGYrHz.js";import{S as $,i as w,q as u,g as E,r as _,h as y,j as h,u as k,f as l,a as P,v as f,t as d,b,d as p,w as v,p as O}from"../chunks/index.tFzGzbmh.js";const T=(a,e)=>{const t=a[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((r,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function I({params:a}){const e=await T(Object.assign({"../markdown/2024-1-1.md":()=>s(()=>import("../chunks/2024-1-1.dHws5uK7.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"../markdown/2024-1-2.md":()=>s(()=>import("../chunks/2024-1-2.I0dZqbVE.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url),"../markdown/2024-1-3.md":()=>s(()=>import("../chunks/2024-1-3.T3ZpCaTy.js"),__vite__mapDeps([7,1,2,3,4,5]),import.meta.url),"../markdown/2024-1-4.md":()=>s(()=>import("../chunks/2024-1-4.cPubEpg6.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url)}),`../markdown/${a.slug}.md`),{date:t}=e.metadata;return{content:e.default,date:t}}const q=Object.freeze(Object.defineProperty({__proto__:null,load:I},Symbol.toStringTag,{value:"Module"}));function R(a){let e,t,r;var o=a[0].content;function m(n,i){return{}}return o&&(t=u(o,m())),{c(){e=E("article"),t&&_(t.$$.fragment)},l(n){e=y(n,"ARTICLE",{});var i=h(e);t&&k(t.$$.fragment,i),i.forEach(l)},m(n,i){P(n,e,i),t&&f(t,e,null),r=!0},p(n,[i]){if(i&1&&o!==(o=n[0].content)){if(t){O();const c=t;d(c.$$.fragment,1,0,()=>{v(c,1)}),b()}o?(t=u(o,m()),_(t.$$.fragment),p(t.$$.fragment,1),f(t,e,null)):t=null}},i(n){r||(t&&p(t.$$.fragment,n),r=!0)},o(n){t&&d(t.$$.fragment,n),r=!1},d(n){n&&l(e),t&&v(t)}}}function A(a,e,t){let{data:r}=e;return a.$$set=o=>{"data"in o&&t(0,r=o.data)},[r]}class S extends ${constructor(e){super(),w(this,e,A,R,g,{data:0})}}export{S as component,q as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/2024-1-1.dHws5uK7.js","../chunks/scheduler.PVTGYrHz.js","../chunks/index.tFzGzbmh.js","../chunks/spread.rEx3vLA9.js","../chunks/post.gn5yVgva.js","../assets/post.7-kErj5z.css","../chunks/2024-1-2.I0dZqbVE.js","../chunks/2024-1-3.T3ZpCaTy.js","../chunks/2024-1-4.cPubEpg6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}