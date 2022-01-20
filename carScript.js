import Car from "./car.js";

const ModelS = new Car(
    //brand, name, price, color, seatNum
    "Tesla",
    "Model S Plaid",
    129990,
    "Red",
    5
);

const content = `
<main>
<article>
  <h1>${ModelS.name}</h1>
  <ul>
    <li>Brand: ${ModelS.brand}</li>
    <li>Price: $${ModelS.price}</li>
    <li>Color: ${ModelS.color}</li>
    <li>Seat Number: ${ModelS.seatNum}</li>
  </ul>
</article>
</main>
`;

document.body.innerHTML = content;