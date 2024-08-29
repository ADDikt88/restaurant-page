import pizzaImage from "./pizza.jpg";

function homeContent () {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.setAttribute("class", "restaurant-title");
    title.textContent = "Snowy's Restaurant";
    
    const featureImage = document.createElement("img");
    featureImage.src = pizzaImage;
    featureImage.alt = "Image of a pepperoni pizza";
    featureImage.style.height = "200px";
    
    const restaurantDescription = document.createElement("p");
    restaurantDescription.setAttribute ("class", "restaurant-description");
    restaurantDescription.innerHTML = "Welcome to the ultimate dining experience featuring the latest culinary <br/>" +
                                      "techniques from our head chef Snowy GG.";
    
    
    
    content.appendChild(title);
    content.appendChild(featureImage);
    content.appendChild(restaurantDescription);
}

export { homeContent };