!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI_toast=e():t.BalmUI_toast=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="ux2C")}({"/EgQ":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"39uu":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"526F":function(t,e,n){t.exports=n("kE3c")},"9E9t":function(t,e,n){"use strict";var o=n("wbIY"),r=n("Bvq2"),i=n("oBZR"),a=n("ogVW"),c=n("cEPT"),u=n("T/97"),s=n("Y4yM"),f=Object.assign,l=Object.defineProperty;t.exports=!f||r((function(){if(o&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||i(f({},e)).join("")!=r}))?function(t,e){for(var n=u(t),r=arguments.length,f=1,l=a.f,p=c.f;r>f;)for(var d,h=s(arguments[f++]),m=l?i(h).concat(l(h)):i(h),y=m.length,_=0;y>_;)d=m[_++],o&&!p.call(h,d)||(n[d]=h[d]);return n}:f},AnMC:function(t,e,n){var o=n("wbIY"),r=n("QYBB"),i=n("LGyv");t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},Bvq2:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},FWHo:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},GHVm:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},Kwsy:function(t,e,n){t.exports=n("br0Y")},LGyv:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},OsYe:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("Y0i2"))},QYBB:function(t,e,n){var o=n("wbIY"),r=n("d7IX"),i=n("b42z"),a=n("cWgI"),c=Object.defineProperty;e.f=o?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return c(t,e,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},RLqH:function(t,e,n){var o=n("wbIY"),r=n("cEPT"),i=n("LGyv"),a=n("pCEo"),c=n("cWgI"),u=n("eOcF"),s=n("d7IX"),f=Object.getOwnPropertyDescriptor;e.f=o?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(n){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},RQhY:function(t,e,n){var o=n("FWHo"),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},"T/97":function(t,e,n){var o=n("GHVm");t.exports=function(t){return Object(o(t))}},VdC8:function(t,e,n){var o=n("pevS"),r=n("9E9t");o({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},Y0i2:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}t.exports=n},Y4Ys:function(t,e,n){var o=n("pCEo"),r=n("ZyXh"),i=n("RQhY"),a=function(t){return function(e,n,a){var c,u=o(e),s=r(u.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},Y4yM:function(t,e,n){var o=n("Bvq2"),r=n("/EgQ"),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},ZBQp:function(t,e,n){var o=n("zJQS");t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},ZyXh:function(t,e,n){var o=n("FWHo"),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},b42z:function(t,e,n){var o=n("39uu");t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},bpon:function(t,e){t.exports={}},br0Y:function(t,e,n){n("xahd");var o=n("dktu");t.exports=o.setTimeout},cEPT:function(t,e,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:o},cWgI:function(t,e,n){var o=n("39uu");t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},d7IX:function(t,e,n){var o=n("wbIY"),r=n("Bvq2"),i=n("ejc7");t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},dktu:function(t,e){t.exports={}},eOcF:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},ejc7:function(t,e,n){var o=n("OsYe"),r=n("39uu"),i=o.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},kE3c:function(t,e,n){var o=n("uC8H");t.exports=o},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("Y0i2"))},lxfd:function(t,e,n){var o=n("mIMY");t.exports=o("navigator","userAgent")||""},mIMY:function(t,e,n){var o=n("dktu"),r=n("OsYe"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]}},nleh:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},oBZR:function(t,e,n){var o=n("syO3"),r=n("nleh");t.exports=Object.keys||function(t){return o(t,r)}},oOVA:function(t,e,n){var o=n("Bvq2"),r=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?o(e):!!e)},a=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},ogVW:function(t,e){e.f=Object.getOwnPropertySymbols},pCEo:function(t,e,n){var o=n("Y4yM"),r=n("GHVm");t.exports=function(t){return o(r(t))}},pevS:function(t,e,n){"use strict";var o=n("OsYe"),r=n("RLqH").f,i=n("oOVA"),a=n("dktu"),c=n("ZBQp"),u=n("AnMC"),s=n("eOcF"),f=function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,l,p,d,h,m,y,_,b=t.target,v=t.global,O=t.stat,E=t.proto,g=v?o:O?o[b]:(o[b]||{}).prototype,T=v?a:a[b]||(a[b]={}),S=T.prototype;for(p in e)n=!i(v?p:b+(O?".":"#")+p,t.forced)&&g&&s(g,p),h=T[p],n&&(m=t.noTargetGet?(_=r(g,p))&&_.value:g[p]),d=n&&m?m:e[p],n&&typeof h===typeof d||(y=t.bind&&n?c(d,o):t.wrap&&n?f(d):E&&"function"==typeof d?c(Function.call,d):d,(t.sham||d&&d.sham||h&&h.sham)&&u(y,"sham",!0),T[p]=y,E&&(s(a,l=b+"Prototype")||u(a,l,{}),a[l][p]=d,t.real&&S&&!S[p]&&u(S,p,d)))}},syO3:function(t,e,n){var o=n("eOcF"),r=n("pCEo"),i=n("Y4Ys").indexOf,a=n("bpon");t.exports=function(t,e){var n,c=r(t),u=0,s=[];for(n in c)!o(a,n)&&o(c,n)&&s.push(n);for(;e.length>u;)o(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},uC8H:function(t,e,n){n("VdC8");var o=n("dktu");t.exports=o.Object.assign},ux2C:function(t,e,n){"use strict";n.r(e);var o=n("Kwsy"),r=n.n(o),i=n("526F"),a=n.n(i),c=n("kUbF"),u={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},s={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},f={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},l=f.ARIA_LIVE_DELAY_MS,p=s.ARIA_LIVE_LABEL_TEXT_ATTR;function d(t,e){void 0===e&&(e=t);var n=t.getAttribute("aria-live"),o=e.textContent.trim();o&&n&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(p,o),setTimeout((function(){t.setAttribute("aria-live",n),e.removeAttribute(p),e.textContent=o}),l))}var h=n("zOht"),m=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),y=function(){function t(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];this.root=t,this.initialize.apply(this,Object(h.__spread)(n)),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new m({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var o;void 0===n&&(n=!1),"function"===typeof CustomEvent?o=new CustomEvent(t,{bubbles:n,detail:e}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root.dispatchEvent(o)},t}();function _(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(b(n,e))return n;n=n.parentElement}return null}function b(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var v=u.OPENING,O=u.OPEN,E=u.CLOSING,g=s.REASON_ACTION,T=s.REASON_DISMISS,S=function(t){function e(n){var o=t.call(this,Object(h.__assign)(Object(h.__assign)({},e.defaultAdapter),n))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.autoDismissTimer_=0,o.autoDismissTimeoutMs_=f.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape_=!0,o}return Object(h.__extends)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(v),this.adapter.removeClass(O),this.adapter.removeClass(E)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(E),this.adapter.addClass(v),this.adapter.announce(),this.runNextAnimationFrame_((function(){t.adapter.addClass(O),t.animationTimer_=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter.notifyOpened(),e!==f.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(T)}),e))}),f.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(t),this.adapter.addClass(u.CLOSING),this.adapter.removeClass(u.OPEN),this.adapter.removeClass(u.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter.notifyClosed(t)}),f.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},e.prototype.setTimeoutMs=function(t){var e=f.MIN_AUTO_DISMISS_TIMEOUT_MS,n=f.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===f.INDETERMINATE||t<=n&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"\u2013"+n+"\n        (or "+f.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(T)},e.prototype.handleActionButtonClick=function(t){this.close(g)},e.prototype.handleActionIconClick=function(t){this.close(T)},e.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(u.OPENING),this.adapter.removeClass(u.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e}(m),C=s.SURFACE_SELECTOR,I=s.LABEL_SELECTOR,w=s.ACTION_SELECTOR,A=s.DISMISS_SELECTOR,M=s.OPENING_EVENT,x=s.OPENED_EVENT,N=s.CLOSING_EVENT,j=s.CLOSED_EVENT,k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(h.__extends)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(){return d}),this.announce_=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl_=this.root.querySelector(C),this.labelEl_=this.root.querySelector(I),this.actionEl_=this.root.querySelector(w),this.handleKeyDown_=function(e){return t.foundation.handleKeyDown(e)},this.handleSurfaceClick_=function(e){var n=e.target;t.isActionButton_(n)?t.foundation.handleActionButtonClick(e):t.isActionIcon_(n)&&t.foundation.handleActionIconClick(e)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this;return new S({addClass:function(e){return t.root.classList.add(e)},announce:function(){return t.announce_(t.labelEl_)},notifyClosed:function(e){return t.emit(j,e?{reason:e}:{})},notifyClosing:function(e){return t.emit(N,e?{reason:e}:{})},notifyOpened:function(){return t.emit(x,{})},notifyOpening:function(){return t.emit(M,{})},removeClass:function(e){return t.root.classList.remove(e)}})},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),e.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},e.prototype.isActionButton_=function(t){return Boolean(_(t,w))},e.prototype.isActionIcon_=function(t){return Boolean(_(t,A))},e}(y),D={ACTION_BUTTON:0,DISMISS_ICON:1},P={MIN:4e3,MAX:1e4,DEFAULTS:5e3},L={CHANGE:"change",CLOSED:"closed"};var R=function(t,e,n,o,r,i,a,c){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):r&&(u=c?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}({name:"UiSnackbar",model:{prop:"open",event:L.CHANGE},props:{actionType:{type:Number,default:D.ACTION_BUTTON},open:{type:Boolean,default:!1},timeoutMs:{type:[Number,String],default:P.DEFAULTS},message:{type:String,default:""},actionButtonText:{type:String,default:""},stacked:{type:Boolean,default:!1},leading:{type:Boolean,default:!1}},data:function(){return{$snackbar:null}},computed:{className:function(){return{"mdc-snackbar":!0,"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading}},canDismiss:function(){return this.actionType===D.DISMISS_ICON},actionButtonClassName:function(){return this.canDismiss?"mdc-icon-button mdc-snackbar__dismiss":"mdc-button mdc-snackbar__action"},hasAction:function(){return this.actionButtonText||this.canDismiss}},watch:{open:function(t){t&&this.$snackbar.open()},timeoutMs:function(t){this.setTimeoutMs(+t)},message:function(t){this.$snackbar.labelText=t}},mounted:function(){var t=this;this.$snackbar=new k(this.$el),this.timeoutMs!==P.DEFAULTS&&this.setTimeoutMs(+this.timeoutMs),this.message&&(this.$snackbar.labelText=this.message),this.$snackbar.listen("MDCSnackbar:closed",(function(){t.$emit(L.CHANGE,!1),t.$emit(L.CLOSED)}))},methods:{setTimeoutMs:function(t){t>=P.MIN&&t<=P.MAX?this.$snackbar.timeoutMs=t:console.warn("The timeoutMs of the snackbar must be between `4000` and `10000`")}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{staticClass:"mdc-snackbar__surface"},[n("div",{staticClass:"mdc-snackbar__label",attrs:{role:"status","aria-live":"polite"}},[t._t("default",[t._v(t._s(t.message))])],2),t._v(" "),t.hasAction?n("div",{staticClass:"mdc-snackbar__actions"},[n("button",{class:t.actionButtonClassName,attrs:{type:"button"}},[t._t("action",[t._v(t._s(t.canDismiss?"X":t.actionButtonText))])],2)]):t._e()])])}),[],!1,null,null,null).exports,F=/(?:^\[object\s(.*?)\]$)/,B=function(t){return Object.prototype.toString.call(t).replace(F,"$1").toLowerCase()},Y={className:"",timeoutMs:4e3,message:""},U='<ui-snackbar\n  :open="open"\n  :class="[\'mdc-toast\', options.className]"\n  :timeoutMs="options.timeoutMs"\n  :message="options.message"\n  @closed="handleClosed">\n</ui-snackbar>',V={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a()({},Y,e),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!document.querySelector(".mdc-toast"))new t({el:document.createElement("div"),components:{UiSnackbar:R},data:{open:!1,options:n},created:function(){var t=this;"string"===B(e)?this.options.message="".concat(e):"object"===B(e)&&(this.options=a()({},this.options,e)),this.$nextTick((function(){document.body.appendChild(t.$el),r()((function(){t.open=!0}),1)}))},methods:{handleClosed:function(){var t=this;this.open=!1,this.$nextTick((function(){document.body.removeChild(t.$el),null}))}},template:U})};t.prototype.$toast=o}};Object(c.a)(V);e.default=V},wbIY:function(t,e,n){var o=n("Bvq2");t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},xahd:function(t,e,n){var o=n("pevS"),r=n("OsYe"),i=n("lxfd"),a=[].slice,c=function(t){return function(e,n){var o=arguments.length>2,r=o?a.call(arguments,2):void 0;return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},zJQS:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},zOht:function(t,e,n){(function(n){var o,r,i,a,c,u,s,f,l,p,d,h,m,y,_,b,v,O,E,g,T,S,C,I;!function(w){var A="object"===typeof n?n:"object"===typeof self?self:"object"===typeof this?this:{};function M(t,e){return t!==A&&("function"===typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(n,o){return t[n]=e?e(n,o):o}}void 0===(o=function(t){!function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};r=function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)},i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},c=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=function(t,e){return function(n,o){e(n,o,t)}},s=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{u(o.next(t))}catch(e){i(e)}}function c(t){try{u(o.throw(t))}catch(e){i(e)}}function u(t){t.done?n(t.value):r(t.value).then(a,c)}u((o=o.apply(t,e||[])).next())}))},l=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return u([t,e])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},I=function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]},p=function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])},d=function(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],o=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},h=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){r={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},m=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t},y=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,r++)o[r]=i[a];return o},_=function(t){return this instanceof _?(this.v=t,this):new _(t)},b=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(t,e||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(t){r[t]&&(o[t]=function(e){return new Promise((function(n,o){i.push([t,e,n,o])>1||c(t,e)}))})}function c(t,e){try{u(r[t](e))}catch(n){l(i[0][3],n)}}function u(t){t.value instanceof _?Promise.resolve(t.value.v).then(s,f):l(i[0][2],t)}function s(t){c("next",t)}function f(t){c("throw",t)}function l(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}},v=function(t){var e,n;return e={},o("next"),o("throw",(function(t){throw t})),o("return"),e[Symbol.iterator]=function(){return this},e;function o(o,r){e[o]=t[o]?function(e){return(n=!n)?{value:_(t[o](e)),done:"return"===o}:r?r(e):e}:r}},O=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=d(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(n){e[n]=t[n]&&function(e){return new Promise((function(o,i){r(o,i,(e=t[n](e)).done,e.value)}))}}function r(t,e,n,o){Promise.resolve(o).then((function(e){t({value:e,done:n})}),e)}},E=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},g=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},T=function(t){return t&&t.__esModule?t:{default:t}},S=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},C=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},t("__extends",r),t("__assign",i),t("__rest",a),t("__decorate",c),t("__param",u),t("__metadata",s),t("__awaiter",f),t("__generator",l),t("__exportStar",p),t("__createBinding",I),t("__values",d),t("__read",h),t("__spread",m),t("__spreadArrays",y),t("__await",_),t("__asyncGenerator",b),t("__asyncDelegator",v),t("__asyncValues",O),t("__makeTemplateObject",E),t("__importStar",g),t("__importDefault",T),t("__classPrivateFieldGet",S),t("__classPrivateFieldSet",C)}(M(A,M(t)))}.apply(e,[e]))||(t.exports=o)}()}).call(this,n("Y0i2"))}})}));