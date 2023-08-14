new WOW().init();

$('.select__option').click(function() {
    let selectMessenger = $(this).data('value').toLowerCase();
    $(this).parents('.select')
    $(this).parents('.select').find('input[type="hidden"]').val(selectMessenger);
    $(this).parents('.select').find('.select__toggle-img').removeClass('active');
    $(this).parents('.select').find('.select__toggle-img__' + selectMessenger).addClass('active');
});

$(document).mouseleave(function() {
    if (event.clientY < 0 || event.clientY < 3) {

        let leave = 1;
        if (+$.cookie('leave-popup')) {
            leave = 0;
        }
        if (leave) {
            $('.popup-leave').css('display', 'flex');
            $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
            $.cookie('leave-popup', 1, { expires: 7 });
        }

    }
});

let offsetTop = $(window).height() * 2;
$(window).scroll(function(event) {
    if ($(document).scrollTop() > offsetTop) {
        $('.up').addClass('active');
    } else {
        $('.up').removeClass('active');
    }
});

$('.up').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 0);
});

let headerHeight;

if ($(window).width() > 768) {
    headerHeight = $('.nav').offset().top + $('.nav').height();
} else {
    headerHeight = $('.header').offset().top + $('.header').height();
}

$(window).scroll(function() {

    if ($(window).width() > 600) {
        if ($(window).scrollTop() >= headerHeight) {
            $('.nav').addClass('fixed')
        } else if ($(window).scrollTop() <= headerHeight) {
            $('.nav').removeClass('fixed')
        }
    } else {
        if ($(window).scrollTop() >= headerHeight) {

            $('.header').addClass('fixed')

        } else if ($(window).scrollTop() <= headerHeight) {

            $('.header').removeClass('fixed')
        }
    }


})

$('.header-burger').click(function() {
    $('.nav').toggleClass('active');
    $('html').toggleClass('scroll')
});

$('.nav a, .nav-close').click(function() {
    if ($(window).width() < 600) {
        $('.nav').toggleClass('active');
        $('html').toggleClass('scroll')
    }

});

$('.popup-request__open').click(function() {
    $('.popup-request').css('display', 'flex')
    $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
});

$('.popup-stock__open').click(function() {
    $('.popup-stock').css('display', 'flex')
    let stock = $(this).siblings('.budget-block__title').text()
    $('.popup-stock__title').text(stock);
    $('.popup-stock__name').val(stock);
    $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
});

$('.popup-politic__open').click(function() {
    $('.popup-politic').css('display', 'flex')
    $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
});

$('.popup-bg, .popup-close').click(function() {
    $('.popup').hide()
    $('body, html').css({ 'overflow': 'visible', 'max-height': 'none' })
});

$('.sidebar-up').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 0);
});
$('.popup-video__close').click(function (e) { 
    e.preventDefault();
    $('.popup-video').fadeOut();
});

let addSlider = $('.add-slider');
addSlider.owlCarousel({
 loop:true,
 dots: false,
 items: 3,
 responsive:{
     0:{
        dots: true,
        dotsEach: true,
        items:2
     },
     600:{
        dots: false,
         items:3
     },
 }
})
$('.add-nav .arrow-prev').click(function() {
 addSlider.trigger('prev.owl.carousel');
})
$('.add-nav .arrow-next').click(function() {
 addSlider.trigger('next.owl.carousel');
})

function addSliderClasses() {
    addSlider.each(function() {
        let total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item').removeClass('first');
        $(this).find('.owl-item').removeClass('last');
        $(this).find('.owl-item.active').each(function(index) {
            if (index === 0) {
                $(this).addClass('first')
            }
            if (index === total - 1 && total > 1) {
                $(this).addClass('last')
            }
        })
    })
}
addSliderClasses();
addSlider.on('translated.owl.carousel', function(event) {
addSliderClasses()
});


let budgetSlider = $('.budget-slider');
budgetSlider.owlCarousel({
 loop:true,
//  dots: false,
 items: 2,
 responsive:{
    0:{
       dots: true,
       dotsEach: true,
    },
    600:{
       dots: false, 
    },
}

})
$('.budget-nav .arrow-prev').click(function() {
 budgetSlider.trigger('prev.owl.carousel');
})
$('.budget-nav .arrow-next').click(function() {
 budgetSlider.trigger('next.owl.carousel');
})

let arrangedSlider = $('.arranged-slider');
arrangedSlider.owlCarousel({
 loop:true,
 dots: true,
 dotsEach: true,
 items: 3,
 responsive:{
    0:{
        items: 1,
    },
    600:{
        items: 3,
    },
}
})
$('.arranged-slider__wrap .arrow-prev').click(function() {
 arrangedSlider.trigger('prev.owl.carousel');
})
$('.arranged-slider__wrap .arrow-next').click(function() {
 arrangedSlider.trigger('next.owl.carousel');
})



let reviewsVideo = $('.reviews-video__slider');
reviewsVideo.owlCarousel({
 loop:true,
 dots: true,
 dotsEach: true,
 items: 1,
})
$('.reviews-video__nav .arrow-prev').click(function() {
 reviewsVideo.trigger('prev.owl.carousel');
})
$('.reviews-video__nav .arrow-next').click(function() {
 reviewsVideo.trigger('next.owl.carousel');
})

let reviewsPhoto = $('.reviews-photo__slider');
reviewsPhoto.owlCarousel({
 loop:true,
 dots: false,
 items: 2,
})

function reviewsSliderClasses() {
 reviewsPhoto.each(function() {
     let total = $(this).find('.owl-item.active').length;
     $(this).find('.owl-item').removeClass('first');
     $(this).find('.owl-item').removeClass('last');
     $(this).find('.owl-item.active').each(function(index) {
         if (index === 0) {
             $(this).addClass('first')
         }
         if (index === total - 1 && total > 1) {
             $(this).addClass('last')
         }
     })
 })
}
reviewsSliderClasses();
reviewsPhoto.on('translated.owl.carousel', function(event) {
 reviewsSliderClasses()
});


let engineersImages = $('.engineers-images');
engineersImages.owlCarousel({
 loop:true,
 dots: false,
 items: 1,
 margin: 5,
 responsive:{
    0:{
        dots: true,
    },
    600:{
        dots: false,
    },
}
//  animateOut: 'fadeOut',
//  animateIn: 'fadeIn',


})
let engineersName = $('.engineers-name');
engineersName.owlCarousel({
 loop:true,
 dots: false,
 items: 1,
 margin: 5,
 animateOut: 'fadeOut',
 animateIn: 'fadeIn',


})
$('.reviews-engineers-nav .arrow-prev').click(function() {
 engineersImages.trigger('prev.owl.carousel');
 engineersName.trigger('prev.owl.carousel');
})
$('.engineers-nav .arrow-next').click(function() {
 engineersImages.trigger('next.owl.carousel');
 engineersName.trigger('next.owl.carousel');
})

$('.engineers-btn').click(function (e) { 
    $('.engineers-btn').removeClass('active');
    $(this).addClass('active');
    let num = $(this).attr('data-engineersBtn');
    $('.engineers-right').removeClass('active');
    $('.engineers-right').eq(num-1).addClass('active')
});


let mountSlider = $('.mount');
mountSlider.owlCarousel({
 loop:true,
 dots: false,
 items: 1,
 animateOut: 'fadeOut',
 animateIn: 'fadeIn',
 mouseDrag: false,
 touchDrag: false,
//  freeDrag: false
})
$('.mount-nav .arrow-prev').click(function() {
 mountSlider.trigger('prev.owl.carousel');
})
$('.mount-nav .arrow-next').click(function() {
 mountSlider.trigger('next.owl.carousel');
})

//faq
$('.faq-block').click(function () { 
    $(this).toggleClass('active');
});

$('.phone').mask('+7(999)999-99-99')

let contactsSlider1 = $('.contacts-slider-1');
contactsSlider1.owlCarousel({
 loop:true,
 dots: true,
 dotsEach: true,
 items: 1,
 margin: 5
})
$('.contacts-slider__nav-1 .arrow-prev').click(function() {
 contactsSlider1.trigger('prev.owl.carousel');
})
$('.contacts-slider__nav-1 .arrow-next').click(function() {
 contactsSlider1.trigger('next.owl.carousel');
})

let contactsSlider2 = $('.contacts-slider-2');
contactsSlider2.owlCarousel({
 loop:true,
 dots: true,
 dotsEach: true,
 items: 1,
 margin: 5
})
$('.contacts-slider__nav-2 .arrow-prev').click(function() {
 contactsSlider2.trigger('prev.owl.carousel');
})
$('.contacts-slider__nav-2 .arrow-next').click(function() {
 contactsSlider2.trigger('next.owl.carousel');
})

//catalog-date
let date = new Date();

const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

let month = date.getMonth()+1;
let day = date.getDate();



var catalogText = (day<10 ? '0' : '') + day + ' ' +
    monthNames[date.getMonth()] + ' ' +
    date.getFullYear() + ' года';

$('.catalog-update__date').text(catalogText);



$('.quiz-question__number-minus').click(function () { 
    let num = +$(this).siblings('input').val()
    if (num>0) {
        $(this).siblings('input').val(num-1)
    }
});

$('.quiz-question__number-plus').click(function () { 
    let num = +$(this).siblings('input').val()
    if (num<10) {
        $(this).siblings('input').val(num+1)
    }
});

if ($(window).width() < 600) {
    $('.video-right').addClass('owl-carousel');
    let videoRight = $('.video-right');
    videoRight.owlCarousel({
        loop:true,
        dots: true,
        dotsEach: true,
        items: 1,
        margin: 5,
    })

    $('.install-adv').addClass('owl-carousel');
    let installAdv = $('.install-adv');
    installAdv.owlCarousel({
        loop:true,
        dots: true,
        dotsEach: true,
        items: 2,
        // margin: 5,
    })
    // function installAdvClasses() {
    //     installAdv.each(function() {
    //         let total = $(this).find('.owl-item.active').length;
    //         $(this).find('.owl-item').removeClass('first');
    //         $(this).find('.owl-item').removeClass('last');
    //         $(this).find('.owl-item.active').each(function(index) {
    //             if (index === 0) {
    //                 $(this).addClass('first')
    //             }
    //             if (index === total - 1 && total > 1) {
    //                 $(this).addClass('last')
    //             }
    //         })
    //     })
    // }
    // installAdvClasses();
    // installAdv.on('translated.owl.carousel', function(event) {
    // installAdvClasses()
    // });

    $('.quality-wrap').addClass('owl-carousel');
    let qualityWrap = $('.quality-wrap');
    qualityWrap.owlCarousel({
        loop:true,
        dots: true,
        dotsEach: true,
        items: 2,
    })

    $('.models-title__descr').click(function () { 
        $(this).siblings('.models-descr').slideToggle();
    });
    $('.models-title__char').click(function () { 
        
        $(this).siblings('.models-char').slideToggle();
        $(this).siblings('.models-char').css('display','flex')
    });

    $('.models-buttons, .engineers-buttons').click(function () { 
        $(this).toggleClass('active')
    });
}


let modelsManufacturer = $('.models-manufacturer');
modelsManufacturer.owlCarousel({
 rewind:true,
 dots: false,
 items: 7,
 responsive:{
    0:{
        items: 3,
        dots: true,
        dotsEach: true,
    },
    600:{
        items: 7,
        dots: false,
    },
}
})
$('.models-manufacturer__wrap .arrow-prev').click(function() {
 modelsManufacturer.trigger('prev.owl.carousel');
})
$('.models-manufacturer__wrap .arrow-next').click(function() {
 modelsManufacturer.trigger('next.owl.carousel');
})

$('.models-manufacturer__block').click(function () { 
    let num = $(this).attr('data-manufacturer')
    $('.models-manufacturer__block').removeClass('active');
    $(this).addClass('active');
    $('.models-main').removeClass('active');
    $('.models-main-' + num).addClass('active');
});

$('.models-btn').click(function () { 
    let num = $(this).attr('data-modelBtn')
    $(this).siblings('.models-btn').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.models-main').find('.models-wrap').removeClass('active');
    $(this).parents('.models-main').find('.models-wrap-' + num).addClass('active');  
});


$('.quiz-question__text-hint-text').click(function (e) { 
    e.preventDefault(); 
});

//quiz
let total = 0;


$('.quiz-question').each(function(indexInArray, valueOfElement) {
    let questionBlock = indexInArray + 1
    $(this).attr('data-q', questionBlock);
    $(this).find('input').attr('name', 'q-' + questionBlock)
    $('.quiz-question__number-input').each(function (indexInArray) { 
         $(this).attr('name', 'q-2-' + indexInArray )
    });
    total = total + 1;
});

let quizScroll;

if ($(window).width() < 600) {
    quizScroll = $(".quiz-wrap").offset().top

} else {
    quizScroll = $(".quiz-wrap").offset().top
}

let questionNumber = 1;
let inputNumber;

let elem = $('.quiz-form').find("input");

$('.quiz-question__number-plus, .quiz-question__number-minus').click(function (e) { 
    $('.quiz-btn__next').removeAttr('disabled');
    
});

$(elem).on('change', function() {
    $('.quiz-btn__next').removeAttr('disabled');
});


let valid = {};

$('.quiz-btn__next, .quiz-question input[type="radio"]').click(function() {
    // $('.quiz-hint').hide();
    $('.quiz-btn__prev').css('display', 'flex');

    if (questionNumber < total) {
        setTimeout(() => {
            questionNumber++;
            $('.quiz-btn__next').attr('disabled', 'true')
            validNumber = questionNumber - 1
            valid['quiestion-' + validNumber] = true;
            // console.log(valid)
            if (valid['quiestion-' + questionNumber] == true) {
                $('.quiz-btn__next').removeAttr('disabled');
            }
            $('.quiz-question.active').hide();
            $('.quiz-question.active').removeClass('active');
            $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
            $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            lineWidth()
        }, 500);

    } else {
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            $('.quiz-wrap').hide();
            $('.quiz-load').css('display', 'flex');
            $('.quiz-load').addClass('active');
            setTimeout(() => {
                $('.quiz-load').hide();
                $('.quiz-load').removeClass('active');
                $('.quiz-result').show();
                $('.quiz-result').addClass('active');
            }, 1000);
            timer()

        }, 500);

    }
});


$('.quiz-btn__prev').click(function() {
    if (questionNumber > 2) {
        questionNumber--;
        if (valid['quiestion-' + questionNumber] == true) {
            $('.quiz-btn__next').removeAttr('disabled');
            // console.log('valid')
        }
        $('.quiz-question.active').hide();
        $('.quiz-question.active').removeClass('active');
        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');

        $('html, body').animate({
            scrollTop: quizScroll
        }, 0);
    } else if (questionNumber == 2) {
        $('html, body').animate({
            scrollTop: quizScroll
        }, 0);
        questionNumber--;
        $('.quiz-btn__next').removeAttr('disabled');
        $('.quiz-question.active').hide();
        $('.quiz-question.active').removeClass('active');
        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
        // $('.quiz-hint').css('display', 'flex');
        $('.quiz-btn__prev').hide();
    }
    lineWidth()
});

let lineStep = 100 / total;
let line;

function lineWidth() {
    line = lineStep * (questionNumber-1);
    $('.quiz-line__percent').text(Math.round(line));
    line = 'calc(' + line + '% - 10rem)';
    $('.quiz-line__bg').css('width', line)
}
