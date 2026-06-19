import porkOriginalImage from "./images/pork-ramen.jpg";
import chickenOriginalImage from "./images/chicken-ramen.jpg";
import porkSpicyImage from "./images/spicy-ramen.jpg";


export function createMenuPage(){
    const contentContainer = document.getElementById("content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent="Ramen";

    const menuEveryday = document.createElement("p");
    menuEveryday.classList.add("everyday");
    menuEveryday.textContent = "Open Everyday 12pm-8pm";

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuEveryday);

    const ramenContainer = document.createElement("div");
    ramenContainer.classList.add("ramen-container");

    const porkOriginal = createRamenDish("Pork Original", 
    "Thin sliced pork, half egg, bean sprouts, and green onions. Served in our original broth.",
    "17.59",porkOriginalImage ,"Picture of Original Pork Ramen");
    const chickenOriginal = createRamenDish("Chicken Original",
        "Chicken, egg, vegetables, and green onions. Served in our original broth.",
        "16.99", chickenOriginalImage, "Picture of Original Chicken Ramen"
    );
    const porkSpicy = createRamenDish("Pork Spicy",
        "Thin sliced pork, half egg, mushrooms, and green onions. Served in our spicy broth.",
        "17.59", porkSpicyImage, "Picture of Spicy Pork Ramen");

    ramenContainer.appendChild(porkOriginal);
    ramenContainer.appendChild(chickenOriginal);
    ramenContainer.appendChild(porkSpicy);
    menuContainer.appendChild(ramenContainer);
        console.log(menuContainer);


    contentContainer.appendChild(menuContainer);

}
function createRamenDish(dishName, dishDescription, dishPrice, dishImage, dishImageAlt){
    const ramenDish = document.createElement("div");
    ramenDish.classList.add("ramen");

    const ramenImage = document.createElement("img");
    ramenImage.src = dishImage;
    ramenImage.alt = dishImageAlt;

    const ramenNameText = document.createElement("h3");
    ramenNameText.textContent = dishName;

    const descriptionText = document.createElement("p");
    descriptionText.classList.add("description");
    descriptionText.textContent = dishDescription;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `$${dishPrice}`;

    ramenDish.appendChild(ramenImage);
    ramenDish.appendChild(ramenNameText);
    ramenDish.appendChild(descriptionText);
    ramenDish.appendChild(priceText);

    const buyButton = document.createElement("button");
    buyButton.ariaLabel = "Add ramen to shopping cart";
    const buyIcon = document.createElement("i");
    buyIcon.classList.add("fa-solid", "fa-basket-shopping");

    buyButton.appendChild(buyIcon);
    ramenDish.appendChild(buyButton);

    return ramenDish;
}
