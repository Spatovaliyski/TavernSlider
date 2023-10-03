!function(){"use strict";var t,e={535:function(){var t=window.wp.blocks,e=window.wp.components,r=window.wp.element,n=window.wp.blockEditor,o="wp-json/wp/v2",a=function(t){return fetch(t).then((function(e){if(!e.ok)throw new Error("Network response was not ok: "+t);return e.json()})).catch((function(t){console.error("Error:",t)}))},i=function(t,e){var r=t.replace(/\/$/,""),n="".concat(r,"/").concat(o,"/").concat("users","/").concat(e);return a(n)},c=function(t,e){var r=t.replace(/\/$/,""),n="".concat(r,"/").concat(o,"/").concat("posts","/?per_page=").concat(e||5);return a(n)},l=function(t,e){var r=t.replace(/\/$/,""),n="".concat(r,"/").concat(o,"/").concat("media","/").concat(e);return a(n)};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new C(n||[]);return o(i,"_invoke",{value:R(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",m="suspendedYield",y="executing",d="completed",g={};function b(){}function w(){}function E(){}var _={};f(_,i,(function(){return this}));var P=Object.getPrototypeOf,x=P&&P(P(A([])));x&&x!==r&&n.call(x,i)&&(_=x);var S=E.prototype=b.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function R(e,r,n){var o=v;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?d:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(u(e)+" is not iterable")}return w.prototype=E,o(S,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},O(j.prototype),f(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(S),f(S,l,"Generator"),f(S,i,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function f(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))}}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m=function(t){wp.i18n.__;var e=t.posts,n=t.attributes,o=t.setAttributes,a=p((0,r.useState)([]),2),c=a[0],u=a[1],f=p((0,r.useState)([]),2),v=f[0],m=f[1],y=p((0,r.useState)(!1),2);return y[0],y[1],(0,r.useEffect)((function(){var t=function(){var t=h(s().mark((function t(){var r,n,a,f,y,d;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.map(function(){var t=h(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i(e.url,e.author);case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),console.error("Error fetching user details:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(_x){return t.apply(this,arguments)}}()),n=e.map(function(){var t=h(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(e.url,e.thumbnail);case 3:return n=t.sent,t.abrupt("return",null==n||null===(r=n.media_details)||void 0===r||null===(r=r.sizes)||void 0===r||null===(r=r.full)||void 0===r?void 0:r.source_url);case 7:return t.prev=7,t.t0=t.catch(0),console.error("Error fetching thumbnail details:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),t.next=5,Promise.all([Promise.all(r),Promise.all(n)]);case 5:a=t.sent,f=p(a,2),y=f[0],d=f[1],u(y),m(d),o({postsAuthors:c,postsThumbnails:v}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error fetching data:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[n.address,n.postsPerPage,e]),React.createElement("div",{className:"tavern-slider"},React.createElement("div",{className:"tavern-slider__slider-wrapper"},e&&e.map((function(t,e){return React.createElement("div",{key:t.id,className:"tavern-slider__item ".concat(0===e?"is-active":"")},React.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},(null==n?void 0:n.showPostTitle)&&React.createElement("h2",{className:"tavern-slider__title"},t.title),(null==n?void 0:n.showPostAuthor)&&React.createElement("div",{className:"author"},c[e]&&React.createElement("img",{className:"author-avatar",src:c[e].avatar_urls[48]}),c[e]&&React.createElement("span",{className:"author-name"},c[e].name)),(null==n?void 0:n.showPostDate)&&React.createElement("span",{className:"post-modified"},t.postDateModified)),React.createElement("figure",{className:"tavern-slider__image-wrapper"},v[e]&&React.createElement("img",{className:"post-thumbnail",src:v[e],alt:""})))}))))},y=window.wp.primitives,d=(0,r.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(y.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})),g=(0,r.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(y.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}));function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=function(t){wp.i18n.__;var n=t.paginationColor,o=t.totalPosts,a=b((0,r.useState)(0),2),i=a[0],c=a[1],l=b((0,r.useState)(null),2),u=l[0],s=l[1];return(0,r.useEffect)((function(){c(o),s(n)}),[o,n]),React.createElement("div",{className:"tavern-slider__controls",style:{color:u}},React.createElement("div",{className:"tavern-slider__control prev"},React.createElement(e.Icon,{icon:d,color:"currentColor",fill:"currentColor"})),React.createElement("div",{className:"tavern-slider__current"},React.createElement("span",{className:"tavern-slider__pagination"},React.createElement("div",{className:"current-post"},"1"),React.createElement(React.Fragment,null,"/"),React.createElement("div",{className:"total-posts"},i))),React.createElement("div",{className:"tavern-slider__control next"},React.createElement(e.Icon,{icon:g,color:"currentColor",fill:"currentColor"})))},_=window.wp.i18n;function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){var n,o,a;n=t,o=e,a=r[e],(o=function(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===P(e)?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var R=function(t){var o=t.attributes,a=t.setAttributes,i=t.paginationColor,c=t.setPaginationColor,l=t.fetchPosts,u=O((0,r.useState)(o.address),2),s=u[0],f=u[1],h=O((0,r.useState)(o.postsPerPage),2),p=h[0],v=h[1],m=O((0,r.useState)(o.showPostTitle),2),y=m[0],d=m[1],g=O((0,r.useState)(o.showPostDate),2),b=g[0],w=g[1],E=O((0,r.useState)(o.showPostAuthor),2),P=E[0],x=E[1],j=O((0,r.useState)(o.sliderSize),2),R=j[0],L=j[1];return(0,r.useEffect)((function(){a({showPostTitle:y,showPostDate:b,showPostAuthor:P,sliderSize:R})}),[y,b,P,R]),React.createElement(n.InspectorControls,null,React.createElement("div",{className:"tavern-form"},React.createElement("h3",{className:"tavern-form__title"},(0,_.__)("Tavern Slider")),React.createElement(e.TextControl,{label:(0,_.__)("Default Address"),type:"text",value:s,onChange:function(t){return f(t)}}),React.createElement(e.TextControl,{label:(0,_.__)("Default Number of Posts"),type:"number",value:p,onChange:function(t){return v(parseInt(t))}}),React.createElement(e.Button,{variant:"secondary",onClick:function(){l(s,p)}},(0,_.__)("Set")),React.createElement("hr",{className:"divider"}),React.createElement(e.CheckboxControl,{label:(0,_.__)("Show post title"),checked:y,onChange:function(){var t=!y;d(t),a(S(S({},o),{},{showPostTitle:t}))}}),React.createElement(e.CheckboxControl,{label:(0,_.__)("Show post date"),checked:b,onChange:function(){var t=!b;w(t),a(S(S({},o),{},{showPostDate:t}))}}),React.createElement(e.CheckboxControl,{label:(0,_.__)("Show post author"),checked:P,onChange:function(){var t=!P;x(t),a(S(S({},o),{},{showPostAuthor:t}))}}),React.createElement(e.SelectControl,{label:"Maxium Slider Width",value:R,options:[{label:"100%",value:"100%"},{label:"960px",value:"960px"},{label:"540px",value:"540px"},{label:"480px",value:"480px"}],onChange:function(t){return L(t)}}),React.createElement("hr",{className:"divider"}),React.createElement("h3",null,(0,_.__)("Pagination Color Picker")),React.createElement(e.ColorPicker,{color:i,onChange:function(t){c(t),a(S(S({},o),{},{tavernPluginPaginationColor:t}))},enableAlpha:!0,defaultValue:"#000"})))};function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function N(){N=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new C(n||[]);return o(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",v="executing",m="completed",y={};function d(){}function g(){}function b(){}var w={};u(w,i,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(A([])));_&&_!==r&&n.call(_,i)&&(w=_);var P=b.prototype=d.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==L(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=h;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=j(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?m:p,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(L(e)+" is not iterable")}return g.prototype=b,o(P,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(P),u(P,l,"Generator"),u(P,i,(function(){return this})),u(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function k(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var T=JSON.parse('{"u2":"create-block/tavern-slider"}');(0,t.registerBlockType)(T.u2,{title:"Tavern",icon:"shield",category:"common",attributes:{address:{type:"string",default:"https://wptavern.com"},postsPerPage:{type:"number",default:5},posts:{type:"array",default:[]},postsAuthors:{type:"array",default:[]},postsThumbnails:{type:"array",default:[]},tavernPluginPaginationColor:{type:"string",default:"#000"},showPostTitle:{type:"boolean",default:!0},showPostDate:{type:"boolean",default:!0},showPostAuthor:{type:"boolean",default:!0},sliderSize:{type:"select",default:"100%",options:["100%","960px","540px","480px"]}},edit:function(t){wp.i18n.__;e=(0,r.useRef)(),o=(0,r.useMemo)((function(){return function(t,r){return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];clearTimeout(e.current),e.current=setTimeout((function(){return t.apply(void 0,o)}),r)}}}),[]),(0,r.useEffect)((function(){return function(){e.current&&clearTimeout(e.current)}}),[]);var e,o,a=t.attributes,i=t.setAttributes,l=(0,n.useBlockProps)(),u=C((0,r.useState)([]),2),s=u[0],f=u[1],h=C((0,r.useState)(a.address),2),p=(h[0],h[1]),v=function(t){var e=new Date(t),r=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getFullYear().toString();return"".concat(r,".").concat(n,".").concat(o)},y=function(){var t,e=(t=N().mark((function t(e,r){var n,o;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c(e,r);case 3:n=t.sent,o=n.map((function(t){return{id:t.id,title:t.title.rendered,thumbnail:null==t?void 0:t.featured_media,link:t.link,author:t.author,postDate:v(t.date),postDateModified:v(t.modified),url:e}})),f(o),i((a={posts:o,address:e,postsPerPage:r},u=r,(l=function(t){var e=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===L(e)?e:String(e)}(l="postsPerPage"))in a?Object.defineProperty(a,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[l]=u,a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error fetching posts:",t.t0);case 12:case"end":return t.stop()}var a,l,u}),t,null,[[0,9]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){k(a,n,o,i,c,"next",t)}function c(t){k(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(_x,t){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){y(a.address,a.postsPerPage)}),[a.address,a.postsPerPage]),React.createElement("div",l,React.createElement(R,{attributes:a,setAttributes:i,paginationColor:a.tavernPluginPaginationColor,setPaginationColor:function(t){return i({tavernPluginPaginationColor:t})},fetchPosts:function(t,e){y(t,e),p(t)}}),React.createElement("div",{className:"tavern-slider_container"},React.createElement(E,{paginationColor:a.tavernPluginPaginationColor,totalPosts:a.postsPerPage}),React.createElement(m,{attributes:a,posts:s,setAttributes:i})))},save:function(t){var r=t.attributes,o=(wp.i18n.__,r.posts),a=r.postsAuthors,i=r.postsThumbnails;return React.createElement("div",n.useBlockProps.save(),React.createElement("div",{className:"tavern-slider",style:"max-width: ".concat(r.sliderSize)},React.createElement("div",{className:"tavern-slider__controls",style:"color: ".concat(r.tavernPluginPaginationColor,";")},React.createElement("div",{className:"tavern-slider__control prev"},React.createElement(e.Icon,{icon:d,color:"currentColor",fill:"currentColor"})),React.createElement("div",{className:"tavern-slider__current"},React.createElement("span",{class:"tavern-slider__pagination"},React.createElement("div",{className:"current-post"},"0"),React.createElement(React.Fragment,null,"/"),React.createElement("div",{className:"total-posts"},"0"))),React.createElement("div",{className:"tavern-slider__control next"},React.createElement(e.Icon,{icon:g,color:"currentColor",fill:"currentColor"}))),React.createElement("div",{className:"tavern-slider__slider-wrapper"},o.map((function(t,e){var n,o;return React.createElement("div",{key:t.id,className:"tavern-slider__item ".concat(0===e?"is-active":"")},React.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},r.showPostTitle&&React.createElement("h2",{className:"tavern-slider__title"},t.title),r.showPostAuthor&&React.createElement("div",{className:"author"},React.createElement("img",{className:"author-avatar",src:null===(n=a[e])||void 0===n?void 0:n.avatar_urls[48]}),React.createElement("span",{className:"author-name"},null===(o=a[e])||void 0===o?void 0:o.name)),r.showPostDate&&React.createElement("span",{className:"post-modified"},t.postDateModified)),React.createElement("figure",{className:"tavern-slider__image-wrapper"},React.createElement("img",{className:"post-thumnail",src:i[e],alt:""})))})))))}})}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=function(e,r,o,a){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],a=t[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,431:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],l=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self.webpackChunkTavernSlider=self.webpackChunkTavernSlider||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(535)}));o=n.O(o)}();