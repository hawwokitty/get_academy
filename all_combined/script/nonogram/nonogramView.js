function nonogramView() {
    let result = model.data.nono.result ?? "";
    let coloredCells = model.input.nono.coloredCellArray;
    let nonograms3x3 = model.data.nono.nonogram3x3;
    if (model.data.nono.randomNonogram == undefined) {
        model.data.nono.randomNonogram = nonograms3x3[Math.floor(Math.random() * nonograms3x3.length)];
    }
    let gridHtml = "";
    for (let i = 0; i < 16; i++) {
        let cellClass = "nono-cell";
        if (i > 3 && i % 4 !== 0) {
            cellClass += coloredCells.includes(i) ? " nono-filled" : "";
        }
        gridHtml += /*HTML*/ `<div id="${i}" class="${cellClass}" 
                     onclick="handleCellClick(this.id)" 
                     oncontextmenu="handleRightClick(event, this.id)">
                     ${getCellContent(i)}
                     </div>`;
    }
    return /*HTML*/ `
        <div class="nono-grid nono-grid-3x3">${gridHtml}</div>
        <div class="nono-info">Lives left: ${model.data.nono.lives}</div>
        <div class="nono-info">${result}</div>
    `;
  }
  
  function getCellContent(i) {
    let randomNonogram = model.data.nono.randomNonogram;
    let rightClickedCells = model.input.nono.xCellArray;
    if (i <= 3 && i > 0) return randomNonogram.cols[i - 1];
    if (i % 4 === 0 && i !== 0) return randomNonogram.rows[i / 4 - 1];
    if (rightClickedCells.includes(i)) return "x";
    return "";
}