let app = document.getElementById("app");
      // const appIcons = [
      //   {
      //     name: "Paint",
      //     textId: 0,
      //     imgPath: "images/Paint.ico",
      //     startImgPath: "images/Paintbrish.ico",
      //     startTitle: "My art - Paint",
      //   },
      //   {
      //     name: "Gaming",
      //     textId: 1,
      //     imgPath: "images/My Computer.ico",
      //     startImgPath: "images/twitchlogo.png",
      //     startTitle: "My gaming - Twitch",
      //   },
      //   {
      //     name: "Code",
      //     textId: 2,
      //     imgPath: "images/Java.ico",
      //     startImgPath: "",
      //     startTitle: "",
      //   },
      //   {
      //     name: "Cosplay",
      //     textId: 3,
      //     imgPath: "images/Agent.ico",
      //     startImgPath: "",
      //     startTitle: "",
      //   },
      // ];
      // const otherImages = [
      //   {
      //     name: "Windows Logo",
      //     imgPath: "images/Windows logo (without text).ico",
      //   },
      // ];
      // let openWindow;
      // let openWindowArray = [];
      // let openWindowTabClosed;
      // let openWindowTabOpen;
      // let startMenu = null;
      // let startButton = false;
      // let startTab = true;
      // let appsOpen = [];

let model = {
  app: {
    windows: {
      openWindow: undefined,
      openWindowArray: [],
      openWindowTabClosed: undefined,
      openWindowTabOpen: undefined,
      appsOpen: [],
    },
    start: {
      startMenu: null,
      startButton: false,
      startTab: true,
    }
  },
  input: {},
  data: {
    appIcons: [
      {
        name: "Paint",
        textId: 0,
        imgPath: "images/Paint.ico",
        startImgPath: "images/Paintbrish.ico",
        startTitle: "My art - Paint",
      },
      {
        name: "Gaming",
        textId: 1,
        imgPath: "images/My Computer.ico",
        startImgPath: "images/twitchlogo.png",
        startTitle: "My gaming - Twitch",
      },
      {
        name: "Code",
        textId: 2,
        imgPath: "images/Java.ico",
        startImgPath: "",
        startTitle: "",
      },
      {
        name: "Cosplay",
        textId: 3,
        imgPath: "images/Agent.ico",
        startImgPath: "",
        startTitle: "",
      },
    ],
    otherImages: [
      {
        name: "Windows Logo",
        imgPath: "images/Windows logo (without text).ico",
      },
    ],
  },
}