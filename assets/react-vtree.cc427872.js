import{o as A,q as W,p as k,s as M}from"./@babel.d3038ccc.js";import{r as _}from"./react.9f8bb2ca.js";import{V as j}from"./react-window.8464caa7.js";import{a as E}from"./@jbrowse.1c1f30ba.js";import{m as L}from"./react-merge-refs.1793fef1.js";var y=function(){},V=function(n,a){return a===void 0&&(a=null),{child:null,isShown:a?a.public.isOpen&&a.isShown:!0,parent:a,public:n,sibling:null,visited:!1}},U=function(n,a){var i=a.getRecordData,t=i(n),e=t.data.id;return e},F=function(n){var a=n.index,i=n.data,t=i.component,e=i.getRecordData,r=i.treeData,l=n.style,u=n.isScrolling,d=e(a);return E(t,{...Object.assign({isScrolling:u,style:l,treeData:r},d)})},G=function(n,a,i){var t=n.createRecord,e=a.buildingTaskTimeout,r=a.placeholder,l=a.async,u=l===void 0?!1:l,d=a.treeWalker,f=u&&i.records!==void 0,m=i.records,S=[],T=new Map,x=e?{timeout:e}:void 0,s=new WeakMap,b=d(),h=b.next(),I=h.value,p=t(I.data,i,void 0,f?m.get(I.data.id):void 0);T.set(p.public.data.id,p),s.set(p,I);var o=p,c=!0,g=p,$=r!==void 0&&!(r===null&&!i.order),P=$?function(w){return w.timeRemaining()>0}:function(){return!0},z=function w(q){for(;o!==null;){if(!P(q)){requestIdleCallback(w,x);return}if(o.visited)o.visited=!1,o=o.sibling!==null?o.sibling:o.parent,g=o;else{var B=b.next(s.get(o)),O=B.value;if(O===void 0){c?c=!1:(o.isShown&&S.push(o.public.data.id),o.visited=o.child!==null,o=o.child!==null?o.child:o.sibling!==null?o.sibling:o.parent),g=o;continue}var D=t(O.data,i,c?void 0:o,f?m.get(O.data.id):void 0);T.set(D.public.data.id,D),s.set(D,O),!c&&g===o?g.child=D:g.sibling=D,g=D}}$&&i.setState({order:S,records:T,updateRequest:{}})};return $?requestIdleCallback(z,x):z(),r!==void 0&&u&&i.order?i:{order:S,records:T}},C=32768,R=2,H=function(n,a){var i=n.order,t=n.records,e=a.opennessState;if(typeof e!="object")return null;for(var r in e)if(!!t.has(r)){var l=e[r],u=t.get(r),d=typeof l=="boolean"?{open:l}:l,f=d.open,m=d.subtreeCallback,S=m===void 0?y:m,T=y,x=y;u.isShown&&(f?function(){for(var b=i.indexOf(r),h=u;h!==null;){if(h.sibling!==null){h=h.sibling;break}h=h.parent}var I=h===null?i.length-1-b:i.indexOf(h.public.data.id)-1-b,p=[[b+1,I]];T=function(c){if(c.isShown=c.parent?c.parent.public.isOpen&&c.parent.isShown:!0,c.isShown){var g=p[p.length-1];g.push(c.public.data.id),g.length===C+R&&p.push([b+1+C*p.length,0])}},x=function(){for(var c=0;c<p.length;c++){var g;(g=i).splice.apply(g,p[c])}}}():u.public.isOpen&&function(){var b=i.indexOf(r),h=0;T=function(p){p.isShown&&(h+=1),p.isShown=p.parent?p.parent.public.isOpen&&p.parent.isShown:!0},x=function(){i.splice(b+1,h)}}());for(var s=u;s!==null;)s.visited?(s.visited=!1,s=s===u?null:s.sibling!==null?s.sibling:s.parent):(s.public.isOpen=s===u?f:s.public.isOpen,S(s.public,u.public),s!==u&&T(s),s.visited=s.child!==null,s=s.child!==null?s.child:s===u?null:s.sibling!==null?s.sibling:s.parent);x()}return{order:i,records:t,updateRequest:{}}},K=function(n){return function(a,i,t){return t.refresh?G(n,a,i):H(i,t)}},N=function(v){A(n,v),n.getDerivedStateFromProps=function(t,e){var r=t.listRef,l=r===void 0?null:r,u=t.treeWalker,d=e.computeTree,f=e.list,m=e.order,S=e.treeWalker;return W({attachRefs:L([f,l])},u!==S||!m?d(t,e,{refresh:!0}):null,{treeWalker:u})};function n(i,t){var e;return e=v.call(this,i,t)||this,e.getRecordData=e.getRecordData.bind(k(e)),e.state={list:_.exports.createRef(),recomputeTree:e.recomputeTree.bind(k(e)),setState:e.setState.bind(k(e))},e}var a=n.prototype;return a.getItemData=function(){var t=this.props,e=t.children,r=t.itemData;return{component:e,getRecordData:this.getRecordData,treeData:r}},a.getRecordData=function(t){var e=this.state,r=e.order,l=e.records;return l.get(r[t]).public},a.recomputeTree=function(t){var e=this;return new Promise(function(r){e.setState(function(l){return l.computeTree(e.props,l,{opennessState:t})},r)})},a.scrollTo=function(t){var e;(e=this.state.list.current)==null||e.scrollTo(t)},a.scrollToItem=function(t,e){var r;(r=this.state.list.current)==null||r.scrollToItem(this.state.order.indexOf(t),e)},n}(_.exports.PureComponent);N.defaultProps={rowComponent:F};var X=K({createRecord:function(n,a,i,t){var e=a.recomputeTree,r=a.resetAfterId,l=V({data:n,height:t?t.public.height:n.defaultHeight,isOpen:t?t.public.isOpen:n.isOpenByDefault,resize:function(d,f){l.public.height=d,r(l.public.data.id,f)},setOpen:function(d){var f;return e((f={},f[n.id]=d,f))}},i);return l}}),te=function(v){A(n,v);function n(i,t){var e;return e=v.call(this,i,t)||this,e.getItemSize=e.getItemSize.bind(k(e)),e.state=W({},e.state,{computeTree:X,resetAfterId:e.resetAfterId.bind(k(e))}),e}var a=n.prototype;return a.resetAfterId=function(t,e){var r;e===void 0&&(e=!1);var l=this.state,u=l.list,d=l.order;(r=u.current)==null||r.resetAfterIndex(d.indexOf(t),e)},a.recomputeTree=function(t){var e=this;return v.prototype.recomputeTree.call(this,t).then(function(){var r;(r=e.state.list.current)==null||r.resetAfterIndex(0,!0)})},a.render=function(){var t=this.props;t.children;var e=t.placeholder,r=t.itemSize,l=t.rowComponent;t.treeWalker;var u=M(t,["children","placeholder","itemSize","rowComponent","treeWalker"]),d=this.state,f=d.attachRefs,m=d.order;return e&&m.length===0?e:E(j,{...Object.assign({},u,{itemCount:m.length,itemData:this.getItemData(),itemKey:U,itemSize:r!=null?r:this.getItemSize,ref:f}),children:l})},a.getItemSize=function(t){return this.getRecordData(t).height},n}(N);export{te as V};