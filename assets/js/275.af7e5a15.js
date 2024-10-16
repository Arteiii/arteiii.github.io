"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[275],{1310:(t,e,r)=>{r.d(e,{c:()=>u});var n=r(1635);function o(t){return t.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function c(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce((function(t,e){return t.replace(e,r)}),t)}function l(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var r=e.splitRegexp,n=void 0===r?i:r,l=e.stripRegexp,u=void 0===l?a:l,s=e.transform,f=void 0===s?o:s,p=e.delimiter,v=void 0===p?" ":p,m=c(c(t,n,"$1\0$2"),u,"\0"),b=0,d=m.length;"\0"===m.charAt(b);)b++;for(;"\0"===m.charAt(d-1);)d--;return m.slice(b,d).split("\0").map(f).join(v)}(t,(0,n.__assign)({delimiter:"."},e))}function u(t,e){return void 0===e&&(e={}),l(t,(0,n.__assign)({delimiter:"-"},e))}},8453:(t,e,r)=>{r.d(e,{R:()=>a,x:()=>c});var n=r(6540);const o={},i=n.createContext(o);function a(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),n.createElement(i.Provider,{value:e},t.children)}},6422:(t,e,r)=>{r.d(e,{$Ek:()=>b});var n=r(6540),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){var n;return(e="symbol"==typeof(n=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){return t&&t.map(((t,e)=>n.createElement(t.tag,s({key:e},t.attr),p(t.child))))}function v(t){return e=>n.createElement(m,l({attr:s({},t.attr)},e),p(t.child))}function m(t){var e=e=>{var r,{attr:o,size:i,title:u}=t,f=c(t,a),p=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,f,{className:r,style:s(s({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),t.children)};return void 0!==i?n.createElement(i.Consumer,null,(t=>e(t))):e(o)}function b(t){return v({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M48,116a4,4,0,0,0,4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88a4,4,0,0,0-1.17-2.83l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72A4,4,0,0,0,48,116ZM156,41.65,198.35,84H156ZM224,208a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V152a4,4,0,0,1,8,0v52h24A4,4,0,0,1,224,208ZM87.85,195.8a17,17,0,0,1-7.43,12.41C76,211.12,70.38,212,65.2,212A57.89,57.89,0,0,1,51,210.11a4,4,0,0,1,2.15-7.7c4.22,1.17,16.56,3.29,22.83-.88a8.94,8.94,0,0,0,3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94-9.68-2.8-21.72-6.28-20.14-18.77a16.66,16.66,0,0,1,7.22-12.13c4.56-3.07,11-4.36,19.1-3.82a61.11,61.11,0,0,1,10.47,1.61,4,4,0,0,1-2,7.74c-4.3-1.13-16.81-3.12-23.06,1.11a8.53,8.53,0,0,0-3.75,6.49c-.66,5.17,3.89,7,14.42,10.08C76.27,178,89.65,181.84,87.85,195.8ZM136,148c-15.44,0-28,14.35-28,32s12.56,32,28,32a25.56,25.56,0,0,0,16.31-6l4.86,4.85a4,4,0,0,0,5.65-5.66l-5.06-5.06A34.82,34.82,0,0,0,164,180C164,162.35,151.44,148,136,148Zm0,56c-11,0-20-10.77-20-24s9-24,20-24,20,10.77,20,24a27.16,27.16,0,0,1-4,14.36l-5.19-5.19a4,4,0,1,0-5.65,5.66l5.47,5.47A17.5,17.5,0,0,1,136,204Z"},child:[]}]})(t)}}}]);