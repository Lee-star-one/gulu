parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wFXB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={props:{name:name}};exports.default=e;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"g-icon",attrs:{"aria-hidden":"true"}},[t("use")])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}],"iM1m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./icon"));function t(e){return e&&e.__esModule?e:{default:e}}var o={components:{"g-icon":e.default},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(e){return console.log(e),"left"===e||"right"===e}}}};exports.default=o;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t,n=this,i=n.$createElement,o=n._self._c||i;return o("button",{staticClass:"g-button",class:(t={},t["icon-"+n.iconPosition]=!0,t),on:{click:function(t){return n.$emit("click")}}},[n.icon&&!n.loading?o("g-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),n.loading?o("g-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):n._e(),n._v(" "),o("div",{staticClass:"content"},[n._t("default")],2)],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
"use strict";function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,u=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw u}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={mounted:function(){console.log(this.$el.children);var e,n=t(this.$el.children);try{for(n.s();!(e=n.n()).done;){var r=e.value.nodeName.toLowerCase();"button"!==r&&console.warn("g-button-group 的子元素全是 g-button,但你写的是".concat(r))}}catch(o){n.e(o)}finally{n.f()}}};exports.default=r;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-button-group"},[this._t("default")],2)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-925cba",functional:void 0});})();
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Button",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"ButtonGroup",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"Icon",{enumerable:!0,get:function(){return r.default}});var e=u(require("./src/button")),t=u(require("./src/button-group")),r=u(require("./src/icon"));function u(e){return e&&e.__esModule?e:{default:e}}
},{"./src/button":"iM1m","./src/button-group":"h0wh","./src/icon":"wFXB"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map