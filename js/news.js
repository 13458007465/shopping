$(function(){
	    // 记录当前显示页面下标
	    var curIndex;
	    // 定义路由地址
	    var links = [
	        "../pages/news-img.html"
	    ];
		
	    // 为菜单项添加点击事件
	    $(".tabBar-item").on("click", function(e) {
	        var index = $(this).index() ;
	        // 避免用户重复点击
	        if( index == curIndex) { return; }
	        // 更新当前显示页面下标
	        curIndex = index;
	        // jQuery提供的ajax请求方法
	        $.ajax({
	            // 请求资源地址
	            url: links[curIndex],
	            // 请求方法
	            type: "GET",
	            // 请求成功回调
	            success: function(response) {
	                $("#content").html(response);
	                // 清除控制台
	            }
	        });
	    }).first().trigger("click");
	});
