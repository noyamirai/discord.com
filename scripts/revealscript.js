console.log("REVEAL SCRIPT ACTIVE");

var scrollElements = document.querySelectorAll(".reveal");

window.addEventListener("load", function() {
  // SCROLL TO TOP BRON: https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari

  // always show first element
  scrollElements[0].classList.add("visible");
});

// BRON: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

/*Detect when element is in view by determining if the distance of the element
from the top of the page is < than the height of the visible part of the page.*/
function elementInView(el, offset) {
  const elementTop = el.getBoundingClientRect().top;

  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset);
}

function elementOutofView(el) {
  const elementTop = el.getBoundingClientRect().top;

  return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
}

function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 70)) { el.classList.add("visible");
    } else if (elementOutofView(el)) { el.classList.remove("visible"); }
  })
}

window.addEventListener("scroll", () => { handleScrollAnimation(); });
