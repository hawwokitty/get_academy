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
                <img src="${minion.img}" onerror="imageError('${minion.name}')">
                ${getMinionInfo(minion.cardId) ?? ""}
                </div>
                `;
        }
      }
    } else {
      if (!minion.hasOwnProperty("imgGold")) {
        html += /*HTML*/ `
            <div> <h3>${minion.name}</h3>
            <img src="${minion.img}" onerror="imageError('${minion.cardId}')">
            ${getMinionInfo(minion.cardId) ?? ""}
            </div>
            `;
      }
    }
  }
  return html;
}



function getMinionInfo(minionId) {
  let html = "";
  if (model.data.api.minionsWithoutImg.includes(minionId)) {
    let minion = model.data.api.minions.find(
      (minion) => minion.cardId === minionId
    );
    html = /*HTML*/ `
    <div>Image is unavailable for this card, so here is the
    information in text form:
    Attack: ${minion.attack}
    Health: ${minion.health}
    Description: ${minion.text}
    </div>
    `;
  }
  
  return html;
}
