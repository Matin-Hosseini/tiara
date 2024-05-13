const $ = document;

const header = $.querySelector("#header");
const navMenuBtn = $.querySelector("#nav-menu-btn");
const navMenu = $.querySelector("#nav-menu");
const menuItems = $.querySelectorAll(".menu__item");

//preloader
const preloader = $.querySelector(".preloader");

//go-to-top-btn
const goToTopBtn = $.querySelector("#go-to-top-btn");
const homeSection = $.querySelector("#home");

//services-showing content
const servicesTabs = $.querySelectorAll(".services-tab");
const tabContents = $.querySelectorAll(".services-tab-content");

//about-us => about-company => progress status
const progressStatus = $.querySelectorAll(".progress-status");
const progressValueElem = $.querySelectorAll(".progress-status span");

//QandA
const questionsBox = $.querySelector("#questions-box");

navMenuBtn.addEventListener("click", () => {});

//nav menu show and hide
navMenuBtn.addEventListener("click", function () {
  this.classList.toggle("hamburger-menu--open");
  navMenu.classList.toggle("menu--open");
});

navMenu.addEventListener("click", (e) => {
  let { target } = e;
  if (target.classList.contains("menu__link")) {
    navMenu
      .querySelector(".menu__link--active")
      .classList.remove("menu__link--active");
    target.classList.add("menu__link--active");
  }
});

//sticky navbar
const stickyNav = () =>
  document.documentElement.scrollTop > 0
    ? header.classList.add("sticky-nav")
    : header.classList.remove("sticky-nav");


//go-to-top-btn
const showGoToTopBtn = () =>
  document.documentElement.scrollTop > homeSection.clientHeight
    ? goToTopBtn.classList.add("go-to-top-btn--active")
    : goToTopBtn.classList.remove("go-to-top-btn--active");

goToTopBtn.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

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

//about-us => about-company => progress status
progressStatus.forEach((singleStatus) => {
  progressValueElem.forEach((singleValueElem) => {
    if (singleValueElem.id === singleStatus.dataset.name) {
      singleValueElem.innerHTML = singleStatus.dataset.value;
    }
  });
  singleStatus.style.width = singleStatus.dataset.value;
});

//QandA
questionsBox.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    $.querySelector(".question__title--active").classList.remove(
      "question__title--active"
    );
    $.querySelector(".question__answer--active").classList.remove(
      "question__answer--active"
    );

    e.target.classList.add("question__title--active");
    e.target.nextElementSibling.classList.add("question__answer--active");
  }
});


window.addEventListener("load", stickyNav);
document.addEventListener("scroll", stickyNav);
window.addEventListener("load", showGoToTopBtn);
window.addEventListener("scroll", showGoToTopBtn);
