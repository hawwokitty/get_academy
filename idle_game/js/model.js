const app = document.getElementById("app");
      let yourLove = 0;
      let catTree;
      let buyCatTree;
      let upgradeTree;
      let buyCat;
      let buyCatButton;
      let buyCatCost = 30;
      let tempLove = 0;
      let catsOwned = 1;
      let boughtYarn;
      let buyYarnButton;
      // cats
      const cats = [
        {
          name: "Angel",
          button: "angelsButton",
          desc: "angelDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_angel.png",
          runAutomate: false,
        },
        {
          name: "Alice",
          button: "alicesButton",
          desc: "aliceDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_ass.png",
          runAutomate: false,
        },
        {
          name: "Bartholomew",
          button: "bartholomewsButton",
          desc: "bartholomewDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_demon.png",
          runAutomate: false,
        },
        {
          name: "Danny",
          button: "dannysButton",
          desc: "dannyDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_dot.png",
          runAutomate: false,
        },
        {
          name: "Crickle",
          button: "cricklesButton",
          desc: "crickleDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_drool.png",
          runAutomate: false,
        },
        {
          name: "Fifi",
          button: "fifisButton",
          desc: "fifiDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_drunk.png",
          runAutomate: false,
        },
        {
          name: "Telly",
          button: "tellysButton",
          desc: "tellyDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_fear.png",
          runAutomate: false,
        },
        {
          name: "Tom",
          button: "tomsButton",
          desc: "tomDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_gun.png",
          runAutomate: false,
        },
        {
          name: "Luna",
          button: "lunasButton",
          desc: "lunaDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_happy.png",
          runAutomate: false,
        },
        {
          name: "Pippi",
          button: "pippisButton",
          desc: "pippiDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_hoi.png",
          runAutomate: false,
        },
        {
          name: "Francis",
          button: "francissButton",
          desc: "francisDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_kiss.png",
          runAutomate: false,
        },
        {
          name: "Ash",
          button: "ashsButton",
          desc: "ashDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_laugh.png",
          runAutomate: false,
        },
        {
          name: "Nicky",
          button: "nickysButton",
          desc: "nickyDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_nuuuu.png",
          runAutomate: false,
        },
        {
          name: "Jorge",
          button: "jorgesButton",
          desc: "jorgeDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_okay.png",
          runAutomate: false,
        },
        {
          name: "Olive",
          button: "olivesButton",
          desc: "oliveDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_party.png",
          runAutomate: false,
        },
        {
          name: "Hammer",
          button: "hammersButton",
          desc: "hammerDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_pizza.png",
          runAutomate: false,
        },
        {
          name: "Dune",
          button: "dunesButton",
          desc: "duneDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_popcorn.png",
          runAutomate: false,
        },
        {
          name: "Bianca",
          button: "biancasButton",
          desc: "biancaDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_salute.png",
          runAutomate: false,
        },
        {
          name: "Woshie",
          button: "woshiesButton",
          desc: "woshieDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_scared.png",
          runAutomate: false,
        },
        {
          name: "Nyoom",
          button: "nyoomsButton",
          desc: "nyoomDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_shrug.png",
          runAutomate: false,
        },
        {
          name: "Crash",
          button: "crashsButton",
          desc: "crashDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_shy.png",
          runAutomate: false,
        },
        {
          name: "Bang",
          button: "bangsButton",
          desc: "bangDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_shydrool.png",
          runAutomate: false,
        },
        {
          name: "Truls",
          button: "trulssButton",
          desc: "trulsDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_sip.png",
          runAutomate: false,
        },
        {
          name: "Susie",
          button: "susiesButton",
          desc: "susieDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_sleep.png",
          runAutomate: false,
        },
        {
          name: "Kitty",
          button: "kittysButton",
          desc: "kittyDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_tease.png",
          runAutomate: false,
        },
        {
          name: "Paris",
          button: "parissButton",
          desc: "parisDiv",
          love: 0,
          upgrades: 0,
          hasYarn: 0,
          imgPath: "images/neko_woah.png",
          runAutomate: false,
        },
      ];
      // add ons
      const trees = [
        {
          name: "tree1",
          automate: 1,
          imgPath: "images/tree1.png",
        },
        {
          name: "tree2",
          automate: 2,
          imgPath: "images/tree2.png",
        },
        {
          name: "tree3",
          automate: 3,
          imgPath: "images/tree3.png",
        },
      ];
      const yarn = "images/yarn.png";