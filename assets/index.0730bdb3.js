import{r}from"./react.9f8bb2ca.js";import{j as o,a as t}from"./@jbrowse.1c1f30ba.js";import{u as S,E as C,A as y,S as u}from"./index.4faa1368.js";import"./react-wordcloud.baf87427.js";import"./tippy.js.1d5f9674.js";import{S as d}from"./index.5427e0da.js";import{P as b}from"./PapersCiteCard.1248bdf2.js";import"./react-photo-view.923f7cb9.js";/* empty css                    */import"./buffer.66f81d03.js";import"./buffer-crc32.64f36e84.js";import"./set-value.9a248538.js";import{o as q}from"./mobx-react.2a8c917b.js";import{bP as i,d6 as w,d5 as k,bo as G,d7 as T}from"./@mui.d95a2776.js";import{b as v}from"./react-use.dd3eab68.js";import"./@babel.d3038ccc.js";import"./rxjs.bbb58625.js";import"./mobx.82db3864.js";import"./rollup-plugin-node-polyfills.285eab2e.js";import"./mobx-state-tree.86fcbbc7.js";import"./@gmod.89422c98.js";import"./abortable-promise-cache.7cb58d6d.js";import"./abortcontroller-polyfill.e0408538.js";import"./quick-lru.2e8f10dc.js";import"./pako.ae457f40.js";import"./@jkbonfield.580cc4c5.js";import"./bzip2.7acc0326.js";import"./md5.e4ed9555.js";import"./crypt.894faad3.js";import"./charenc.26816e87.js";import"./is-buffer.30be6946.js";import"./long.81b4bfdc.js";import"./cross-fetch.5e5fd403.js";import"./generic-filehandle.a92b52fd.js";import"./object.entries-ponyfill.1bb02ccd.js";import"./binary-parser.62cc4542.js";import"./stream-browserify.c9806a5a.js";import"./readable-stream.b9ecb3ea.js";import"./inherits.0b103347.js";import"./string_decoder.54c7d31f.js";import"./safe-buffer.d6407320.js";import"./util-deprecate.7e67cde4.js";import"./fast-deep-equal.a94972be.js";import"./get-value.d7d31411.js";import"./isobject.df66a4ce.js";import"./tss-react.d823a444.js";import"./@emotion.97d8af27.js";import"./stylis.471761e6.js";import"./hoist-non-react-statics.7be3bd10.js";import"./react-use-measure.c76e41e7.js";import"./debounce.db2fda29.js";import"./json-stable-stringify.0a3208a5.js";import"./jsonify.125a2c45.js";import"./react-dom.55372f0a.js";import"./scheduler.f16d5006.js";import"./prop-types.ed5ed641.js";import"./rbush.c53ead3c.js";import"./canvas-sequencer.89cdaa84.js";import"./canvas2svg.bb21c42d.js";import"./clone.12982bcb.js";import"./librpc-web-mod.114fca1e.js";import"./@librpc.077300ae.js";import"./serialize-error.2d78dd57.js";import"./shortid.ae0851a5.js";import"./d3-scale.b5c2ec72.js";import"./react-popper.5e9e888f.js";import"./react-fast-compare.6ca799e7.js";import"./@popperjs.bc85b236.js";import"./file-saver.1b7919eb.js";import"./react-error-boundary.5999f6e6.js";import"./material-ui-popup-state.2f0cd738.js";import"./normalize-wheel.08b32984.js";import"./copy-to-clipboard.eb25ebbd.js";import"./toggle-selection.b84dd588.js";import"./react-d3-axis-mod.e8c27339.js";import"./load-script2.e50455fe.js";import"./react-draggable.a41929d4.js";import"./clsx.33a47233.js";import"./color.b8402d12.js";import"./color-string.6cf0e789.js";import"./color-name.e7a4e1d3.js";import"./simple-swizzle.bbda63e1.js";import"./is-arrayish.e606b633.js";import"./color-convert.69e17089.js";import"./@flatten-js.f79d6531.js";import"./pluralize.4d99efd8.js";import"./react-virtualized-auto-sizer.ca6237cd.js";import"./react-vtree.cc427872.js";import"./react-window.8464caa7.js";import"./memoize-one.38c86d42.js";import"./react-merge-refs.1793fef1.js";import"./detect-node.cdefd8ba.js";import"./http-range-fetcher.fcdfd695.js";import"./window-or-global.776535f1.js";import"./deepmerge.d048be44.js";import"./is-object.da397113.js";import"./escape-html.e5dfadb9.js";import"./dompurify.a6c1e8f6.js";import"./react-intersection-observer.8cfb7c97.js";import"./jexl.58bb62c6.js";import"./react-router-dom.66b1527d.js";import"./react-router.61103ab6.js";import"./@remix-run.a4d7d1fc.js";import"./axios.875095ff.js";import"./form-data.d1f94bc2.js";import"./echarts.af56a0c2.js";import"./zrender.d2a2db01.js";import"./tslib.60310f1a.js";import"./react-is.0322be43.js";import"./reselect.bd965e1c.js";import"./react-transition-group.095bf55b.js";import"./lodash.debounce.13769b0a.js";import"./resize-observer-polyfill.6a0cacef.js";import"./d3-cloud.fef403d3.js";import"./lodash.clonedeep.2bb591f8.js";import"./seedrandom.0aa0ec75.js";import"./mobx-react-lite.1bfe1eb4.js";import"./base64-js.db0f5df9.js";import"./ieee754.6e84f04f.js";import"./is-primitive.a4f13848.js";import"./is-plain-object.963f95c0.js";function A(){const{webStore:e,getSeqStore:s}=S();r.exports.useEffect(()=>{e.getPapersCited("GETSEQ"),e.getGenomes()},[]);const[g,f]=r.exports.useState(`You can enter the physical location or gene ID for sequence interception.
Gene ID eg: A.satnudSFS4D01G000045.1 A.satnudSFS4D01G000036.1`),[m,x]=v(),a=r.exports.useRef(),h=p=>{x(p),a.current.handleClickOpen(),l(!0)},[n,l]=r.exports.useState(!1),c=()=>{l(!1),console.log("close")};return o(i,{container:!0,spacing:1,className:"bggray",sx:{mt:1,mb:2,backgroundColor:"#f3f6f9",ml:0,width:"100%"},children:[o(i,{item:!0,xs:12,sm:12,md:6,lg:6,xl:3,sx:{pl:"0 !important"},children:[t(d,{title:"Get Sequence",icon:"icon-kuaisu"}),t(C,{})]}),o(i,{item:!0,xs:12,sm:12,md:6,lg:6,xl:5,children:[t(w,{minRows:27,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:g,style:{width:"100%",marginTop:"1rem",borderColor:"cornflowerblue",fontSize:"1rem"},onChange:p=>f(p.target.value),value:s.seq.seq}),o(y,{diybtn:!0,childRef:a,title:"Are you sure you want to copy?",content:"If you used copying, please cite the relevant paper (Oat Genome), thank you!",children:[t(k,{spacing:2,alignItems:"flex-end",sx:{transform:"translate(-1rem,-2.8rem)"},children:t(G,{color:"warning",variant:"contained",onClick:()=>h(s.seq.seq),endIcon:t(T,{}),children:"copy"})}),m.error?t(u,{open:n,message:m.error.message,color:"error",getCloses:c}):m.value&&t(u,{open:n,message:"Copy Success",color:"success",getCloses:c})]})]}),o(i,{item:!0,xs:12,sm:12,md:12,lg:12,xl:4,children:[t(d,{title:"Paper Cite",icon:"icon-lunwen"}),t(b,{inlist:e.papersCited})]})]})}const Yo=q(A);export{Yo as default};
