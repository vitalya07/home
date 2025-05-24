'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open')
    });

    const helpSwiper = new Swiper('.help-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})