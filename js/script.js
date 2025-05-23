'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open')
    })
})