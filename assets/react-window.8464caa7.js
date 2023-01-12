import{o as X,p as W,_ as Y}from"./@babel.d3038ccc.js";import{m as N}from"./memoize-one.38c86d42.js";import{r as E}from"./react.9f8bb2ca.js";var ee=typeof performance=="object"&&typeof performance.now=="function",A=ee?function(){return performance.now()}:function(){return Date.now()};function U(s){cancelAnimationFrame(s.id)}function te(s,t){var r=A();function a(){A()-r>=t?s.call(null):o.id=requestAnimationFrame(a)}var o={id:requestAnimationFrame(a)};return o}var x=null;function $(s){if(s===void 0&&(s=!1),x===null||s){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var a=document.createElement("div"),o=a.style;return o.width="100px",o.height="100px",t.appendChild(a),document.body.appendChild(t),t.scrollLeft>0?x="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?x="negative":x="positive-ascending"),document.body.removeChild(t),x}return x}var re=150,ae=function(t,r){return t};function ie(s){var t,r=s.getItemOffset,a=s.getEstimatedTotalSize,o=s.getItemSize,u=s.getOffsetForIndexAndAlignment,c=s.getStartIndexForOffset,m=s.getStopIndexForStartIndex,S=s.initInstanceProps,g=s.shouldResetStyleCacheOnItemSizeChange,_=s.validateProps;return t=function(y){X(T,y);function T(h){var e;return e=y.call(this,h)||this,e._instanceProps=S(e.props,W(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:W(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=N(function(i,n,l,d){return e.props.onItemsRendered({overscanStartIndex:i,overscanStopIndex:n,visibleStartIndex:l,visibleStopIndex:d})}),e._callOnScroll=void 0,e._callOnScroll=N(function(i,n,l){return e.props.onScroll({scrollDirection:i,scrollOffset:n,scrollUpdateWasRequested:l})}),e._getItemStyle=void 0,e._getItemStyle=function(i){var n=e.props,l=n.direction,d=n.itemSize,p=n.layout,f=e._getItemStyleCache(g&&d,g&&p,g&&l),v;if(f.hasOwnProperty(i))v=f[i];else{var I=r(e.props,i,e._instanceProps),z=o(e.props,i,e._instanceProps),O=l==="horizontal"||p==="horizontal",R=l==="rtl",b=O?I:0;f[i]=v={position:"absolute",left:R?void 0:b,right:R?b:void 0,top:O?0:I,height:O?"100%":z,width:O?z:"100%"}}return v},e._getItemStyleCache=void 0,e._getItemStyleCache=N(function(i,n,l){return{}}),e._onScrollHorizontal=function(i){var n=i.currentTarget,l=n.clientWidth,d=n.scrollLeft,p=n.scrollWidth;e.setState(function(f){if(f.scrollOffset===d)return null;var v=e.props.direction,I=d;if(v==="rtl")switch($()){case"negative":I=-d;break;case"positive-descending":I=p-l-d;break}return I=Math.max(0,Math.min(I,p-l)),{isScrolling:!0,scrollDirection:f.scrollOffset<d?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(i){var n=i.currentTarget,l=n.clientHeight,d=n.scrollHeight,p=n.scrollTop;e.setState(function(f){if(f.scrollOffset===p)return null;var v=Math.max(0,Math.min(p,d-l));return{isScrolling:!0,scrollDirection:f.scrollOffset<v?"forward":"backward",scrollOffset:v,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(i){var n=e.props.outerRef;e._outerRef=i,typeof n=="function"?n(i):n!=null&&typeof n=="object"&&n.hasOwnProperty("current")&&(n.current=i)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&U(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=te(e._resetIsScrolling,re)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}T.getDerivedStateFromProps=function(e,i){return ne(e,i),_(e),null};var M=T.prototype;return M.scrollTo=function(e){e=Math.max(0,e),this.setState(function(i){return i.scrollOffset===e?null:{scrollDirection:i.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},M.scrollToItem=function(e,i){i===void 0&&(i="auto");var n=this.props.itemCount,l=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(u(this.props,e,i,l,this._instanceProps))},M.componentDidMount=function(){var e=this.props,i=e.direction,n=e.initialScrollOffset,l=e.layout;if(typeof n=="number"&&this._outerRef!=null){var d=this._outerRef;i==="horizontal"||l==="horizontal"?d.scrollLeft=n:d.scrollTop=n}this._callPropsCallbacks()},M.componentDidUpdate=function(){var e=this.props,i=e.direction,n=e.layout,l=this.state,d=l.scrollOffset,p=l.scrollUpdateWasRequested;if(p&&this._outerRef!=null){var f=this._outerRef;if(i==="horizontal"||n==="horizontal")if(i==="rtl")switch($()){case"negative":f.scrollLeft=-d;break;case"positive-ascending":f.scrollLeft=d;break;default:var v=f.clientWidth,I=f.scrollWidth;f.scrollLeft=I-v-d;break}else f.scrollLeft=d;else f.scrollTop=d}this._callPropsCallbacks()},M.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&U(this._resetIsScrollingTimeoutId)},M.render=function(){var e=this.props,i=e.children,n=e.className,l=e.direction,d=e.height,p=e.innerRef,f=e.innerElementType,v=e.innerTagName,I=e.itemCount,z=e.itemData,O=e.itemKey,R=O===void 0?ae:O,b=e.layout,K=e.outerElementType,V=e.outerTagName,B=e.style,j=e.useIsScrolling,G=e.width,D=this.state.isScrolling,L=l==="horizontal"||b==="horizontal",Z=L?this._onScrollHorizontal:this._onScrollVertical,P=this._getRangeToRender(),J=P[0],Q=P[1],k=[];if(I>0)for(var w=J;w<=Q;w++)k.push(E.exports.createElement(i,{data:z,key:R(w,z),index:w,isScrolling:j?D:void 0,style:this._getItemStyle(w)}));var F=a(this.props,this._instanceProps);return E.exports.createElement(K||V||"div",{className:n,onScroll:Z,ref:this._outerRefSetter,style:Y({position:"relative",height:d,width:G,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:l},B)},E.exports.createElement(f||v||"div",{children:k,ref:p,style:{height:L?"100%":F,pointerEvents:D?"none":void 0,width:L?F:"100%"}}))},M._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var i=this._getRangeToRender(),n=i[0],l=i[1],d=i[2],p=i[3];this._callOnItemsRendered(n,l,d,p)}}if(typeof this.props.onScroll=="function"){var f=this.state,v=f.scrollDirection,I=f.scrollOffset,z=f.scrollUpdateWasRequested;this._callOnScroll(v,I,z)}},M._getRangeToRender=function(){var e=this.props,i=e.itemCount,n=e.overscanCount,l=this.state,d=l.isScrolling,p=l.scrollDirection,f=l.scrollOffset;if(i===0)return[0,0,0,0];var v=c(this.props,f,this._instanceProps),I=m(this.props,v,f,this._instanceProps),z=!d||p==="backward"?Math.max(1,n):1,O=!d||p==="forward"?Math.max(1,n):1;return[Math.max(0,v-z),Math.max(0,Math.min(i-1,I+O)),v,I]},T}(E.exports.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var ne=function(t,r){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,r.instance},oe=50,C=function(t,r,a){var o=t,u=o.itemSize,c=a.itemMetadataMap,m=a.lastMeasuredIndex;if(r>m){var S=0;if(m>=0){var g=c[m];S=g.offset+g.size}for(var _=m+1;_<=r;_++){var y=u(_);c[_]={offset:S,size:y},S+=y}a.lastMeasuredIndex=r}return c[r]},se=function(t,r,a){var o=r.itemMetadataMap,u=r.lastMeasuredIndex,c=u>0?o[u].offset:0;return c>=a?H(t,r,u,0,a):le(t,r,Math.max(0,u),a)},H=function(t,r,a,o,u){for(;o<=a;){var c=o+Math.floor((a-o)/2),m=C(t,c,r).offset;if(m===u)return c;m<u?o=c+1:m>u&&(a=c-1)}return o>0?o-1:0},le=function(t,r,a,o){for(var u=t.itemCount,c=1;a<u&&C(t,a,r).offset<o;)a+=c,c*=2;return H(t,r,Math.min(a,u-1),Math.floor(a/2),o)},q=function(t,r){var a=t.itemCount,o=r.itemMetadataMap,u=r.estimatedItemSize,c=r.lastMeasuredIndex,m=0;if(c>=a&&(c=a-1),c>=0){var S=o[c];m=S.offset+S.size}var g=a-c-1,_=g*u;return m+_},fe=ie({getItemOffset:function(t,r,a){return C(t,r,a).offset},getItemSize:function(t,r,a){return a.itemMetadataMap[r].size},getEstimatedTotalSize:q,getOffsetForIndexAndAlignment:function(t,r,a,o,u){var c=t.direction,m=t.height,S=t.layout,g=t.width,_=c==="horizontal"||S==="horizontal",y=_?g:m,T=C(t,r,u),M=q(t,u),h=Math.max(0,Math.min(M-y,T.offset)),e=Math.max(0,T.offset-y+T.size);switch(a==="smart"&&(o>=e-y&&o<=h+y?a="auto":a="center"),a){case"start":return h;case"end":return e;case"center":return Math.round(e+(h-e)/2);case"auto":default:return o>=e&&o<=h?o:o<e?e:h}},getStartIndexForOffset:function(t,r,a){return se(t,a,r)},getStopIndexForStartIndex:function(t,r,a,o){for(var u=t.direction,c=t.height,m=t.itemCount,S=t.layout,g=t.width,_=u==="horizontal"||S==="horizontal",y=_?g:c,T=C(t,r,o),M=a+y,h=T.offset+T.size,e=r;e<m-1&&h<M;)e++,h+=C(t,e,o).size;return e},initInstanceProps:function(t,r){var a=t,o=a.estimatedItemSize,u={itemMetadataMap:{},estimatedItemSize:o||oe,lastMeasuredIndex:-1};return r.resetAfterIndex=function(c,m){m===void 0&&(m=!0),u.lastMeasuredIndex=Math.min(u.lastMeasuredIndex,c-1),r._getItemStyleCache(-1),m&&r.forceUpdate()},u},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});export{fe as V};