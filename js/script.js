$(document).ready(function () {

    $('.main-slider').slick({
        infinite: true,
        prevArrow: '<button class="arrow prev"><i class="icon-left-big"></i></button>',
        nextArrow: '<button class="arrow next"><i class="icon-right-big"></i></button>',
        autoplay: true,
        autoplaySpeed: 4000
    });
    $('.teachers-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        ariableWidth: true,
        prevArrow: '<button class="arrow prev"><i class="icon-left-big"></i></button>',
        nextArrow: '<button class="arrow next"><i class="icon-right-big"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="arrow prev"><i class="icon-left-big"></i></button>',
                    nextArrow: '<button class="arrow next"><i class="icon-right-big"></i></button>',
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="arrow prev"><i class="icon-left-big"></i></button>',
                    nextArrow: '<button class="arrow next"><i class="icon-right-big"></i></button>',
                }
            }
        ]
    });
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide();
            $('.filter').filter('.' + value).hide();
            $('.filter').filter('.' + value).show('1000');
        }
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
    $('span.navbar-toggle').click(function (e) {
        $(this).toggleClass('active');
        $('nav').toggle();
        e.stopPropagation();
    });
});