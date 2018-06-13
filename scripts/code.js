$(function(){
    // 注册面
    $("div.code").hide();
    $("div.login").hide();
    $login1 = $(".person #login1");
    $login1.click(function(){
        $("div.login").hide();
        $("div.code").show(function(){
            $('form :input').blur(function(){
                var $parent = $(this).parent();
                $parent.find(".formtips").remove();
                // 验证用户名
                if($(this).is('#username')){
                    if(this.value==""||this.value.length<6){
                        var errorMsg = '请输入至少6位的用户名。';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
                }
                // 验证邮箱
                if($(this).is('#email')){
                    if(this.value==""||(this.value!=""&&!/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
                        var errorMsg = '请输入正确的email地址。';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
                }
            }).keyup(function(){
                $(this).triggerHandler("blur");
            }).focus(function(){
                $(this).triggerHandler("blur");
            });
            $("#send").click(function(){
                $("form .required:input").trigger('blur');
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                }
                alert("注册成功，密码已经发送到你的邮箱，请查收。");
            });
        });
    });

    // cookie记录用户名邮箱
    $("#username,#username1").val($.cookie("cookie_Name"));
    $("#email").val($.cookie("cookie_Email"));
    $("#send").click(function() {
        $.cookie("cookie_Name", $("#username").val(), {path: "/", expires: 7});
        $.cookie("cookie_Email", $("#email").val(), {path: "/", expires: 7});
    });

    // 登录面
    if($.cookie("cookie_Name1")) {
        $(".person").append("<span id='username123'>欢迎<a href=''>"+$.cookie("cookie_Name")+"</a></span>");
        $("div.login").hide();
        $(".person #login2,.person #login1").hide();
        $(".person").append("<input type='submit' id='logout' value='注销'/>");
    }
    $("#logout").click(function(){
        $(".person #username123, #logout").remove();
        $(".person #login2,.person #login1").show();
        $.cookie("cookie_Name", null, {path:"/", expires: -1});
    });
    $login2 = $(".person #login2");
    $login2.click(function(){
        $("div.code").hide();
        $("div.login").fadeIn(800).show();
        $("#send1").click(function(){
            if($.cookie("cookie_Name")===$("#username1.value")) {
                $(".person #login2,.person #login1").hide();
                $(".person").append("<span id='username123'>欢迎<a href=''>"+$.cookie("cookie_Name")+"</a></span>");
                $(".person").append("<input type='submit' id='logout' value='注销'/>");
            }
            else {alert("用户名不存在！");}
            if(1===1) {
                $("div.login").hide();
            }
            $("#logout").click(function(){
                $(".person #username123, #logout").remove();
                $(".person #login2,.person #login1").show();
                $.cookie("cookie_Name", "", {expires: -1});
                return false;
            });
        });
    });
    // 关闭
    $(".close").click(function(){
        $(this).parent().hide();
    });
})