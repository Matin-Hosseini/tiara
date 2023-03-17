const $ = document;

const header = $.querySelector("#header");
const navMenuBtn = $.querySelector("#nav-menu-btn");

//services-showing content
const servicesTabs = $.querySelectorAll(".services-tab");
const tabContents = $.querySelectorAll(".services-tab-content");

navMenuBtn.addEventListener("click", () => {});

//sticky navbar
function stickyNav() {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
}

//services-showing content
servicesTabs.forEach((serviceTab) => {
  serviceTab.addEventListener("click", (e) => {
    let mainTab = e.target.dataset.id;
    let mainTabContent = $.getElementById(mainTab);

    servicesTabs.forEach((serviceTab) => {
      serviceTab.classList.remove("services-tab--active");
    });
    $.querySelector(`.services-tab[data-id="${mainTab}"]`).classList.add(
      "services-tab--active"
    );

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("services-tab-content--show");
    });
    mainTabContent.classList.add("services-tab-content--show");
  });
});

document.addEventListener("scroll", stickyNav);
window.addEventListener("load", stickyNav);
