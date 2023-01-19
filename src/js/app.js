require("../css/app.css");
require("../scss/style.scss");

/********** Paste your code here! ************/

$(window).on("scroll", () => {
  if ($(window).scrollTop() > 0) {
    $("header").addClass("isScrolling");
  } else {
    $("header").removeClass("isScrolling");
  }
});
$(document).ready(function () {
  $(".mobile-menu").on("click", () => {
    if ($(".header-right ul").hasClass("active")) {
      $(".header-right ul").removeClass("active");
    } else {
      $(".header-right ul").addClass("active");
    }
  });
});
