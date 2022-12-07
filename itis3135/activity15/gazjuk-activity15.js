$(document).ready(function(){
    $.getJSON("facultyList.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                /*$("#faculty").text("<img src='" + value.image + "'>" + "<h2>" + value.full_name + "</h2>" + "<h3>" + value.department + "</h3>" + "<p>" + value.bio + "</p>");*/
                var faculty = document.getElementById("faculty");
                faculty.innerHTML += "<img src='" + value.image + "'>" + "<h2>" + value.full_name + "</h2>" + "<h3>" + value.department + "</h3>" + "<p>" + value.bio + "</p>";
                /*$('#name').text(value.full_name);
                $('#img').attr('src', value.image);
                $('#department').text(value.department);
                $('#bio').text(value.bio); */
            });
        });
    });
});
