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

const buttonsWrapper = document.querySelector('.map');
const slides = document.querySelector('.inner');

// buttonsWrapper.addEventListener('click', e => {
//    if(e.target.nodeName === 'BUTTON' && window.innerWidth == 375){
//     Array.from(buttonsWrapper.children).forEach(item => item.classList.remove('active'));
//     if(e.target.classList.contains('first')){
//         slides.style.transform = 'translateX(0%)';
//         e.target.classList.add('active');
//     } else if (e.target.classList.contains('second')){
//         slides.style.transform = 'translateX(-36.333333333%)';
//         e.target.classList.add('active');
//     } else if (e.target.classList.contains('third')){
//         slides.style.transform = 'translateX(-60%)';
//         e.target.classList.add('active');
//     } else if (e.target.classList.contains('fourth')){
//         slides.style.transform = 'translateX(-140%)';
//         e.target.classList.add('active');
//     } 
// }
// });


buttonsWrapper.addEventListener('click', e => {
    if(e.target.nodeName === 'BUTTON' && window.innerWidth == 375){
        Array.from(buttonsWrapper.children).forEach(item => item.classList.remove('active'));
        if(e.target.classList.contains('first')){
            slides.style.transform = 'translateX(0%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('second')){
            slides.style.transform = 'translateX(-50.333333333%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('third')){
            slides.style.transform = 'translateX(-100%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('fourth')){
            slides.style.transform = 'translateX(-150%)';
            e.target.classList.add('active');
        } 
    } else if(e.target.nodeName === 'BUTTON' && window.innerWidth > 375){
        Array.from(buttonsWrapper.children).forEach(item => item.classList.remove('active'));
        if(e.target.classList.contains('first')){
            slides.style.transform = 'translateX(0%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('second')){
            slides.style.transform = 'translateX(-33.333333333%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('third')){
            slides.style.transform = 'translateX(-36%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('fourth')){
            slides.style.transform = 'translateX(0%)';
            e.target.classList.add('active');
        } 
    }
 })
