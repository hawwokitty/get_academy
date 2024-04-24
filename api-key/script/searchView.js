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
// function getMinionStarsHtml() {
//     let html = "";
//     for (let star of model.data.api.stars) {
//         html += /*HTML*/ `
//         <option value="${star}">${star}</option>
//         `;
//     }
//     return html;
// }

function getMinionCardsHtml() {
  let html = "";
  for (let minion of model.data.api.minions) {
    if (model.input.search.filter.race != null) {
        if (minion.race === model.input.search.filter.race) {
            if (!minion.hasOwnProperty("imgGold")) {
                html += /*HTML*/ `
                <div> ${minion.name}
                <img src="${minion.img}">
                </div>
                `;
            }
        }
    } else {
        if (!minion.hasOwnProperty("imgGold")) {
            html += /*HTML*/ `
            <div> ${minion.name}
            <img src="${minion.img}">
            </div>
            `;
        }

    }
  }
  return html;
}
