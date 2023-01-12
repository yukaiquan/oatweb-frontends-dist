import{r as U}from"./react.9f8bb2ca.js";var b={},W=U.exports;function $(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}}),n.default=e,n}var l=$(W);function w(){return w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},w.apply(this,arguments)}function D(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,_(e,n)}function _(e,n){return _=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},_(e,n)}function P(e,n){if(e==null)return{};var r={},i=Object.keys(e),t,o;for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var O=new Map,v=new WeakMap,S=0,x=void 0;function B(e){x=e}function F(e){return e?(v.has(e)||(S+=1,v.set(e,S.toString())),v.get(e)):"0"}function L(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?F(e.root):e[n])}).toString()}function T(e){var n=L(e),r=O.get(n);if(!r){var i=new Map,t,o=new IntersectionObserver(function(c){c.forEach(function(s){var a,u=s.isIntersecting&&t.some(function(f){return s.intersectionRatio>=f});e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=u),(a=i.get(s.target))==null||a.forEach(function(f){f(u,s)})})},e);t=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:o,elements:i},O.set(n,r)}return r}function I(e,n,r,i){if(r===void 0&&(r={}),i===void 0&&(i=x),typeof window.IntersectionObserver>"u"&&i!==void 0){var t=e.getBoundingClientRect();return n(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var o=T(r),c=o.id,s=o.observer,a=o.elements,u=a.get(e)||[];return a.has(e)||a.set(e,u),u.push(n),s.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(a.delete(e),s.unobserve(e)),a.size===0&&(s.disconnect(),O.delete(c))}}var z=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function N(e){return typeof e.children!="function"}var K=function(e){D(n,e);function n(i){var t;return t=e.call(this,i)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(o){t.node&&(t.unobserve(),!o&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=o||null,t.observeNode()},t.handleChange=function(o,c){o&&t.props.triggerOnce&&t.unobserve(),N(t.props)||t.setState({inView:o,entry:c}),t.props.onChange&&t.props.onChange(o,c)},t.state={inView:!!i.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,o=t.threshold,c=t.root,s=t.rootMargin,a=t.trackVisibility,u=t.delay,f=t.fallbackInView;this._unobserveCb=I(this.node,this.handleChange,{threshold:o,root:c,rootMargin:s,trackVisibility:a,delay:u},f)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!N(this.props)){var t=this.state,o=t.inView,c=t.entry;return this.props.children({inView:o,entry:c,ref:this.handleNode})}var s=this.props,a=s.children,u=s.as,f=P(s,z);return l.createElement(u||"div",w({ref:this.handleNode},f),a)},n}(l.Component);function q(e){var n,r=e===void 0?{}:e,i=r.threshold,t=r.delay,o=r.trackVisibility,c=r.rootMargin,s=r.root,a=r.triggerOnce,u=r.skip,f=r.initialInView,k=r.fallbackInView,E=r.onChange,m=l.useState(null),h=m[0],A=m[1],g=l.useRef(),M=l.useState({inView:!!f,entry:void 0}),y=M[0],R=M[1];g.current=E,l.useEffect(function(){if(!(u||!h)){var p=I(h,function(C,V){R({inView:C,entry:V}),g.current&&g.current(C,V),V.isIntersecting&&a&&p&&(p(),p=void 0)},{root:s,rootMargin:c,threshold:i,trackVisibility:o,delay:t},k);return function(){p&&p()}}},[Array.isArray(i)?i.toString():i,h,s,c,a,u,o,k,t]);var j=(n=y.entry)==null?void 0:n.target;l.useEffect(function(){!h&&j&&!a&&!u&&R({inView:!!f,entry:void 0})},[h,j,a,u,f]);var d=[A,y.inView,y.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}b.InView=K;b.defaultFallbackInView=B;b.observe=I;b.useInView=q;export{b as r};
