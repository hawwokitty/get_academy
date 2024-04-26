let model = {
  app: {
    page: "searchView",
  },
  input: {
    search: {
      searchText: "",
      filter: {
        race: null,
      },
      savedCards: [],
    },
    build: {},
  },
  data: {
    myDeck: {
      savedCards: [],
      deck: [],
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
