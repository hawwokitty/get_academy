function buildView() {
  app.innerHTML = /*HTML*/ `
    <div>Build your board</div>
    <button onclick='setPage("searchView")'>Find cards</button>
    <div>
    Pick a race you want to build for:
    <button onclick='pickBoardType(this.innerHTML)'>Demon</button>
    <button onclick='pickBoardType(this.innerHTML)'>Mech</button>
    <button onclick='pickBoardType(this.innerHTML)'>Dragon</button>
    <button onclick='pickBoardType(this.innerHTML)'>Beast</button>
    <button onclick='pickBoardType(this.innerHTML)'>Elemental</button>
    <button onclick='pickBoardType(this.innerHTML)'>Quailboar</button>
    <button onclick='pickBoardType(this.innerHTML)'>Undead</button>
    <button onclick='pickBoardType(this.innerHTML)'>Naga</button>
    <button onclick='pickBoardType(this.innerHTML)'>Murloc</button>
    <button onclick='pickBoardType(this.innerHTML)'>Pirate</button>
    <button onclick='pickBoardType(this.innerHTML)'>Mixed</button>
    </div>
    <div>Your ${model.input.build.race ?? "___"} board:</div>
    <div>${getBoardHtml()}</div>
    <button onclick='saveToLocalStorage()'>Save cards to local storage</button>
    <button onclick='loadFromLocalStorage()'>Load cards from local storage</button>
    <div>Your favorite cards:</div>
    <div>
    ${getFavCardsHtml() ?? "You don't have any favorite cards yet"}
    </div>
    `;
}

function getFavCardsHtml() {
  let html = "";
  for (let minion of model.input.search.savedCards) {
    html += /*HTML*/ `
        <div> <h3>${minion.name}</h3>
                <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
                <button onclick='addCardToBoard("${minion.cardId}")'>Add to board</button>
                </div>
        `;
  }
  return html;
}

function getBoardHtml() {
  let html = "";
  if (model.input.build.race) {
      var board = model.data.myBoards.boardsWithRace.find(
        (board) => board.type == model.input.build.race
      );
  } else {
    return html = "nothing yet";
  }
  let i = model.data.myBoards.boardsWithRace.indexOf(board);
  for (let minion of model.data.myBoards.boardsWithRace[i].cards) {
    html += /*HTML*/ `
        <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
            <button onclick='removeCardToBoard("${minion.cardId}")'>Remove from board</button>
            </div>
        `;
  }
  return html;
}
