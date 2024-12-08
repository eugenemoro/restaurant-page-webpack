(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"nav {\n  padding-top: 0.5rem;\n}\nbutton {\n  appearance: none;\n  background-color: navy;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 2rem;\n  color: white;\n}\n\nbutton:hover {\n  background-color: lightblue;\n  color: black;\n}\n\nbody {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\nh1 {\n  color: navy;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n\ndiv .dish-card,\ndiv .contacts {\n  border-radius: 5px;\n  border: 1px solid gray;\n  box-shadow: 1px 1px 10px darkgray;\n  padding: 1rem;\n}\n\ndiv .dish-card:hover,\ndiv .contacts:hover {\n  box-shadow: 1px 1px 15px black;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,sBAAsB;EACtB,iCAAiC;EACjC,aAAa;AACf;;AAEA;;EAEE,8BAA8B;AAChC",sourcesContent:["nav {\n  padding-top: 0.5rem;\n}\nbutton {\n  appearance: none;\n  background-color: navy;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 2rem;\n  color: white;\n}\n\nbutton:hover {\n  background-color: lightblue;\n  color: black;\n}\n\nbody {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\nh1 {\n  color: navy;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n\ndiv .dish-card,\ndiv .contacts {\n  border-radius: 5px;\n  border: 1px solid gray;\n  box-shadow: 1px 1px 10px darkgray;\n  padding: 1rem;\n}\n\ndiv .dish-card:hover,\ndiv .contacts:hover {\n  box-shadow: 1px 1px 15px black;\n}"],sourceRoot:""}]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var A=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:A,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),u=t.n(d),l=t(540),p=t.n(l),m=t(113),A=t.n(m),f=t(365),h={};h.styleTagTransform=A(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(f.A,h),f.A&&f.A.locals&&f.A.locals;const v=t.p+"4a98298e716ca05e9f05.jpg";function E(){const e=document.getElementById("content"),n=document.createElement("img");n.src=v;const t=document.createElement("h1");t.innerText="Signa Cafe";const r=document.createElement("p");r.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus impedit totam iusto debitis. Qui minus consequuntur reiciendis doloribus quasi ut?",e.appendChild(t),e.appendChild(n),e.appendChild(r)}const g=document.getElementById("nav-home"),y=document.getElementById("nav-menu"),b=document.getElementById("nav-about"),C=document.getElementById("content");E(),g.addEventListener("click",(()=>{C.innerHTML="",E()})),y.addEventListener("click",(()=>{C.innerHTML="",function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="Menu",e.appendChild(n),[{title:"CREPE SALMON PHILADELFIA",description:"50g of salted salmon, cream cheese, and fresh cucumber rolled in a delicate crepe and served with Greek yogurt."},{title:"HOMEMADE PORK SAUSAGE WITH MASHED POTATO",description:"A hearty dish for lovers of homemade flavors: creamy mashed potatoes paired perfectly with a juicy sausage in a rich tomato and onion sauce. On the side, enjoy a fresh salad mix with crisp cucumber slices, lightly dressed for balance. Warmth and taste that feel just like home!"},{title:"CHICKEN STROGANOFF",description:"Tender chicken fillet in a creamy mushroom sauce with a hint of paprika, served with buttery mashed potatoes. A perfect balance of comforting homemade flavors and refined restaurant quality. An ideal choice for classic cuisine lovers!"}].forEach((n=>{const t=document.createElement("h3");t.innerText=n.title;const r=document.createElement("p");r.innerText=n.description;const o=document.createElement("div");o.className="dish-card",o.appendChild(t),o.appendChild(r),e.appendChild(o)}))}()})),b.addEventListener("click",(()=>{C.innerHTML="",function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="About Us",e.appendChild(n);const t=document.createElement("div");t.className="contacts";const r=document.createElement("p");r.innerText="Phone +62 111 111 11 11";const o=document.createElement("p");o.innerText="Out instagram: @Instagram",t.appendChild(r),t.appendChild(o),e.appendChild(t)}()}))})();
//# sourceMappingURL=main.js.map