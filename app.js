const hamburderContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.haeader__main-nav--links li ');

// ad even listener

hamburger.addEventListener('click', () => {
    hamburderContainer.classList.toggle('clicked');
});