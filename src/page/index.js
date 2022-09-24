import '../page/index.css';
import data from '../utils/data.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/PopupWithImage.js';

const cards = Array.from(document.querySelectorAll('.portfolio__card'))
cards.forEach((item) => {
     const cardPicture = item.querySelector('.portfolio__card-picture')
     const cardTitle = item.querySelector('.portfolio__card-title')
     const cardSubtitle =  item.querySelector('.portfolio__card-subtitle')
     cardPicture.addEventListener('click', () => {popupWithImage.open(item, cardPicture, cardTitle, cardSubtitle)}) 
})

const popupWithImage = new PopupWithImage('.popup_zoom-cards');
popupWithImage.setEventListeners();

const validator = new FormValidator(data.config, data.formElement)
validator.enableValidation()




