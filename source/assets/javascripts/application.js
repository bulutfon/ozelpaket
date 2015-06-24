// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

(function () {
    'use strict';

    // Touch Screen Detect
    // ==========================================================
    function isTouchDevice() {
        return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }
    var brandInfo = $('.brand-info');
    if (isTouchDevice() === true) {
        brandInfo.addClass('brand-info-touch');
        console.log('Touch Device');

    } else {
        if(brandInfo.hasClass('brand-info-touch')){
            $(this).removeClass('brand-info-touch');
        }
        console.log('Not a Touch Device');
    }

})();