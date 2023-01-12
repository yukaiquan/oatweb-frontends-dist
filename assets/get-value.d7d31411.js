import{i as w}from"./isobject.df66a4ce.js";/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */const m=w;var a=function(e,r,i){if(m(i)||(i={default:i}),!V(e))return typeof i.default<"u"?i.default:e;typeof r=="number"&&(r=String(r));const t=Array.isArray(r),j=typeof r=="string",l=i.separator||".",s=i.joinChar||(typeof l=="string"?l:".");if(!j&&!t)return e;if(j&&r in e)return y(r,e,i)?e[r]:i.default;let u=t?r:C(r,l,i),c=u.length,n=0;do{let f=u[n];for(typeof f=="number"&&(f=String(f));f&&f.slice(-1)==="\\";)f=A([f.slice(0,-1),u[++n]||""],s,i);if(f in e){if(!y(f,e,i))return i.default;e=e[f]}else{let b=!1,d=n+1;for(;d<c;)if(f=A([f,u[d++]],s,i),b=f in e){if(!y(f,e,i))return i.default;e=e[f],n=d-1;break}if(!b)return i.default}}while(++n<c&&V(e));return n===c?e:i.default};function A(e,r,i){return typeof i.join=="function"?i.join(e):e[0]+r+e[1]}function C(e,r,i){return typeof i.split=="function"?i.split(e):e.split(r)}function y(e,r,i){return typeof i.isValid=="function"?i.isValid(e,r):!0}function V(e){return m(e)||Array.isArray(e)||typeof e=="function"}export{a as g};
