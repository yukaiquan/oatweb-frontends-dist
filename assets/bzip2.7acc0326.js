var b={};b.array=function(o){var w=0,y=0,v=[0,1,3,7,15,31,63,127,255];return function(t){for(var i=0;t>0;){var h=8-w;t>=h?(i<<=h,i|=v[h]&o[y++],w=0,t-=h):(i<<=t,i|=(o[y]&v[t]<<8-t-w)>>8-t-w,w+=t,t=0)}return i}};b.simple=function(o){var w=b.header(o),y,v,t=[],i=0;do v=b.decompress(o,w),v!=-1&&(t.push(v),i+=v.byteLength);while(v!=-1);y=new Uint8Array(i),i=0;for(var h=0;h<t.length;++h)v=t[h],y.set(v,i),i+=v.byteLength;return y};b.header=function(o){if(o(8*3)!=4348520)throw"No magic number found";var w=o(8)-48;if(w<1||w>9)throw"Not a BZIP archive";return w};b.decompress=function(o,w,y){for(var v=20,t=258,i=0,h=1,J=50,z=1e5*9,x="",r=0;r<6;r++)x+=o(8).toString(16);if(x=="177245385090")return-1;if(x!="314159265359")throw"eek not valid bzip data";if(o(32),o(1))throw"unsupported obsolete version";var C=o(24);if(C>z)throw"Initial position larger than buffer size";var e=o(16),N=new Uint8Array(256),P=0;for(r=0;r<16;r++)if(e&1<<15-r){var T=o(16);for(a=0;a<16;a++)T&1<<15-a&&(N[P++]=16*r+a)}var F=o(3);if(F<2||F>6)throw"another error";var j=o(15);if(j==0)throw"meh";for(var l=[],r=0;r<F;r++)l[r]=r;for(var H=new Uint8Array(32768),r=0;r<j;r++){for(var a=0;o(1);a++)if(a>=F)throw"whoops another error";var n=l[a];l.splice(a,1),l.splice(0,0,n),H[r]=n}for(var u=P+2,K=[],a=0;a<F;a++){var U=new Uint8Array(t),_=new Uint8Array(v+1);e=o(5);for(var r=0;r<u;r++){for(;;){if(e<1||e>v)throw"I gave up a while ago on writing error messages";if(!o(1))break;o(1)?e--:e++}U[r]=e}var d,A;d=A=U[0];for(var r=1;r<u;r++)U[r]>A?A=U[r]:U[r]<d&&(d=U[r]);var f;f=K[a]={},f.permute=new Uint32Array(t),f.limit=new Uint32Array(v+1),f.base=new Uint32Array(v+1),f.minLen=d,f.maxLen=A;for(var O=f.base.subarray(1),M=f.limit.subarray(1),I=0,r=d;r<=A;r++)for(var e=0;e<u;e++)U[e]==r&&(f.permute[I++]=e);for(r=d;r<=A;r++)_[r]=M[r]=0;for(r=0;r<u;r++)_[U[r]]++;for(I=e=0,r=d;r<A;r++)I+=_[r],M[r]=I-1,I<<=1,O[r+1]=I-(e+=_[r]);M[A]=I+_[A]-1,O[d]=0}for(var m=new Uint32Array(256),r=0;r<256;r++)l[r]=r;var c,s,u,E;c=s=u=E=0;for(var k=new Uint32Array(z);;){if(!u--){if(u=J-1,E>=j)throw"meow i'm a kitty, that's an error";f=K[H[E++]],O=f.base.subarray(1),M=f.limit.subarray(1)}for(r=f.minLen,a=o(r);;){if(r>f.maxLen)throw"rawr i'm a dinosaur";if(a<=M[r])break;r++,a=a<<1|o(1)}if(a-=O[r],a<0||a>=t)throw"moo i'm a cow";var S=f.permute[a];if(S==i||S==h){c||(c=1,e=0),S==i?e+=c:e+=2*c,c<<=1;continue}if(c){if(c=0,s+e>=z)throw"Boom.";for(n=N[l[0]],m[n]+=e;e--;)k[s++]=n}if(S>P)break;if(s>=z)throw"I can't think of anything. Error";r=S-1,n=l[r],l.splice(r,1),l.splice(0,0,n),n=N[n],m[n]++,k[s++]=n}if(C<0||C>=s)throw"I'm a monkey and I'm throwing something at someone, namely you";for(var a=0,r=0;r<256;r++)T=a+m[r],m[r]=a,a=T;for(var r=0;r<s;r++)n=k[r]&255,k[m[n]]|=r<<8,m[n]++;var g=0,B=0,R=0;s&&(g=k[C],B=g&255,g>>=8,R=-1),s=s;var Y=new Uint8Array(z),X,Z,D,q=0;for(y||(y=1/0);s;){for(s--,Z=B,g=k[g],B=g&255,g>>=8,R++==3?(X=B,D=Z,B=-1):(X=1,D=B);X--;)if(Y[q++]=D,!--y)return Y;B!=Z&&(R=0)}return Y.subarray(0,q)};var Q=b;export{Q as b};