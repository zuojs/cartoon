// 瀑布流
$(document).ready(function(){
    $(window).on("load",function(){
        var dataImg = {"data":[{"src":'11250.jpg'},{"src":'11250.jpg'},{"src":'11250.jpg'},{"src":'11250.jpg'},{"src":'11250.jpg'},{"src":'11250.jpg'}]};
        window.onscroll = function(){
            if(scrollside()) {
                $.each(dataImg.data,function(index,value){
                    var li = $("<li>").appendTo($(".cartonCollect"));
                    var a = $("<a>").appendTo(li);
                    $("<img>").attr("src","./images/EuramericanCarton/"+$(value).attr("src")).appendTo(a);
                });
            }
        }
    });
});

function scrollside(){
    var li = $(".cartonCollect li")
    var lastliHeight = li.last().get(0).offsetTop+Math.floor(li.last().height()/2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastliHeight<scrollHeight+documentHeight)?true:false;
}


$(function(){
    // 返回顶部
    $(window).scroll(function(){   //滚动事件
        if($(window).scrollTop()>=700) {
            $(".up").fadeIn();
        }
        else{
            $(".up").fadeOut();
        }
        $(".up").click(function(){
            $("body,html").stop().animate({scrollTop:0});
        })
    })
})
