const navHamburger = document.getElementById('navbar-hamburger');
const navClose = document.getElementById('navbar-icon-close');
const modal = document.getElementById('modal')

function navHamburgerHandler (){
    if(navHamburger.classList.contains = 'show'){
        navHamburger.classList.add('none');
        navHamburger.classList.remove('show');
        navClose.classList.add('show');
        navClose.classList.remove('none');
        modal.classList.toggle('show');
    
    }  
}

navHamburger.addEventListener('click', navHamburgerHandler)

function navCrossHandler (){
    if(navHamburger.classList.contains = 'none'){
        navHamburger.classList.remove('none');
        navHamburger.classList.add('show');
        navClose.classList.add('none');
        navClose.classList.remove('show');
        modal.classList.add('none');
        modal.classList.remove('show');
    }
}

navClose.addEventListener('click', navCrossHandler);

jQuery(document).ready(function($) {
    "use strict";
$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }

 })
})
