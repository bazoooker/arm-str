

$(document).ready(function() {
    // setTimeout(function() {
    //     $('.preloader').addClass('preloader_hidden');
    //     $('.wrapper').removeClass('no-scroll');
    // }, 1000);


    // --------------------
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

    // --------------------


});


$(window).scroll(function() {
    $('.js-fancy-heading').each(function() {
        if( $(this).visible(true) ) {  
            $(this).addClass('lines-added')
        }        
    });
    waveMove = $(document).scrollTop()/10;
    $('body').append('<style>.js-text-deco-anim::before{background-position: -'+waveMove+'px;}</style>');


    if ($( window ).width() > 992) {
        var stickyAsideTop = $('.js-sticky-sidebar').offset().top;
        var stickyAsideleft = $('.js-sticky-sidebar').parent().offset().left-15;
        var documentTop = $(document).scrollTop();
        var scrollToRemoveSticky = $('.product-list').height() + $('.header').height()+100;
        var stickyAside = false;
        if ( (documentTop > 820) && (documentTop < scrollToRemoveSticky) && (!stickyAside) )  {
            console.log('add sticky')
            $('.js-sticky-sidebar').addClass('sticky');
            $('.js-sticky-sidebar').css('left', stickyAsideleft);
            $('.js-sticky-sidebar').css('width', ( $('.container').width() - $('.product-list').width())-30 );
        }else {
            console.log('remove sticky')
            $('.js-sticky-sidebar').removeClass('sticky');
        }
    }

});

$(window).resize(function() {
    if ( $( window ).width() > 992 ) {

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




        // $('select').niceSelect();





        // анимация стрелок в карточке товара
        $('.product-controls__arrow-up, .product-controls__arrow-down').on('mousedown', function() {
            $(this).addClass('pressed');
        });
        $('.product-controls__arrow-up, .product-controls__arrow-down').on('mouseup', function() {
            $(this).removeClass('pressed');
        });







        // все товары - скролл до секции
        $("#scrollToFeatures").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#scrollToFeatures").offset().top
            }, 600);
        });






        

        // $('.js-show-product-category-list').on('click', function() {

        //     if ($( window ).width() > 768) {
        //         var categoryID = $(this).attr('id');
        //         var categoryProdList = $('.product-category-list[data-id="'+categoryID+'"]');

        //         $('.product-category-list').removeClass('active');
        //         $(categoryProdList).addClass('active');

        //         $('.catalog-link__label').removeClass('active');
        //         $(this).addClass('active');
        //     } else {

        //         if( !$(this).hasClass('active') ) {
        //             $('.catalog-link__label').removeClass('active');
        //             $(this).addClass('active');

        //             $('.catalog-link .catalog-link__accordeon').slideUp(300);
        //             $(this).parent().find('.catalog-link__accordeon').slideDown(300);
        //         }
        //     }

        // });






        // открытие каталога - разные варианты

        $('.js-catalog-menu').on('click', function() {
            
            // if ($( window ).width() > 768) {
                var catalogBtnType = $(this).attr('id');


                if(catalogBtnType == 'catalog-menu-in-promo') { // меню поверх промо-блока
                    if( $('#catalog-menu').hasClass('active') ) {
                        $('#catalog-menu').removeClass('menu_catalog menu_sticky active');
                        $('.overlay_catalog-menu').hide();
                    }else {
                        $('#catalog-menu').addClass('menu_catalog active');
                        $('.overlay_catalog-menu').show();
                    }
                }

                if(catalogBtnType == 'catalog-menu-in-sticky-header') { // меню в прилипающей шапке
                    if( $('#catalog-menu').hasClass('active') ) {
                        $('#catalog-menu').removeClass('menu_catalog menu_sticky active');
                        $('.page-wrapper').removeClass('no-scroll');
                    }else {
                        $('#catalog-menu').addClass('menu_sticky active');
                        $('.page-wrapper').addClass('no-scroll');
                    }
                }
            // } else { 
            //     if( $('.menu_full-screen').hasClass('active') ) {
            //         $('.menu_full-screen').removeClass('menu_catalog menu_sticky menu_mobile active');
            //         $('.page-wrapper').removeClass('no-scroll');
            //     }else {
            //         $('.menu_full-screen').addClass('menu_mobile active');
            //         $('.page-wrapper').addClass('no-scroll');
            //     }
            // }


            $('.overlay_catalog-menu').on('click', function() {
                $('.menu_full-screen').removeClass('menu_catalog menu_sticky active');
                $('.overlay_catalog-menu').hide();
            });
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






// 2. появления
// ==============

    // функция, которая "собирает" первый слайд. Запускается после прелоадера. См. прелоадер



    // function lookMa() {
    //     $('.hero').removeClass('up');
    //     $('.swiper-slide').find('.hero__slide-number, .hero__info h1, .hero__info p, .hero__info a, .hero__img').removeClass('up');
    // }

    // // шторки
    // $(window).scroll(function() {
    //     $('.trigger').each(function() {
    //         if( $(this).visible(true) ) {  
    //             $(this).find('.hideme').addClass('hideme_visible');
    //             $(this).find('.zero').removeClass('zero_hidden');
    //             $(this).find('.bg-square').removeClass('bg-square_anim');
    //         }        
    //     });
    // });












        // function openMenu() {
        //     if ( !$('.menu').hasClass('menu_active') ) {
        //         $('.menu').addClass('menu_active');
        //         $('.menu .col-4').addClass('visible'); //анимации появления колонок
        //         $('body').addClass('no-scroll');
        //     } else {
        //         $('.menu').removeClass('menu_active');
        //         $('.menu .col-4').removeClass('visible');
        //         $('body').removeClass('no-scroll');
        //     }
        // }

        // $('.js-menu-controls').click(openMenu);


        // $(document).on( 'keydown', function ( e ) {
        //     if ( e.keyCode === 27 ) {
        //         if ( $('.menu').hasClass('menu_active') ) {
        //          openMenu();
        //         }
        //     }
        // });











    function showStickyHeader() {
        if ( window.pageYOffset > 182 ) {
           $('.header').addClass('header_sticky');
        }
        else {
            $('.header').removeClass('header_sticky');
        }
        console.log('sticky iteration');
    };

    $(window).scroll(showStickyHeader); 




    $(document).ready(function(){


        $('.js-scroll-to-section').click(function() { 
        var targetSection = $(this).data('scroll-target');
            $("html, body").animate({        
                scrollTop: $('#' + targetSection ).offset().top - 100 }, 600);
            return false;
        });


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








        // форма обратной связи ддля почты =======================


        var canSendEmail = false; // с этой переменной сверяем валидацию и показ разных сообщений

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

        // простая валидация по длине строк
        $('#email-form .js-input_required').on('input', function() {
            $('#email-form .js-input_required').each(function() {
                if($(this).val().length > 3) {
                    canSendEmail = true;
                }else {
                    canSendEmail = false;
                }
            });

            // окрашивание кнопки-submit "отправить"
            if (!canSendEmail) {
                $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_no').removeClass('btn_yes');
            }else {
                $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_yes').removeClass('btn_no');
            }
        });

        // показ сообещний успех-неуспех
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


        // форма обратной связи для почты конец =======================











        // форма обратной связи ддля обратного звонка =======================


        var canSendCallback = false; // с этой переменной сверяем валидацию и показ разных сообщений

        // простая валидация по длине строк
        $('#callback-form .js-input_required').on('input', function() {
            $('#callback-form .js-input_required').each(function() {
                if($(this).val().length > 3) {
                    canSendCallback = true;
                }else {
                    canSendCallback = false;
                }
            });

            // окрашивание кнопки-submit "отправить"
            if (!canSendCallback) {
                $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_no').removeClass('btn_yes');
            }else {
                $(this).parent().parent().parent().parent().find('.btn.btn_outline-white').addClass('btn_yes').removeClass('btn_no');
            }
        });

        // показ сообещний успех-неуспех
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


        // форма обратной связи для обратного звонка конец =======================













    });

$(document).ready(function(){  
    new WOW().init();
    // отправка колбека
    $(".modal form").on('submit', function(e){
            e.preventDefault();
            var modal = $(this).parents('.modal');
            var form = $(this);         
            $(this).ajaxSubmit({  
                url: "/ajax.php?file="+$(form).data('file'),
                data: $(form).serialize(),
                dataType: "JSON",
                type: "POST",
                success: function(data){
                    if(data.done) {
          $(modal).find('.modal-result').html(data.message);
          $(modal).find('.modal-result').show('fast')
          setTimeout("$('.modal-result').hide('fast')",1500);

          setTimeout("$('.modal').hide()",2000);
                      setTimeout("$('#overlay').hide()",2000);
          var f=$(modal).find('.modal-content-copy');
          var t=$(modal).find('.modal-content');
                      setTimeout("$('.modal').find('input, textarea').val('')",3000);
          
                    } else {
                        $(modal).find('.modal-errors').html(data.message);
        $(modal).find('.modal-errors').show('fast')
        setTimeout("$('.modal-errors').hide('fast')",1000);
                        $(modal).children(".spinner").hide();
                    }
                },
                complete: function(){
                    $(modal).children(".spinner").hide();                     
                }
            });
            return false;
        });



    function showToTopButton() {
        if ( window.pageYOffset > 500 ) {
           $('.to-top').addClass('to-top_visible')
        }
        else {
            $('.to-top').removeClass('to-top_visible')
        }
    }; 

    function scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }; 
    $('.js-scroll-to-top').click(scrollToTop);
    $(window).scroll(showToTopButton);    

});


