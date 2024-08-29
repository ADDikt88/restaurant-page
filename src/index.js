// index.js
import "./styles.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js"
import { aboutContent } from "./about.js"
//import { greeting } from "./greeting.js"
//import odinImage from "./odin.jpg";

console.log("Loading Restaurant Page");

homeContent();
const homeTab = document.querySelector(".home");

homeTab.addEventListener ('click', (e) => {
    const currentTab = document.querySelector("#content");
    currentTab.innerHTML = "";
    homeContent();
});


const menuTab = document.querySelector(".menu");

menuTab.addEventListener ('click', (e) => {
    const currentTab = document.querySelector("#content");
    currentTab.innerHTML = "";
    menuContent();
});

const aboutTab = document.querySelector(".about");

aboutTab.addEventListener ('click', (e) => {
    const currentTab = document.querySelector("#content");
    currentTab.innerHTML = "";
    aboutContent();
});
