$(function(){
    // 记录登陆/注册
    var  isLogin   = true;
    console.log(location.hash == "#register");
    if(location.hash == "#register"){
        isLogin = false;
    }
    console.log(isLogin);
    // location.hash = "login";
    //注册BMOB服务
    Bmob.initialize("9eccfbefecda5b056cd77d28ca2cd28e", "fdeedef21462779b6c45f9f5214b1fe1");

    // 点击前往注册
    $(".go-register").on("click", () => {
        isLogin = false;
        $(".register").removeClass("hidden");
        $(".login").addClass("hidden");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
    });
    // 点击登陆
    $(".go-login").on("click", () => {
        isLogin = true;
        $(".register").addClass("hidden");
        $(".login").removeClass("hidden");
        $(".login-register-btn").text("登陆");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
    });
    // 注册
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!Validate.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        console.log(isLogin);
        if(isLogin) {
            if(!$(".username").val() || !$(".password").val()) {
                console.log("请完善信息！");
            }else {
                Bmob.User.logIn($('.username').val(),$('.password').val(),{
                    success:(user) => {
                        new LHYAlertView({
                            type:'alert',
                            message:'登录成功',
                            sureCallBack:() => {
                            sessionStorage.loginState = true;
                            location.href = '../index.html';
                            }
                        });
                    },
                    error:(user,error) =>{
                        new LHYAlertView({
                            type:'alert',
                            message:'用户名不存在或密码错误'
                    
                        });
                    }
                });
            }
        }else {
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {    
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;
                }  
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
            });
            if(isEmpty) {
                console.log("请完善信息！");
            }else if(!isThough) {
                console.log("信息不合法！");
            }else {
                //注册用户
                //创建用户
                let user = new Bmob.User();

                user.set ('username',$('.username').val());
                user.set('password',$('.password').val());
                user.set('phone',$('.tel').val());
                //执行注册
                user.signUp(null,{
                    success:(user) => {
                        new LHYAlertView({
                            type:'alert',
                            message:'注册成功',
                            sureCallBack:() => {
                            sessionStorage.loginState = true;
                            location.href = '../pages/login.html';
                            }
                        });    
                    },
                    error:(user,error) => {
                        //alert(`Error:${error.code} ${error.message}`)
                        let alertMsg = '';
                        switch(error.code){
                            case 202: {
                                alertMsg = '用户已经存在';
                            }break;
                            case 209: {
                                alertMsg = '手机已被注册';
                            }break;
                        }
                        new LHYAlertView ({
                            type:'default',
                            autoClose:'800',
                            title:'温馨提示',
                            message:alertMsg
                        });
                    }
                });
            }
        }
    });
});




