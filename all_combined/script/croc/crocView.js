function crocView() {
  let randomNum1 = rNG();
  let randomNum2 = rNG();
  html = "";
  html = /*HTML*/ `
    <div class="crocMain">
    <h3>Points: <span id="poeng">${model.data.croc.score}</span></h3>
    <div id="randomNumber1">${randomNum1}</div>
    <div>
    <button onclick='crocAnswer(">", ${randomNum1}, ${randomNum2})'>></button>
    <button onclick='crocAnswer("<", ${randomNum1}, ${randomNum2})'><</button>
    <button onclick='crocAnswer("=", ${randomNum1}, ${randomNum2})'>=</button>
    </div>
    <div id="randomNumber2">${randomNum2}</div>
    <div>question ${model.data.croc.currentTurn}/${model.data.croc.turns}</div>
      </div>
    
      
  `;
  return html;
}

