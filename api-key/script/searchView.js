function searchView() {
  app.innerHTML = /*HTML*/ `
    <div>Search: 
    <input type='text' onchange="setSearchText(this.value)" value="${
      model.input.search.searchText
    }" placeholder="enter card youre looking for here">
    <label for="race">Choose a race:</label>
  <select name="race" id="race" onchange="setSearchRace(this.value)" value="${
    model.input.search.filter.race
  }">
    ${getMinionRaceHtml()}
  </select>
    </div>
    <button onclick='searchCards()'>Find cards</button>
    <button onclick='setPage("buildView")'>Go to build</button>
    <div>${model.input.search.filter.race}:
    ${getMinionCardsHtml()}
    </div>
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
      model.input.search.filter.race != null ||
      model.input.search.searchText != ""
    ) {
      let minionString = JSON.stringify(minion);
      if (
        minionString.includes(model.input.search.searchText) &&
        (minion.race === model.input.search.filter.race ||
          model.input.search.filter.race === null)
      ) {
        if (!minion.hasOwnProperty("imgGold")) {
          html += /*HTML*/ `
                <div> <h3>${minion.name}</h3>
                <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
                </div>
                <button onclick='addToFav("${minion.cardId}")'>Add to favorites &#11088;</button>
                `;
        }
      }
    } else {
      if (!minion.hasOwnProperty("imgGold")) {
        html += /*HTML*/ `
            <div> <h3>${minion.name}</h3>
            <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
            </div>
            <button onclick='addToFav("${minion.cardId}")'>Add to favorites &#11088;</button>
            `;
      }
    }
  }
  return html;
}

function imgMissing(image, minionId) {
  image.onerror = "";
  image.alt = getMinionInfo(minionId);
  return true;
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
    Attack: ${minion.attack}
    Health: ${minion.health}
    Description: ${minion.text}
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
  if (!savedCardsString.includes(minionId)) model.input.search.savedCards.push(minion);
}