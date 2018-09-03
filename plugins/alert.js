!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="K3FU")}({"6fqu":function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.className,style:this.style},[this._t("default")],2)};i._withStripped=!0;n("QnW2");var a={name:"ui-dialog-body",props:{scrollable:{type:Boolean,default:!1},maxHeight:{type:[Number,String],default:0}},data:function(){return{windowHeight:0,nonDialogBodyHeight:0}},computed:{className:function(){return{"mdc-dialog__body":!0,"mdc-dialog__body--scrollable":this.scrollable}},style:function(){var t=null,e=+this.maxHeight;if(e){var n=Math.round(this.windowHeight/1.618)-this.nonDialogBodyHeight,i=Math.max(195,Math.min(e,n));t={"max-height":"".concat(i,"px")}}return t}},mounted:function(){this.initHeight(),this.handleResize(),window.addEventListener("balmResize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("balmResize",this.handleResize)},methods:{initHeight:function(){var t=this.$parent.$el.querySelector(".mdc-dialog__header"),e=this.$parent.$el.querySelector(".mdc-dialog__footer");t&&(this.nonDialogBodyHeight+=t.clientHeight),e&&(this.nonDialogBodyHeight+=e.clientHeight)},handleResize:function(){this.windowHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}},o=n("KHd+"),r=Object(o.a)(a,i,[],!1,null,null,null);r.options.__file="src/scripts/components/dialog/dialog-body.vue";e.a=r.exports},"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},BYAM:function(t,e){t.exports=function(t,e){e=e||{};var n,i,a,o=t.ownerDocument||t,r=[],s=[],c=function(t){var e=[];return function(n){if(n===t.documentElement)return!1;var i=t.defaultView.getComputedStyle(n);return!!function n(i,a){if(i===t.documentElement)return!1;for(var o=0,r=e.length;o<r;o++)if(e[o][0]===i)return e[o][1];a=a||t.defaultView.getComputedStyle(i);var s=!1;"none"===a.display?s=!0:i.parentNode&&(s=n(i.parentNode));e.push([i,s]);return s}(n,i)||"hidden"===i.visibility}}(o),u=["input","select","a[href]","textarea","button","[tabindex]"],l=t.querySelectorAll(u.join(","));if(e.includeContainer){var d=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;u.some(function(e){return d.call(t,e)})&&(l=Array.prototype.slice.apply(l)).unshift(t)}for(var f=0,p=l.length;f<p;f++)n=l[f],i=parseInt(n.getAttribute("tabindex"),10),(a=isNaN(i)?n.tabIndex:i)<0||"INPUT"===n.tagName&&"hidden"===n.type||n.disabled||c(n,o)||(0===a?r.push(n):s.push({index:f,tabIndex:a,node:n}));var _=s.sort(function(t,e){return t.tabIndex===e.tabIndex?t.index-e.index:t.tabIndex-e.tabIndex}).map(function(t){return t.node});return Array.prototype.push.apply(_,r),_}},Bmdm:function(t,e,n){"use strict";var i=n("oLRI");n.d(e,"b",function(){return i.a});var a=n("SBAC");n.d(e,"a",function(){return a.a})},K3FU:function(t,e,n){"use strict";n.r(e);var i=n("kUbF"),a=n("yd/r"),o=n("jzph"),r=n("6fqu"),s=n("bJ+A"),c=n("QnW2"),u={className:"",title:"",message:"",buttonText:"OK",callback:!1},l={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},u,e);t.prototype.$alert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(i){new t({el:document.createElement("div"),components:{UiDialog:a.a,UiDialogHeader:o.a,UiDialogBody:r.a,UiDialogFooter:s.a},data:{open:!1,options:n},created:function(){var t=this;"string"===Object(c.a)(e)?this.options.message="".concat(e):"object"===Object(c.a)(e)&&(this.options=Object.assign({},this.options,e)),this.$nextTick(function(){document.body.appendChild(t.$el),setTimeout(function(){t.open=!0},1)})},methods:{handleClose:function(){var t=this;this.open=!1,this.$nextTick(function(){document.body.removeChild(t.$el)})},handleClick:function(){this.handleClose(),"function"===Object(c.a)(this.options.callback)?this.options.callback():i()}},template:'<ui-dialog\n  :open="open"\n  :class="[\'mdc-alert\', options.className]"\n  @close="handleClose">\n  <ui-dialog-header v-if="options.title">{{ options.title }}</ui-dialog-header>\n  <ui-dialog-body>{{ options.message }}</ui-dialog-body>\n  <ui-dialog-footer>\n    <button type="button" class="mdc-button" @click="handleClick">\n      {{ options.buttonText }}\n    </button>\n  </ui-dialog-footer>\n</ui-dialog>'})})}}};Object(i.a)(l),e.default=l},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,a,o,r,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),o=n("W8MJ"),r=n.n(o),s=n("oLRI"),c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;a()(this,t),this.root_=e;for(var i=arguments.length,o=new Array(i>2?i-2:0),r=2;r<i;r++)o[r-2]=arguments[r];this.initialize.apply(this,o),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return r()(t,null,[{key:"attachTo",value:function(e){return new t(e,new s.a)}}]),r()(t,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),t}();e.a=c},SksO:function(t,e){function n(e,i){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,i)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},"bJ+A":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mdc-dialog__footer"},[t._t("default",[t.$parent.closable?[n("button",{class:"mdc-button "+t.UI_DIALOG.SLOT_CLASS.button+" mdc-dialog__footer__button--cancel",attrs:{type:"button"}},[t._v("\n        "+t._s(t.cancelText)+"\n      ")]),t._v(" "),n("button",{class:"mdc-button "+t.UI_DIALOG.SLOT_CLASS.button+" mdc-dialog__footer__button--accept",attrs:{type:"button"}},[t._v("\n        "+t._s(t.acceptText)+"\n      ")])]:[n("button",{class:"mdc-button "+t.UI_DIALOG.SLOT_CLASS.button,attrs:{type:"button"},on:{click:t.$parent.handleCancel}},[t._v("\n        "+t._s(t.cancelText)+"\n      ")]),t._v(" "),n("button",{class:"mdc-button "+t.UI_DIALOG.SLOT_CLASS.button,attrs:{type:"button"},on:{click:t.$parent.handleAccept}},[t._v("\n        "+t._s(t.acceptText)+"\n      ")])]],{buttonClass:t.UI_DIALOG.SLOT_CLASS.button})],2)};i._withStripped=!0;var a={SLOT_CLASS:{button:"mdc-dialog__footer__button"}},o={name:"ui-dialog-footer",props:{acceptText:{type:String,default:"Accept"},cancelText:{type:String,default:"Cancel"}},data:function(){return{UI_DIALOG:a}},mounted:function(){var t=this.$parent;t.closable&&t.$nextTick(function(){t.$dialog.listen("MDCDialog:accept",function(){t.handleAccept()}),t.$dialog.listen("MDCDialog:cancel",function(){t.handleCancel()})})}},r=n("KHd+"),s=Object(r.a)(o,i,[],!1,null,null,null);s.options.__file="src/scripts/components/dialog/dialog-footer.vue";e.a=s.exports},bJJb:function(t,e,n){var i=n("BYAM"),a=null;function o(t){t&&t.focus&&t!==document.activeElement&&(t.focus(),"input"===t.tagName.toLowerCase()&&t.select())}t.exports=function(t,e){var n=[],r=null,s=null,c=null,u=!1,l=!1,d=null,f="string"===typeof t?document.querySelector(t):t,p=e||{};p.returnFocusOnDeactivate=!e||void 0===e.returnFocusOnDeactivate||e.returnFocusOnDeactivate,p.escapeDeactivates=!e||void 0===e.escapeDeactivates||e.escapeDeactivates;var _={activate:function(t){if(!u){var e={onActivate:t&&void 0!==t.onActivate?t.onActivate:p.onActivate};return u=!0,l=!1,c=document.activeElement,e.onActivate&&e.onActivate(),v(),_}},deactivate:h,pause:function(){!l&&u&&(l=!0,m())},unpause:function(){l&&u&&(l=!1,v())}};return _;function h(t){if(u){var e={returnFocus:t&&void 0!==t.returnFocus?t.returnFocus:p.returnFocusOnDeactivate,onDeactivate:t&&void 0!==t.onDeactivate?t.onDeactivate:p.onDeactivate};return m(),e.onDeactivate&&e.onDeactivate(),e.returnFocus&&setTimeout(function(){o(c)},0),u=!1,l=!1,this}}function v(){if(u)return a&&a.pause(),a=_,E(),o(function(){var t;if(!(t=null!==g("initialFocus")?g("initialFocus"):f.contains(document.activeElement)?document.activeElement:n[0]||g("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}()),document.addEventListener("focus",C,!0),document.addEventListener("click",b,!0),document.addEventListener("mousedown",y,!0),document.addEventListener("touchstart",y,!0),document.addEventListener("keydown",A,!0),_}function m(){if(u&&a===_)return document.removeEventListener("focus",C,!0),document.removeEventListener("click",b,!0),document.removeEventListener("mousedown",y,!0),document.removeEventListener("touchstart",y,!0),document.removeEventListener("keydown",A,!0),a=null,_}function g(t){var e=p[t],n=e;if(!e)return null;if("string"===typeof e&&!(n=document.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"===typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function y(t){p.clickOutsideDeactivates&&!f.contains(t.target)&&h({returnFocus:!1})}function b(t){p.clickOutsideDeactivates||f.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function C(t){f.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation(),"function"===typeof t.target.blur&&t.target.blur(),d&&function(t){if(t.shiftKey)return o(s);o(r)}(d))}function A(t){"Tab"!==t.key&&9!==t.keyCode||function(t){if(E(),t.target.hasAttribute("tabindex")&&Number(t.target.getAttribute("tabindex"))<0)return d=t;t.preventDefault();var e=n.indexOf(t.target);t.shiftKey?t.target===r||-1===n.indexOf(t.target)?o(s):o(n[e-1]):t.target===s?o(r):o(n[e+1])}(t),!1!==p.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&h()}function E(){n=i(f),r=n[0],s=n[n.length-1]}}},cDf5:function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},iWIM:function(t,e,n){n("Nsbk");var i=n("n3AX");function a(e,n,o){return"undefined"!==typeof Reflect&&Reflect.get?t.exports=a=Reflect.get:t.exports=a=function(t,e,n){var a=i(t,e);if(a){var o=Object.getOwnPropertyDescriptor(a,e);return o.get?o.get.call(n):o.value}},a(e,n,o||e)}t.exports=a},jzph:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mdc-dialog__header"},[this._t("before"),this._v(" "),e("h2",{staticClass:"mdc-dialog__header__title"},[this._t("default")],2),this._v(" "),this._t("after")],2)};i._withStripped=!0;var a={name:"ui-dialog-header"},o=n("KHd+"),r=Object(o.a)(a,i,[],!1,null,null,null);r.options.__file="src/scripts/components/dialog/dialog-header.vue";e.a=r.exports},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),o=n("W8MJ"),r=n.n(o),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,t),this.adapter_=e}return r()(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),r()(t,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),t}();e.a=s},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},"yd/r":function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"mdc-dialog",attrs:{role:"alertdialog"}},[e("div",{ref:"dialog",staticClass:"mdc-dialog__surface"},[this._t("default")],2),this._v(" "),this.noBackdrop?this._e():[this.maskClosable?e("div",{staticClass:"mdc-dialog__backdrop",on:{click:this.handleClose}}):e("div",{staticClass:"mdc-dialog__backdrop",on:{click:function(t){t.stopPropagation()}}})]],2)};i._withStripped=!0;var a,o,r=n("lwsE"),s=n.n(r),c=n("W8MJ"),u=n.n(c),l=n("a1gu"),d=n.n(l),f=n("Nsbk"),p=n.n(f),_=n("iWIM"),h=n.n(_),v=n("7W2i"),m=n.n(v),g=n("Bmdm"),y=n("SBAC"),b={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},C={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},A={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===o||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}o=n}return!!o&&{passive:!0}}var S=["touchstart","pointerdown","mousedown","keydown"],T=["touchend","pointerup","mouseup"],k=[],O=function(t){function e(t){var n;return s()(this,e),(n=d()(this,p()(e).call(this,Object.assign(e.defaultAdapter,t)))).layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(t){return n.deactivate_(t)},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_=null,n}return m()(e,t),u()(e,null,[{key:"cssClasses",get:function(){return b}},{key:"strings",get:function(){return C}},{key:"numbers",get:function(){return A}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),u()(e,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,a=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(a),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){if(this.activationTimer_){clearTimeout(this.activationTimer_),this.activationTimer_=0;var n=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(n)}var i=e.cssClasses,a=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(a),t.adapter_.removeClass(o),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(S.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):T.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var t=this;S.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),T.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&k.length>0&&k.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(t&&(k.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){k=[],n.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,r=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;u="".concat(f.x,"px, ").concat(f.y,"px"),l="".concat(p.x,"px, ").concat(p.y,"px")}this.adapter_.updateCssVariable(i,u),this.adapter_.updateCssVariable(a,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},c)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e,n,i,a,o,r,s,c,u,l=this.activationState_,d=l.activationEvent;return l.wasActivatedByPointer?(e=d,n=this.adapter_.getWindowPageOffset(),i=this.adapter_.computeBoundingRect(),r=n.x,s=n.y,c=r+i.left,u=s+i.top,"touchstart"===e.type?(a=e.changedTouches[0].pageX-c,o=e.changedTouches[0].pageY-u):(a=e.pageX-c,o=e.pageY-u),t={x:a,y:o}):t={x:this.frame_.width/2,y:this.frame_.height/2},{startPoint:t={x:t.x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,a=i.hasDeactivationUXRun,o=i.isActivated;(a||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},A.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=null},e.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(t){var e=this,n=this.activationState_;if(n.isActivated){var i=Object.assign({},n);if(n.isProgrammatic){requestAnimationFrame(function(){return e.animateDeactivation_(null,i)}),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,i),e.resetActivationState_()})}}},{key:"deactivate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deactivate_(t)}},{key:"animateDeactivation_",value:function(t,e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=n*e.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,a=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(a,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})}}]),e}(n("oLRI").a),I=function(t){function e(){var t,n;s()(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=d()(this,(t=p()(e)).call.apply(t,[this].concat(a)))).disabled=!1,n.unbounded_,n}return m()(e,t),u()(e,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new O(e.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,i=void 0===n?void 0:n,a=new e(t);return void 0!==i&&(a.unbounded=i),a}},{key:"createAdapter",value:function(t){var e,n=(e=HTMLElement.prototype,["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(t){return t in e}).pop());return{browserSupportsCssVars:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a;if("boolean"===typeof a&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var i=t.CSS.supports("--css-vars","yes"),o=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!i&&!o)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(a=n),n}}(window)},isUnbounded:function(){return t.unbounded},isSurfaceActive:function(){return t.root_[n](":active")},isSurfaceDisabled:function(){return t.disabled},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},containsEventTarget:function(e){return t.root_.contains(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,E())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,E())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,E())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,E())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),e}(y.a),w=function t(){s()(this,t)};w.prototype.root_,w.prototype.unbounded,w.prototype.disabled;var D={ROOT:"mdc-dialog",OPEN:"mdc-dialog--open",ANIMATING:"mdc-dialog--animating",BACKDROP:"mdc-dialog__backdrop",SCROLL_LOCK:"mdc-dialog-scroll-lock",ACCEPT_BTN:"mdc-dialog__footer__button--accept",CANCEL_BTN:"mdc-dialog__footer__button--cancel"},H={OPEN_DIALOG_SELECTOR:".mdc-dialog--open",DIALOG_SURFACE_SELECTOR:".mdc-dialog__surface",ACCEPT_SELECTOR:".mdc-dialog__footer__button--accept",ACCEPT_EVENT:"MDCDialog:accept",CANCEL_EVENT:"MDCDialog:cancel"},L={DIALOG_ANIMATION_TIME_MS:120},R=function(t){function e(t){var n;return s()(this,e),(n=d()(this,p()(e).call(this,Object.assign(e.defaultAdapter,t)))).isOpen_=!1,n.componentClickHandler_=function(t){n.adapter_.eventTargetHasClass(t.target,D.BACKDROP)&&n.cancel(!0)},n.dialogClickHandler_=function(t){return n.handleDialogClick_(t)},n.documentKeydownHandler_=function(t){(t.key&&"Escape"===t.key||27===t.keyCode)&&n.cancel(!0)},n.timerId_=0,n.animationTimerEnd_=function(t){return n.handleAnimationTimerEnd_(t)},n}return m()(e,t),u()(e,null,[{key:"cssClasses",get:function(){return D}},{key:"strings",get:function(){return H}},{key:"numbers",get:function(){return L}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},addBodyClass:function(){},removeBodyClass:function(){},eventTargetHasClass:function(){return!1},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerSurfaceInteractionHandler:function(){},deregisterSurfaceInteractionHandler:function(){},registerDocumentKeydownHandler:function(){},deregisterDocumentKeydownHandler:function(){},notifyAccept:function(){},notifyCancel:function(){},trapFocusOnSurface:function(){},untrapFocusOnSurface:function(){},isDialog:function(){return!1}}}}]),u()(e,[{key:"destroy",value:function(){this.isOpen_&&this.close(),this.adapter_.removeClass(e.cssClasses.ANIMATING),clearTimeout(this.timerId_)}},{key:"open",value:function(){this.isOpen_=!0,this.disableScroll_(),this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_),this.adapter_.registerSurfaceInteractionHandler("click",this.dialogClickHandler_),this.adapter_.registerInteractionHandler("click",this.componentClickHandler_),clearTimeout(this.timerId_),this.timerId_=setTimeout(this.animationTimerEnd_,e.numbers.DIALOG_ANIMATION_TIME_MS),this.adapter_.addClass(e.cssClasses.ANIMATING),this.adapter_.addClass(e.cssClasses.OPEN)}},{key:"close",value:function(){this.isOpen_=!1,this.enableScroll_(),this.adapter_.deregisterSurfaceInteractionHandler("click",this.dialogClickHandler_),this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_),this.adapter_.deregisterInteractionHandler("click",this.componentClickHandler_),this.adapter_.untrapFocusOnSurface(),clearTimeout(this.timerId_),this.timerId_=setTimeout(this.animationTimerEnd_,e.numbers.DIALOG_ANIMATION_TIME_MS),this.adapter_.addClass(e.cssClasses.ANIMATING),this.adapter_.removeClass(e.cssClasses.OPEN)}},{key:"isOpen",value:function(){return this.isOpen_}},{key:"accept",value:function(t){t&&this.adapter_.notifyAccept(),this.close()}},{key:"cancel",value:function(t){t&&this.adapter_.notifyCancel(),this.close()}},{key:"handleDialogClick_",value:function(t){var e=t.target;this.adapter_.eventTargetHasClass(e,D.ACCEPT_BTN)?this.accept(!0):this.adapter_.eventTargetHasClass(e,D.CANCEL_BTN)&&this.cancel(!0)}},{key:"handleAnimationTimerEnd_",value:function(){this.adapter_.removeClass(e.cssClasses.ANIMATING),this.isOpen_&&this.adapter_.trapFocusOnSurface()}},{key:"disableScroll_",value:function(){this.adapter_.addBodyClass(D.SCROLL_LOCK)}},{key:"enableScroll_",value:function(){this.adapter_.removeBodyClass(D.SCROLL_LOCK)}}]),e}(g.b),N=n("bJJb"),x=n.n(N);var F=function(t){function e(){return s()(this,e),d()(this,p()(e).apply(this,arguments))}return m()(e,t),u()(e,[{key:"initialize",value:function(){this.focusTrap_=function(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:x.a)(t,{initialFocus:e,clickOutsideDeactivates:!0})}(this.dialogSurface_,this.acceptButton_),this.footerBtnRipples_=[];for(var t,e=this.root_.querySelectorAll(".mdc-dialog__footer__button"),n=0;t=e[n];n++)this.footerBtnRipples_.push(new I(t))}},{key:"destroy",value:function(){this.footerBtnRipples_.forEach(function(t){return t.destroy()}),h()(p()(e.prototype),"destroy",this).call(this)}},{key:"show",value:function(){this.foundation_.open()}},{key:"close",value:function(){this.foundation_.close()}},{key:"getDefaultFoundation",value:function(){var t=this;return new R({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},addBodyClass:function(t){return document.body.classList.add(t)},removeBodyClass:function(t){return document.body.classList.remove(t)},eventTargetHasClass:function(t,e){return t.classList.contains(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n)},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n)},registerSurfaceInteractionHandler:function(e,n){return t.dialogSurface_.addEventListener(e,n)},deregisterSurfaceInteractionHandler:function(e,n){return t.dialogSurface_.removeEventListener(e,n)},registerDocumentKeydownHandler:function(t){return document.addEventListener("keydown",t)},deregisterDocumentKeydownHandler:function(t){return document.removeEventListener("keydown",t)},notifyAccept:function(){return t.emit(R.strings.ACCEPT_EVENT)},notifyCancel:function(){return t.emit(R.strings.CANCEL_EVENT)},trapFocusOnSurface:function(){return t.focusTrap_.activate()},untrapFocusOnSurface:function(){return t.focusTrap_.deactivate()},isDialog:function(e){return e===t.dialogSurface_}})}},{key:"open",get:function(){return this.foundation_.isOpen()}},{key:"acceptButton_",get:function(){return this.root_.querySelector(R.strings.ACCEPT_SELECTOR)}},{key:"dialogSurface_",get:function(){return this.root_.querySelector(R.strings.DIALOG_SURFACE_SELECTOR)}}],[{key:"attachTo",value:function(t){return new e(t)}}]),e}(g.a),M="mdc-dialog__body--scrollable",B={CHANGE:"change",CLOSE:"close",CONFIRM:"confirm",ACCEPT:"accept",CANCEL:"cancel"},P={name:"ui-dialog",model:{prop:"open",event:B.CHANGE},props:{open:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!1},noBackdrop:{type:Boolean,default:!1},resetScroll:{type:Boolean,default:!1}},data:function(){return{$dialog:null,$dialogBody:null}},watch:{open:function(t){t?this.$dialog.show():(this.$dialog.close(),this.$dialogBody&&(this.$dialogBody.scrollTop=0))}},mounted:function(){var t=this;this.$dialog=new F(this.$el),this.$nextTick(function(){t.resetScroll&&(t.$dialogBody=t.$refs.dialog.querySelector(".".concat(M))),t.$el.querySelector(".mdc-button")||console.warn("`<ui-button>` is required in the dialog")})},methods:{handleClose:function(){this.closable?this.$emit(B.CHANGE,!1):this.$emit(B.CLOSE)},handleAccept:function(){this.$emit(B.ACCEPT),this.$emit(B.CONFIRM,!0),this.handleClose()},handleCancel:function(){this.$emit(B.CANCEL),this.$emit(B.CONFIRM,!1),this.handleClose()}}},U=n("KHd+"),V=Object(U.a)(P,i,[],!1,null,null,null);V.options.__file="src/scripts/components/dialog/dialog.vue";e.a=V.exports}})});