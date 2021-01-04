'use strict';

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var sumbit = document.querySelector('.contacts__button').addEventListener('click', function (e) {
    e.preventDefault();
    var form = document.querySelector('.contacts__form');
    var popup = document.querySelector('.success');
    var exit = document.querySelector('.exit');

    popup.classList.add('success-active');

    exit.addEventListener('click', function () {
        popup.classList.remove('success-active');
    });
});

$(document).ready(function () {
    $('.feedback__list').slick({
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 1124,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    });
});