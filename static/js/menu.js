"use strict";

console.log("menu");
// menu

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    document.getElementById("hamburger-icon").classList.toggle("open");
  });
