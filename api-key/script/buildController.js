function pickBoardType(race) {
  model.input.build.race = race;
  updateView();
}

function saveToLocalStorage() {
  localStorage.setItem(
    "mySavedCards",
    JSON.stringify(model.input.search.savedCards)
  );
  localStorage.setItem(
    "myBoards",
    JSON.stringify(model.data.myBoards.boardsWithRace)
  );
  console.log("saved");
}

function loadFromLocalStorage() {
  model.input.search.savedCards = JSON.parse(
    localStorage.getItem("mySavedCards")
  );
  model.data.myBoards.boardsWithRace = JSON.parse(
    localStorage.getItem("myBoards")
  );
  updateView();
}

function addCardToBoard(minionId) {
  let raceIdx = model.data.myBoards.boardsWithRace.findIndex(
    (board) => board.type == model.input.build.race
  );
  if (model.data.myBoards.boardsWithRace[raceIdx].cards.length < 7) {
    let minion = model.data.api.minions.find(
      (minion) => minion.cardId === minionId
    );
    model.data.myBoards.boardsWithRace[raceIdx].cards.push(minion);
  } else {
    alert('You dont have enough space!');
  }
  updateView();
}

function removeCardToBoard(minionId) {
  let raceIdx = model.data.myBoards.boardsWithRace.findIndex(
    (board) => board.type == model.input.build.race
  );
  let minionIndex = model.data.myBoards.boardsWithRace[raceIdx].cards.findIndex(
    (minion) => minion.cardId === minionId
  );
  model.data.myBoards.boardsWithRace[raceIdx].cards.splice(minionIndex, 1);
  updateView();
}

function moveCard(towards, minionId) {
  let raceIdx = model.data.myBoards.boardsWithRace.findIndex(
    (board) => board.type == model.input.build.race
  );
  let minion = model.data.myBoards.boardsWithRace[raceIdx].cards.find(
    (minion) => minion.cardId === minionId
  );
  let minionIndex = model.data.myBoards.boardsWithRace[raceIdx].cards.findIndex(
    (minion) => minion.cardId === minionId
  );
  if (
    minionIndex !== 0 &&
    minionIndex !== model.data.myBoards.boardsWithRace[raceIdx].cards.length - 1
  ) {
    // Remove minion from its current position
    model.data.myBoards.boardsWithRace[raceIdx].cards.splice(minionIndex, 1);
    // Insert minion at the next position
    model.data.myBoards.boardsWithRace[raceIdx].cards.splice(
      minionIndex + towards,
      0,
      minion
    );
  } else if (minionIndex === 0 && towards === 1) {
    // Remove minion from its current position
    model.data.myBoards.boardsWithRace[raceIdx].cards.splice(minionIndex, 1);
    // Insert minion at the next position
    model.data.myBoards.boardsWithRace[raceIdx].cards.splice(
      minionIndex + towards,
      0,
      minion
    );
  } else if (minionIndex === model.data.myBoards.boardsWithRace[raceIdx].cards.length - 1 && towards === -1) {
     // Remove minion from its current position
     model.data.myBoards.boardsWithRace[raceIdx].cards.splice(minionIndex, 1);
     // Insert minion at the next position
     model.data.myBoards.boardsWithRace[raceIdx].cards.splice(
       minionIndex + towards,
       0,
       minion
     );
  }
  updateView();
}
