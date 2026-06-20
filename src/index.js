// src/index.js
import "./styles.css";
import { createHomepage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createStoryPage } from "./story.js";

const homeButton = document.getElementById("home")
const menuButton = document.getElementById("menu");
const storyButton = document.getElementById("story");

homeButton.addEventListener("click", createHomepage);
menuButton.addEventListener("click", createMenuPage);
storyButton.addEventListener("click", createStoryPage);



createHomepage();
// createMenuPage();
// createStoryPage();


