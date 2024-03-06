//view
makeBoard();
function makeBoard() {
  if (pickBoard) {
    app.innerHTML = /*HTML*/ `
  <div>Pick how large you want your nonogram</div>
  <button onclick="chooseBoard('4')">3</button>
  <button onclick="chooseBoard('6')">5</button>
  <!--
    <button onclick="chooseBoard('11')">10</button>
    <button onclick="chooseBoard('16')">15</button>
    -->
    `;
  } else if (!pickBoard) {
    let cellsHtml = "";
    for (let i = 0; i < board * board; i++) {
      /* draws out the cells which are picked */
      if (board == 4) {
        if (coloredCellArray.includes(i)) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="coloredCells" onclick="pickCell(this.id)" onmouseover="hoverCell(this.id)"></div>`;
        } else if (i == 1) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible3x3Nonograms[randomNonogram].columns[0]}</div>`;
        } else if (i == 2) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible3x3Nonograms[randomNonogram].columns[1]}</div>`;
        } else if (i == 3) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible3x3Nonograms[randomNonogram].columns[2]}</div>`;
        } else if (i == 4) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible3x3Nonograms[randomNonogram].rows[0]}</div>`;
        } else if (i == 8) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible3x3Nonograms[randomNonogram].rows[1]}</div>`;
        } else if (i == 12) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible3x3Nonograms[randomNonogram].rows[2]}</div>`;
        } else {
          if (rightClickCellArray.includes(i)) {
            cellsHtml += /*HTML*/ `<div id="${i}" class="cells" onclick="pickCell(this.id)" onmouseover="hoverCell(this.id)">x</div>`;
          } else {
            cellsHtml += /*HTML*/ `<div id="${i}" class="cells" onclick="pickCell(this.id)" onmouseover="hoverCell(this.id)"></div>`;
          }
        }
      } else if (board == 6) {
        if (coloredCellArray.includes(i)) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="coloredCells" onclick="pickCell(this.id)" onmouseover="hoverCell(this.id)"></div>`;
        } else if (i == 1) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].columns[0]}</div>`;
        } else if (i == 2) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].columns[1]}</div>`;
        } else if (i == 3) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].columns[2]}</div>`;
        } else if (i == 4) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].columns[3]}</div>`;
        } else if (i == 5) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].columns[4]}</div>`;
        } else if (i == 6) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].rows[0]}</div>`;
        } else if (i == 12) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].rows[1]}</div>`;
        } else if (i == 18) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].rows[2]}</div>`;
        } else if (i == 24) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].rows[3]}</div>`;
        } else if (i == 30) {
          cellsHtml += /*HTML*/ `<div id="${i}" class="cells">${listOfPossible5x5Nonograms[randomNonogram].rows[4]}</div>`;
        } else {
          if (rightClickCellArray.includes(i)) {
            cellsHtml += /*HTML*/ `<div id="${i}" class="cells" onclick="pickCell(this.id)" onmouseover="hoverCell(this.id)">x</div>`;
          } else {
            cellsHtml += /*HTML*/ `<div id="${i}" class="cells" onclick="pickCell(this.id)" onmouseover="hoverCell(this.id)"></div>`;
          }
        }
      } else {
        console.log("picking a board went wrong");
      }
    }
    document.getElementById("app").innerHTML = /*HTML*/ `
      <div id="grid" class="grid${board}">
        ${cellsHtml}
        </div>
        <div class="allText" id="lives">you have ${lives} lives left</div>
        <div class="allText" id="score">${result ?? ""}</div>
        `;
  }
}