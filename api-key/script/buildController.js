function pickBoardType(race) {
    model.input.build.race = race;
    updateView();
}

function saveToLocalStorage() {
    localStorage.setItem("mySavedCards", JSON.stringify(model.input.search.savedCards));
    localStorage.setItem("myBoards", JSON.stringify(model.data.myBoards.boardsWithRace));
    console.log('saved');
  }
  
  function loadFromLocalStorage() {
    model.input.search.savedCards = JSON.parse(localStorage.getItem("mySavedCards"));
    updateView();
  }

  function addCardToBoard(minionId) {
    let race = model.input.build.race;
    let board = model.data.myBoards.boardsWithRace.find(
      (board) => board.type == race
    );
    let i = model.data.myBoards.boardsWithRace.indexOf(board);
    let minion = model.data.api.minions.find(
        (minion) => minion.cardId === minionId
      );
    model.data.myBoards.boardsWithRace[i].cards.push(minion);
    updateView();
  }