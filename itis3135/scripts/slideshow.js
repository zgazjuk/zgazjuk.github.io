window.onload = function(){

}

var fadeSpeed = 2000;
var container = $('#images');
var curIndex = 2;
var clickedLast = "right";

$(document).ready(function() {
    container + $('#image1').fadeIn(fadeSpeed);
    $('#right-arrow').click(function(){
        if(curIndex > 0 && curIndex <= 6){
            clickedLast = "right";
            container + $('#image' + (curIndex - 1)).fadeOut(fadeSpeed);
            container + $('#image' + curIndex).fadeIn(fadeSpeed);
            if(curIndex != 6){
                curIndex++;
            }
        }
    })
    $('#left-arrow').click(function(){
        clickedLast = "left";
        if(curIndex > 0 && curIndex <= 6){
            if(clickedLast == "right"){
                container + $('#image' + (curIndex - 1)).fadeOut(fadeSpeed);
            }
            container + $('#image' + (curIndex + 1)).fadeOut(fadeSpeed);
            container + $('#image' + curIndex).fadeIn(fadeSpeed);
            if(curIndex != 1){
                curIndex--;
            }
            clickedLast = "left";
        }
    })

});



