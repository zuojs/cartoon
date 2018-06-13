// 搜索框效果
$(function(){
    $("#inputSearch, #psearch").focus(function(){
        $(this).addClass("focus");
        if($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function(){
        $(this).removeClass("focus");
        if($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    }).keyup(function(e){
       $(this).ajaxSubmit(function(){
           // 回车键提交表单
            if(e.which == 13){
            alert("提交成功");}
        });
       return false;
    });
});