function refreshEveryTenSec() {
    setInterval(function () {
        game();
      }, 10000);
}

function buyANewCat() {
    if (yourLove > buyCatCost) {
        catsOwned++;
        buyCat = false;
        tempLove = tempLove - buyCatCost;
        buyCatCost = buyCatCost*2;
    } else {
        console.log('You cant afford that');
    }
    updateLove();
    game();
  }

  function startAutomateInterval(catsName) {
    let cat = cats.find((cat) => cat.name === catsName);
    setInterval(function () {
      automateLove(catsName);
    }, 1000);
    cat.runAutomate = true;
  }

  function automateLove(catsName) {
    let cat = cats.find((cat) => cat.name === catsName);
    if (cat.upgrades === 1) {
      cat.love++;
    } else if (cat.upgrades === 2) {
      cat.love = cat.love + 4;
    } else if (cat.upgrades === 3) {
      cat.love = cat.love + 8;
    }
    let catsId = "#" + cat.desc;
    document.querySelector(
      catsId
    ).innerHTML = /*HTML*/ `<div id="${cat.desc}">${cat.name} has ${cat.love} love, and ${cat.upgrades} upgrades</div>`;
    updateLove();
  }

  function buyTree(catsButtonName) {
    let cat = cats.find((cat) => cat.button === catsButtonName);
    cat.upgrades++;
    cat.love = cat.love - 10;
    catTree = true;
    buyCatTree = null;
    updateLove();
    game();
  }

  function buyYarnFunction(catsButtonName) {
    let cat = cats.find((cat) => cat.button === catsButtonName);
    cat.love = cat.love - 10;
    showYarn = true;
    buyYarn = null;
    updateLove();
    game();
  }

  function buyUpgrade(catsButtonName, cost) {
    let cat = cats.find((cat) => cat.button === catsButtonName);
    cat.upgrades++;
    cat.love = cat.love - cost;
    upgradeTree = null;
    updateLove();
    game();
  }

  function gainLove(catsName) {
    // for (let cat of cats) {
    //   if (cat.name === catsName) {
    //     cat.love++;
    //   }
    // }
    let cat = cats.find((cat) => cat.name === catsName);
    cat.love++;
    updateLove();
    game();
  }

  function updateLove() {
    let allCatsLove = [];
    for (let cat of cats) {
      allCatsLove.push(cat.love);
    }
    let sum = 0;
    allCatsLove.forEach((e) => {
      sum += e;
    });
    yourLove = tempLove + sum;
    document.querySelector(
      "#yourLove"
    ).innerHTML = /*HTML*/ `<div id="yourLove">Your love is: ${yourLove}</div>`;
  }