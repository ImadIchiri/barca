const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

let isNavOpened = false;

menu.addEventListener("click", () => {
  isNavOpened = !isNavOpened;

  if (isNavOpened) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
