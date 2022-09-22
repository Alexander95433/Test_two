const formElement = document.querySelector('.leave-request__form')
 const config = { 
    submitButtonSelector: '.button-page_leave-request-submit',
    inputSelector: '.leave-request__input',
    inputErrorClass: 'leave-request__input_error',
    label:'.leave-request__label',
    labelErrorClass: 'leave-request__label-error',
    errorClass: '.leave-request__error-span'
 }

 export {formElement, config};