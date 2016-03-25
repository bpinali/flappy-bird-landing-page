$(document).ready(function () {

  $(".container").velocity("transition.slideUpBigIn",
  {
    display: "block"
  }, 400);

   $(".fa-play-circle").mouseenter(function () {
          $(this).velocity({
              translateY: "-20px",
              color: "#fff"
          }, "easeInSine", 450)
          .velocity("reverse");
      });

});
