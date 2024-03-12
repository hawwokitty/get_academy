game();
      function game() {
        let catsHtml = "";
        // checks if buy cat button should show or not
        if (yourLove > buyCatCost && catsOwned < cats.length) {
          buyCat = true;
        }
        if (buyCat) {
          buyCatButton = /*HTML*/ `
          <button onclick="buyANewCat()">Buy a new cat (costs ${buyCatCost} from you)</button>
          `;
        }

        // start with one cat and buy more
        let arrayOfCurrentCats = [];
        for (let i = 0; i < catsOwned; i++) {
          for (let cat of cats) {
            if (arrayOfCurrentCats.length >= catsOwned) {
              break;
            }
            arrayOfCurrentCats.push(cat);
          }
        }

        for (let cat of arrayOfCurrentCats) {
          let catsDescription = /*HTML*/ `<div id="${cat.desc}">${cat.name} has ${cat.love} love, and ${cat.upgrades} upgrades</div>`;
          // if u press the buy tree button, catTree will be true
          if (catTree) {
            let tree;
            if (cat.upgrades === 1) {
              tree = trees.find((tree) => tree.name === "tree1");
              catTree = /*HTML*/ `
              <img class="tree" src="${tree.imgPath}">
              `;
              // if interval has started, dont start it again
              if (!cat.runAutomate) {
                startAutomateInterval(cat.name);
              }
            } else if (cat.upgrades === 2) {
              tree = trees.find((tree) => tree.name === "tree2");
              catTree = /*HTML*/ `
        <img class="tree" src="${tree.imgPath}">
        `;
            } else if (cat.upgrades === 3) {
              tree = trees.find((tree) => tree.name === "tree3");
              catTree = /*HTML*/ `
        <img class="tree" src="${tree.imgPath}">
        `;
            }
          }
          // if cat tree can be upgraded make "upgradeTree" into HTML
          if (cat.upgrades === 1 && cat.love >= 20 && yourLove >= 20 ) {
            upgradeTree = /*HTML*/ `
            <button id="${cat.button}" onclick="buyUpgrade(this.id,20)">Upgrade cat tree (cost 20 love from cat)</button>
            `;
          } else if (cat.upgrades === 2 && cat.love >= 200 && yourLove >= 200 ) {
            upgradeTree = /*HTML*/ `
            <button id="${cat.button}" onclick="buyUpgrade(this.id,200)">Upgrade cat tree (cost 200 love from cat)</button>
            `;
          }
          // if you have high enough love, you can buy upgrades
          if (cat.love > 10 && cat.upgrades === 0 && yourLove >= 10 ) {
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
          } else if (cat.upgrades > 0) {
            catsHtml += /*HTML*/ `
          <div class="cats">
              <img id="${
                cat.name
              }" class="catImg" onclick="gainLove(this.id)" src="${
              cat.imgPath
            }">
              ${catTree ?? ""}
              ${upgradeTree ?? ""}
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
        } // end of for-loop

        app.innerHTML = /*HTML*/ `
        ${catsHtml}
        ${buyCatButton ?? ""}
        <div id="yourLove">Your love is: ${yourLove}</div>
        `;
        buyCatButton = null;
      }