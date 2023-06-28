const btnDarkMode = document.querySelector("#btnDarkmode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const title = document.querySelector(".title");
const spanNombre = document.querySelector("span");
const profession = document.querySelector(".profession");
const descriptionProfession = document.querySelector(".description-profession");
const img_logo = document.querySelector(".img_logo");
const faMoon = document.querySelector(".fa-moon");
const listItem = document.querySelectorAll(".link");
const vector = document.querySelector(".vector");
const aboutMe = document.querySelector(".about__me");
const content = document.querySelector(".content");
const figcation = document.querySelector("figcaption");
const comillas = document.querySelector(".content .comillas");
const experience = document.querySelector(".experience");
const nameSection = document.querySelector(".name__section");
const footer = document.querySelector("footer");
const h3ContainerProyect = document.querySelector(".container__proyect h3");
const parrafoProyect = document.querySelector("p");
const h3Especialization = document.querySelector(".especialization_item h3");
const h4Especialization = document.querySelector(".skill h4");
const headerTop = document.querySelector(".header__top");
const nombre_title = document.querySelector(".nombre_title");
const itemCard = document.querySelectorAll(".item");

//Active section link menu

//TODO: Falta incorporar el link de contact , no funciona porque no es una section
let sections = document.querySelectorAll("section");
let navLi = document.querySelectorAll(
  ".header .nav__center .items .list-item .link"
);

window.onscroll = function () {
  var current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    // console.log(scrollY);
    if (scrollY >= sectionTop - 282) {
      current = section.getAttribute("id");
    }
  });
  // console.log(current);
  navLi.forEach((li) => {
    li.classList.remove("activeLi");

    if (li.classList.contains(current)) {
      li.classList.add("activeLi");
    }
  });
};

//CUANDO RECARGA LA PAGINA
if (window.location.reload) {
  localStorage.setItem("darkmode", false);
}

//IMAGEN DE VECTOR
if (localStorage.getItem("darkmode") === "false") {
  document
    .querySelector(".vector")
    .setAttribute("src", "assets/img/Vector-primary.png");
} else if (localStorage.getItem("darkmode") === "true") {
  document
    .querySelector(".vector")
    .setAttribute("src", "assets/img/Vector-2.png");
}
//end IMAGEN DE VECTOR

//IMAGEN DE LOGO
if (localStorage.getItem("darkmode") === "false") {
  // img_logo.classList.add("darkmode");
  document
    .querySelector(".img_logo")
    .setAttribute("src", "assets/img/logo.png");
} else if (localStorage.getItem("darkmode") === "true") {
  // img_logo.classList.add("darkmode");
  document
    .querySelector(".img_logo")
    .setAttribute("src", "assets/img/logo-white.png");
}
//end IMAGEN DE LOGO

function addClassLink(list) {
  return list.forEach((link) => {
    link.classList.toggle("darkmode");
  });
}

function addClassItem(list) {
  return list.forEach((item) => {
    item.classList.toggle("darkmode");
  });
}

load();

btnDarkMode.addEventListener("click", function (e) {
  body.classList.toggle("darkmode");
  title.classList.toggle("darkmode");
  header.classList.toggle("darkmode");
  spanNombre.classList.toggle("darkmode");
  profession.classList.toggle("darkmode");
  descriptionProfession.classList.toggle("darkmode");
  faMoon.classList.toggle("darkmode");
  headerTop.classList.toggle("darkmode");
  // itemCard.classList.toggle("darkmode");

  // console.log(itemCard);
  if (localStorage.getItem("darkmode") === "false") {
    document
      .querySelector(".img_logo")
      .setAttribute("src", "assets/img/logo-white.png");
    //TODO : Probando sacando el vector en modo oscuro
    document.querySelector(".vector").setAttribute("style", "display:none");
  } else if (localStorage.getItem("darkmode") === "true") {
    document.querySelector(".vector").setAttribute("style", "display:block");
    document
      .querySelector(".img_logo")
      .setAttribute("src", "assets/img/logo.png");
    //TODO : Probando sacando el vector en modo oscuro

    document
      .querySelector(".vector")
      .setAttribute("src", "assets/img/Vector-2.png");
  }

  if (localStorage.getItem("darkmode") === "false") {
    document.querySelector(".vector").setAttribute("style", "display:none");
  } else if (localStorage.getItem("darkmode") === "true") {
    document
      .querySelector(".vector")
      .setAttribute("src", "assets/img/Vector-primary.png");
  }

  addClassLink(listItem);
  addClassItem(itemCard);
  // listItem.classList.toggle("darkmode");
  aboutMe.classList.toggle("darkmode");
  content.classList.toggle("darkmode");
  figcation.classList.toggle("darkmode");
  comillas.classList.toggle("darkmode");
  store(body.classList.contains("darkmode"));
  experience.classList.toggle("darkmode");
  footer.classList.toggle("darkmode");
  // h3ContainerProyect.classList.toggle("darkmode");
  parrafoProyect.classList.toggle("darkmode");
  nameSection.classList.toggle("darkmode");
  h4Especialization.classList.toggle("darkmode");
});

function load() {
  const darkModeLocalStorage = localStorage.getItem("darkmode");

  if (!darkModeLocalStorage) {
    store("false");
  } else if (darkModeLocalStorage === "true") {
    body.classList.add("darkmode");
    title.classList.add("darkmode");
    header.classList.add("darkmode");
    spanNombre.classList.add("darkmode");
    profession.classList.add("darkmode");
    descriptionProfession.classList.add("darkmode");
    faMoon.classList.add("darkmode");
    // listItem.classList.add("darkmode");
    addClassLink(listItem);
    addClassLink(itemCard);
    aboutMe.classList.add("darkmode");
    content.classList.add("darkmode");
    figcation.classList.add("darkmode");
    comillas.classList.add("darkmode");
    experience.classList.add("darkmode");
    footer.classList.add("darkmode");
    h3ContainerProyect.classList.add("darkmode");
    parrafoProyect.classList.add("darkmode");
    h4Especialization.classList.add("darkmode");
    nameSection.classList.add("darkmode");
    headerTop.classList.add("darkmode");
  }
}

function store(value) {
  localStorage.setItem("darkmode", value);
}
// Sticky Menu

const header__top = document.querySelector(".header__top");

window.addEventListener("scroll", fixNav);
function fixNav() {
  if (window.scrollY > header__top.offsetHeight) {
    header__top.classList.add("scrool");
    header__top.classList.add("reduce");
    header__top.classList.add("blurred");
  } else {
    header__top.classList.remove("scrool");
    header__top.classList.remove("reduce");
  }
}

// Smooth scroll PAGE
document
  .querySelectorAll('.header .nav__center .items a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

const btnArrowDown = document
  .querySelector(".btn-down")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

const logoClickTop = document
  .querySelectorAll('.header .logo a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
const headerBottom = document.querySelector(".header__bottom");

const logoBawual = document.querySelector(".img_logo");

// TODO: Probar esta opcion v2
// const getPixeles = () =>
//   document.documentElement.scrollTo || document.body.scrollTop;

// const goToUp = () => {
//   if (getPixeles() > 0) {
//     screenTop(3000, getPixeles() - getPixeles() / 200);
//   }
// };

// logoBawual.addEventListener("click", goToUp);

// console.log(document.documentElement.scrollTop);

// Back to top
var trigger = document.getElementsByClassName("img_logo")[0];
trigger.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// Back to top Arrow Top
var trigger2 = document.getElementsByClassName("container__icon top")[0];
trigger2.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

//Fecha Actual
let currentYear = new Date().getFullYear();
// console.log(currentYear);
let copyrightText = document.querySelector(
  ".footer__info .copyright .year"
).innerHTML;

// console.log(copyrightText);
document.querySelector(".year").innerHTML = copyrightText.replace(
  "year",
  currentYear
);

// AOS
AOS.init({
  //Setting by defaul
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

//Swiper Slider settings
// Portfolio slider
var numberOfSlides = document.querySelectorAll(".swiper-slide").length;

// console.log(numberOfSlides);
new Swiper(".swiper", {
  loop: true,
  allowSlidePrev: numberOfSlides !== 1,
  allowSlideNext: numberOfSlides !== 1,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    769: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1151: {
      slidesPerView: 1,
      spaceBetween: 56,
    },
  },
  navigation: {
    nextEl: ".slider-navigation .next",
    prevEl: ".slider-navigation .prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//----------------------------- EXPERIENCE LIST
let targetLI = document
  .querySelector(".container__main .left ul li")
  .getAttribute("data-tab");

let cardsIng = document.getElementById("cardsIng");
let cardsSoft = document.getElementById("cardsSoft");
let cardsDiseno = document.getElementById("cardsDiseno");

let cardInge = document.querySelectorAll("#cardsIng #ingenieria");
let cardSoft = document.querySelectorAll("#cardsSoft #software");
let cardDiseno = document.querySelectorAll("#cardsDiseno #diseno");

//Botones
let btnLeftIng = document.getElementById("left1");
let btnRightIng = document.getElementById("right1");

let btnLeftSoft = document.getElementById("left2");
let btnRightSoft = document.getElementById("right2");

let btnLeftDis = document.getElementById("left3");
let btnRightDis = document.getElementById("right3");

//EXPERIENCE LIST INITIAL
// if (targetLI === "ingenieria") {
let idx = 0;

// document.querySelector(
//   ".experience .container__main .right .contenido.active"
// ).

// document.getElementById(targetLI).classList.add("active");

function changeCard() {
  if (idx > cardInge.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = cardInge.length - 1;
  }

  cardsIng.style.transform = `translateX(${-idx * 500}px)`;
}
btnRightIng.addEventListener("click", () => {
  idx++;
  changeCard();
});

btnLeftIng.addEventListener("click", () => {
  idx--;
  changeCard();
});
// }

//EXPERIENCE LIST LAST

document.querySelector(".experience").addEventListener("click", function (e) {
  e.preventDefault();

  let targetTab = e.target.getAttribute("data-tab");
  // console.log(targetTab);

  if (e.target.tagName === "LI") {
    document
      .querySelector(".experience .container__main .left ul li.active")
      .classList.remove("active");

    //Buttons
    const prev = document.querySelectorAll(
      ".experience .container__main .left ul button.active"
    )[0];
    // console.log(prev);

    const next = document.querySelectorAll(
      ".experience .container__main .left ul button.active"
    )[1];

    // console.log(prev.classList.contains("active"));
    if (prev.classList.contains("active")) {
      prev.classList.remove("active");
      next.classList.remove("active");
    }

    e.target.classList.add("active");
    e.target.children[0].classList.add("active");
    e.target.children[1].classList.add("active");
  }

  if (targetTab === "ingenieria") {
    let idxi = 0;

    document
      .querySelector(".experience .container__main .right .contenido.active")
      .classList.remove("active");
    document.getElementById(targetTab).classList.add("active");

    function changeCard() {
      if (idxi > cardInge.length - 1) {
        idxi = 0;
      } else if (idxi < 0) {
        idxi = cardInge.length - 1;
      }

      cardsIng.style.transform = `translateX(${-idxi * 500}px)`;
    }
    btnRightIng.addEventListener("click", () => {
      idxi++;
      changeCard();
    });

    btnLeftIng.addEventListener("click", () => {
      idxi--;
      changeCard();
    });
  }
  let idxs = 0;

  if (targetTab === "software") {
    // console.log(targetTab);
    // let idxs = 0;

    // console.log(targetTab);

    document
      .querySelector(".experience .container__main .right .contenido.active")
      .classList.remove("active");

    document.getElementById(targetTab).classList.add("active");

    function changeCard() {
      if (idxs > cardSoft.length - 1) {
        idxs = 0;
      } else if (idxs < 0) {
        idxs = cardSoft.length - 1;
      }

      cardsSoft.style.transform = `translateX(${-idxs * 500}px)`;
    }

    btnRightSoft.addEventListener("click", () => {
      idxs++;
      changeCard();
    });

    btnLeftSoft.addEventListener("click", () => {
      idxs--;
      changeCard();
    });
  }
  let idxd = 0;

  if (targetTab === "diseno") {
    // let idxd = 0;
    // console.log(idxs);

    document
      .querySelector(".experience .container__main .right .contenido.active")
      .classList.remove("active");

    document.getElementById(targetTab).classList.add("active");

    function changeCard() {
      if (idxd > cardDiseno.length - 1) {
        idxd = 0;
      } else if (idxd < 0) {
        idxd = cardDiseno.length - 1;
      }
      cardsDiseno.style.transform = `translateX(${-idxd * 500}px)`;
    }

    btnRightDis.addEventListener("click", () => {
      idxd++;
      changeCard();
    });

    btnLeftDis.addEventListener("click", () => {
      idxd--;
      changeCard();
    });
  }
});
