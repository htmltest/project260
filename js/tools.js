$(window).on('load resize', function() {

    $('.landing-harvest-welcome-link a, .landing-harvest-menu a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 20;
            if ($('header').length == 1) {
                curOffset = $('header').outerHeight() + 20;
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curOffset});
        }
        e.preventDefault();
    });

    $('.landing-harvest-about-video-play').click(function(e) {
        $('.landing-harvest-about-video').html('<video autoplay loop playsinline controls><source src="' + $(this).attr('href') + '" type="video/mp4"></video>');
        e.preventDefault();
    });

    $('.landing-harvest-catalogue-list').each(function() {
        var curSlider = $(this);
        new Swiper(curSlider.find('.swiper')[0], {
            slidesPerView: 1,
            loop: 1,
            navigation: {
                nextEl: curSlider.find('.swiper-button-next')[0],
                prevEl: curSlider.find('.swiper-button-prev')[0],
            },
            pagination: {
                el: curSlider.find('.swiper-pagination')[0],
                type: 'fraction',
            },
            breakpoints: {
                1220: {
                    slidesPerView: 3,
                    pagination: {
                        el: curSlider.find('.swiper-pagination')[0],
                        type: 'bullets',
                        clickable: true,
                        dynamicBullets: true
                    },
                },
            }
        });
    });

});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    var curOffset = 0;
    if ($('body').hasClass('scrolled')) {
        curOffset = 144;
    }
    windowScroll += curOffset;
    if (windowScroll >= $('.landing-harvest-how-mobile').offset().top) {
        $('.landing-harvest-how-mobile').addClass('fixed');
        var desktopStart = $('.landing-harvest-how-mobile').offset().top;
        var blockHeight = $('.landing-harvest-how-mobile-inner').height();
        var desktopStop = $('#landing-harvest-lifestyle').offset().top - blockHeight;
        var desktopStep = (windowScroll - desktopStart) / (desktopStop - desktopStart);
        if (desktopStep >= 0.25) {
            $('.landing-harvest-how-mobile-item').eq(1).addClass('active');
            if (desktopStep >= 0.5) {
                $('.landing-harvest-how-mobile-item').eq(2).addClass('active');
                if (desktopStep >= 0.75) {
                    $('.landing-harvest-how-mobile-item').eq(3).addClass('active');
                    if (desktopStep >= 0.9) {
                        if (windowScroll + blockHeight > $('#landing-harvest-lifestyle').offset().top - 120) {
                            $('.landing-harvest-how-mobile-inner').css({'transform': 'translateY(-' + ((windowScroll + blockHeight) - ($('#landing-harvest-lifestyle').offset().top - 120)) + 'px)'});
                        }
                    }
                } else {
                    $('.landing-harvest-how-mobile-item').eq(3).removeClass('active');
                    $('.landing-harvest-how-mobile-inner').css({'transform': 'translateY(0px)'});
                }
            } else {
                $('.landing-harvest-how-mobile-item').eq(2).removeClass('active');
                $('.landing-harvest-how-mobile-item').eq(3).removeClass('active');
                $('.landing-harvest-how-mobile-inner').css({'transform': 'translateY(0px)'});
            }
        } else {
            $('.landing-harvest-how-mobile-item').eq(0).addClass('active');
            $('.landing-harvest-how-mobile-item').eq(1).removeClass('active');
            $('.landing-harvest-how-mobile-item').eq(2).removeClass('active');
            $('.landing-harvest-how-mobile-item').eq(3).removeClass('active');
            $('.landing-harvest-how-mobile-inner').css({'transform': 'translateY(0px)'});
        }
    } else {
        $('.landing-harvest-how-mobile').removeClass('fixed');
        $('.landing-harvest-how-mobile-item').eq(0).addClass('active');
        $('.landing-harvest-how-mobile-item').eq(1).removeClass('active');
        $('.landing-harvest-how-mobile-item').eq(2).removeClass('active');
        $('.landing-harvest-how-mobile-item').eq(3).removeClass('active');
        $('.landing-harvest-how-mobile-inner').css({'transform': 'translateY(0px)'});
    }

    if (windowScroll >= $('.landing-harvest-how-desktop').offset().top) {
        $('.landing-harvest-how-desktop').addClass('fixed');
        var desktopStart = $('.landing-harvest-how-desktop').offset().top;
        var blockHeight = $('.landing-harvest-how-desktop-inner').height();
        var desktopStop = $('#landing-harvest-lifestyle').offset().top - blockHeight;
        var desktopStep = (windowScroll - desktopStart) / (desktopStop - desktopStart);
        if (desktopStep >= 0.25) {
            $('.landing-harvest-how-desktop-item').eq(0).removeClass('active');
            $('.landing-harvest-how-desktop-item').eq(1).addClass('active');
            if (desktopStep >= 0.5) {
                $('.landing-harvest-how-desktop-item').eq(0).removeClass('active');
                $('.landing-harvest-how-desktop-item').eq(1).removeClass('active');
                $('.landing-harvest-how-desktop-item').eq(2).addClass('active');
                if (desktopStep >= 0.75) {
                    $('.landing-harvest-how-desktop-item').eq(0).removeClass('active');
                    $('.landing-harvest-how-desktop-item').eq(1).removeClass('active');
                    $('.landing-harvest-how-desktop-item').eq(2).removeClass('active');
                    $('.landing-harvest-how-desktop-item').eq(3).addClass('active');
                    if (desktopStep >= 0.9) {
                        if (windowScroll + blockHeight > $('#landing-harvest-lifestyle').offset().top - 120) {
                            $('.landing-harvest-how-desktop-inner').css({'transform': 'translateY(-' + ((windowScroll + blockHeight) - ($('#landing-harvest-lifestyle').offset().top - 120)) + 'px)'});
                        }
                    }
                } else {
                    $('.landing-harvest-how-desktop-item').eq(0).removeClass('active');
                    $('.landing-harvest-how-desktop-item').eq(1).removeClass('active');
                    $('.landing-harvest-how-desktop-item').eq(2).addClass('active');
                    $('.landing-harvest-how-desktop-item').eq(3).removeClass('active');
                    $('.landing-harvest-how-desktop-inner').css({'transform': 'translateY(0px)'});
                }
            } else {
                $('.landing-harvest-how-desktop-item').eq(0).removeClass('active');
                $('.landing-harvest-how-desktop-item').eq(1).addClass('active');
                $('.landing-harvest-how-desktop-item').eq(2).removeClass('active');
                $('.landing-harvest-how-desktop-item').eq(3).removeClass('active');
                $('.landing-harvest-how-desktop-inner').css({'transform': 'translateY(0px)'});
            }
        } else {
            $('.landing-harvest-how-desktop-item').eq(0).addClass('active');
            $('.landing-harvest-how-desktop-item').eq(1).removeClass('active');
            $('.landing-harvest-how-desktop-item').eq(2).removeClass('active');
            $('.landing-harvest-how-desktop-item').eq(3).removeClass('active');
            $('.landing-harvest-how-desktop-inner').css({'transform': 'translateY(0px)'});
        }
    } else {
        $('.landing-harvest-how-desktop').removeClass('fixed');
        $('.landing-harvest-how-desktop-item').eq(0).addClass('active');
        $('.landing-harvest-how-desktop-item').eq(1).removeClass('active');
        $('.landing-harvest-how-desktop-item').eq(2).removeClass('active');
        $('.landing-harvest-how-desktop-item').eq(3).removeClass('active');
        $('.landing-harvest-how-desktop-inner').css({'transform': 'translateY(0px)'});
    }
});