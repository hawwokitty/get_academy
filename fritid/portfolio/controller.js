function appClicked(appId) {
  updateView();
  let clickedApp = document.getElementById(appId);
  if (clickedApp.classList.contains("appTextClicked")) {
    clickedApp.classList.remove("appTextClicked");
  } else {
    clickedApp.classList.add("appTextClicked");
  }
}

function appDblClick(appId) {
  let clickedApp = document.getElementById(appId);
  clickedApp.classList.remove("appTextClicked");
  openApp(appId);
}
function openApp(appId) {
  if (appId === 1) {
    openPaint();
  } else if (appId === 2) {
    openGaming();
  }
}

function closeApp() {
  openWindow = null;
  openWindowTab = null;
  updateView();
}

window.addEventListener("click", function (e) {
  if (startButton) {
    if (
      e.target.parentNode.id != "startMenuId" &&
      e.target.parentNode.id != "startMenuList" &&
      e.target.parentNode.id != "startBtnId" &&
      e.target.id != "startBtnId"
    ) {
      closeStartMenu();
    }
  }
});

function closeStartMenu() {
  startMenu = null;
  startButton = false;
  updateView();
}

let arrayOfCurrentCats = [];
for (let i = 0; i < catsOwned; i++) {
  for (let cat of cats) {
    if (arrayOfCurrentCats.length >= catsOwned) {
      break;
    }
    arrayOfCurrentCats.push(cat);
  }
}

let arrayOfCurrentCats = [];
for (let i = 0; i < catsOwned; i++) {
  arrayOfCurrentCats.push(cats[i]);
}

arrayOfCurrentCats = cats.slice(0, catsOwned);
