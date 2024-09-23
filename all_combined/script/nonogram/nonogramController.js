function handleCellClick(id) {
    const cellIndex = Number(id);
    if (model.input.nono.coloredCellArray.includes(cellIndex)) {
        model.input.nono.coloredCellArray = model.input.nono.coloredCellArray.filter(index => index !== cellIndex);
    } else {
        model.input.nono.coloredCellArray.push(cellIndex);
    }
    checkSolution();
    updateView();
}

function handleRightClick(e, id) {
    e.preventDefault();
    const cellIndex = Number(id);
    if (model.input.nono.xCellArray.includes(cellIndex)) {
        model.input.nono.xCellArray = model.input.nono.xCellArray.filter(index => index !== cellIndex);
    } else {
        model.input.nono.xCellArray.push(cellIndex);
    }
    updateView();
}

function checkSolution() {
    let lives = model.data.nono.lives;
    let randomNonogram = model.data.nono.randomNonogram;
    let coloredCells = model.input.nono.coloredCellArray;
    if (coloredCells.some(cell => !randomNonogram.cells.includes(cell))) {
        model.data.nono.lives--;
    }
    if (lives <= 0) {
        model.data.nono.result = "Aww, you lost!";
    }
    if (arraysEqual(coloredCells.sort(), randomNonogram.cells.sort())) {
        model.data.nono.result = "Congrats! You got it!";
    }
}

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}