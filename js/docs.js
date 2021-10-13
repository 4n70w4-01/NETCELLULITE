"use strict";

$(document).ready(function () {
  setTimeout(function () {
    $(".loader").fadeOut(function () {
      $(this).remove(); // Optional if it's going to only be used once.
    });
  }, 500);
});