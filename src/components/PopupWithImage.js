class PopupWithImage {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._zoomCardsPicture = this._popup.querySelector('.popup__picture-zoom-cards');
        this._zoomCardsTitle = this._popup.querySelector('.popup__title-zoom-cards');
        this._zoomCardsSubtitle = this._popup.querySelector('.popup__subtitle-zoom-cards');

    }
  

    //универсальная функция для закрытия popup//
    close() {
        this._popup.classList.remove('popup_visible');
        document.removeEventListener('keydown', this._handleEscClose)
        this._handleEscClose = this._handleEscClose.bind(this);
    };
    //Закрываю popup кнопкой Escape
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()
        };
    };

    setEventListeners() {
        //Закрываю popup по click на overlay
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_visible')) {
                this.close();
            };
            if (evt.target.classList.contains('popup__close'))
                this.close();
        });

    };
    //дополняю родительский метод open  вставляет в попап картинку с src изображения и подписью к картинке
    open(card, picture, title, subtitle) {
        this._zoomCardsPicture.src = picture.src
        this._zoomCardsPicture.alt = title.innerHTML;
        this._zoomCardsTitle.textContent = title.innerHTML;
        this._zoomCardsSubtitle.textContent = subtitle.innerHTML;
        //Открываю popup zoom //
             //универсальная функция для открытия popup//
 
        this._popup.classList.add('popup_visible');
        document.addEventListener('keydown', this._handleEscClose)
    };
}

export default PopupWithImage