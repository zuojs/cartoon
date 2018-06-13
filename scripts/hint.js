$(function() {
    var x = 10;
    var y = 0;
    $(".logo img,h2").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip' style='z-index:100'>" + this.myTitle + "</div>";
        $("body").append(tooltip);
        $("#tooltip")
            .css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            }).show("fast");
    }).mouseout(function () {
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip")
            .css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            });
    });
});