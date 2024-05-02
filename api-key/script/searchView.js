function searchView() {
  app.innerHTML = /*HTML*/ `
  <div class="search-Container">
    <div class="search-searchBar">Search: 
    <input type='text' onchange="setSearchText(this.value)" value="${
      model.input.search.searchText
    }" placeholder="enter card youre looking for here">
    <label class="search-pickRace" for="race">Choose a race:</label>
  <select name="race" id="race" onchange="setSearchRace(this.value)" value="${
    model.input.search.filter.race
  }">
    ${getMinionRaceHtml()}
  </select>
    </div> <!-- end of search bar -->
    <div class="search-buttons">
    <button onclick='searchCards()'>Find cards</button>
    <button onclick='setPage("buildView")'>Go to build</button>
    </div>
    <h2>${model.input.search.filter.race ?? "All cards"}:</h2>
    <div class="search-allCards">
    ${getMinionCardsHtml()}
    </div> <!-- end of all cards -->
    </div> <!-- end of container -->
    `;
}

function getMinionRaceHtml() {
  let html = /*HTML*/ `
    <option value="Every">Every card</option>
    `;
  for (let race of model.data.api.races) {
    html += /*HTML*/ `
        <option value="${race}">${race}</option>
        `;
  }
  return html;
}

function getMinionCardsHtml() {
  let html = "";
  for (let minion of model.data.api.minions) {
    if (
      model.input.search.filter.race != "Every" ||
      model.input.search.searchText != ""
    ) {
      let minionString = JSON.stringify(minion);
      if (
        minionString.includes(model.input.search.searchText) &&
        (minion.race === model.input.search.filter.race ||
          model.input.search.filter.race === "Every")
      ) {
        if (!minion.hasOwnProperty("imgGold")) {
          html += /*HTML*/ `
                <div class="search-cardInfo"> 
                <h3>${minion.name}</h3>
                <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
                <button onclick='addToFav("${minion.cardId}")'>Add to favorites &#11088;</button>
                </div> <!-- end of card info -->
                `;
        }
      }
    } else {
      if (!minion.hasOwnProperty("imgGold")) {
        html += /*HTML*/ `
        <div class="search-cardInfo"> 
        <h3>${minion.name}</h3>
        <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
        <button onclick='addToFav("${minion.cardId}")'>Add to favorites &#11088;</button>
        </div> <!-- end of card info -->
            `;
      }
    }
  }
  return html;
}

function imgMissing(image, minionId) {
  let replacementDiv = document.createElement("div");
  replacementDiv.innerHTML = getMinionInfo(minionId);
  image.replaceWith(replacementDiv);
}

function getMinionInfo(minionId) {
  let html = "";
  // if (model.data.api.minionsWithoutImg.includes(minionId)) {
  let minion = model.data.api.minions.find(
    (minion) => minion.cardId === minionId
  );
  // console.log(minion);
  html = /*HTML*/ `
    <div>Image is unavailable for this card, so here is the
    information in text form:
    <p>Race: ${minion.race}</p>
    <p>Attack: ${minion.attack}</p>
    <p>Health: ${minion.health}</p>
    <p>Description: ${minion.text}</p>
    </div>
    `;
  // }
  return html;
}

function addToFav(minionId) {
  let minion = model.data.api.minions.find(
    (minion) => minion.cardId === minionId
  );
  let savedCardsString = JSON.stringify(model.input.search.savedCards);
  if (!savedCardsString.includes(minionId))
    model.input.search.savedCards.push(minion);
}
