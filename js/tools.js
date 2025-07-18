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

    $('.landing-harvest-how-list').each(function() {
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
                    pagination: {
                        el: curSlider.find('.swiper-pagination')[0],
                        type: 'bullets',
                        clickable: true
                    },
                },
            }
        });
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