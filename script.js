let body = document.querySelector("body");
let menuHamb = document.querySelector("[alt *= 'menu']");
let logo = document.querySelector(".logo");
let nav = document.querySelector("nav");
let headline = document.querySelector(".headline");
let header = document.querySelector("header");
let portfolioSection = document.querySelector("#portfolio");
let aboutSection = document.querySelector("#about");
let contactSection = document.querySelector("#contact");
let portfolioNav = document.querySelector(".portfolio");
let aboutNav = document.querySelector(".about");
let contactNav = document.querySelector(".contact");

function styleMenu(elem) {
  elem.style.color = "#fff";
  elem.style.fontWeight = "600";
  elem.style.fontStyle = "normal";
  elem.style.fontSize = "32px";
  elem.style.lineHeight = "44px";
  elem.style.textDecoration = "none";
  elem.style.marginBottom = "40px";
}

let menuClose = document.createElement("img");
menuClose.style.zIndex = 998;
menuClose.style.position = "absolute";
menuClose.style.top = "34px";
menuClose.style.left = "325px";
menuClose.src = "./img/Close-Button.svg";

menuHamb.addEventListener("click", function () {
  headline.style.display = "none";
  portfolioSection.style.display = "none";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
  logo.style.display = "none";
  header.style.backgroundColor = "#6070FF";
  nav.appendChild(menuClose);
  nav.style.display = "flex";
  nav.style.flexDirection = "column";
  nav.style.alignItems = "start";
  nav.style.marginTop = "115px";
  portfolioNav.classList.remove("desktop");
  aboutNav.classList.remove("desktop");
  contactNav.classList.remove("desktop");
  styleMenu(portfolioNav);
  styleMenu(aboutNav);
  styleMenu(contactNav);
});

menuClose.addEventListener("click", function () {
  headline.style.display = "block";
  portfolioSection.style.display = "block";
  aboutSection.style.display = "block";
  contactSection.style.display = "block";
  logo.style.display = "flex";
  nav.style.flexDirection = "row";
  header.style.backgroundColor = "#fff";
  nav.style.display = "flex";
  nav.style.alignItems = "center";
  nav.style.marginTop = "0px";
  portfolioNav.classList.add("desktop");
  aboutNav.classList.add("desktop");
  contactNav.classList.add("desktop");
});

portfolioNav.addEventListener("click", function () {
  headline.style.display = "block";
  portfolioSection.style.display = "block";
  aboutSection.style.display = "block";
  contactSection.style.display = "block";
  logo.style.display = "flex";
  nav.style.flexDirection = "row";
  header.style.backgroundColor = "#fff";
  nav.style.display = "flex";
  nav.style.alignItems = "center";
  nav.style.marginTop = "0px";
  portfolioNav.classList.add("desktop");
  aboutNav.classList.add("desktop");
  contactNav.classList.add("desktop");
});

aboutNav.addEventListener("click", function () {
  headline.style.display = "block";
  portfolioSection.style.display = "block";
  aboutSection.style.display = "block";
  contactSection.style.display = "block";
  logo.style.display = "flex";
  nav.style.flexDirection = "row";
  header.style.backgroundColor = "#fff";
  nav.style.display = "flex";
  nav.style.alignItems = "center";
  nav.style.marginTop = "0px";
  portfolioNav.classList.add("desktop");
  aboutNav.classList.add("desktop");
  contactNav.classList.add("desktop");
});

contactNav.addEventListener("click", function () {
  headline.style.display = "block";
  portfolioSection.style.display = "block";
  aboutSection.style.display = "block";
  contactSection.style.display = "block";
  logo.style.display = "flex";
  nav.style.flexDirection = "row";
  header.style.backgroundColor = "#fff";
  nav.style.display = "flex";
  nav.style.alignItems = "center";
  nav.style.marginTop = "0px";
  portfolioNav.classList.add("desktop");
  aboutNav.classList.add("desktop");
  contactNav.classList.add("desktop");
});
