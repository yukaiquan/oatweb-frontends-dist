import{r as n}from"./react.9f8bb2ca.js";import{R as h,u as p,a as S}from"./react-router.61103ab6.js";import{c as y}from"./@remix-run.a4d7d1fc.js";import{a as R}from"./@jbrowse.1c1f30ba.js";/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function l(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((s,a)=>{let r=e[a];return s.concat(Array.isArray(r)?r.map(t=>[a,t]):[[a,r]])},[]))}function v(e,s){let a=l(e);for(let r of s.keys())a.has(r)||s.getAll(r).forEach(t=>{a.append(r,t)});return a}function d(e){let{basename:s,children:a,window:r}=e,t=n.exports.useRef();t.current==null&&(t.current=y({window:r,v5Compat:!0}));let o=t.current,[c,u]=n.exports.useState({action:o.action,location:o.location});return n.exports.useLayoutEffect(()=>o.listen(u),[o]),R(h,{basename:s,children:a,location:c.location,navigationType:c.action,navigator:o})}var i;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(i||(i={}));var f;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(f||(f={}));function w(e){let s=n.exports.useRef(l(e)),a=p(),r=n.exports.useMemo(()=>v(a.search,s.current),[a.search]),t=S(),o=n.exports.useCallback((c,u)=>{const m=l(typeof c=="function"?c(r):c);t("?"+m,u)},[t,r]);return[r,o]}export{d as B,w as u};
