const main = document.querySelector('main')
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

let username = "ck_d5d0c839717d9bd6f072b24e57bb96852d353e57";
let password = "cs_cb7c839611d329268b2eb69a504b3a73a1047e0a";
const url = `https://www.linn-ca.com/wp-json/wc/v3/products/${id}`;
fetch(url, {
  method: "GET",
  headers: new Headers({
    Authorization: "Basic " + btoa(username + ":" + password),
  }),
})
  .then((response) => response.json())
  .then((data) => {
    listDetails(data);
  })
  .catch((error) => console.error(error));

  const listDetails = (gameDetail) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="game-details"> 
          <h1>Name: ${gameDetail.name}</h1>
          <div class="game-img-details"> 
            <img src="${gameDetail.images[0].src}"  alt="${gameDetail.name}">
          </div>
          <div class="game-description"> 
           <p>Description: ${gameDetail.short_description}</p>
          </div>
          <div class="game-price"> 
          <h3> Price: ${gameDetail.price}$</h3>
          </div>
        </div>`;
    main.appendChild(card);
    document.title = gameDetail.name;
};
