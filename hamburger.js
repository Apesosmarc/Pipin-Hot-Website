const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

let clicked = false;
hamburgerIcon.addEventListener("click", () => {
  clicked = !clicked;
  !clicked
    ? hamburgerMenu.classList.remove("display-none")
    : hamburgerMenu.classList.add("display-none");
});
