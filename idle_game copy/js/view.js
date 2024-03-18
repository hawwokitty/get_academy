game();
function game() {
  let catsHtml = ""; // this is gonna be the html showing all the cats

  checkIfBuyCat(); // checks if buy cat button should show or not

  // start with one cat and buy more
  let arrayOfCurrentCats = []; // the array of cats being shown
  for (let i = 0; i < catsOwned; i++) {
    arrayOfCurrentCats.push(cats[i]);
  }

  // says what catsHtml should be
  for (let cat of arrayOfCurrentCats) {
    let catsDescription = /*HTML*/ `<div id="${cat.desc}">${cat.name} has ${cat.love} love, and ${cat.upgrades} upgrades</div>`;

    checkIfBoughtTree(cat); // if u press the buy tree button, catTree will be true
    makeTreeAndYarnButtonHtml(cat); // if cat tree can be upgraded make "upgradeTree" into HTML & buyYarnButton into HTML
    checkBoughtYarn(); // if you have enough upgrades you can buy yarn

    // makes the actual html with all the right variables and stuff
    if (cat.love > 10 && cat.upgrades === 0 && yourLove >= 10) {
      buyCatTree = /*HTML*/ `
            <button id="${cat.button}" onclick="buyTree(this.id)">Buy cat tree (cost 10 love from cat)</button>
            `;
      catsHtml += /*HTML*/ `
                <div class="cats">
                    <img id="${
                      cat.name
                    }" class="catImg" onclick="gainLove(this.id)" src="${
        cat.imgPath
      }">
                    ${buyCatTree ?? ""}
                    ${catsDescription}
                    </div>
                    `;
    } else if (cat.upgrades > 0 || catHasYarn) {
      catsHtml += /*HTML*/ `
              <div class="cats">
              <img id="${
                cat.name
              }" class="catImg" onclick="gainLove(this.id)" src="${
        cat.imgPath
      }">
              ${catTreeHtml ?? ""}
              ${printYarn(cat) ?? ""}
              ${upgradeTree ?? ""}
              ${buyYarnButton ?? ""}
              ${catsDescription}
              </div>
              `;
    } else {
      catsHtml += /*HTML*/ `
          <div class="cats">
              <img id="${cat.name}" class="catImg" onclick="gainLove(this.id)" src="${cat.imgPath}">

              ${catsDescription}
              `;
    }
    upgradeTree = null;
    buyYarnButton = null;
    catHasYarn = false;
    yarnHtml = null;
  } // end of for-loop for what catsHtml should be

  app.innerHTML = /*HTML*/ `
        ${catsHtml}
        ${buyCatButton ?? ""}
        <div id="yourLove">Your love is: ${yourLove}</div>
        <div>Next cat will cost ${buyCatCost} love</div>
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
    upgradeTree = /*HTML*/ `
          <button id="${cat.button}" onclick="buyUpgrade(this.id,20)">Upgrade cat tree (cost 20 love from cat)</button>
          `;
  } else if (cat.upgrades === 2 && cat.love >= 200 && yourLove >= 200) {
    upgradeTree = /*HTML*/ `
          <button id="${cat.button}" onclick="buyUpgrade(this.id,200)">Upgrade cat tree (cost 200 love from cat)</button>
          `;
  } else if (
    cat.upgrades === 3 &&
    cat.love >= 1000 &&
    yourLove >= 1000 &&
    cat.hasYarn === 0
  ) {
    buyYarnButton = /*HTML*/ `
          <button id="${cat.button}" onclick="buyYarn(this.id)">Buy yarn (cost 1000 love from cat)</button>
          `;
  } else if (
    cat.upgrades === 3 &&
    cat.love >= 2000 &&
    yourLove >= 2000 &&
    cat.hasYarn === 1
  ) {
    buyYarnButton = /*HTML*/ `
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
  if (cat.hasYarn === 1) {
    yarnHtml = /*HTML*/ `
    <img class="tree" src="${yarn}">
    `;
  }
  if (cat.hasYarn === 2) {
    yarnHtml = /*HTML*/ `
    <img class="tree" src="${yarn}">
    <img class="tree" src="${yarn}">
    `;
  }
  return yarnHtml;
}
