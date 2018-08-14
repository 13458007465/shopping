$(function(){
		$.ajax({
			//请求地址
			url:" http://route.showapi.com/907-2",
			//请求方法
			type: "GET",
			dataType:"json",
			//请求参数
			data:{
				"showapi_appid": '67107', //这里改成自己的appid
        		"showapi_sign": '78c6b17625e64bce86f539279cc56546',  //这里改成自己的应用的密钥secret
				"cid":"9209",
				"page":"1",
				"keyword":"运动"
			},
			success:function(response){
				var contentlist = response["showapi_res_body"]["pageBean"]["contentlist"];
				var htmlStr = "";
				contentlist.forEach(function(data){
					//拼接数据
					htmlStr +=`
					<div>
						<p class="img"><img src="${data.img}"/></p>
						<p class="title">${data.name}</p>
					</div>
					`;
				});
				//更新页面
				$(".content-list").html(htmlStr);
			}
		});
	});
