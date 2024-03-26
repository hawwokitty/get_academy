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

// function closeStartMenu() {
//   startMenu = null;
//   startButton = false;
//   updateView();
// }

// window.addEventListener("click", function (e) {
//   if (startButton) {
//     // setTimeout(function () {
//       // if (document.getElementById("startMenuId").contains(e.target)) {
//       //   console.log("Clicked in Box");
//       // }
//       if (!document.getElementById("startMenuId").contains(e.target)) {
//         console.log("Clicked ouside Box");
//         startButton = false;
//         updateView();
//       }
//     // }, 1000);
//   }
// });

window.addEventListener("click", function (e) {
  setTimeout(function () {
  if (startButton) {
      if (!document.getElementById("startMenuId").contains(e.target)) {
        console.log("Clicked ouside Box");
        startMenu = null;
        startButton = false;
        updateView();
      }
  }
}, 1000);
});
