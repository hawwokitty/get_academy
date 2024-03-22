game();
function game() {
  let catsHtml = ""; // this is gonna be the html showing all the cats
  // start with one cat and buy more
  arrayOfCurrentCats = cats.slice(0, catsOwned); // the array of cats being shown
  checkIfBuyCat(); // checks if buy cat button should show or not
  
  // says what catsHtml should be
  for (let cat of arrayOfCurrentCats) {
    catHasYarn = false; // makes sure no cats who doesnt have yarn already get yarn
    
    checkIfBoughtTree(cat); // if u press the buy tree button, catTree will be true
    makeTreeAndYarnButtonHtml(cat); // if cat tree can be upgraded make upgrade Tree button and buy Yarn Button 
    checkBoughtYarn(); // if you have enough upgrades you can buy yarn
    
    // makes the actual html with all the right variables and stuff
    let catsDescription = /*HTML*/ `<div id="${cat.desc}">${cat.name} has ${cat.love} love, and ${cat.upgrades} upgrades</div>`;
    if (cat.love > 10 && cat.upgrades === 0 && yourLove >= 10) {
      buttonHtml = /*HTML*/ `
            <button id="${cat.button}" onclick="buyTree(this.id)">Buy cat tree (cost 10 love from cat)</button>
            `;
      catsHtml += /*HTML*/ `
                <div class="cats">
                    <img id="${cat.name}" class="catImg" onclick="gainLove(this.id)" src="${cat.imgPath}">       
                    ${buttonHtml ?? ""}
                    ${catsDescription}
                    </div>
                    `;
    } else if (cat.upgrades > 0 || catHasYarn) {
      catsHtml += /*HTML*/ `
              <div class="cats">
              <img id="${cat.name}" class="catImg" onclick="gainLove(this.id)" src="${cat.imgPath}">
              ${catTreeHtml ?? ""}
              ${printYarn(cat) ?? ""}
              ${buttonHtml ?? ""}
              ${catsDescription}
              </div>
              `;
    } else {
      catsHtml += /*HTML*/ `
          <div class="cats">
              <img id="${cat.name}" class="catImg" onclick="gainLove(this.id)" src="${cat.imgPath}">
              ${catsDescription}
              </div>
              `;
    }
    yarnHtml = null;
    buttonHtml = null;
  } // end of for-loop for what catsHtml should be

  app.innerHTML = /*HTML*/ `
        ${catsHtml}
        ${buyCatButton ?? ""}
        <div id="yourLove">Your love is: ${yourLove}</div>
        <div>Next cat will cost ${buyCatCost} love</div>
        <button onclick='saveToLocalStorage()'>Save cats in case of accidental refresh</button>
        <button onclick='loadFromLocalStorage()'>Load last save</button>
        `;
  buyCatButton = null;
}

function checkIfBuyCat() {
  if (yourLove > buyCatCost && catsOwned < cats.length) {
    buyCat = true;
  }
  // sets buy cat button html if above is true
  if (buyCat) {
    buyCatButton = /*HTML*/ `
          <button onclick="buyANewCat()">Buy a new cat (costs ${buyCatCost} from you)</button>
          `;
  }
}

function checkIfBoughtTree(cat) {
  if (catTree) {
    let tree;
    if (cat.upgrades === 1) {
      tree = trees.find((tree) => tree.name === "tree1");
      catTreeHtml = /*HTML*/ `
            <img class="tree" src="${tree.imgPath}">
            `;
      // if interval has started, dont start it again
      if (!cat.runAutomate) {
        startAutomateInterval(cat.name);
      }
    } else if (cat.upgrades === 2) {
      tree = trees.find((tree) => tree.name === "tree2");
      catTreeHtml = /*HTML*/ `
      <img class="tree" src="${tree.imgPath}">
      `;
    } else if (cat.upgrades === 3) {
      tree = trees.find((tree) => tree.name === "tree3");
      catTreeHtml = /*HTML*/ `
      <img class="tree" src="${tree.imgPath}">
      `;
    }
  }
}

function makeTreeAndYarnButtonHtml(cat) {
  if (cat.upgrades === 1 && cat.love >= 20 && yourLove >= 20) {
    buttonHtml = /*HTML*/ `
          <button id="${cat.button}" onclick="buyUpgrade(this.id,20)">Upgrade cat tree (cost 20 love from cat)</button>
          `;
  } else if (cat.upgrades === 2 && cat.love >= 200 && yourLove >= 200) {
    buttonHtml = /*HTML*/ `
          <button id="${cat.button}" onclick="buyUpgrade(this.id,200)">Upgrade cat tree (cost 200 love from cat)</button>
          `;
  } else if (
    cat.upgrades === 3 &&
    cat.love >= 1000 &&
    yourLove >= 1000 &&
    cat.hasYarn === 0
  ) {
    buttonHtml = /*HTML*/ `
          <button id="${cat.button}" onclick="buyYarn(this.id)">Buy yarn (cost 1000 love from cat)</button>
          `;
  } else if (
    cat.upgrades === 3 &&
    cat.love >= 2000 &&
    yourLove >= 2000 &&
    cat.hasYarn === 1
  ) {
    buttonHtml = /*HTML*/ `
          <button id="${cat.button}" onclick="buyYarn(this.id)">Buy more yarn (cost 2000 love from cat)</button>
          `;
  }
}

function checkBoughtYarn() {
  if (boughtYarn) {
    catHasYarn = true;
  }
}

function printYarn(cat) {
  yarnHtml = "";
  for (let i = 0; i < cat.hasYarn; i++) {
    yarnHtml += /*HTML*/ `
    <img class="tree" src="${yarn}">
    `;
  }
  return yarnHtml;
}
