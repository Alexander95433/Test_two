
//import FormValidator from '../components/FormValidator.js';
const formElement = document.querySelector('.leave-request__form')
 const config = { 
    submitButtonSelector: '.button-page_leave-request-submit',
    inputSelector: '.leave-request__input',
    inputErrorClass: 'leave-request__input_error',
    label:'.leave-request__label',
    labelErrorClass: 'leave-request__label-error',
    errorClass: '.leave-request__error-span'
 }
 


 class FormValidator {
    constructor(config, formElement) {
        this.config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(`${this.config.inputSelector}`));
        this._buttonElement = this._formElement.querySelector(`${this.config.submitButtonSelector}`);
        this._label = this._formElement.querySelector(`${this.config.label}`)
    };
    
    //Подключаю обработчик к form 
    enableValidation() {
        this._addListener();
    };

    //Добавляю слушателей к каждому input  
    _addListener() {
        this._disablSubmit();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checksValidation(inputElement);
               
                this._disablSubmit();
            });
        });
    };

    //Проверка всех полей на валидность
    _checkingInputValidity(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid)
    };

    //Проверяю валидны ли все поля ввода , и после этого включаю кнопку submit
    _disablSubmit() {
        this._checkingInputValidity(this._inputList) ? this._disableSubmitButton() : this._enableSubmitButton();
    };

    //Проверил валидацию
    _checksValidation(inputElement) {
        if (!inputElement.validity.valid) {
            this._addErrorClass(inputElement, inputElement.validationMessage);
        } else {
            this._removeErrorClass(inputElement);
        }
    };

    //Добавил класс ошибки
    _addErrorClass(inputElement, errorMessege) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        const errorLabel = this._formElement.querySelector(`.${inputElement.name}-label-error`);
        console,console.log(errorLabel);
        errorElement.textContent = errorMessege;
        inputElement.classList.add(`${this.config.inputErrorClass}`);
        errorElement.classList.add(`${this.config.errorClass}`);
        
        errorLabel.classList.add(`${this.config.labelErrorClass}`);
        errorElement.hidden = false;
    };

    //Убрал класс ошибки
    _removeErrorClass(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        const errorLabel = this._formElement.querySelector(`.${inputElement.name}-label-error`);
        errorElement.hidden = true;
        errorElement.textContent = '';
        inputElement.classList.remove(`${this.config.inputErrorClass}`);
        errorLabel.classList.remove(`${this.config.labelErrorClass}`);
        
    };

    //Включаю и выключаю кнопку submit
    _disableSubmitButton() { this._buttonElement.disabled = true; };
    _enableSubmitButton() { this._buttonElement.disabled = false; };
};


 const validator = new FormValidator(config, formElement)
 validator.enableValidation()

 