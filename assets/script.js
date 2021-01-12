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
let x = document.getElementById('carouselExample')

$('#carouselExample').on('slide.bs.carousel', function (e) {

    console.log('ddfg', $(e.relatedTarget.index))
})


//     var $e = $(e.relatedTarget);
//     console.log($e)
//     var idx = $e.index();
//     console.log("IDX :  " + idx);
    
//     var itemsPerSlide = 3;
//     var totalItems = $('.carousel-item').length;
//     console.log(totalItems)
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         console.log(it)
//         for (var i=0; i<it; i++) {
//             // append slides to end
//             if (e.direction=="left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });
