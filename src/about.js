export function loadAboutPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.id="about-container";

    const aboutCard = document.createElement("div");
    aboutCard.id ="about-card";
    aboutCard.innerHTML = `
    <h1>About us</h1>
    <div id="about-text">
    <p>At Moon Over Moza (or whatever name you’re going with), we bring the warmth
     and tradition of Italy to your table. Our kitchen is built on a passion for authenticity
    every dish is crafted with care, using time-honored recipes and fresh ingredients. 
    What truly sets us apart is our cheese, made from scratch in-house,
     from creamy mozzarella to rich ricotta, adding unmatched flavor and freshness 
     to every bite.</p>
     <br>
    <p>From classic pasta and wood-fired pizza to rustic specialties inspired by the heart of Italy,
     each meal is prepared as if it were for family. Whether you’re here for a comforting plate of 
     lasagna, a delicate bruschetta, or our signature handmade creations, you’ll experience a taste
      of Italy that feels both genuine and unforgettable.</p></div>
    `;


    /*const aboutInfo = document.createElement("div")
    aboutInfo.id ="about-info";
    aboutInfo.innerHTML = `
    <h1>About us</h1>
    <p>We’re all about bringing a taste of Italy to your table.
     Our cheese is made fresh from scratch, and every dish is crafted with 
     real ingredients and authentic recipes. 
     From rich pastas to crispy pizzas, we serve up Italian 
     comfort food the way it’s meant to be enjoyed.</p>
    `;
*/
content.appendChild(aboutContainer);
aboutContainer.appendChild(aboutCard);

}
