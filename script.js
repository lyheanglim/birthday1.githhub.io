let audio = new Audio('hbd.mp3');
$(document).ready(function () {
    $('.container').mouseenter(function () {
        $(this).stop().animate({
            top: '-20px'
        }, 'slow');
    }).mouseleave(function () {
        $(this).stop().animate({
            top: '0'
        }, 'slow'); 
    });
    audio.play();
});