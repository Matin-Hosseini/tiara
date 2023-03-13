const $ = document;

const header = $.querySelector("#header");
const navMenuBtn = $.querySelector("#nav-menu-btn");

navMenuBtn.addEventListener("click", () => {});

function stickyNav() {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
}

document.addEventListener("scroll", stickyNav);
window.addEventListener("load", stickyNav);
