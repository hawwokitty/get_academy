function buildView() {
  app.innerHTML = /*HTML*/ `
  <div class="build-container">
    <h2>Build your board</h2>
    <button onclick='setPage("searchView")'>Find cards</button>
    <div class="build-boardType">
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
    </div> <!--end of board type -->
    <div>Your ${model.input.build.race ?? "___"} board:</div>
    <div class="build-yourBoard">${getBoardHtml()}</div>
    <div class="build-buttons">
    <button onclick='saveToLocalStorage()'>Save cards to local storage</button>
    <button onclick='loadFromLocalStorage()'>Load cards from local storage</button>
    </div> <!--end of buttons -->
    <h3>Your favorite cards:</h3>
    <div class="build-yourFavorites">
    ${getFavCardsHtml() ?? "You don't have any favorite cards yet"}
    </div>
    </div> <!--end of container -->
    `;
}

function getFavCardsHtml() {
  let html = "";
  for (let minion of model.input.search.savedCards) {
    html += /*HTML*/ `
        <div class="build-cardInfo"> 
          <h3>${minion.name}</h3>
            <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
            <button onclick='addCardToBoard("${minion.cardId}")'>Add to board</button>
        </div>
        `;
  }
  return html;
}

function getBoardHtml() {
  // my code
  // let html = "";
  // let boardIndex;
  // if (model.input.build.race) {
  //   boardIndex = model.data.myBoards.boardsWithRace.findIndex(
  //     (board) => board.type === model.input.build.race
  //   );
  // } else {
  //   return "nothing yet";
  // }

  // for (let minion of model.data.myBoards.boardsWithRace[boardIndex].cards) {
  //   html += /*HTML*/ `
  //       <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
  //           <button onclick='removeCardToBoard("${minion.cardId}")'>Remove from board</button>
  //           </div>
  //       `;
  // }
  // return html;
  // bodins suggestion:

  if (!model.input.build.race) return "nothing yet";

  let raceIdx = model.data.myBoards.boardsWithRace.findIndex(
    (board) => board.type == model.input.build.race
  );

  let html = "";
  for (let minion of model.data.myBoards.boardsWithRace[raceIdx].cards) {
    html += /*HTML*/ `
      <div class="build-boardCardInfo">
        <img src="${minion.img}" onerror="imgMissing(this, '${minion.cardId}');">
        <div>
        <button onclick='moveCard(-1, "${minion.cardId}")'>&#8592;</button>
        <button onclick='removeCardToBoard("${minion.cardId}")'>Remove from board</button>
        <button onclick='moveCard(1, "${minion.cardId}")'>&#8594;</button>
        </div>
      </div>
          `;
  }
  return html;
}

