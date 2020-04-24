$(function(){
    $('.slider').slick({
        fade: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        dots: true
    });
    $('.header__btn').on('click',function(){
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click',function(){
        $('.menu').removeClass('active');
    })

});

