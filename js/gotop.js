(function () {
    //获取元素
    var goBtn = document.querySelector('.goBtn');
    var offset = 0 ;//偏移量
    //监听窗口滚动
    window.onscroll = function () {
        //更新页面滚出去的距离
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(offset);
    };
    goBtn.onclick = function () {
        
        var duration = 500, //持续时间
            interval = 15,//每一帧持续时间
            frames = duration/interval,//帧数
            speed = Math.ceil(offset/frames); //每一帧位移的距离

        var t = setInterval(function () {
            if(offset > 0){
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }else {
                //清除定时器
                clearInterval(t);
                //更新当前位置
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },interval)
    };

})();