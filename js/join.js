
(function () {

    var kHeight     = window.innerHeight,//获取屏幕高度
        offset      = 0,//页面滚动的距离
        items       = $.get(".list-item"),//获取元素
        offsetTops  = [];//记录元素在页面的位置
    for(var i = 0, len = items.length; i < len; i++) {
        offsetTops[i] = items[i].offsetTop;
    }

    $.addEvent(window, "scroll", function () {

        offset = document.body.scrollTop || document.documentElement.scrollTop;

        for(var i = 0, len = items.length; i < len; i++) {

            if(kHeight + offset > offsetTops[i]) {
                items[i].classList.add("running");
            }
        }
    });
    document.body.scrollTop = document.documentElement.scrollTop = 1;
})();