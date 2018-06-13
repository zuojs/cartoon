$(function(){
    var css = {right:'420px'};
    setInterval(function(){
        $(".dragon").animate(css,5000,back);
        },100);
    function back() {
    if (css.right === '140px')
        css.right = '420px';
    else if (css.right === '420px')
        css.right = '140px';
   }
   $(".dragon").hover(function(){
       $(this).animate().stop();
   });
});