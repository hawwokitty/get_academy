 //controller
 function chooseBoard(boardSize) {
    board = Number(boardSize); /* sets number of cells to "board" */
    pickAnswer();
    pickBoard = false; /* since we are no longer picking a board */
    makeBoard();
  }

  app.addEventListener("contextmenu", (e) => { 
    e.preventDefault(); /* prevents you from getting the "conext menu" when right clicking */
    rightClick(); /* runs the function to fill cells with X when right clicking */
  });

  function hoverCell(rightClickCell) {
    currentHoverCell = Number(rightClickCell); /* checks which cell you are hovering over to add in the right click function */
  }
  function rightClick() {
    if (!rightClickCellArray.includes(currentHoverCell)) {
      /* if the picked cell isnt already in the array, add it */
      rightClickCellArray.push(currentHoverCell);
    } else {
      /* if the picked cell IS in the array, delete it */
      let deleteCell = rightClickCellArray.indexOf(currentHoverCell);
      rightClickCellArray.splice(deleteCell, 1);
    }
    makeBoard();
  }

  function pickCell(input) {
    let pickedCell =
      Number(input); /* changes the input from string to number */
    if (!coloredCellArray.includes(pickedCell)) {
      /* if the picked cell isnt already in the array, add it */
      coloredCellArray.push(pickedCell);
    } else {
      /* if the picked cell IS in the array, delete it */
      let deleteCell = coloredCellArray.indexOf(pickedCell);
      coloredCellArray.splice(deleteCell, 1);
    }

    checkArray();
    makeBoard();
  }

  function checkArray() {
      if (
        !answerNonogram.cellArray.includes(
          Number(coloredCellArray.slice(-1))
        ) /* if the last cell you just clicked is not in the answer, lose a life (but this makes you lose a life if you click the right cell then remove it) */
      ) {
        lives--;
      }
      coloredCellArray.sort(function (a, b) {
        return a - b;
      }); /* sort the array in order to compare it to the answer */
      if (
        answerNonogram.cellArray.toString() === coloredCellArray.toString() /* compare current array with answer */
      ) {
        result = "Congrats! You got it!";
      }
    checkLives();
    makeBoard();
  }

  function checkLives() { /* checks if you lost */
    if (lives <= 0) {
      result = "Aww, you lost!";
    }
  }

  function pickAnswer() { /* picks a random board to be the answer */
  let randomNumber;
    if (board === 4) {
      randomNumber = Math.floor(
        Math.random() * listOfPossible3x3Nonograms.length
      );
    }
    if (board === 6) {
      randomNumber = Math.floor(
        Math.random() * listOfPossible5x5Nonograms.length
      );
    }
    
  if (board === 4) { /* runs when you have the 3x3 board */
    answerNonogram = listOfPossible3x3Nonograms[randomNumber]; /* picks out the answer nonogram to compare to */
  } else if (board === 6) {
    answerNonogram = listOfPossible5x5Nonograms[randomNumber];
  }
  }