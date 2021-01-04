'use strict';

var quantity = document.querySelectorAll('.quantity__button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var direction = this.dataset.direction;
        var inp = this.parentElement.querySelector('.quantity');
        var currentValue = +inp.value;
        var newValue = void 0;

        if (direction === 'plus') {
            newValue = currentValue + 1 < 99 ? currentValue + 1 : 99;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
    });
});