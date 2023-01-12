import{a as k,c as C}from"./@babel.d3038ccc.js";var q={exports:{}};(function(w,a){var b=typeof self<"u"?self:C,g=function(){function y(){this.fetch=!1,this.DOMException=b.DOMException}return y.prototype=b,new y}();(function(y){(function(c){var m={searchParams:"URLSearchParams"in y,iterable:"Symbol"in y&&"iterator"in Symbol,blob:"FileReader"in y&&"Blob"in y&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in y,arrayBuffer:"ArrayBuffer"in y};function O(e){return e&&DataView.prototype.isPrototypeOf(e)}if(m.arrayBuffer)var f=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],P=ArrayBuffer.isView||function(e){return e&&f.indexOf(Object.prototype.toString.call(e))>-1};function B(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function U(e){return typeof e!="string"&&(e=String(e)),e}function D(e){var r={next:function(){var n=e.shift();return{done:n===void 0,value:n}}};return m.iterable&&(r[Symbol.iterator]=function(){return r}),r}function u(e){this.map={},e instanceof u?e.forEach(function(r,n){this.append(n,r)},this):Array.isArray(e)?e.forEach(function(r){this.append(r[0],r[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(r){this.append(r,e[r])},this)}u.prototype.append=function(e,r){e=B(e),r=U(r);var n=this.map[e];this.map[e]=n?n+", "+r:r},u.prototype.delete=function(e){delete this.map[B(e)]},u.prototype.get=function(e){return e=B(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(B(e))},u.prototype.set=function(e,r){this.map[B(e)]=U(r)},u.prototype.forEach=function(e,r){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(r,this.map[n],n,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(r,n){e.push(n)}),D(e)},u.prototype.values=function(){var e=[];return this.forEach(function(r){e.push(r)}),D(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(r,n){e.push([n,r])}),D(e)},m.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);function T(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function x(e){return new Promise(function(r,n){e.onload=function(){r(e.result)},e.onerror=function(){n(e.error)}})}function I(e){var r=new FileReader,n=x(r);return r.readAsArrayBuffer(e),n}function M(e){var r=new FileReader,n=x(r);return r.readAsText(e),n}function A(e){for(var r=new Uint8Array(e),n=new Array(r.length),l=0;l<r.length;l++)n[l]=String.fromCharCode(r[l]);return n.join("")}function S(e){if(e.slice)return e.slice(0);var r=new Uint8Array(e.byteLength);return r.set(new Uint8Array(e)),r.buffer}function j(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:m.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:m.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():m.arrayBuffer&&m.blob&&O(e)?(this._bodyArrayBuffer=S(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):m.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||P(e))?this._bodyArrayBuffer=S(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=T(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?T(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(I)}),this.text=function(){var e=T(this);if(e)return e;if(this._bodyBlob)return M(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(A(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(t)}),this.json=function(){return this.text().then(JSON.parse)},this}var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function H(e){var r=e.toUpperCase();return v.indexOf(r)>-1?r:e}function E(e,r){r=r||{};var n=r.body;if(e instanceof E){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,r.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!n&&e._bodyInit!=null&&(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=r.credentials||this.credentials||"same-origin",(r.headers||!this.headers)&&(this.headers=new u(r.headers)),this.method=H(r.method||this.method||"GET"),this.mode=r.mode||this.mode||null,this.signal=r.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function t(e){var r=new FormData;return e.trim().split("&").forEach(function(n){if(n){var l=n.split("="),p=l.shift().replace(/\+/g," "),s=l.join("=").replace(/\+/g," ");r.append(decodeURIComponent(p),decodeURIComponent(s))}}),r}function o(e){var r=new u,n=e.replace(/\r?\n[\t ]+/g," ");return n.split(/\r?\n/).forEach(function(l){var p=l.split(":"),s=p.shift().trim();if(s){var F=p.join(":").trim();r.append(s,F)}}),r}j.call(E.prototype);function i(e,r){r||(r={}),this.type="default",this.status=r.status===void 0?200:r.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in r?r.statusText:"OK",this.headers=new u(r.headers),this.url=r.url||"",this._initBody(e)}j.call(i.prototype),i.prototype.clone=function(){return new i(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},i.error=function(){var e=new i(null,{status:0,statusText:""});return e.type="error",e};var d=[301,302,303,307,308];i.redirect=function(e,r){if(d.indexOf(r)===-1)throw new RangeError("Invalid status code");return new i(null,{status:r,headers:{location:e}})},c.DOMException=y.DOMException;try{new c.DOMException}catch{c.DOMException=function(r,n){this.message=r,this.name=n;var l=Error(r);this.stack=l.stack},c.DOMException.prototype=Object.create(Error.prototype),c.DOMException.prototype.constructor=c.DOMException}function h(e,r){return new Promise(function(n,l){var p=new E(e,r);if(p.signal&&p.signal.aborted)return l(new c.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function F(){s.abort()}s.onload=function(){var R={status:s.status,statusText:s.statusText,headers:o(s.getAllResponseHeaders()||"")};R.url="responseURL"in s?s.responseURL:R.headers.get("X-Request-URL");var L="response"in s?s.response:s.responseText;n(new i(L,R))},s.onerror=function(){l(new TypeError("Network request failed"))},s.ontimeout=function(){l(new TypeError("Network request failed"))},s.onabort=function(){l(new c.DOMException("Aborted","AbortError"))},s.open(p.method,p.url,!0),p.credentials==="include"?s.withCredentials=!0:p.credentials==="omit"&&(s.withCredentials=!1),"responseType"in s&&m.blob&&(s.responseType="blob"),p.headers.forEach(function(R,L){s.setRequestHeader(L,R)}),p.signal&&(p.signal.addEventListener("abort",F),s.onreadystatechange=function(){s.readyState===4&&p.signal.removeEventListener("abort",F)}),s.send(typeof p._bodyInit>"u"?null:p._bodyInit)})}return h.polyfill=!0,y.fetch||(y.fetch=h,y.Headers=u,y.Request=E,y.Response=i),c.Headers=u,c.Request=E,c.Response=i,c.fetch=h,Object.defineProperty(c,"__esModule",{value:!0}),c})({})})(g),g.fetch.ponyfill=!0,delete g.fetch.polyfill;var _=g;a=_.fetch,a.default=_.fetch,a.fetch=_.fetch,a.Headers=_.Headers,a.Request=_.Request,a.Response=_.Response,w.exports=a})(q,q.exports);const V=k(q.exports);(function(){(function(w){(function(a){var b={searchParams:"URLSearchParams"in w,iterable:"Symbol"in w&&"iterator"in Symbol,blob:"FileReader"in w&&"Blob"in w&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in w,arrayBuffer:"ArrayBuffer"in w};function g(t){return t&&DataView.prototype.isPrototypeOf(t)}if(b.arrayBuffer)var _=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],y=ArrayBuffer.isView||function(t){return t&&_.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if(typeof t!="string"&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function m(t){return typeof t!="string"&&(t=String(t)),t}function O(t){var o={next:function(){var i=t.shift();return{done:i===void 0,value:i}}};return b.iterable&&(o[Symbol.iterator]=function(){return o}),o}function f(t){this.map={},t instanceof f?t.forEach(function(o,i){this.append(i,o)},this):Array.isArray(t)?t.forEach(function(o){this.append(o[0],o[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(o){this.append(o,t[o])},this)}f.prototype.append=function(t,o){t=c(t),o=m(o);var i=this.map[t];this.map[t]=i?i+", "+o:o},f.prototype.delete=function(t){delete this.map[c(t)]},f.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},f.prototype.set=function(t,o){this.map[c(t)]=m(o)},f.prototype.forEach=function(t,o){for(var i in this.map)this.map.hasOwnProperty(i)&&t.call(o,this.map[i],i,this)},f.prototype.keys=function(){var t=[];return this.forEach(function(o,i){t.push(i)}),O(t)},f.prototype.values=function(){var t=[];return this.forEach(function(o){t.push(o)}),O(t)},f.prototype.entries=function(){var t=[];return this.forEach(function(o,i){t.push([i,o])}),O(t)},b.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);function P(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function B(t){return new Promise(function(o,i){t.onload=function(){o(t.result)},t.onerror=function(){i(t.error)}})}function U(t){var o=new FileReader,i=B(o);return o.readAsArrayBuffer(t),i}function D(t){var o=new FileReader,i=B(o);return o.readAsText(t),i}function u(t){for(var o=new Uint8Array(t),i=new Array(o.length),d=0;d<o.length;d++)i[d]=String.fromCharCode(o[d]);return i.join("")}function T(t){if(t.slice)return t.slice(0);var o=new Uint8Array(t.byteLength);return o.set(new Uint8Array(t)),o.buffer}function x(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?typeof t=="string"?this._bodyText=t:b.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:b.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():b.arrayBuffer&&b.blob&&g(t)?(this._bodyArrayBuffer=T(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):b.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||y(t))?this._bodyArrayBuffer=T(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||(typeof t=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=P(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?P(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(U)}),this.text=function(){var t=P(this);if(t)return t;if(this._bodyBlob)return D(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(S)}),this.json=function(){return this.text().then(JSON.parse)},this}var I=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function M(t){var o=t.toUpperCase();return I.indexOf(o)>-1?o:t}function A(t,o){o=o||{};var i=o.body;if(t instanceof A){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,o.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,!i&&t._bodyInit!=null&&(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=o.credentials||this.credentials||"same-origin",(o.headers||!this.headers)&&(this.headers=new f(o.headers)),this.method=M(o.method||this.method||"GET"),this.mode=o.mode||this.mode||null,this.signal=o.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})};function S(t){var o=new FormData;return t.trim().split("&").forEach(function(i){if(i){var d=i.split("="),h=d.shift().replace(/\+/g," "),e=d.join("=").replace(/\+/g," ");o.append(decodeURIComponent(h),decodeURIComponent(e))}}),o}function j(t){var o=new f,i=t.replace(/\r?\n[\t ]+/g," ");return i.split(/\r?\n/).forEach(function(d){var h=d.split(":"),e=h.shift().trim();if(e){var r=h.join(":").trim();o.append(e,r)}}),o}x.call(A.prototype);function v(t,o){o||(o={}),this.type="default",this.status=o.status===void 0?200:o.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in o?o.statusText:"OK",this.headers=new f(o.headers),this.url=o.url||"",this._initBody(t)}x.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var H=[301,302,303,307,308];v.redirect=function(t,o){if(H.indexOf(o)===-1)throw new RangeError("Invalid status code");return new v(null,{status:o,headers:{location:t}})},a.DOMException=w.DOMException;try{new a.DOMException}catch{a.DOMException=function(o,i){this.message=o,this.name=i;var d=Error(o);this.stack=d.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function E(t,o){return new Promise(function(i,d){var h=new A(t,o);if(h.signal&&h.signal.aborted)return d(new a.DOMException("Aborted","AbortError"));var e=new XMLHttpRequest;function r(){e.abort()}e.onload=function(){var n={status:e.status,statusText:e.statusText,headers:j(e.getAllResponseHeaders()||"")};n.url="responseURL"in e?e.responseURL:n.headers.get("X-Request-URL");var l="response"in e?e.response:e.responseText;i(new v(l,n))},e.onerror=function(){d(new TypeError("Network request failed"))},e.ontimeout=function(){d(new TypeError("Network request failed"))},e.onabort=function(){d(new a.DOMException("Aborted","AbortError"))},e.open(h.method,h.url,!0),h.credentials==="include"?e.withCredentials=!0:h.credentials==="omit"&&(e.withCredentials=!1),"responseType"in e&&b.blob&&(e.responseType="blob"),h.headers.forEach(function(n,l){e.setRequestHeader(l,n)}),h.signal&&(h.signal.addEventListener("abort",r),e.onreadystatechange=function(){e.readyState===4&&h.signal.removeEventListener("abort",r)}),e.send(typeof h._bodyInit>"u"?null:h._bodyInit)})}return E.polyfill=!0,w.fetch||(w.fetch=E,w.Headers=f,w.Request=A,w.Response=v),a.Headers=f,a.Request=A,a.Response=v,a.fetch=E,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(typeof self<"u"?self:C)})();export{V as f};