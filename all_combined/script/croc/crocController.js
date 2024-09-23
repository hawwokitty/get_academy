function rNG() {
    return Math.floor(Math.random() * model.data.croc.maxNum);
  }
  
  function crocAnswer(answer, r1, r2) {
    if (model.data.croc.currentTurn <= model.data.croc.turns) {
      if (answer === "<" && r1 < r2) {
        model.data.croc.score++;
      } else if (answer === ">" && r1 > r2) {
        model.data.croc.score++;
      } else if (answer === "=" && r1 == r2) {
        model.data.croc.score++;
      } else {
        model.data.croc.score--;
      }
      model.data.croc.currentTurn++;
      updateView();
    }
  }
  