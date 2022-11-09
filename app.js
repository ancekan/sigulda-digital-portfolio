$(document).ready(function() { 

var settings = {
"bodyContainerDisplay": "block",
"imageContainerDislay": "none",
"formContentDisplay": "none",
};

    $("#body_container").css("display", settings.bodyContainerDisplay);
    $("#image_container").css("display", settings.imageContainerDislay);
    $("#form_content").css("display", settings.formContentDisplay);

    $("#header").css("background", "white");
    $("#header").css("width", "100%");
    $("#header").css("height", "20%");

    $("#body").css("background", "blue");
    $("#body").css("width", "100%");
    $("#body").css("height", "75%");
    
    $("#footer").css("background", "red");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "5%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#body_content").css("background", "yellow");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");

    $("#navigation_buttons").css("color","red");

   // $("#body_container").css("width","1000px");
   // $("#body_container").css("height","500px");
    
    

    $("#about_me").css("display","inline-block");
    $("#about_me").css("padding","15px 25px");
    $("#about_me").css("font-size","24px");
    $("#about_me").css("cursor","pointer");
    $("#about_me").css("text-align","center");
    $("#about_me").css("text-decoration","none");
    $("#about_me").css("outline","none");
    $("#about_me").css("color","#fff");
    $("#about_me").css("background-color","#4CAF50");
    $("#about_me").css("border","none");
    $("#about_me").css("border-radius","15px");
    $("#about_me").css("box-shadow","0 9px #999");

    

   // $("#about_me").css("border-style","solid");
  //  $("#about_me").css("border-color","blue");

    $("#navigation_buttons p").click(function(){
        $(this).css("color","blue");

        var text = $(this).text();

        if(text == "Par mani") {
            $("#body_container").css("display", "block");
            $("#image_container").css("display", "none");
            $("#form_content").css("display", "none");
            $("#my_works").css("color","red");
            $("#info").css("color","red");
            
            //$("#about_me").css("background-color","#3e8e41");
          //  $("#about_me").css("box-shadow","0 5px #666");
          //  $("#about_me").css("transform","translateY(4px)");
            
        }

        if(text == "Mani darbi") {
            $("#body_container").css("display", "none");
            $("#image_container").css("display", "block");
            $("#form_content").css("display", "none");
            $("#about_me").css("color","red");
            $("#info").css("color","red");
        }

        if(text == "Kontaktinformācija") {
            $("#body_container").css("display", "none");
            $("#image_container").css("display", "none");
            $("#form_content").css("display", "block");
            $("#about_me").css("color","red");
            $("#my_works").css("color","red");
        }

    });

    

});