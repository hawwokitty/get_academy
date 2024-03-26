let app = document.getElementById("app");
      const appIcons = [
        {
          name: "Paint",
          textId: 1,
          imgPath: "images/Paint.ico",
        },
        {
          name: "Gaming",
          textId: 2,
          imgPath: "images/My Computer.ico",
        },
        {
          name: "Code",
          textId: 3,
          imgPath: "images/Java.ico",
        },
        {
          name: "Cosplay",
          textId: 4,
          imgPath: "images/Agent.ico",
        },
      ];
      const otherImages = [
        {
          name: "Windows Logo",
          imgPath: "images/Windows logo (without text).ico",
        },
      ];
      let openWindow;
      let openWindowTab;
      let startMenu = null;
      let startButton = false;
      