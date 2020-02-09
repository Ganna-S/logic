$(function () {

    $('.slider__box, .work__box, .customers__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $('.design__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.design__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.design__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.about__tabs .tab-a').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.about__tabs').find('.tab-item-a').removeClass('active-tab_content').hide();
        $('.about__tabs .tabs-about').find('.tab-a').removeClass('active-a');
        $(this).addClass('active-a');
        $('#' + id).addClass('active-tab_content').fadeIn();
        return false;
    });

    $(document).ready(function () {

        $('.panel-heading').click(function () {
            $(this).toggleClass('in').next().slideToggle();
            $('.panel-heading').not(this).removeClass('in').next().slideUp();
        });

    });

    new WOW().init();

    $(document).ready(function () {

        var show = true;
        var countbox = ".awards__inner";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.inner__number').css('opacity', '1');
                $('.inner__number').spincrement({
                    thousandSeparator: "",
                    duration: 3000
                });

                show = false;
            }
        });

    });

    $(window).on("scroll", function () {
        var w_top = $(window).scrollTop();
        var e_top = $("#counts").offset().top;

        console.log(w_top + " " + e_top);
    });

    var mixer = mixitup('.project__inner-box');

});

