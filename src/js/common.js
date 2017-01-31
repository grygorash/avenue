 $(document).ready(function(){
 // всплывающее окно для отправки формы
 $(".popup").magnificPopup();


 
    // else if (window.matchMedia("(min-width: 767px)").matches) {
    //     $("#header").removeClass("default").fadeIn('fast');
// регулярка
$('.date').mask('00/00/0000');
$('.phone_us').mask('+38 (000) 000-00-00')

// ФИКСИРОВАННАЯ ШАПКА
$("#header").removeClass("default");
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $("#header").addClass("default").fadeIn('fast');
    } else {
        $("#header").removeClass("default").fadeIn('fast');
    };
});


// СЛАЙДЕР КОМАНДЫ
var width = 800;
var slides = $('#list-images li');
var numSlides = slides.length;

slides.wrapAll('<div id="slide-wrap"></div>').css({'float' : 'left','width' : width});
$('#slide-wrap').css({width: width * numSlides});
$('#list-links li').hover(function(){
    $('#list-links li').removeClass('hover');
    var i = $(this).index('#list-links li');
    $(this).parent().addClass('hover');
    $('#slide-wrap').stop().animate({'marginLeft' : width*(-i)});
});




// ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
$('a[href^="#"]').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
        scrollTop: $(el).offset().top -30}, 1000);
    return false;
});
});



