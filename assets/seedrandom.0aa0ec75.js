import{c as S}from"./@babel.d3038ccc.js";import{r as J}from"./readable-stream.b9ecb3ea.js";var B={exports:{}};(function(g){(function(j,x,f){function v(n){var i=this,e=u();i.next=function(){var t=2091639*i.s0+i.c*23283064365386963e-26;return i.s0=i.s1,i.s1=i.s2,i.s2=t-(i.c=t|0)},i.c=1,i.s0=e(" "),i.s1=e(" "),i.s2=e(" "),i.s0-=e(n),i.s0<0&&(i.s0+=1),i.s1-=e(n),i.s1<0&&(i.s1+=1),i.s2-=e(n),i.s2<0&&(i.s2+=1),e=null}function p(n,i){return i.c=n.c,i.s0=n.s0,i.s1=n.s1,i.s2=n.s2,i}function l(n,i){var e=new v(n),t=i&&i.state,r=e.next;return r.int32=function(){return e.next()*4294967296|0},r.double=function(){return r()+(r()*2097152|0)*11102230246251565e-32},r.quick=r,t&&(typeof t=="object"&&p(t,e),r.state=function(){return p(e,{})}),r}function u(){var n=4022871197,i=function(e){e=String(e);for(var t=0;t<e.length;t++){n+=e.charCodeAt(t);var r=.02519603282416938*n;n=r>>>0,r-=n,r*=n,n=r>>>0,r-=n,n+=r*4294967296}return(n>>>0)*23283064365386963e-26};return i}x&&x.exports?x.exports=l:f&&f.amd?f(function(){return l}):this.alea=l})(S,g,!1)})(B);var U={exports:{}};(function(g){(function(j,x,f){function v(u){var n=this,i="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},u===(u|0)?n.x=u:i+=u;for(var e=0;e<i.length+64;e++)n.x^=i.charCodeAt(e)|0,n.next()}function p(u,n){return n.x=u.x,n.y=u.y,n.z=u.z,n.w=u.w,n}function l(u,n){var i=new v(u),e=n&&n.state,t=function(){return(i.next()>>>0)/4294967296};return t.double=function(){do var r=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(r+o)/(1<<21);while(c===0);return c},t.int32=i.next,t.quick=t,e&&(typeof e=="object"&&p(e,i),t.state=function(){return p(i,{})}),t}x&&x.exports?x.exports=l:f&&f.amd?f(function(){return l}):this.xor128=l})(S,g,!1)})(U);var V={exports:{}};(function(g){(function(j,x,f){function v(u){var n=this,i="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^(t^t<<1))|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,u===(u|0)?n.x=u:i+=u;for(var e=0;e<i.length+64;e++)n.x^=i.charCodeAt(e)|0,e==i.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function p(u,n){return n.x=u.x,n.y=u.y,n.z=u.z,n.w=u.w,n.v=u.v,n.d=u.d,n}function l(u,n){var i=new v(u),e=n&&n.state,t=function(){return(i.next()>>>0)/4294967296};return t.double=function(){do var r=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(r+o)/(1<<21);while(c===0);return c},t.int32=i.next,t.quick=t,e&&(typeof e=="object"&&p(e,i),t.state=function(){return p(i,{})}),t}x&&x.exports?x.exports=l:f&&f.amd?f(function(){return l}):this.xorwow=l})(S,g,!1)})(V);var E={exports:{}};(function(g){(function(j,x,f){function v(u){var n=this;n.next=function(){var e=n.x,t=n.i,r,o;return r=e[t],r^=r>>>7,o=r^r<<24,r=e[t+1&7],o^=r^r>>>10,r=e[t+3&7],o^=r^r>>>3,r=e[t+4&7],o^=r^r<<7,r=e[t+7&7],r=r^r<<13,o^=r^r<<9,e[t]=o,n.i=t+1&7,o};function i(e,t){var r,o=[];if(t===(t|0))o[0]=t;else for(t=""+t,r=0;r<t.length;++r)o[r&7]=o[r&7]<<15^t.charCodeAt(r)+o[r+1&7]<<13;for(;o.length<8;)o.push(0);for(r=0;r<8&&o[r]===0;++r);for(r==8?o[7]=-1:o[r],e.x=o,e.i=0,r=256;r>0;--r)e.next()}i(n,u)}function p(u,n){return n.x=u.x.slice(),n.i=u.i,n}function l(u,n){u==null&&(u=+new Date);var i=new v(u),e=n&&n.state,t=function(){return(i.next()>>>0)/4294967296};return t.double=function(){do var r=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(r+o)/(1<<21);while(c===0);return c},t.int32=i.next,t.quick=t,e&&(e.x&&p(e,i),t.state=function(){return p(i,{})}),t}x&&x.exports?x.exports=l:f&&f.amd?f(function(){return l}):this.xorshift7=l})(S,g,!1)})(E);var F={exports:{}};(function(g){(function(j,x,f){function v(u){var n=this;n.next=function(){var e=n.w,t=n.X,r=n.i,o,c;return n.w=e=e+1640531527|0,c=t[r+34&127],o=t[r=r+1&127],c^=c<<13,o^=o<<17,c^=c>>>15,o^=o>>>12,c=t[r]=c^o,n.i=r,c+(e^e>>>16)|0};function i(e,t){var r,o,c,m,$,d=[],M=128;for(t===(t|0)?(o=t,t=null):(t=t+"\0",o=0,M=Math.max(M,t.length)),c=0,m=-32;m<M;++m)t&&(o^=t.charCodeAt((m+32)%t.length)),m===0&&($=o),o^=o<<10,o^=o>>>15,o^=o<<4,o^=o>>>13,m>=0&&($=$+1640531527|0,r=d[m&127]^=o+$,c=r==0?c+1:0);for(c>=128&&(d[(t&&t.length||0)&127]=-1),c=127,m=4*128;m>0;--m)o=d[c+34&127],r=d[c=c+1&127],o^=o<<13,r^=r<<17,o^=o>>>15,r^=r>>>12,d[c]=o^r;e.w=$,e.X=d,e.i=c}i(n,u)}function p(u,n){return n.i=u.i,n.w=u.w,n.X=u.X.slice(),n}function l(u,n){u==null&&(u=+new Date);var i=new v(u),e=n&&n.state,t=function(){return(i.next()>>>0)/4294967296};return t.double=function(){do var r=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(r+o)/(1<<21);while(c===0);return c},t.int32=i.next,t.quick=t,e&&(e.X&&p(e,i),t.state=function(){return p(i,{})}),t}x&&x.exports?x.exports=l:f&&f.amd?f(function(){return l}):this.xor4096=l})(S,g,!1)})(F);var H={exports:{}};(function(g){(function(j,x,f){function v(u){var n=this,i="";n.next=function(){var t=n.b,r=n.c,o=n.d,c=n.a;return t=t<<25^t>>>7^r,r=r-o|0,o=o<<24^o>>>8^c,c=c-t|0,n.b=t=t<<20^t>>>12^r,n.c=r=r-o|0,n.d=o<<16^r>>>16^c,n.a=c-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,u===Math.floor(u)?(n.a=u/4294967296|0,n.b=u|0):i+=u;for(var e=0;e<i.length+20;e++)n.b^=i.charCodeAt(e)|0,n.next()}function p(u,n){return n.a=u.a,n.b=u.b,n.c=u.c,n.d=u.d,n}function l(u,n){var i=new v(u),e=n&&n.state,t=function(){return(i.next()>>>0)/4294967296};return t.double=function(){do var r=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(r+o)/(1<<21);while(c===0);return c},t.int32=i.next,t.quick=t,e&&(typeof e=="object"&&p(e,i),t.state=function(){return p(i,{})}),t}x&&x.exports?x.exports=l:f&&f.amd?f(function(){return l}):this.tychei=l})(S,g,!1)})(H);var I={exports:{}};(function(g){(function(j,x,f){var v=256,p=6,l=52,u="random",n=f.pow(v,p),i=f.pow(2,l),e=i*2,t=v-1,r;function o(a,s,y){var w=[];s=s==!0?{entropy:!0}:s||{};var h=d($(s.entropy?[a,D(x)]:a==null?M():a,3),w),b=new c(w),C=function(){for(var X=b.g(p),A=n,z=0;X<i;)X=(X+z)*v,A*=v,z=b.g(1);for(;X>=e;)X/=2,A/=2,z>>>=1;return(X+z)/A};return C.int32=function(){return b.g(4)|0},C.quick=function(){return b.g(4)/4294967296},C.double=C,d(D(b.S),x),(s.pass||y||function(X,A,z,q){return q&&(q.S&&m(q,b),X.state=function(){return m(b,{})}),z?(f[u]=X,A):X})(C,h,"global"in s?s.global:this==f,s.state)}function c(a){var s,y=a.length,w=this,h=0,b=w.i=w.j=0,C=w.S=[];for(y||(a=[y++]);h<v;)C[h]=h++;for(h=0;h<v;h++)C[h]=C[b=t&b+a[h%y]+(s=C[h])],C[b]=s;(w.g=function(X){for(var A,z=0,q=w.i,k=w.j,R=w.S;X--;)A=R[q=t&q+1],z=z*v+R[t&(R[q]=R[k=t&k+A])+(R[k]=A)];return w.i=q,w.j=k,z})(v)}function m(a,s){return s.i=a.i,s.j=a.j,s.S=a.S.slice(),s}function $(a,s){var y=[],w=typeof a,h;if(s&&w=="object")for(h in a)try{y.push($(a[h],s-1))}catch{}return y.length?y:w=="string"?a:a+"\0"}function d(a,s){for(var y=a+"",w,h=0;h<y.length;)s[t&h]=t&(w^=s[t&h]*19)+y.charCodeAt(h++);return D(s)}function M(){try{var a;return r&&(a=r.randomBytes)?a=a(v):(a=new Uint8Array(v),(j.crypto||j.msCrypto).getRandomValues(a)),D(a)}catch{var s=j.navigator,y=s&&s.plugins;return[+new Date,j,y,j.screen,D(x)]}}function D(a){return String.fromCharCode.apply(0,a)}if(d(f.random(),x),g.exports){g.exports=o;try{r=J}catch{}}else f["seed"+u]=o})(typeof self<"u"?self:S,[],Math)})(I);var K=B.exports,L=U.exports,N=V.exports,O=E.exports,P=F.exports,Q=H.exports,G=I.exports;G.alea=K;G.xor128=L;G.xorwow=N;G.xorshift7=O;G.xor4096=P;G.tychei=Q;var Y=G;export{Y as s};