(()=>{"use strict";var e="";const t=e+"0923441dbf2d048d388c.png",o=e+"65077d9ebf6f7a52a9f2.png",i=e+"0c4a93e62e885340ed2c.png",r=e+"b4ca281452a2ffd54967.png",n=e+"4f694719df3f5a036f26.png",s=e+"ef8b2ceecd27432fb1a9.png";var a=document.querySelector(".leave-request__form"),l=[{src:t,title:"«Натали» — Ивановский трикотаж оптом",subtitle:"Редизайн сайта, поддержка сайта"},{src:o,title:"Podium — эротический массаж",subtitle:"Разработка, редизайн"},{src:i,title:"Аудит отдела маркетинга и продаж для Название бренда длинное название...",subtitle:"Аудит, маркетинг сюда кратко теги"},{src:r,title:"Аудит отдела маркетинга и продаж для Название бренда",subtitle:"Аудит, маркетинг сюда кратко теги"},{src:n,title:"Аудит отдела маркетинга и продаж для Название бренда",subtitle:"Аудит, маркетинг сюда кратко теги"},{src:s,title:"Аудит отдела маркетинга и продаж для Название бренда",subtitle:"Аудит, маркетинг сюда кратко теги"}];console.log(l);const c={formElement:a,config:{submitButtonSelector:".button-page_leave-request-submit",inputSelector:".leave-request__input",inputErrorClass:"leave-request__input_error",label:".leave-request__label",labelErrorClass:"leave-request__label_error",errorClass:".leave-request__error-span"},dataCards:l};function u(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this._formElement=o,this._inputList=Array.from(this._formElement.querySelectorAll("".concat(this.config.inputSelector))),this._buttonElement=this._formElement.querySelector("".concat(this.config.submitButtonSelector)),this._label=this._formElement.querySelector("".concat(this.config.label))}var t,o;return t=e,(o=[{key:"enableValidation",value:function(){this._addListener()}},{key:"_addListener",value:function(){var e=this;this._disablSubmit(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checksValidation(t),e._disablSubmit()}))}))}},{key:"_checkingInputValidity",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_disablSubmit",value:function(){this._checkingInputValidity(this._inputList)?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_checksValidation",value:function(e){e.validity.valid?this._removeErrorClass(e):this._addErrorClass(e,e.validationMessage)}},{key:"_addErrorClass",value:function(e,t){var o=this._formElement.querySelector(".".concat(e.id,"-error")),i=this._formElement.querySelector(".".concat(e.name,"-label-error"));o.textContent=t,e.classList.add("".concat(this.config.inputErrorClass)),o.classList.add("".concat(this.config.errorClass)),i.classList.add("".concat(this.config.labelErrorClass)),o.hidden=!1}},{key:"_removeErrorClass",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error")),o=this._formElement.querySelector(".".concat(e.name,"-label-error"));t.hidden=!0,t.textContent="",e.classList.remove("".concat(this.config.inputErrorClass)),o.classList.remove("".concat(this.config.labelErrorClass))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.disabled=!1}}])&&u(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();const p=d;function _(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._zoomCardsPicture=this._popup.querySelector(".popup__picture-zoom-cards"),this._zoomCardsTitle=this._popup.querySelector(".popup__title-zoom-cards"),this._zoomCardsSubtitle=this._popup.querySelector(".popup__subtitle-zoom-cards")}var t,o;return t=e,(o=[{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._handleEscClose),this._handleEscClose=this._handleEscClose.bind(this)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_visible")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}},{key:"open",value:function(e,t,o,i){this._zoomCardsPicture.src=t.src,this._zoomCardsPicture.alt=o.innerHTML,this._zoomCardsTitle.textContent=o.innerHTML,this._zoomCardsSubtitle.textContent=i.innerHTML,this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._handleEscClose)}}])&&_(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();Array.from(document.querySelectorAll(".portfolio__card")).forEach((function(e){var t=e.querySelector(".portfolio__card-picture"),o=e.querySelector(".portfolio__card-title"),i=e.querySelector(".portfolio__card-subtitle");t.addEventListener("click",(function(){h.open(e,t,o,i)}))}));var h=new f(".popup_zoom-cards");h.setEventListeners(),console.log(c),new p(c.config,c.formElement).enableValidation()})();