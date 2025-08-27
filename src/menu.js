
import pizza from "./images/pizza.jpg"
import panini from "./images/panini.jpg"
import carbona from "./images/carbona.jpg";
import lasagna from "./images/lasagna.jpg";
import bruschetta from "./images/bruschetta.jpg";
import aranacini from "./images/aranacini.jpg";
 

export function loadMenuPage () {

    const content = document.querySelector("#content")
    content.innerHTML = "";

    const menu = document.createElement("div");
    menu.id = "menu-items";
    menu.innerHTML = "<h1>Menu Items</h1>";

    const cardContainer = document.createElement("div");
    cardContainer.id = "card-container";

 




    function createCard(id, src, alt, overlayText) {

        const wrapper = document.createElement("div")
        wrapper.className = "card-wrapper";
        

        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.className = "card";
        img.id = id;
    
        const overlay = document.createElement("div");
        overlay.className = "text-overlay";
        overlay.innerHTML = `<p>${overlayText}</p>`

        wrapper.appendChild(img);
        wrapper.appendChild(overlay);

        wrapper.addEventListener("click", (event) => {
        event.stopPropagation();


        const isActive = overlay.classList.contains("active");
      
         document.querySelectorAll(".card-wrapper").forEach((card) => {
         card.classList.remove("selected");
         card.querySelector(".text-overlay").classList.remove("active");
         card.querySelector("img").style.maxWidth = "";
      });

      if (!isActive) {
         wrapper.classList.add("selected")
         overlay.classList.add("active")       
         document.body.classList.remove("no-hover")
     } else {
      document.body.classList.remove("no-hover")
     }
  });
        document.addEventListener("click", (event) => {
         if(!wrapper.contains(event.target)) {
            wrapper.classList.remove("selected");
            overlay.classList.remove("active");
            document.body.classList.remove("no-hover");
         }
    });

    return wrapper;
 }

    content.appendChild(menu);
    menu.appendChild(cardContainer);
    const pizzaCard = createCard("pizza-card", pizza, "pizza image",  "$20 -- Our famous stone oven baked, authentic Italian style pizza, fresh ingredients, and cheese made from scratch.");
    cardContainer.appendChild(pizzaCard);
    cardContainer.appendChild(createCard("panini-card", panini, "panini image", "$12 -- Grilled Panini, fresh mozzarella cheese, tomatoes, prosciutto, and ham held together in a ciabatta"));
    cardContainer.appendChild(createCard("carbona-card", carbona, "carbona image", "$14 -- Authentic Carbona, made with fresh pasta, bacon, guanciale, and pecorino"));
    cardContainer.appendChild(createCard("lasagna-card", lasagna, "lasagna image", "$16 -- Home-made style lasagna with lasagne sheets made from scratch, inhouse tomatoe sauce, mozzarella and parmesan cheese"));
    cardContainer.appendChild(createCard("bruschetta-card", bruschetta, "bruschetta image", "$8 -- Bruschetta appetizer, grilled with olive oil, tomatoes, and raw garlic"));
    cardContainer.appendChild(createCard("aranacini-card", aranacini, "aranacini image", "$12 -- Aranacini made with Arborio rice, ragu, peas and mozzarella cheese"));
    
}


