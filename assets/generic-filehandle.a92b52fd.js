import{g as $}from"./@babel.d3038ccc.js";import{L as g}from"./@gmod.89422c98.js";import{b as d}from"./buffer.66f81d03.js";const l=typeof window<"u"?window:typeof self<"u"?self:{fetch:void 0};class y{constructor(e,t={}){this.baseOverrides={},this.url=e;const r=t.fetch||l.fetch&&l.fetch.bind(l);if(!r)throw new TypeError("no fetch function supplied, and none found in global environment");t.overrides&&(this.baseOverrides=t.overrides),this.fetchImplementation=r}async getBufferFromResponse(e){if(typeof e.buffer=="function")return e.buffer();if(typeof e.arrayBuffer=="function"){const t=await e.arrayBuffer();return d.Buffer.from(t)}else throw new TypeError("invalid HTTP response object, has no buffer method, and no arrayBuffer method")}async fetch(e,t){let r;try{r=await this.fetchImplementation(e,t)}catch(n){if(`${n}`.includes("Failed to fetch"))console.warn(`generic-filehandle: refetching ${e} to attempt to work around chrome CORS header caching bug`),r=await this.fetchImplementation(e,{...t,cache:"reload"});else throw n}return r}async read(e,t=0,r,n=0,f={}){const{headers:a={},signal:c,overrides:s={}}=f;r<1/0?a.range=`bytes=${n}-${n+r}`:r===1/0&&n!==0&&(a.range=`bytes=${n}-`);const h={...this.baseOverrides,...s,headers:{...a,...s.headers,...this.baseOverrides.headers},method:"GET",redirect:"follow",mode:"cors",signal:c},i=await this.fetch(this.url,h);if(!i.ok)throw new Error(`HTTP ${i.status} ${i.statusText} ${this.url}`);if(i.status===200&&n===0||i.status===206){const w=await this.getBufferFromResponse(i),p=w.copy(e,t,0,Math.min(r,w.length)),E=i.headers.get("content-range"),u=/\/(\d+)$/.exec(E||"");return u&&u[1]&&(this._stat={size:parseInt(u[1],10)}),{bytesRead:p,buffer:e}}throw i.status===200?new Error("${this.url} fetch returned status 200, expected 206"):new Error(`HTTP ${i.status} fetching ${this.url}`)}async readFile(e={}){let t,r;typeof e=="string"?(t=e,r={}):(t=e.encoding,r=e,delete r.encoding);const{headers:n={},signal:f,overrides:a={}}=r,c={headers:n,method:"GET",redirect:"follow",mode:"cors",signal:f,...this.baseOverrides,...a},s=await this.fetch(this.url,c);if(!s)throw new Error("generic-filehandle failed to fetch");if(s.status!==200)throw Object.assign(new Error(`HTTP ${s.status} fetching ${this.url}`),{status:s.status});if(t==="utf8")return s.text();if(t)throw new Error(`unsupported encoding: ${t}`);return this.getBufferFromResponse(s)}async stat(){if(!this._stat){const e=d.Buffer.allocUnsafe(10);if(await this.read(e,0,10,0),!this._stat)throw new Error(`unable to determine size of file at ${this.url}`)}return this._stat}async close(){}}function b(o){const e=new FileReader;return new Promise((t,r)=>{e.onerror=()=>{e.abort(),r(new Error("problem reading blob"))},e.onabort=()=>{r(new Error("blob reading was aborted"))},e.onload=()=>{e.result&&typeof e.result!="string"?t(e.result):r(new Error("unknown error reading blob"))},e.readAsArrayBuffer(o)})}function B(o){const e=new FileReader;return new Promise((t,r)=>{e.onerror=()=>{e.abort(),r(new Error("problem reading blob"))},e.onabort=()=>{r(new Error("blob reading was aborted"))},e.onload=()=>{e.result&&typeof e.result=="string"?t(e.result):r(new Error("unknown error reading blob"))},e.readAsText(o)})}class T{constructor(e){this.blob=e,this.size=e.size}async read(e,t=0,r,n=0){if(!r)return{bytesRead:0,buffer:e};const f=n,a=f+r,c=await b(this.blob.slice(f,a)),s=d.Buffer.from(c);return{bytesRead:s.copy(e,t),buffer:s}}async readFile(e){let t;if(typeof e=="string"?t=e:t=e&&e.encoding,t==="utf8")return B(this.blob);if(t)throw new Error(`unsupported encoding: ${t}`);const r=await b(this.blob);return d.Buffer.from(r)}async stat(){return{size:this.size}}async close(){}}function m(o,e={}){return new y(o,e)}function v(o,e,t,r={}){if(t!==void 0)return t;if(o!==void 0)return m(o,r);if(e!==void 0)return new g(e,r);throw new Error("no url, path, or filehandle provided, cannot open")}const R=Object.freeze(Object.defineProperty({__proto__:null,open:v,fromUrl:m,RemoteFile:y,LocalFile:g,BlobFile:T},Symbol.toStringTag,{value:"Module"})),_=$(R);export{y as R,_ as r};