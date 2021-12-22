import Swiper from '../../../node_modules/swiper/swiper-bundle.min.js'
const swiperCount = document.querySelectorAll('.mySwiper');
let initSwiper = false;

if (swiperCount.length > 0) {
    let swiper = undefined;

    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
        let desktop = window.matchMedia('(min-width: 769px)');

        // Enable (for mobile)
        if ( mobile.matches ) {
            initSwiper = true;
            if (typeof swiper == 'undefined') {
                swiper = new Swiper(".mySwiper", {
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    preventClicks: false,
                    preventClicksPropagation: false,
                    centeredSlides: true,
                    spaceBetween: 0,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    autoplay: {
                        delay: 4500,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        768: {
                            loop: false,
                            touchRatio: 0
                        },
                    }
                });
            }
        }

        // Disable (for tablet)
        else if ( desktop.matches ) {
            //swiper.destroy();
            if (typeof swiper != 'undefined') {
                swiper.detachEvents(); 
                swiper.destroy();
                swiper = undefined;
            }
            initSwiper = false;
        }
    }
    /* On Load
    **************************************************************/
    window.addEventListener('load', function() {
        swiperMode();
    });

    /* On Resize
    **************************************************************/
    window.addEventListener('resize', function() {
        swiperMode();
    });
}