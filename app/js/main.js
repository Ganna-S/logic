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



    var mixer = mixitup('.project__inner-box');

});

