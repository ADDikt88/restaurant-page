import pizzaImage from "./pizza.jpg";

function menuContent () {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.setAttribute("class", "menu-title");
    title.textContent = "Today's Specials";

    const featureImage = document.createElement("img");
    featureImage.src = pizzaImage;
    featureImage.alt = "Image of a pepperoni pizza";
    featureImage.style.height = "200px";

    const todaysSpecialDescription = document.createElement("p");
    todaysSpecialDescription.setAttribute ("class", "special-description");
    todaysSpecialDescription.innerHTML = "Today's special is a large pepperoni pizza with extra cheese, <br/>" +
                                    "extra saussage, and extra bacon bits! (No vegetables allowed!)";



    content.appendChild(title);
    content.appendChild(featureImage);
    content.appendChild(todaysSpecialDescription);

}

export { menuContent };