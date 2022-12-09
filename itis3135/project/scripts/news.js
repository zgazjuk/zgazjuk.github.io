$( function() {
    $( "#tabs" ).tabs();
});

$(document).ready(function() {
    getArticle(1);
    $('#article_1').click(function(){
        getArticle('1');
    });
    $('#article_2').click(function(){
        getArticle('2');
    });
    $('#article_3').click(function(){
        getArticle('3');
    });
});

function getArticle(articleNum){
    $.getJSON("json-files/article" + articleNum + ".json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                $('#title_' + articleNum).text(value.title);
                $('#date_' + articleNum).text(value.date);
                $('#image_' + articleNum).attr("src", value.image);
                $('#caption_' + articleNum).text(value.caption);
                var description = $('#description_' + articleNum).text(value.description);
                description.html(description.html().replace(/\n/g,'<br/>'));
            });
        });
    });
}