!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="pRPg")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},SksO:function(t,e){function n(e,i){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,i)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},cDf5:function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oRPr:function(t,e,n){"use strict";e.a=function(t,e){"undefined"!==typeof window&&window.Vue&&window.Vue.directive(t,e)}},pRPg:function(t,e,n){"use strict";n.r(e);var i,a,r=n("oRPr"),o=n("lwsE"),s=n.n(o),u=n("W8MJ"),c=n.n(u),d=n("a1gu"),l=n.n(d),f=n("Nsbk"),v=n.n(f),p=n("7W2i"),_=n.n(p),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s()(this,t),this.adapter_=e}return c()(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),c()(t,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),t}(),m=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;s()(this,t),this.root_=e;for(var i=arguments.length,a=new Array(i>2?i-2:0),r=2;r<i;r++)a[r-2]=arguments[r];this.initialize.apply(this,a),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return c()(t,null,[{key:"attachTo",value:function(e){return new t(e,new h)}}]),c()(t,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),t}(),y={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},g={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},b={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===a||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}a=n}return!!a&&{passive:!0}}var S=["touchstart","pointerdown","mousedown","keydown"],C=["touchend","pointerup","mouseup"],E=[],T=function(t){function e(t){var n;return s()(this,e),(n=l()(this,v()(e).call(this,Object.assign(e.defaultAdapter,t)))).layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(t){return n.deactivate_(t)},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_=null,n}return _()(e,t),c()(e,null,[{key:"cssClasses",get:function(){return y}},{key:"strings",get:function(){return g}},{key:"numbers",get:function(){return b}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),c()(e,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,a=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(a),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){if(this.activationTimer_){clearTimeout(this.activationTimer_),this.activationTimer_=0;var n=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(n)}var i=e.cssClasses,a=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(a),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(S.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):C.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var t=this;S.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),C.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&E.length>0&&E.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(t&&(E.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){E=[],n.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,r=e.cssClasses,o=r.FG_DEACTIVATION,s=r.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",d="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),f=l.startPoint,v=l.endPoint;c="".concat(f.x,"px, ").concat(f.y,"px"),d="".concat(v.x,"px, ").concat(v.y,"px")}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(a,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e,n,i,a,r,o,s,u,c,d=this.activationState_,l=d.activationEvent;return d.wasActivatedByPointer?(e=l,n=this.adapter_.getWindowPageOffset(),i=this.adapter_.computeBoundingRect(),o=n.x,s=n.y,u=o+i.left,c=s+i.top,"touchstart"===e.type?(a=e.changedTouches[0].pageX-u,r=e.changedTouches[0].pageY-c):(a=e.pageX-u,r=e.pageY-c),t={x:a,y:r}):t={x:this.frame_.width/2,y:this.frame_.height/2},{startPoint:t={x:t.x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,a=i.hasDeactivationUXRun,r=i.isActivated;(a||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},b.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=null},e.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(t){var e=this,n=this.activationState_;if(n.isActivated){var i=Object.assign({},n);if(n.isProgrammatic){requestAnimationFrame(function(){return e.animateDeactivation_(null,i)}),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,i),e.resetActivationState_()})}}},{key:"deactivate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deactivate_(t)}},{key:"animateDeactivation_",value:function(t,e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=n*e.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,a=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(a,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})}}]),e}(h),w=function(t){function e(){var t,n;s()(this,e);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=l()(this,(t=v()(e)).call.apply(t,[this].concat(a)))).disabled=!1,n.unbounded_,n}return _()(e,t),c()(e,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new T(e.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,i=void 0===n?void 0:n,a=new e(t);return void 0!==i&&(a.unbounded=i),a}},{key:"createAdapter",value:function(t){var e,n=(e=HTMLElement.prototype,["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(t){return t in e}).pop());return{browserSupportsCssVars:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i;if("boolean"===typeof i&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var a=t.CSS.supports("--css-vars","yes"),r=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!a&&!r)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(i=n),n}}(window)},isUnbounded:function(){return t.unbounded},isSurfaceActive:function(){return t.root_[n](":active")},isSurfaceDisabled:function(){return t.disabled},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},containsEventTarget:function(e){return t.root_.contains(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,A())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,A())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,A())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,A())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),e}(m),k=function t(){s()(this,t)};k.prototype.root_,k.prototype.unbounded,k.prototype.disabled;var I="mdc-ripple-surface",O="mdc-ripple-surface--primary",R="mdc-ripple-surface--accent",D=function(t,e,n){var i,a=n.value,r=[I];switch(a){case 1:case"primary":r.push(O);break;case 2:case"secondary":r.push(R)}(i=e.classList)[t].apply(i,r)},H={name:"ripple",bind:function(t,e){D("add",t,e)},inserted:function(t,e){!function(t,e){var n=e.arg,i=e.modifiers;if("cssOnly"!==n){var a=new w(t);i.unbounded&&(a.unbounded=!0)}}(t,e)},unbind:function(t,e){D("remove",t,e)}};Object(r.a)(H.name,H);e.default=H}})});