const gamesAttach = document.querySelector(".games");
const featGamesAttach = document.querySelector(".featured-games");

let username = "ck_d5d0c839717d9bd6f072b24e57bb96852d353e57";
let password = "cs_cb7c839611d329268b2eb69a504b3a73a1047e0a";
const url = "https://www.linn-ca.com/wp-json/wc/v3/products";
fetch(url, {
  method: "GET",
  headers: new Headers({
    Authorization: "Basic " + btoa(username + ":" + password),
  }),
})
  .then((response) => response.json())
  .then((data) => {
    var nonFeatured = data.filter((item) => item.featured == false);
    listGames(nonFeatured);
    var FeaturedGames = data.filter((item) => item.featured == true);
    listFeatured(FeaturedGames);
  })
  .catch((error) => console.error(error));

const listGames = (games) => {
  games.forEach((allGames) => {
    const card = document.createElement("div");
    card.classList.add("games-card");
    card.innerHTML = `
        <div class="game">
          <a href="./details.html?id=${allGames.id}">
            <img src="${allGames.images[0].src}"  alt="">
          </a>
        </div>`;
    gamesAttach.appendChild(card);
  });
};

const listFeatured = (featuredGames) => {
  featuredGames.forEach((gamesFeatured) => {
    const featCard = document.createElement("div");
    featCard.classList.add("feat-games-card");
    featCard.innerHTML = `
        <div class="game">
          <a href="./details.html?id=${gamesFeatured.id}">
            <img src="${gamesFeatured.images[0].src}"  alt="">
          </a>
        </div>`;
    featGamesAttach.appendChild(featCard);
  });
};
