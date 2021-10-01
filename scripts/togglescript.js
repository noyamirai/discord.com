console.log("TOGGLE SCRIPT ACTIVE");

let hamburgerMenuBtn = document.querySelector("#hamburger-btn");
let closeMenuBtn = document.querySelector("#close-btn");
let mobileNav  = document.querySelector("#mobile-nav");
let bodyElement  = document.querySelector("body");

hamburgerMenuBtn.addEventListener("click", function() {
  mobileNav.classList.toggle("open");
  bodyElement.classList.toggle("open");
});

closeMenuBtn.addEventListener("click", function() {
  mobileNav.classList.toggle("open");
  bodyElement.classList.toggle("open");
});
