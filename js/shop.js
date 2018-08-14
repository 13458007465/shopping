$(function () {
    var $nav = $('.list-nav li');
    var $sitem = $('.store-list li');
    var len = $nav.length;
    var timer = null;

    $nav.mouseenter(function (event) {
        var _inx = $(this).index();
        $(this).siblings().removeClass('cur');
        $(this).addClass('cur');
        $sitem.siblings().fadeOut(200);
        $sitem.eq(_inx).fadeIn(200);
        clearInterval(timer);
    });

    $nav.mouseleave(function (event) {
        autoRun(3000);
    });

    autoRun(3000);

    function autoRun(speed) {
        timer = setInterval(function () {
            var _inx = $('.list-nav').find('.cur').index();
            if (_inx == len - 1) _inx = -1;
            $nav.siblings().removeClass('cur');
            $nav.eq(_inx + 1).addClass('cur');
            $sitem.siblings().fadeOut(200);
            $sitem.eq(_inx + 1).fadeIn(200);

        }, speed);
    }
})