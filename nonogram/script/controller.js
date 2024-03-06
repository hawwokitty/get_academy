 //controller
 function chooseBoard(boardSize) {
    board = Number(boardSize); /* sets number of cells to "board" */
    rNG();
    console.log(randomNonogram);
    console.log(board);
    pickBoard = false;
    makeBoard();
  }

  // let grid = document.getElementById("grid");
  app.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    rightClick();
    onmouseover;
  });

  function hoverCell(rightClickCell) {
    currentHoverCell = Number(rightClickCell);
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
    console.log(rightClickCellArray);
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

    console.log(coloredCellArray);
    checkArray();
    makeBoard();
  }

  function checkArray() {
    if (board == 4) {
      let answerNonogram = listOfPossible3x3Nonograms[randomNonogram];
      if (
        !answerNonogram.cellArray.includes(
          Number(coloredCellArray.slice(-1))
        )
      ) {
        lives--;
      }
      coloredCellArray.sort(function (a, b) {
        return a - b;
      });
      if (
        answerNonogram.cellArray.toString() == coloredCellArray.toString()
      ) {
        result = "Congrats! You got it!";
      }
    }
    if (board == 6) {
      let answerNonogram = listOfPossible5x5Nonograms[randomNonogram];
      if (
        !answerNonogram.cellArray.includes(
          Number(coloredCellArray.slice(-1))
        )
      ) {
        lives--;
      }
      coloredCellArray.sort(function (a, b) {
        return a - b;
      });
      if (
        answerNonogram.cellArray.toString() == coloredCellArray.toString()
      ) {
        result = "Congrats! You got it!";
      }
    }
    checkLives();
    makeBoard();
  }
  function checkLives() {
    if (lives <= 0) {
      result = "Aww, you lost!";
    }
  }

  function rNG() {
    if (board == 4) {
      randomNonogram = Math.floor(
        Math.random() * listOfPossible3x3Nonograms.length
      );
    }
    if (board == 6) {
      randomNonogram = Math.floor(
        Math.random() * listOfPossible5x5Nonograms.length
      );
    }
  }