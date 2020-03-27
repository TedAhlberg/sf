$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");

  $(".card").hover(
    function() {
      console.log("hover");
      $(this).css("cursor", "pointer");
    },
    function() {
      $(this).removeClass("shadow");
    }
  );
});
