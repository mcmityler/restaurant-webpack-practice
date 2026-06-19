import homepageRamen from "./homepage-ramen.jpg";
import "./home.css";

export function createHomepage(){
    const contentContainer = document.getElementById("content");
    //homepage container to easily style 
    const homepageContainer = document.createElement("div");
    homepageContainer.classList.add("homepage");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Ramen Restaurant";

    const homepageImage = document.createElement("img");
    homepageImage.src = homepageRamen;

    const homepageTagline = document.createElement("p");
    homepageTagline.textContent = "Come enjoy a bowl of ramen with us."
    
    homepageContainer.appendChild(restaurantName);
    homepageContainer.appendChild(homepageImage);
    homepageContainer.appendChild(homepageTagline);

    contentContainer.appendChild(homepageContainer);
}