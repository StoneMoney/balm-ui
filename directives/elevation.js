!function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI=n():e.BalmUI=n()}(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="zE8r")}({oRPr:function(e,n,t){"use strict";n.a=function(e,n){"undefined"!==typeof window&&window.Vue&&window.Vue.directive(e,n)}},zE8r:function(e,n,t){"use strict";t.r(n);var o=t("oRPr"),r=/(?:^\[object\s(.*?)\]$)/,i=function(e){return Object.prototype.toString.call(e).replace(r,"$1").toLowerCase()},u={MIN:0,MAX:24},a="mdc-elevation-transition",c=function(e){var n="";return e>=u.MIN&&e<=u.MAX?n="mdc-elevation--z".concat(e):console.warn('The elevation values are mapped out in a "z-space" and range from 0 to 24'),n},f=function(e,n,t){var o,r=t.value,u=[];if(t.modifiers.transition)if("array"===i(r)&&2===r.length){var f=c(r[0]),l=c(r[1]);u.push(f),u.push(a),n["".concat(e,"EventListener")]("mouseenter",function(){n.classList.add(l)}),n["".concat(e,"EventListener")]("mouseleave",function(){n.classList.remove(l)})}else console.warn("Invalid elevation value");else u.push(c(r));(o=n.classList)[e].apply(o,u)},l={name:"shadow",bind:function(e,n){f("add",e,n)},unbind:function(e,n){f("remove",e,n)}};Object(o.a)(l.name,l);n.default=l}})});