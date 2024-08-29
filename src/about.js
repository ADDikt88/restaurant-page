import chefImage from "./addikt8_400.jpg";

function aboutContent () {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.setAttribute("class", "contact-title");
    title.textContent = "Contact Us";

    const featureImage = document.createElement("img");
    featureImage.src = chefImage;
    featureImage.alt = "Image of the chef";
    featureImage.style.height = "200px";

    const contactInformation = document.createElement("p");
    contactInformation.setAttribute ("class", "special-description");
    contactInformation.innerHTML = "Feel free to contact our chef for any inquries. <br/> E-mail: addikt8gaming@gmail.com";



    content.appendChild(title);
    content.appendChild(featureImage);
    content.appendChild(contactInformation);

}

export { aboutContent };