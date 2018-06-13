/* 首页大屏海报效果 */
$(function(){
	var $Poster = $("#Poster div a");
    var len  = $Poster.length;
	var index = 0;
	var adTimer = null;
	$Poster.mouseover(function(){
		index = $Poster.index(this);
		showImg(index);
	}).eq(0).mouseover();	
	//滑入 停止动画，滑出开始动画.
	$('#Poster').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 5000);
	}).trigger("mouseleave");
});
//显示不同的幻灯片
function showImg(index){
	var $rollPoster = $("#Poster");
	var $rolllist = $rollPoster.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#posterWrap").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos")
			 .eq(index).addClass("chos");
}
// 跳转播放页面
$("#Poster img,#puIntroduInfo a,#puIntroduLast a,#content a").click(function(){
    window.location.href= "video.html";
    // window.open("video.html");
});