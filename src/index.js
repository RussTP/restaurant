import "./styles.css";
import loadHomePage from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";



loadHomePage();

document.querySelector("#home").addEventListener("click", loadHomePage);
document.querySelector("#menu").addEventListener("click", loadMenuPage);
document.querySelector("#about").addEventListener("click", loadAboutPage);
const details = document.querySelector("details");

document.querySelector("#home-nav").addEventListener("click", () => {
    loadHomePage();
    details.removeAttribute("open");
});

document.querySelector("#menu-nav").addEventListener("click", () => {
    loadMenuPage();
    details.removeAttribute("open");
});
document.querySelector("#about-nav").addEventListener("click", () => {
    loadAboutPage();
    details.removeAttribute("open");
});

