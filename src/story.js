import "./story.css";
import storyRamenImage from "./images/story-ramen.jpg";


export function createStoryPage(){
    const contentContainer = document.getElementById("content");
    const storyPageContainer = document.createElement ("div");
    storyPageContainer.classList.add("our-story");

    const storyContainer = document.createElement("div");
    storyContainer.classList.add("story-container");

    const storyHeader = document.createElement("h1");
    storyHeader.textContent = "Our Story";

    const storyText = document.createElement("p");
    storyText.textContent = "We have been bringing this area our family's Ramen recipe to share the flavour and our love for ramen. We were founded a long time ago and have been making ramen for a long time. We want to keep making ramen for a long time.";
    storyText.classList.add("story-text");

    const storyTextContinued = document.createElement("p");
    storyTextContinued.textContent = "More to the story we are hoping to open more ramen restaurants to spread our good food and make people happy and full.";
    storyTextContinued.classList.add("story-text2");

    storyContainer.appendChild(storyHeader);
    storyContainer.appendChild(storyText);
    storyContainer.appendChild(storyTextContinued);
    storyPageContainer.appendChild(storyContainer);
    
    const storyImage = document.createElement("img");
    storyImage.src = storyRamenImage;
    storyImage.alt = "Image of ramen dish";
    
    storyPageContainer.appendChild(storyImage);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactName = document.createElement("p");
    contactName.textContent = "Ramen Restaurant";
    contactName.classList.add("name");

    const contactLocation = document.createElement("p");
    contactLocation.textContent = "Address: 123 Fake St., Some City";
    contactLocation.classList.add("address");

    const contactHours = document.createElement("p");
    contactHours.textContent = "Hours: 12pm - 8pm Daily";
    contactHours.classList.add("hours");

    const contactPhone = document.createElement("p");
    contactPhone.textContent = "Phone: (999)-888-7777";
    contactPhone.classList.add("phone");
    const contactEmail = document.createElement("p");
    contactEmail.textContent = "Email: info_fake@email.com";
    contactEmail.classList.add("email");

    contactContainer.appendChild(contactName);
    contactContainer.appendChild(contactHours);
    contactContainer.appendChild(contactLocation);
    contactContainer.appendChild(contactPhone);
    contactContainer.appendChild(contactEmail);
    storyPageContainer.appendChild(contactContainer);


    contentContainer.appendChild(storyPageContainer);


}

/*  <div class="our-story">
            
            <div class="contact-container">
                <p class="name">Ramen Restaurant</p>
                <p class="location">Address: 123 Fake St., Some City</p>
                <p class="hours">Hours: 12pm - 8pm Daily</p>
                <p class="phone">Phone: (999)-888-7777</p>
                <p class="email">Email: info.fake@email.com</p>
            </div>
        </div> */