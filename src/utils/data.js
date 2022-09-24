const formElement = document.querySelector('.leave-request__form');
// import portfolio1 from '../image/portfolio-1.png';
// import portfolio2 from '../image/portfolio-2.png';
// import portfolio3 from '../image/portfolio-3.png';
// import portfolio4 from '../image/portfolio-4.png';
// import portfolio5 from '../image/portfolio-5.png';
// import portfolio6 from '../image/portfolio-6.png';

// const dataCards = [
//     {
//         src: portfolio1,
//         title: '«Натали» — Ивановский трикотаж оптом',
//         subtitle: 'Редизайн сайта, поддержка сайта',
//     },
//     {
//         src: portfolio2,
//         title: 'Podium — эротический массаж',
//         subtitle: 'Разработка, редизайн',
//     },
//     {
//         src: portfolio3,
//         title: 'Аудит отдела маркетинга и продаж для Название бренда длинное название...',
//         subtitle: 'Аудит, маркетинг сюда кратко теги',
//     },
//     {
//         src: portfolio4,
//         title: 'Аудит отдела маркетинга и продаж для Название бренда',
//         subtitle: 'Аудит, маркетинг сюда кратко теги',
//     },
//     {
//         src: portfolio5,
//         title: 'Аудит отдела маркетинга и продаж для Название бренда',
//         subtitle: 'Аудит, маркетинг сюда кратко теги',
//     },
//     {
//         src: portfolio6,
//         title: 'Аудит отдела маркетинга и продаж для Название бренда',
//         subtitle: 'Аудит, маркетинг сюда кратко теги',
//     }
// ];

const config = {
    submitButtonSelector: '.button-page_leave-request-submit',
    inputSelector: '.leave-request__input',
    inputErrorClass: 'leave-request__input_error',
    label: '.leave-request__label',
    labelErrorClass: 'leave-request__label_error',
    errorClass: '.leave-request__error-span'
}

export default { config, formElement };