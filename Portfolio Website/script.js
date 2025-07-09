let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
  s;
};

//type text code
var typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer.",
    "Backend Developer.",
    "Web Designer.",
    "Lazy Man.",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  balckDelay: 1200,
  loop: true,
});
