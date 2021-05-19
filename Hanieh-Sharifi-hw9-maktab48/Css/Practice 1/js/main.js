$(function(){
    $("li:not(:first-child)").click(function(){
        $("#one").css({opacity: "0"})
    })
    $("li:first-child").click(function(){
        $("#one").css({opacity: "1"})
    })
})