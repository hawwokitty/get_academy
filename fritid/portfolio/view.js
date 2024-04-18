updateView();
function updateView() {
  let appDivs = "";
  for (let img of model.data.appIcons) {
    appDivs += /*HTML*/ `
          <div id="${img.name}" class="app" onclick="appClicked(${img.textId})" ondblclick="appDblClick(${img.textId})">
            <img class="appImg" src="${img.imgPath}" alt="" />
            <span id="${img.textId}" class="appText">${img.name}</span>
          </div>`;
  }
  app.innerHTML = /*HTML*/ `
        
        <div class="desktop">
      ${appDivs}
      ${makeOpenWindowArrayHtml() ?? ''}
    
    </div>
    ${model.app.start.startMenu ?? ""}
    <div class="start">
      ${makeStartButton()}
        
        ${makeStartAppsHtml() ?? ''}
      <div class="timeDate">
        Last updated: ${new Date()}
      </div>
    </div>
        `;
}

function makeStartAppsHtml() {
  let html = '';
  if (model.app.start.startTab) {
    for (let i = 0; i < model.app.windows.appsOpen.length; i++) {
      html += model.app.windows.appsOpen[i].htmlOpen;
    }
  } else {
    for (let i = 0; i < model.windows.appsOpen.length; i++) {
      html += model.app.windows.appsOpen[i].htmlClosed;
    }
  }
  return html;
}

function makeOpenWindowArrayHtml() {
  let html = '';
  model.app.windows.openWindowArray.push(
    {id: 0, html: model.app.windows.openWindow,}
    );
  for (let i = 0; i < model.app.windows.openWindowArray.length; i++) {
    html += model.app.windows.openWindowArray[i];
  }
  // console.log(openWindowArray);
  // console.log(openWindow);
  return html;
}

function makeStartButton() {
  let windowsLogo = model.data.otherImages.find(
    (images) => images.name === "Windows Logo"
  );

  return /*HTML*/ `<div id="startBtnId" class="${
    model.app.start.startButton ? "startBtnActive" : "startBtn"
  }"
              onclick="openStartMenu()">
              <img src="${windowsLogo.imgPath}" alt="" />
              Start
              </div>`;
}

function openStartMenu() {
  if (mode.app.start.startMenu === null) {
    mode.app.start.startButton = true;
    mode.app.start.startMenu = /*HTML*/ `
        <div id="startMenuId" class="startMenu">
      <div id="startSideMenu" class="sideOfMenu"></div>
      <div id="startMenuList" class="menuList">
        <div class="menuListItem">
          <img
            src="images/Program Folder (16x16px & 32x32px).ico"
            alt=""
            class="menuListIcon"
          />
          Programs
          <span class="menuArrow">&#9654;</span>
        </div>
        <div class="menuListItem">
          <img
          src="images/Documents Folder.ico"
          alt=""
          class="menuListIcon"
          />
          Documents
          <span class="menuArrow">&#9654;</span>
        </div>
        <div class="menuListItem">
          <img
          src="images/Settings.ico"
          alt=""
          class="menuListIcon"
          />
          Settings
          <span class="menuArrow">&#9654;</span>
        </div>
        <div class="menuListItem">
          <img
          src="images/Search in sheet (16x16px & 32x32px) (blue).ico"
          alt=""
          class="menuListIcon"
          />
          Find
          <span class="menuArrow">&#9654;</span>
        </div>
        <div class="menuListItem">
          <img
            src="images/Help book.ico"
            alt=""
            class="menuListIcon"
          />
          Help
        </div>
        <div class="menuListItem">
          <img
            src="images/Program wait.ico"
            alt=""
            class="menuListIcon"
          />
          Run...
        </div>
        <hr />
        <div class="menuListItem">
          <img
            src="images/Turn Off Computer (display only).ico"
            alt=""
            class="menuListIcon"
          />
          Shut Down...
        </div>
      </div>
    </div>
        `;
  } else {
    mode.app.start.startButton = false;
    mode.app.start.startMenu = null;
  }
  updateView();
}

function setWindowTab(appId) {
  mode.app.windows.openWindowTabOpen = /*HTML*/ `
  <div class="startTabActive" onclick="minimizeApp(${appId})">
    <img class="windowIcon" src="${model.data.appIcons[appId].startImgPath}" alt="">
    ${model.data.appIcons[appId].startTitle}
  </div>
  `;
  mode.app.windows.openWindowTabClosed = /*HTML*/ `
  <div class="startTab" onclick="minimizeApp(${appId})">
    <img class="windowIcon" src="${model.data.appIcons[appId].startImgPath}" alt="">
    ${model.data.appIcons[appId].startTitle}
  </div>
  `;
  openAppsOnStartBar(appId);
  updateView();
}

function openGaming() {
  model.app.start.startTab = true;
  setWindowTab(1);
  model.app.windows.openWindow = /*HTML*/ `<div class="window">
      <div class="paint">
        <div class="windowBar">
          <img class="windowIcon" src="images/twitchlogo.png" alt="">
          <span class="windowTitle">My gaming - Twitch</span>
          <div class="minMaxClose">
            <div class="cornerIcons" onclick="minimizeApp(1)">_</div>
            <div class="cornerIcons">O</div>
            <div class="cornerIcons" onclick="closeApp(1)">X</div>
          </div>
        </div>
        <div class="mainInternet">
          <div class="upbar">
            <a class="upbar-opt" href="#">File</a>
            <a class="upbar-opt" href="#">Edit</a>
            <a class="upbar-opt" href="#">View</a>
            <a class="upbar-opt" href="#">Go</a>
            <a class="upbar-opt" href="#">Favorites</a>
            <a class="upbar-opt" href="#">Help</a>
          </div>
          <div class="internet">
            <div class="internetIconsBar">
              <div class="internetIcons">Back</div>
              <div class="internetIcons">Forward</div>
              <div class="internetIcons">Stop</div>
              <div class="internetIcons">Refresh</div>
              <div class="internetIcons">Home</div>
              <div class="internetIcons">Search</div>
              <div class="internetIcons">Favorites</div>
              <div class="internetIcons">Print</div>
            </div>
            <div class="internetSearchBar">
              <span class="address">Address:</span>
              <span class="searchLink">https://www.twitch.tv/hawwokitty</span>
            </div>
            <div class="webpage">
              
            </div>
          </div>
         
          <div class="bottominfo">
            <div class="a">For Help, click Help Topics on the Help Menu.</div>
           
          </div>
        </div>
      </div>
    </div>
    `;
  updateView();
}

function openPaint() {
  model.app.start.startTab = true;
  setWindowTab(0);
  model.app.windows.openWindow = /*HTML*/ `
        <div class="window">
    <div class="paint">
      <div class="windowBar">
        <img class="windowIcon" src="images/Paintbrish.ico" alt="">
        <span class="windowTitle">My art - Paint</span>
        <div class="minMaxClose">
          <div class="cornerIcons" onclick="minimizeApp(0)">_</div>
          <div class="cornerIcons">O</div>
          <div class="cornerIcons" onclick="closeApp(0)">X</div>
        </div>
      </div>
      <div class="grid">
        <div class="upbar">
          <a class="upbar-opt" href="#">File</a>
          <a class="upbar-opt" href="#">Edit</a>
          <a class="upbar-opt" href="#">View</a>
          <a class="upbar-opt" href="#">Image</a>
          <a class="upbar-opt" href="#">Colors</a>
          <a class="upbar-opt" href="#">Help</a>
        </div>
        <div class="sidebar">
          <div id="item1" class="item">
            <img src="https://i.postimg.cc/N0XtfWcz/1.png" alt="" />
          </div>
          <div id="item2" class="item">
            <img src="https://i.postimg.cc/k4FdWKDN/2.png" alt="" />
          </div>
          <div id="item3" class="item">
            <img src="https://i.postimg.cc/prWMCrnw/3.png" alt="" />
          </div>
          <div id="item4" class="item">
            <img src="https://i.postimg.cc/HWzgxwqd/4.png" alt="" />
          </div>
          <div id="item5" class="item">
            <img src="https://i.postimg.cc/SRgFv46J/5.png" alt="" />
          </div>
          <div id="item6" class="item">
            <img src="https://i.postimg.cc/sgkF8wh9/6.png" alt="" />
          </div>
          <div id="item7" class="item active">
            <img src="https://i.postimg.cc/bNFf0zY5/7.png" alt="" />
          </div>
          <div id="item8" class="item">
            <img src="https://i.postimg.cc/ncLtQsx7/8.png" alt="" />
          </div>
          <div id="item9" class="item">
            <img src="https://i.postimg.cc/0yMRcLby/9.png" alt="" />
          </div>
          <div id="item10" class="item">
            <img src="https://i.postimg.cc/LsjdMLkd/10.png" alt="" />
          </div>
          <div id="item11" class="item">
            <img src="https://i.postimg.cc/Y975208v/11.png" alt="" />
          </div>
          <div id="item12" class="item">
            <img src="https://i.postimg.cc/xCPWXQFt/12.png" alt="" />
          </div>
          <div id="item13" class="item">
            <img src="https://i.postimg.cc/8cPxWY2D/13.png" alt="" />
          </div>
          <div id="item14" class="item">
            <img src="https://i.postimg.cc/J06vQq8X/14.png" alt="" />
          </div>
          <div id="item15" class="item">
            <img src="https://i.postimg.cc/ryQBc84p/15.png" alt="" />
          </div>
          <div id="item16" class="item">
            <img src="https://i.postimg.cc/GhtZmZPx/16.png" alt="" />
          </div>
        </div>
        <div class="canvas">
          <div class="canvas-white"></div>
        </div>
        <div class="bottombar">
          <div class="cont">
            <div class="selection">
              <div class="selected" style="background-color: black"></div>
              <div class="selected2" style="background-color: white"></div>
            </div>
            <div class="colors">
              <div
                class="wut colors--color1"
                style="background-color: rgba(0, 0, 0)"
              ></div>
              <div
                class="wut colors--color2"
                style="background-color: rgb(125, 125, 125)"
              ></div>
              <div
                class="wut colors--color3"
                style="background-color: rgb(120, 0, 0)"
              ></div>
              <div
                class="wut colors--color4"
                style="background-color: rgb(120, 120, 0)"
              ></div>
              <div
                class="wut colors--color5"
                style="background-color: rgb(0, 120, 0)"
              ></div>
              <div
                class="wut colors--color6"
                style="background-color: rgb(0, 0, 120)"
              ></div>
              <div
                class="wut colors--color7"
                style="background-color: rgb(120, 0, 120)"
              ></div>
              <div
                class="wut colors--color8"
                style="background-color: rgb(120, 120, 60)"
              ></div>
              <div
                class="wut colors--color9"
                style="background-color: rgb(0, 120, 60)"
              ></div>
              <div
                class="wut colors--color10"
                style="background-color: rgb(0, 60, 120)"
              ></div>
              <div
                class="wut colors--color11"
                style="background-color: rgb(0, 60, 60)"
              ></div>
              <div
                class="wut colors--color12"
                style="background-color: rgb(60, 120, 120)"
              ></div>
              <div
                class="wut colors--color13"
                style="background-color: rgb(60, 60, 120)"
              ></div>
              <div
                class="wut colors--color14"
                style="background-color: rgb(120, 60, 30)"
              ></div>
              <div
                class="wut colors--color15"
                style="background-color: rgb(255, 255, 255)"
              ></div>
              <div
                class="wut colors--color16"
                style="background-color: rgb(190, 190, 190)"
              ></div>
              <div
                class="wut colors--color17"
                style="background-color: rgb(255, 0, 0)"
              ></div>
              <div
                class="wut colors--color18"
                style="background-color: rgb(255, 255, 0)"
              ></div>
              <div
                class="wut colors--color19"
                style="background-color: rgb(0, 255, 0)"
              ></div>
              <div
                class="wut colors--color20"
                style="background-color: rgb(0, 0, 255)"
              ></div>
              <div
                class="wut colors--color21"
                style="background-color: rgb(255, 0, 255)"
              ></div>
              <div
                class="wut colors--color22"
                style="background-color: rgb(255, 255, 120)"
              ></div>
              <div
                class="wut colors--color23"
                style="background-color: rgb(0, 255, 120)"
              ></div>
              <div
                class="wut colors--color24"
                style="background-color: rgb(0, 120, 255)"
              ></div>
              <div
                class="wut colors--color25"
                style="background-color: rgb(0, 120, 120)"
              ></div>
              <div
                class="wut colors--color26"
                style="background-color: rgb(120, 255, 255)"
              ></div>
              <div
                class="wut colors--color27"
                style="background-color: rgb(120, 120, 255)"
              ></div>
              <div
                class="wut colors--color28"
                style="background-color: rgb(255, 120, 60)"
              ></div>
            </div>
          </div>
        </div>
        <div class="bottominfo">
          <div class="a">For Help, click Help Topics on the Help Menu.</div>
          <div class="b">
            <a id="name" href="https://twitter.com/Jorgert1205" target="_blank"
              >base by Jorge Reyes</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  updateView();
}
