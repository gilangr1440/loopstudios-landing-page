const hamburgerBtn = document.querySelector(".navbar__button");
const iconBtn = document.querySelector(".navbar__button-icon");
const navbarMobile = document.querySelector(".navbar__mobile");

hamburgerBtn.addEventListener("click", (e) => openMenu(e));

function openMenu(e) {
  navbarMobile.classList.toggle("open");

  if (navbarMobile.className.includes("open")) {
    iconBtn.src = "images/icon-close.svg";
    document.body.style.overflow = "hidden";
  } else {
    iconBtn.src = "images/icon-hamburger.svg";
    document.body.style.overflow = "initial";
  }
}
