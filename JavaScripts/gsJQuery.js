
// Fade in fortfolio circles when page loads
$(".portfolio_circle").slideDown(1000);
$(".portfolio_circle").css("display", "inline-block");
// view button for portfolio information window - Click to view the portfolion information
$("#view1").click(function () {
   $("#personal_data").css("display", "block");
   $("#skills_and_educaction_data").css("display", "none");
   $("#work_experience_data").css("display", "none");
   $(".portfolio_circle").css("display", "none");
});
$("#view2").click(function () {
   $("#skills_and_educaction_data").css("display", "block");
   $("#personal_data").css("display", "none");
   $("#work_experience_data").css("display", "none");
   $(".portfolio_circle").css("display", "none");
   
});

$("#view3").click(function () {

   $("#work_experience_data").css("display", "block");
   $("#personal_data").css("display", "none");
   $("#skills_and_educaction_data").css("display", "none");

   $(".portfolio_circle").css("display", "none");
});

// hover over view buttons effects that changed the background color
$(".view_button").hover(function () {
   $(this).css({

      backgroundColor: "white",
      color: "#C49D5A",
   });
});
//mouse out on the view buttons - Resets the bacground color
$(".view_button").mouseout(function () {
   $(this).css({
      backgroundColor: "#C49D5A",
      color: "white",

   });
});
// Close button for portfolio information display window - It closes the displayed information
$("#close1").click(function () {

   $("#personal_data").css("display", "none");
   $(".portfolio_circle").css("display", "inline-block");
});
$("#close2").click(function () {

   $("#skills_and_educaction_data").css("display", "none");

   $(".portfolio_circle").css("display", "inline-block");
});

$("#close3").click(function () {

   $("#work_experience_data").css("display", "none");

   $(".portfolio_circle").css("display", "inline-block");

});

// close button effects on hover. 
$(".close_button").hover(function () {

   $(this).css({

      backgroundColor: "white",
      color: "#C49D5A",

   });
});
$(".close_button").mouseout(function () {
   $(this).css({

      backgroundColor: "#C49D5A",
      color: "white",

   });

});

