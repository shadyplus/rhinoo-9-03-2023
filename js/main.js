$(function () {

    $('[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800)
    })

    new Timer({
        hour: '.hours',
        min: '.minutes',
        sec: '.seconds' ,
        hourRes: '.hours',
        minRes: '.minutes',
        secRes: '.seconds' ,
    })


})