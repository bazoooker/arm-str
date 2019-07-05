// ОГЛАВЛЕНИЕ

// 0. глобальные переменные
// 1. обработчики на document-ready
// 2. обработчики на scroll
// 3. обработчики на resize





// 0. глобальные переменные
// =========================================================================
var headerIsStatic  = true; // если false - хедер прилип к top
var canSendEmail    = false; // валидация формы обратной связи
var canSendCallback = false; // валидация формы обратного звонка
var toTopVisible    = false; // показ кнопки "наверх"





// 1. обработчики на document-ready
// =========================================================================
$(document).ready(function() {
    new WOW().init();

    $('.preloader').addClass('preloader_hidden');
    $('.wrapper').removeClass('no-scroll');

    // аккордеоны
    $('.js-accordeon').click(function() {
        let accordIsOpen = $(this).parent().hasClass('accordeon_active');
        $('.accordeon').removeClass('accordeon_active');
        $('.accordeon').find('.accordeon__content').slideUp(300);
        if(accordIsOpen) {
            $(this).parent().removeClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideUp(300);
        }else {
            $(this).parent().addClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideDown(300);
        }
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

    // движение волны на скролл
    waveMove = $(document).scrollTop()/10;
    $('body').append('<style>.js-text-deco-anim::before{background-position: -'+waveMove+'px;}</style>');


    // прилипающий header
    var pageScrolled = window.pageYOffset > 182;
    if ( headerIsStatic && pageScrolled ) {
       $('.header').addClass('header_sticky');
       headerIsStatic = false;
    }
    if ( (!headerIsStatic) && (!pageScrolled) ) {
        $('.header').removeClass('header_sticky');
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
            console.log('add sticky sidebar');
            $('.js-sticky-sidebar').addClass('sticky');
            $('.js-sticky-sidebar').css('left', stickyAsideleft);
            $('.js-sticky-sidebar').css('width', ( $('.container').width() - $('.product-list').width())-30 );
        }else {
            console.log('remove sticky sidebar');
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
