function commonView() {
    app.innerHTML = /*HTML*/ `
    <div class="welcomeContainer">
    <h2>Welcome</h2>
    <p>Description of how the game works here!</p>
    <button onclick='startGame()'>Start</button>
    </div>
    `;
}

function mainView() {
    app.innerHTML = /*HTML*/ `
    <div>hent tamagotchi</div>
    <div class="commonTimer">timer</div>
    <div class="commonContainer">box with each question here</div>
    <div clas="commonQButtons">
    <button onclick='switchQuestion(-1)'>Previous</button>
    <button onclick='hint()'>Hint</button>
    <button onclick='switchQuestion(1)'>Next</button>
    <div class="commonPageNum">page number</div>
    </div>
    `;
}