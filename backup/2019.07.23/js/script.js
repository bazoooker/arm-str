// ОГЛАВЛЕНИЕ

// 0. глобальные переменные
// 1. обработчики на document-ready
// 2. обработчики на scroll
// 3. обработчики на resize





// 0. глобальные переменные
// =========================================================================
var headerIsStatic  = true; // если false - хедер прилип к top
var prodMenuIsOpen  = false; // если false - продуктовое меню не открыто
var canSendEmail    = false; // валидация формы обратной связи
var canSendCallback = false; // валидация формы обратного звонка
var toTopVisible    = false; // показ кнопки "наверх"


	function scrolltorel(rel) {
		console.log(rel);
		v=$('div[rel='+rel+']').offset().top - parseInt($('.header_sticky').css('height'));
		$('html, body').animate({scrollTop: v}, 300);
	}



// 1. обработчики на document-ready
// =========================================================================
$(document).ready(function() {
	$('.table-resp table tr:first-child, .detail_text table tr:first-child').addClass('thead');
	$('.table-resp img, .accordeon__content img, .detail_text img').wrap('<div class=white></div>');

    new WOW().init();

    if( $('.content').hasClass('js-preloader-on-main-page') ) { //только для главной страницы
        setTimeout(function(){
            $('.preloader').addClass('preloader_hidden');
        },2000);
    }
    $('.wrapper').removeClass('no-scroll');

    // открытие каталога
    $('.js-open-prod-catalog').click(function(e) {
        e.preventDefault;

        if(!prodMenuIsOpen) {
            if (headerIsStatic) {
                $('.catalog-menu').addClass('catalog-menu-active catalog-menu-static-header');
                $('.btn_catalog').addClass('active');
            } else {
                $('.btn_catalog').addClass('active');
                $('.catalog-menu').addClass('catalog-menu-active catalog-menu-sticky-header');
            };
            if ( $( window ).width() < 1025 ) {
                $('.wrapper').addClass('no-scroll');
            }
            prodMenuIsOpen = true;
        } else {
            $('.btn_catalog').removeClass('active');
            if (headerIsStatic) {
                $('.catalog-menu').removeClass('catalog-menu-active catalog-menu-static-header');                
            } else {
                $('.catalog-menu').removeClass('catalog-menu-active catalog-menu-sticky-header');
            };
            if ( $( window ).width() < 1025 ) {
                $('.wrapper').removeClass('no-scroll');
            }
            prodMenuIsOpen = false;
        }

    });

    // аккордеоны
    $('.js-accordeon').click(function() {
        let accordIsOpen = $(this).parent().hasClass('accordeon_active');
/*
        $('.accordeon').removeClass('accordeon_active');
        $('.accordeon').find('.accordeon__content').slideUp(300);
  */
        if(accordIsOpen) {
            $(this).parent().removeClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideUp(300);
        }else {
            $(this).parent().addClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideDown(300);
        }
//	v=$(this).offset().top - parseInt($('.header_sticky').css('height'));
//	v=$(this).parent().attr('rel');
//	setTimeout("scrolltorel("+v+")",300);
    });

    // мобильное меню
    $('.js-open-mobile-menu').on('click', function() {

        if( !$('#mobile-menu').hasClass('active') ) {
            $('#mobile-menu').addClass('active');
            $('.page-wrapper').addClass('no-scroll');
        } else {
            $('#mobile-menu').removeClass('active');
            $('.page-wrapper').removeClass('no-scroll');
        }
    });

    // закрытие меню или модалки на esc
    $(document).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) {
            if( $('#mobile-menu').hasClass('active') ) {
                $('#mobile-menu').removeClass('active');
                $('.page-wrapper').removeClass('no-scroll');
            }
            if( $('.modal').hasClass('modal_active') ) {
                $('.modal').removeClass('modal_active');
                $('.overlay_modal').fadeOut(400); 
            }
            if( $(prodMenuIsOpen) ) {
                $('.catalog-menu').removeClass('catalog-menu-active catalog-menu-static-header catalog-menu-sticky-header');
                $('.btn_catalog').removeClass('active');
                prodMenuIsOpen = false;
            }
        }
    });

    // скролл до любой секции
    $('.js-scroll-to-section').click(function() { 
    var targetSection = $(this).data('scroll-target');
        $("html, body").animate({        
            scrollTop: $('#' + targetSection ).offset().top - 100 }, 600);
            return false;
    });

    // модалки
    $(".js-open-modal").on('click', function(e){
        e.preventDefault();

        $('.modal').removeClass('modal_active');
        $('.overlay_modal').fadeOut(400);                          

        var modalName = $(this).data('target');                        
        var modal = $('#' + modalName);

        if( !$(modal).hasClass('modal_active') ) {
            $(modal).addClass('modal_active');
            $('.overlay_modal').fadeIn(400);                          
        } else {
            $(modal).removeClass('modal_active');                          
            $('.overlay_modal').fadeOut(400);                          
        }
    });
    $(".js-close-modal").on('click', function(){
        $('.modal').removeClass('modal_active');
        $('.overlay_modal').fadeOut(400);                          
    });

    // анимация инпутов. Только для красоты
    $('.js-input').on('focus', function() {
        $(this).parent().addClass('signup-form__input_active');
    });
    $('.js-input').on('blur', function() {
        var inpVal = $(this).val();
        if ( inpVal == "" ) {
            $(this).parent().removeClass('signup-form__input_active');
        }
    });





    // ФОРМА ОБРАТНОЙ СВЯЗИ простая валидация по длине строк 
    $('#email-form .js-input_required').on('input', function() {
        $('#email-form .js-input_required').each(function() {
            if($(this).val().length > 3) {
                canSendEmail = true;
            }else {
                canSendEmail = false;
            }
        });

        // ФОРМА ОБРАТНОЙ СВЯЗИ окрашивание кнопки-submit "отправить"
        if (!canSendEmail) {
            $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_no').removeClass('btn_yes');
        }else {
            $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_yes').removeClass('btn_no');
        }
    });

    // ФОРМА ОБРАТНОЙ СВЯЗИ показ сообщений успех-неуспех
    $("#show-mes").on('click', function(e) { //событие прикреплено к кнопке, нужно переназначить на отправку или ajax-событие
        e.preventDefault();
        if(canSendEmail) {
            $('#email-form .signup-form__message').addClass('signup-form__message_success').removeClass('signup-form__message_error');
            $('#email-form .signup-form__message').slideDown(200);
            $('#email-form .signup-form__message').html('<p class="text-center"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Ваше сообщение отправлено</p>');
            $('#email-form .signup-form .btn').removeClass('btn_yes btn_no');
        }
         else {
            $('#email-form .signup-form__message').addClass('signup-form__message_error').removeClass('signup-form__message_success');
            $('#email-form .signup-form__message').slideDown(200);
            $('#email-form .signup-form__message').html('<p class="text-center"><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;&nbsp;Заполните, пожалуйста, поля</p>');
        }
        setTimeout(function() {
            $('#email-form .signup-form__message').removeClass('signup-form__message_success signup-form__message_success');
            $('#email-form .signup-form__message').slideUp(200);
            $('#email-form .signup-form__message').html('');
        },2000)
    });




    // ФОРМА ЗАКАЗА ЗВОНКА простая валидация по длине строк
    $('#callback-form .js-input_required').on('input', function() {
        $('#callback-form .js-input_required').each(function() {
            if($(this).val().length > 3) {
                canSendCallback = true;
            }else {
                canSendCallback = false;
            }
        });

        // ФОРМА ЗАКАЗА ЗВОНКА окрашивание кнопки-submit "отправить"
        if (!canSendCallback) {
            $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_no').removeClass('btn_yes');
        }else {
            $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_yes').removeClass('btn_no');
        }
    });

    // ФОРМА ЗАКАЗА ЗВОНКА показ сообещний успех-неуспех
    $("#show-mes2").on('click', function(e) { //событие прикреплено к кнопке, нужно переназначить на отправку или ajax-событие
        e.preventDefault();
        if(canSendCallback) {
            $('#callback-form .signup-form__message').addClass('signup-form__message_success').removeClass('signup-form__message_error');
            $('#callback-form .signup-form__message').slideDown(200);
            $('#callback-form .signup-form__message').html('<p class="text-center"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Ваше сообщение отправлено</p>');
            $('#callback-form .signup-form .btn').removeClass('btn_yes btn_no');
        }
         else {
            $('#callback-form .signup-form__message').addClass('signup-form__message_error').removeClass('signup-form__message_success');
            $('#callback-form .signup-form__message').slideDown(200);
            $('#callback-form .signup-form__message').html('<p class="text-center"><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;&nbsp;Заполните, пожалуйста, поля</p>');
        }
        setTimeout(function() {
            $('#callback-form .signup-form__message').removeClass('signup-form__message_success signup-form__message_success');
            $('#callback-form .signup-form__message').slideUp(200);
            $('#callback-form .signup-form__message').html('');
        },2000)
    });

    // кнопка наверх
    $('.js-scroll-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});











// 2. обработчики на scroll
// =========================================================================
$(window).scroll(function() {

    // прилипающий сайдбар
    var stickyHeaderHeight  = $('.header').outerHeight();
    var topHeight           = $('.hero').height() + stickyHeaderHeight + 60; // 60 - маргин после .hero
    var stickyWrapperHeight = $('#sidebar-wrapper').outerHeight();
    var stickyAsideHeight   = $('#sidebar').outerHeight();
    var winScrollTop        = $(window).scrollTop();
    console.log('высота хедера: ' + stickyHeaderHeight);
    console.log('высота верха: ' + topHeight);
    console.log('высота обертки: ' + stickyWrapperHeight);
    console.log('высота прилипалки: ' + stickyAsideHeight);
    console.log('скроллТоп: ' + winScrollTop);
    console.log('------------------------');
    // прилипалка срабатывает только если есть место для скролла и на экранах больше телефона
    if ( (stickyWrapperHeight > $(window).height()) && ($(window).width() > 768) ) {
        if (winScrollTop < (topHeight) ) {
            $('#sidebar-reel').addClass('sticky-at-top').removeClass('sticky-at-mid sticky-at-bot');
            $('#sidebar').removeClass('active');
            console.log('прилипалка наверху');
        }
        if (winScrollTop > (topHeight-10) ) {
            $('#sidebar-reel').addClass('sticky-at-mid').removeClass('sticky-at-top sticky-at-bot');
            $('#sidebar').addClass('active');
            calcStickyPos();
            console.log('прилипалка в середине');
        }
        if (winScrollTop > (topHeight - stickyHeaderHeight + stickyWrapperHeight - stickyAsideHeight) ) {
            $('#sidebar-reel').addClass('sticky-at-bot').removeClass('sticky-at-mid sticky-at-top');
            $('#sidebar').removeClass('active');
            console.log('прилипалка внизу');
        }
    }
    function calcStickyPos() {
        $('#sidebar').css('top', winScrollTop - (topHeight-30) + 'px');
    }


    // движение волны на скролл
    waveMove = $(document).scrollTop()/10;
    $('body').append('<style>.js-text-deco-anim::before{background-position: -'+waveMove+'px;}</style>');


    // прилипающий header
    var pageScrolled = window.pageYOffset > 1;
    if ( headerIsStatic && pageScrolled ) {
       $('.header').addClass('header_sticky');
       console.log('i should not be here');
       headerIsStatic = false;
    }
    if ( (!headerIsStatic) && (!pageScrolled) ) {
        $('.header').removeClass('header_sticky');
        console.log('i should not be here');
        console.log('pagescrolled > 182 is ' + pageScrolled);
        headerIsStatic = true;
    }


    // прилипающий сайдбар на морде    
    var hasStickySidebar = $('.js-sticky-sidebar').length > 0;
    var isDesktop = $( window ).width() > 992;

    if ( (isDesktop) && (hasStickySidebar) ) {
        var stickyAsideTop = $('.js-sticky-sidebar').offset().top;
        var stickyAsideleft = $('.js-sticky-sidebar').parent().offset().left-15;
        var documentTop = $(document).scrollTop();
        var scrollToRemoveSticky = $('.product-list').height() + $('.header').height()+100;
        var stickyAside = false;
        if ( (documentTop > 820) && (documentTop < scrollToRemoveSticky) && (!stickyAside) )  {
            $('.js-sticky-sidebar').addClass('sticky');
            $('.js-sticky-sidebar').css('left', stickyAsideleft);
            $('.js-sticky-sidebar').css('width', ( $('.container').width() - $('.product-list').width())-30 );
        }else {
            $('.js-sticky-sidebar').removeClass('sticky');
        }
    }

    // показ кнопки наверх
    var pageScrolled500 = window.pageYOffset > 500;
    if ( pageScrolled500 && !toTopVisible ) {
       $('.to-top').addClass('to-top_visible')
       toTopVisible = true;
    }
    if ( !pageScrolled500 && toTopVisible ) {
        $('.to-top').removeClass('to-top_visible')
    }

});









// 3. обработчики на resize
// =========================================================================

$(window).resize(function() {

    // прилипающий сайдбар на морде - изменение размеров
    var hasStickySidebar = $('.js-sticky-sidebar').length > 0;
    var isDesktop = $( window ).width() > 992;

    if ( (isDesktop) && (hasStickySidebar) ) {

        var stickyAsideTop = $('.js-sticky-sidebar').offset().top;
        var stickyAsideleft = $('.js-sticky-sidebar').parent().offset().left-15;
        var documentTop = $(document).scrollTop();
        var scrollToRemoveSticky = $('.product-list').height() + $('.header').height()+100;
        var stickyAside = false;

        if ( (documentTop > 820) && (documentTop < scrollToRemoveSticky) && (!stickyAside) )  {
            var stickyWidth = $('.container').width() - $('.product-list').width()-30;
            console.log (stickyWidth);
            $('.js-sticky-sidebar').css('width', stickyWidth);
        }
    }else {
        $('.js-sticky-sidebar').removeClass('sticky');
    }
});
//
function setcatalogmenuheight(){
	$('.catalog-menu').css('height',$(window).height()-$('.header').height());
	$('.catalog-menu').css('top',$('.header').height());
}

setInterval('setcatalogmenuheight()',200);
