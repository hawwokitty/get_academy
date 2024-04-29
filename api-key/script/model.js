let model = {
  app: {
    page: "buildView",
  },
  input: {
    search: {
      searchText: "",
      filter: {
        race: null,
      },
      savedCards: [],
    },
    build: {
      race: null,
      boards: {
        addToBoard: [],
      },
    },
  },
  data: {
    myBoards: {
      boardsWithRace: [
        { type: "Demon", cards: [] },
        { type: "Mech", cards: [] },
        { type: "Dragon", cards: [] },
        { type: "Beast", cards: [] },
        { type: "Elemental", cards: [] },
        { type: "Quailboar", cards: [] },
        { type: "Undead", cards: [] },
        { type: "Naga", cards: [] },
        { type: "Murloc", cards: [] },
        { type: "Pirate", cards: [] },
        { type: "Mixed", cards: [] },
      ],
    },
    api: {
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Battlegrounds",
      options: {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6471e52a57msh6041fb015dfd9f2p178d4bjsn222c4ed0f70d",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      },
      response: undefined,
      result: undefined,
      minions: [],
      races: [],
      minionsWithoutImg: [],
    },
  },
};
