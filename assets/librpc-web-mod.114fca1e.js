import{r as R}from"./@librpc.077300ae.js";import{s as p}from"./serialize-error.2d78dd57.js";var f={},o={},n={};Object.defineProperty(n,"__esModule",{value:!0});n.isObject=m;n.isTransferable=_;n.peekTransferables=b;n.uuid=E;function m(r){return Object(r)===r}function _(r){try{return r instanceof ArrayBuffer||r instanceof ImageBitmap||r instanceof OffscreenCanvas||r instanceof MessagePort}catch{return!1}}function b(r,e=[]){if(_(r))e.push(r);else if(m(r)&&!r.containsNoTransferables)for(var t in r)b(r[t],e);return e}function E(){return Math.floor((1+Math.random())*1e10).toString(16)}Object.defineProperty(o,"__esModule",{value:!0});o.default=void 0;var T=w(R),c=n,g=p;function w(r){return r&&r.__esModule?r:{default:r}}class k extends T.default{constructor({workers:e}){super(),this.workers=[...e],this.idx=0,this.calls={},this.timeouts={},this.errors={},this.handler=this.handler.bind(this),this.catch=this.catch.bind(this),this.init()}init(){this.workers.forEach(this.listen,this)}listen(e){e.addEventListener("message",this.handler),e.addEventListener("error",this.catch)}handler(e){var{uid:t,error:s,method:i,eventName:a,data:l,libRpc:u}=e.data;!u||(s?this.reject(t,s):i?this.resolve(t,l):a&&this.emit(a,l))}catch({message:e,lineno:t,filename:s,libRpc:i}){i&&this.emit("error",{message:e,lineno:t,filename:s})}reject(e,t){this.errors[e]&&(this.errors[e]((0,g.deserializeError)(t)),this.clear(e))}resolve(e,t){this.calls[e]&&(this.calls[e](t),this.clear(e))}clear(e){clearTimeout(this.timeouts[e]),delete this.timeouts[e],delete this.calls[e],delete this.errors[e]}call(e,t,{timeout:s=2e3}={}){var i=(0,c.uuid)(),a=(0,c.peekTransferables)(t);return new Promise((l,u)=>{this.timeouts[i]=setTimeout(()=>this.reject(i,new Error(`Timeout exceeded for RPC method "${e}"`)),s),this.calls[i]=l,this.errors[i]=u,this.workers[this.idx].postMessage({method:e,uid:i,data:t,libRpc:!0},a),this.idx=++this.idx%this.workers.length})}}var y=k;o.default=y;var h={};Object.defineProperty(h,"__esModule",{value:!0});h.default=void 0;var d=n,v=p;class P{constructor(e){this.methods=e,this.listen()}listen(){self.addEventListener("message",this.handler.bind(this))}handler(e){var{libRpc:t,method:s,uid:i,data:a}=e.data;!t||(this.methods[s]?Promise.resolve(a).then(this.methods[s]).then(l=>this.reply(i,s,l),l=>this.throw(i,(0,v.serializeError)(l))):this.throw(i,`Unknown RPC method "${s}"`))}reply(e,t,s){try{var i=(0,d.peekTransferables)(s);self.postMessage({uid:e,method:t,data:s,libRpc:!0},i)}catch(a){this.throw(e,(0,v.serializeError)(a))}}throw(e,t){self.postMessage({uid:e,error:t,libRpc:!0})}emit(e,t){var s=(0,d.peekTransferables)(t);self.postMessage({eventName:e,data:t,libRpc:!0},s)}}var $=P;h.default=$;Object.defineProperty(f,"__esModule",{value:!0});f.default=void 0;var O=M(o),x=M(h);function M(r){return r&&r.__esModule?r:{default:r}}var z={Client:O.default,Server:x.default};f.default=z;export{f as d};