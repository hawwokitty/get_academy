function commonView() {
  app.innerHTML = /*HTML*/ `
    <div>hent tamagotchi</div>
    <div class="commonTimer">timer</div>
    <div class="commonContainer">
    <div class="commonGame">${showGame()}</div>
    <div clas="commonQButtons">
    <button class="commonSwitchButton" onclick='switchQuestion(-1)'>Previous</button>
    <button class="commonHintButton" onclick='hint()'>Hint</button>
    <button class="commonSwitchButton" onclick='switchQuestion(1)'>Next</button>
    <div class="commonPageNum">page number</div>
    </div>
    </div>
    `;
}

function mainView() {
  app.innerHTML = /*HTML*/ `
    <div class="welcomeContainer">
    <h2>Welcome</h2>
    <p>Description of how the game works here!</p>
    <button onclick='startGame()'>Start</button>
    </div>
    `;
}

function showGame() {
  if (model.app.main.page === 0) {
    return adjektivfortellingView();
  } else if (model.app.main.page === 1) {
    return crocView();
  } else if (model.app.main.page === 2) {
    return emailView();
  } else if (model.app.main.page === 3) {
    return magic8ballView();
  } else if (model.app.main.page === 4) {
    return marioView();
  } else if (model.app.main.page === 5) {
    return nonogramView();
  }
}
