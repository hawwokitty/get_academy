const model = {
  app: {
    main: {
      page: 5,
      user: null,
      timer: null,
    },
    nono: {
      currentNonogram: null,
    },
  },
  input: {
    adj: {
      adjective1: undefined,
      adjective2: undefined,
      verb1: undefined,
      verb2: undefined,
      noun: undefined,
      YesOrNo: undefined,
      name: undefined,
      showReply: false,
    },
    croc: {
      answer: undefined,
    },
    email: {
      address: undefined,
    },
    magic: {
      question: undefined,
    },
    mario: {
      character: undefined,
    },
    nono: {
      coloredCellArray: [],
      xCellArray: [],
      currentHoverCell: null,
    },
    react: {
        time: null,
    },
    RPS: {
        userPick: undefined,
    },
    simon: {
        clickedBoxArray: [],
    },
    tama: {},
    tampen: {},
    ticTac: {},
  },
  data: {
    adj: {
      wordBank: ["good", "big", "small", "hot", "cold", "old", "happy"],
      story: "",
    },
    croc: {
      score: 0,
      maxNum: 10,
      turns: 20,
      currentTurn: 1,
    },
    email: {
      emailPattern: /^.+@.+\..+$/,
      userEmail: undefined,
      reponse: undefined,
    },
    magic: {
      responses: [
        "It is certain",
        "Dont count on it",
        "It is decidedly so",
        "My reply is no",
        "Without a doubt",
        "My sources say no",
        "Yes definitely",
        "Outlook not so good",
        "You may rely on it	",
        "Very doubtful",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
      ],
      userQuestion: undefined,
      response: undefined,
    },
    mario: {
      playableCharacters: [
        {
          name: "Mario",
          hp: 200,
        },
        {
          name: "Luigi",
          hp: 140,
        },
        {
          name: "Peach",
          hp: 100,
        },
        {
          name: "Yoshi",
          hp: 80,
        },
      ],
      bowser: {
        name: "Bowser",
        hp: 300,
      },
      playerHp: undefined,
    },
    nono: {
      lives: 3,
      result: undefined,
      randomNonogram: undefined,
      nonogram3x3: [
        {
          cells: [5, 6, 9, 10, 11, 14],
          rows: ["2", "3", "1"],
          cols: ["2", "3", "1"],
        },
        {
          cells: [6, 7, 9, 10, 13, 15],
          rows: ["2", "2", "1, 1"],
          cols: ["2", "2", "1, 1"],
        },
        {
          cells: [5, 7, 10, 13, 15],
          rows: ["1, 1", "1", "1, 1"],
          cols: ["1, 1", "1", "1, 1"],
        },
      ],
      nonogram5x5: [
        {
          cells: [
            7, 11, 13, 14, 15, 16, 17, 20, 21, 22, 25, 26, 27, 28, 29, 32, 34,
          ],
          rows: ["1, 1", "5", "3", "5", "1, 1"],
          cols: ["2, 1", "4", "3", "4", "2, 1"],
        },
        {
          cells: [8, 10, 14, 16, 25, 29, 32, 33, 34],
          rows: ["1, 1", "1, 1", "0", "1, 1", "3"],
          cols: ["1", "2, 1", "1", "2, 1", "1"],
        },
        {
          cells: [
            7, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 26, 28, 29, 32, 33, 34,
          ],
          rows: ["1, 1", "5", "1, 1, 1", "2, 2", "3"],
          cols: ["4", "1, 2", "2, 1", "1, 2", "4"],
        },
        {
          cells: [7, 11, 13, 15, 17, 20, 22, 26, 28, 31, 32, 34, 35],
          rows: ["1, 1", "1, 1, 1", "1, 1", "1, 1", "2, 2"],
          cols: ["2, 1", "3", "1", "3", "2, 1"],
        },
      ],
    },
    react: {
        circleArray: [
            "circle0",
            "circle1",
            "circle2",
            "circle3",
            "circle4",
            "circle5",
            "circle6",
            "circle7",
            "circle8",
            "circle9",
            "circle10",
            "circle11",
            "circle12",
            "circle13",
            "circle14",
            "circle15",
            "circle16",
            "circle17",
            "circle18",
            "circle19",
            "circle20",
            "circle21",
            "circle22",
            "circle23",
            "circle24",
          ],
          timer: undefined, // ?
    },
    RPS: {
        picks: [
            {
                id: 0,
                name: '🪨'
            },
            {
                id: 1,
                name: '📃'
            },
            {
                id: 2,
                name: '✂️'
            },
        ]
    },
    simon: {
        highscore: null,
        randomBoxArray: [],
        myScore: null,
        scoresArray: [],
        turn: 0,
        interval: undefined,
    },
    tama: {},
    tampen: {},
    ticTac: {},
  },
};
