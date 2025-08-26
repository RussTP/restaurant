import foodImage from "./images/italian-food.jpg";

function loadHomePage () {
const content = document.querySelector("#content")
content.innerHTML = "";

const banner = document.createElement("div");
banner.id ="banner-container";

const textContainer = document.createElement("div");
textContainer.id = "text-container";
textContainer.innerHTML = `
<h2>Moon over Moza</h2>
<p>We specialize in Italian cuisine, everything prepped and made from scratch.</p> 
<br>
<p>Try our famous italian style pizza, 
inhouse cheese made from scratch Fior di Latte, provolone, parmesan and more.</p>
<button>Order</button>`;

const foodAsImage = document.createElement("img");
foodAsImage.src = foodImage;
foodAsImage.alt = "Italian food assortment";
foodAsImage.id = "food-image";



const foodBanner = document.createElement("div");
foodBanner.id = "food-banner";
foodBanner.appendChild(foodAsImage);

banner.appendChild(textContainer);
banner.appendChild(foodBanner);
content.appendChild(banner);


}

export default loadHomePage;