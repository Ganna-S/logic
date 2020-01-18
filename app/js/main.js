$(function () {

    $('.slider__box, .work__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $('.services__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.services__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.services__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
});

