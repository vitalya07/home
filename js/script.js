'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    //Гамбургер
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open')
    });
     //Смена цвета у шапки
    const main = document.querySelector('.main');
    if(main) {
        let mainOfsetPX = main.offsetHeight;
        window.addEventListener('scroll', ()=> {
        if(window.scrollY > mainOfsetPX) {
            header.style.backgroundColor = 'rgba(0,0,0,1)';
        } if(window.scrollY < mainOfsetPX) {
            header.style.backgroundColor = 'rgba(0,0,0,0)';       
        }
        });
    }   
    //Смена цвета у шапки конец
    //Открытие модального окна
    const modal = document.querySelector('.modal');
    const btnModal = document.querySelector('[data-modal]');
    btnModal.addEventListener('click', ()=> {
        showModal();
    });
    modal.addEventListener('click', (e)=> {
        if(e.target.classList.contains('modal__close') || e.target == modal) {
            hideModal();
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' && modal.classList.contains('show') ) {
            hideModal()
        }
    })
    function hideModal() {
        modal.classList.remove('show')
        modal.classList.add('hiden');
    }
    function showModal() {
        modal.classList.remove('hiden');
        modal.classList.add('show');
    }
    //Открытие модального окна конец
    //Раскрытие подробно начало//
    const about = document.querySelector('.about');
    if(about) {
        const aboutNext = document.querySelector('.about__next');
        const aboutBox = document.querySelector('.about__box');
        const aboutIcon = document.querySelector('.about__next-icon');
        aboutNext.addEventListener('click', (e)=> {
            aboutBox.classList.toggle('none');
            aboutIcon.style.cssText = 'transform: rotate(180deg)'
            if(aboutBox.classList.contains('none')) {
                aboutIcon.style.cssText = 'transform: rotate(0deg)'
            }
        })
    };
    
    //Раскрытие подробно конец//
    //Слайдер
    const swiper = document.querySelector('.swiper');
    if (swiper) {
             const helpSwiper = new Swiper('.help-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    const responsesSwiper = new Swiper('.responses-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const phptogalereySwiper = new Swiper('.photogalerey-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: '3', // Автоматическое определение количества слайдов
        centeredSlides: true,   // Центрирование активного слайда
         spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            568: {
                slidesPerView: 2, // 2 слайда для экранов меньше 769px
            },
            250: {
                slidesPerView: 1, // 2 слайда для экранов меньше 769px
            },
        }
    });
    const blogSwiper  = new Swiper('.blog-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: '3',  
        spaceBetween: 60,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            568: {
                slidesPerView: 2, // 2 слайда для экранов меньше 769px
            },
            250: {
                slidesPerView: 1, // 2 слайда для экранов меньше 769px
            },
        }
    });
    if(helpSwiper) {
        changeSwiperArrow();
    }
    function changeSwiperArrow() {
        const prev = document.querySelectorAll('.swiper-button-prev');
        const next = document.querySelectorAll('.swiper-button-next');
        prev.forEach(prev => {
            prev.style.color = '#ff0101';
        });
        next.forEach(next => {
            next.style.color = '#ff0101';
        });      
    }
    }
   
   
})


                            
                            