import{b as y}from"./buffer.66f81d03.js";class s extends Error{constructor(e){super(s._prepareSuperMessage(e)),Object.defineProperty(this,"name",{value:"NonError",configurable:!0,writable:!0}),Error.captureStackTrace&&Error.captureStackTrace(this,s)}static _prepareSuperMessage(e){try{return JSON.stringify(e)}catch{return String(e)}}}const l=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0}],f=Symbol(".toJSON called"),b=r=>{r[f]=!0;const e=r.toJSON();return delete r[f],e},a=({from:r,seen:e,to_:c,forceEnumerable:i,maxDepth:p,depth:u})=>{const n=c||(Array.isArray(r)?[]:{});if(e.push(r),u>=p)return n;if(typeof r.toJSON=="function"&&r[f]!==!0)return b(r);for(const[t,o]of Object.entries(r)){if(typeof y.Buffer=="function"&&y.Buffer.isBuffer(o)){n[t]="[object Buffer]";continue}if(typeof o!="function"){if(!o||typeof o!="object"){n[t]=o;continue}if(!e.includes(r[t])){u++,n[t]=a({from:r[t],seen:e.slice(),forceEnumerable:i,maxDepth:p,depth:u});continue}n[t]="[Circular]"}}for(const{property:t,enumerable:o}of l)typeof r[t]=="string"&&Object.defineProperty(n,t,{value:r[t],enumerable:i?!0:o,configurable:!0,writable:!0});return n},S=(r,e={})=>{const{maxDepth:c=Number.POSITIVE_INFINITY}=e;return typeof r=="object"&&r!==null?a({from:r,seen:[],forceEnumerable:!0,maxDepth:c,depth:0}):typeof r=="function"?`[Function: ${r.name||"anonymous"}]`:r},E=(r,e={})=>{const{maxDepth:c=Number.POSITIVE_INFINITY}=e;if(r instanceof Error)return r;if(typeof r=="object"&&r!==null&&!Array.isArray(r)){const i=new Error;return a({from:r,seen:[],to_:i,maxDepth:c,depth:0}),i}return new s(r)};var d={serializeError:S,deserializeError:E};export{d as s};
