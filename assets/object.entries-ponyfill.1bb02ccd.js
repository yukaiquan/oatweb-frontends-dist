var t,i;function s(){if(i)return t;i=1;var o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},u=function(r,e){return Object.prototype.propertyIsEnumerable.call(r,e)};function a(r){if(r==null)throw new TypeError("Cannot convert undefined or null to object");var e=[];for(var n in r)o(r,n)&&u(r,n)&&e.push([n,r[n]]);return e}return t=a,t}var c=typeof Object.entries=="function"?Object.entries:s();export{c as o};