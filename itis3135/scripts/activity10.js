window.onload = function(){

}

$(document).ready(function() {

    // preload the image for each link
    $('#image_list a').each(function(){
        var image = new Image();
        //image.src = $(this).attr('href');
        //image.title = $(this).attr('title');
    })

    // set up the event handlers for each link
    $("#image_list a").click(function(evt){
        // get the image URL and caption for each image and animate the caption
        let href = $(this).attr("href");
        let title = $(this).attr('title');

        // Fading out the old image, and fading in the new one
        $("#image").fadeOut(1000, function(){
            $("#image").attr("src", href).fadeIn(1000);
        });

        // Fading out the old caption, and fading in the new caption
        $("#caption").fadeOut(1000, function(){
            document.getElementById("caption").innerHTML = title;
            $("#caption").fadeIn(1000);
        });
        
        // cancel the default action of each link
        evt.preventDefault()
    })

    // move the focus to the first link
    $('image_list a').get(0).focus();

}); // end ready