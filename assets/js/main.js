window.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".header__top"),
        t = document.querySelector(".logo img"),
        n = document.querySelector(".icon__dowloader .top");
    window.addEventListener("scroll", function () {
        window.scrollY > e.offsetHeight
            ? (e.classList.add("scrool"),
              e.classList.add("reduce"),
              e.classList.add("blurred"),
              (t.style.height = "4.5rem"),
              (n.style.display = "flex"),
              (n.style.transition = "all 10s"))
            : (e.classList.remove("scrool"),
              e.classList.remove("reduce"),
              (t.style.height = "7rem"),
              (n.style.display = "none"));
    }),
        document
            .querySelectorAll('.header .nav__center .items a[href^="#"]')
            .forEach((e) => {
                e.addEventListener("click", function (e) {
                    e.preventDefault(),
                        document
                            .querySelector(this.getAttribute("href"))
                            .scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                });
            }),
        document
            .querySelector(".hero .icon__dowloader .container-icon .btn-down")
            .addEventListener("click", function (e) {
                e.preventDefault(),
                    document
                        .querySelector(this.getAttribute("href"))
                        .scrollIntoView({ behavior: "smooth", block: "start" });
            }),
        document
            .querySelectorAll('.header .header__top .logo a[href^="#"]')
            .forEach((e) => {
                e.addEventListener("click", function (e) {
                    e.preventDefault(),
                        document
                            .querySelector(this.getAttribute("href"))
                            .scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                });
            }),
        (document.getElementsByClassName("img_logo")[0].onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }),
        (document.getElementsByClassName("container-icon top")[0].onclick =
            function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
    const a = new Date().getFullYear(),
        r = document.querySelector(
            "footer .footer__bottom .copyr .year"
        ).innerHTML;
    (document.querySelector(".year").innerHTML = r.replace("year", a)),
        AOS.init({
            disable: !1,
            startEvent: "DOMContentLoaded",
            initClassName: "aos-init",
            animatedClassName: "aos-animate",
            useClassNames: !1,
            disableMutationObserver: !1,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: "ease",
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
        });
    const o = document.getElementById("btnDarkmode"),
        i = document.querySelector(".nav__right .items-right .list-item.moon"),
        c = document.querySelector(".nav__right .items-right .list-item.sun");
    o.addEventListener("click", function () {
        (i.style.display = "none"),
            (c.style.display = "block"),
            (document.querySelector(".vector").style.display = "none"),
            document
                .querySelector(".img_logo")
                .setAttribute("src", "assets/img/logo-white.png"),
            document.querySelector("body").classList.toggle("darkmode"),
            document.querySelector(".header__top").classList.toggle("darkmode"),
            document.querySelector(".about__me").classList.toggle("darkmode"),
            document.querySelector(".experience").classList.toggle("darkmode"),
            document.querySelector("footer").classList.toggle("darkmode"),
            document.querySelector(".item").classList.toggle("darkmode");
    }),
        c.addEventListener("click", function () {
            (i.style.display = "block"),
                (c.style.display = "none"),
                (document.querySelector(".vector").style.display = "block"),
                (document.querySelector(".img_logo").style.display = "block"),
                document
                    .querySelector(".img_logo")
                    .setAttribute("src", "assets/img/logo.png"),
                document.querySelector("body").classList.toggle("darkmode"),
                document
                    .querySelector(".header__top")
                    .classList.toggle("darkmode"),
                document
                    .querySelector(".about__me")
                    .classList.toggle("darkmode"),
                document
                    .querySelector(".experience")
                    .classList.toggle("darkmode"),
                document.querySelector("footer").classList.toggle("darkmode"),
                document.querySelector(".item").classList.toggle("darkmode");
        });
});
var medidaCardContainer = document.querySelector(
    ".experience .container__main .container__main-right"
).offsetWidth;
let targetLI = document
        .querySelector(".container__main .container__main-left ul li")
        .getAttribute("data-tab"),
    cardsIng = document.getElementById("cardsIng"),
    cardsSoft = document.getElementById("cardsSoft"),
    cardsDiseno = document.getElementById("cardsDiseno"),
    cardInge = document.querySelectorAll("#cardsIng #ingenieria"),
    cardSoft = document.querySelectorAll("#cardsSoft #software"),
    cardDiseno = document.querySelectorAll("#cardsDiseno #diseno"),
    btnLeftIng = document.getElementById("left1"),
    btnRightIng = document.getElementById("right1"),
    btnLeftSoft = document.getElementById("left2"),
    btnRightSoft = document.getElementById("right2"),
    btnLeftDis = document.getElementById("left3"),
    btnRightDis = document.getElementById("right3"),
    idx = 0;
function changeCard() {
    idx > cardInge.length - 1
        ? (idx = 0)
        : idx < 0 && (idx = cardInge.length - 1),
        (cardsIng.style.transform = `translate(${
            -idx * medidaCardContainer
        }px)`);
}
btnRightIng.addEventListener("click", () => {
    idx++, changeCard();
}),
    btnLeftIng.addEventListener("click", () => {
        idx--, changeCard();
    });
let card = document.querySelectorAll(".card-container .item-card");
card.forEach((e) => {
    (e.style.minWidth = `${medidaCardContainer}px`),
        (e.style.marginLeft = "0rem");
});
let dise = document.querySelectorAll(".card-container .item-card .item");
dise.forEach((e) => {
    (e.style.minWidth = `${medidaCardContainer}px`),
        (e.style.marginLeft = "0rem");
}),
    //  Aqui es el error
    document
        .querySelector(".experience .container__main .container__main-left ")
        .addEventListener("click", function (e) {
            e.preventDefault();
            let t = e.target.getAttribute("data-tab");
            if ("LI" === e.target.tagName) {
                document
                    .querySelector(
                        ".experience .container__main .container__main-left ul li.active"
                    )
                    .classList.remove("active");
                const i = document.querySelectorAll(
                        ".experience .container__main .container__main-left ul button.active"
                    )[0],
                    c = document.querySelectorAll(
                        ".experience .container__main .container__main-left ul button.active"
                    )[1];
                i.classList.contains("active") &&
                    (i.classList.remove("active"),
                    c.classList.remove("active")),
                    e.target.classList.add("active"),
                    e.target.children[0].classList.add("active"),
                    e.target.children[1].classList.add("active");
            }
            let n = 0,
                a = 0,
                r = 0;
            if ("ingenieria" === t) {
                function o() {
                    n > cardInge.length - 1
                        ? (n = 0)
                        : n < 0 && (n = cardInge.length - 1),
                        (cardsIng.style.transform = `translateX(${
                            -n * medidaCardContainer
                        }px)`);
                }
                (cardsDiseno.style.transform = `translateX(${
                    -r * medidaCardContainer
                }px)`),
                    document
                        .querySelector(
                            ".experience .container__main .container__main-right .content.active"
                        )
                        .classList.remove("active"),
                    document.getElementById(t).classList.add("active"),
                    btnRightIng.addEventListener("click", () => {
                        n++, o();
                    }),
                    btnLeftIng.addEventListener("click", () => {
                        n--, o();
                    });
            }
            if ("software" === t) {
                function o() {
                    a > cardSoft.length - 1
                        ? (a = 0)
                        : a < 0 && (a = cardSoft.length - 1),
                        (cardsSoft.style.transform = `translateX(${
                            -a * medidaCardContainer
                        }px)`);
                }
                (cardsDiseno.style.transform = `translateX(${
                    -r * medidaCardContainer
                }px)`),
                    1 === idx &&
                        (cardsIng.style.transform = `translateX(${
                            -n * medidaCardContainer
                        }px)`),
                    0 === n &&
                        (cardsIng.style.transform = `translateX(${
                            -n * medidaCardContainer
                        }px)`),
                    document
                        .querySelector(
                            ".experience .container__main .container__main-right .content.active"
                        )
                        .classList.remove("active"),
                    document.getElementById(t).classList.add("active"),
                    btnRightSoft.addEventListener("click", () => {
                        a++, o();
                    }),
                    btnLeftSoft.addEventListener("click", () => {
                        a--, o();
                    });
            }
            if ("diseno" === t) {
                function o() {
                    r > cardDiseno.length - 1
                        ? (r = 0)
                        : r < 0 && (r = cardDiseno.length - 1),
                        (cardsDiseno.style.transform = `translateX(${
                            -r * medidaCardContainer
                        }px)`);
                }
                (cardsSoft.style.transform = `translateX(${
                    -a * medidaCardContainer
                }px)`),
                    document
                        .querySelector(
                            ".experience .container__main .container__main-right .content.active"
                        )
                        .classList.remove("active"),
                    document.getElementById(t).classList.add("active"),
                    btnRightDis.addEventListener("click", () => {
                        r++, o();
                    }),
                    btnLeftDis.addEventListener("click", () => {
                        r--, o();
                    });
            }
        }),
    /// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    window.addEventListener("resize", function () {
        medidaCardContainer = document.querySelector(
            ".experience .container__main .container__main-right"
        ).offsetWidth;
        document
            .querySelector(".container__main .container__main-left ul li")
            .getAttribute("data-tab");
        let e = document.getElementById("cardsIng"),
            t = document.getElementById("cardsSoft"),
            n = document.getElementById("cardsDiseno"),
            a = document.querySelectorAll("#cardsIng #ingenieria"),
            r = document.querySelectorAll("#cardsSoft #software"),
            o = document.querySelectorAll("#cardsDiseno #diseno"),
            i = document.getElementById("left1"),
            c = document.getElementById("right1"),
            d = document.getElementById("left2"),
            l = document.getElementById("right2"),
            s = document.getElementById("left3"),
            m = document.getElementById("right3"),
            u = 0;
        function g() {
            u > a.length - 1 ? (u = 0) : u < 0 && (u = a.length - 1),
                (e.style.transform = `translate(${
                    -u * medidaCardContainer
                }px)`);
        }
        c.addEventListener("click", () => {
            u++, g();
        }),
            i.addEventListener("click", () => {
                u--, g();
            }),
            document
                .querySelectorAll(".card-container .item-card")
                .forEach((e) => {
                    (e.style.minWidth = `${medidaCardContainer}px`),
                        (e.style.marginLeft = "0rem");
                }),
            document
                .querySelectorAll(".card-container .item-card .item")
                .forEach((e) => {
                    (e.style.minWidth = `${medidaCardContainer}px`),
                        (e.style.marginLeft = "0rem");
                }),
            document
                .querySelector(".experience")
                .addEventListener("click", function (g) {
                    g.preventDefault();
                    let y = g.target.getAttribute("data-tab");
                    if ("LI" === g.target.tagName) {
                        document
                            .querySelector(
                                ".experience .container__main .container__main-left ul li.active"
                            )
                            .classList.remove("active");
                        const _ = document.querySelectorAll(
                                ".experience .container__main .container__main-left ul button.active"
                            )[0],
                            S = document.querySelectorAll(
                                ".experience .container__main .container__main-left ul button.active"
                            )[1];
                        _.classList.contains("active") &&
                            (_.classList.remove("active"),
                            S.classList.remove("active")),
                            g.target.classList.add("active"),
                            g.target.children[0].classList.add("active"),
                            g.target.children[1].classList.add("active");
                    }
                    let f = 0,
                        h = 0,
                        v = 0;
                    if ("ingenieria" === y) {
                        function L() {
                            f > a.length - 1
                                ? (f = 0)
                                : f < 0 && (f = a.length - 1),
                                (e.style.transform = `translateX(${
                                    -f * medidaCardContainer
                                }px)`);
                        }
                        (n.style.transform = `translateX(${
                            -v * medidaCardContainer
                        }px)`),
                            document
                                .querySelector(
                                    ".experience .container__main .container__main-right .content.active"
                                )
                                .classList.remove("active"),
                            document.getElementById(y).classList.add("active"),
                            c.addEventListener("click", () => {
                                f++, L();
                            }),
                            i.addEventListener("click", () => {
                                f--, L();
                            });
                    }
                    if ("software" === y) {
                        function L() {
                            h > r.length - 1
                                ? (h = 0)
                                : h < 0 && (h = r.length - 1),
                                (t.style.transform = `translateX(${
                                    -h * medidaCardContainer
                                }px)`);
                        }
                        (n.style.transform = `translateX(${
                            -v * medidaCardContainer
                        }px)`),
                            1 === u &&
                                (console.log("estoy en 1"),
                                (e.style.transform = `translateX(${
                                    -f * medidaCardContainer
                                }px)`)),
                            0 === f &&
                                (console.log("estoy en 1"),
                                (e.style.transform = `translateX(${
                                    -f * medidaCardContainer
                                }px)`)),
                            document
                                .querySelector(
                                    ".experience .container__main .container__main-right .content.active"
                                )
                                .classList.remove("active"),
                            document.getElementById(y).classList.add("active"),
                            l.addEventListener("click", () => {
                                h++, L();
                            }),
                            d.addEventListener("click", () => {
                                h--, L();
                            });
                    }
                    if ("diseno" === y) {
                        function L() {
                            v > o.length - 1
                                ? (v = 0)
                                : v < 0 && (v = o.length - 1),
                                (n.style.transform = `translateX(${
                                    -v * medidaCardContainer
                                }px)`);
                        }
                        (t.style.transform = `translateX(${
                            -h * medidaCardContainer
                        }px)`),
                            document
                                .querySelector(
                                    ".experience .container__main .container__main-right .content.active"
                                )
                                .classList.remove("active"),
                            document.getElementById(y).classList.add("active"),
                            m.addEventListener("click", () => {
                                v++, L();
                            }),
                            s.addEventListener("click", () => {
                                v--, L();
                            });
                    }
                });
    });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//MODAL

const btnModal = document.querySelector(".btn-mobile-nav"),
    headerEl = document.querySelector(".header");
btnModal.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a.link");
allLinks.forEach(function (e) {
    e.addEventListener("click", function (t) {
        t.preventDefault();
        const n = e.getAttribute("href");
        if (
            ("#" === n && window.scrollTo({ top: 0, behavior: "smooth" }),
            "#" !== n && n.startsWith("#"))
        ) {
            document.querySelector(n).scrollIntoView({ behavior: "smooth" });
        }
        e.classList.contains("link") && headerEl.classList.toggle("nav-open");
    });
});

//Colores para el title - headers
let nameTitle = document.querySelector(".effect-machine");

const generateRandomColor = () =>
        `rgb(${Math.floor(222 * Math.random())},${Math.floor(
            244 * Math.random()
        )},${Math.floor(245 * Math.random())})`,
    setColorText = () => {
        setInterval(() => {
            const e = `rgb(${Math.floor(222 * Math.random())},${Math.floor(
                244 * Math.random()
            )},${Math.floor(245 * Math.random())})`;
            nameTitle.style.color = e;
        }, 2e3);
    };
setInterval(() => {
    const e = `rgb(${Math.floor(222 * Math.random())},${Math.floor(
        244 * Math.random()
    )},${Math.floor(245 * Math.random())})`;
    nameTitle.style.color = e;
}, 2e3);
