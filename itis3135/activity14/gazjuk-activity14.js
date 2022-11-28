$(document).ready(function() {
	
    $("#sorkin").click(function(){
        getSpeaker("sorkin");
    });

    $("#chua").click(function(){
        getSpeaker("chua");
    });

    $("#toobin").click(function(){
        getSpeaker("toobin");
    });

    $("#sampson").click(function(){
        getSpeaker("sampson");
    });

}); // end ready

function getSpeaker(name){
    $.getJSON("json_files/" + name + ".json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                $('#month').text(value.month);
                $('#title').text(value.title);
                $('#name').text(value.speaker);
                $('#image').attr("src", value.image);
                $('#text').text(value.text);
            });
        });
    });
}