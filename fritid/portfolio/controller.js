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

function openAppsOnStartBar(appId) {
  if (appsOpen.length === 0) {
    appsOpen.push({
      idR: appId,
      htmlOpen: openWindowTabOpen,
      htmlClosed: openWindowTabClosed,
    });
  }
  let element = appsOpen.find((el) => el.idR === appId);
  if (element === undefined) {
    appsOpen.push({
      idR: appId,
      htmlOpen: openWindowTabOpen,
      htmlClosed: openWindowTabClosed,
    });
  }
  updateView();
}

function openApp(appId) {
  if (appId === 0) {
    openPaint();
  } else if (appId === 1) {
    openGaming();
  }
}

function closeApp(appId) {
  let element = appsOpen.find((el) => el.idR === appId);
  let indexOfApp = appsOpen.indexOf(element);
  openWindow = null;
  openWindowTab = null;
  appsOpen.splice(indexOfApp, 1);
  console.log(appsOpen);
  updateView();
}

function minimizeApp(appId) {
  if (openWindow != null) {
    openWindow = null;
    startTab = false;
    setWindowTab(appId);
  } else {
    startTab = true;
    openApp(appId);
  }
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
