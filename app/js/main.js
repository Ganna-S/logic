$(function () {

    $('.slider__box, .work__box, .customers__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $('.design__tabs .tab, .about__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.design__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.design__tabs .tabs, about__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    



    var mixer = mixitup('.project__inner-box');

});

