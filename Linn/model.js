const model1 = {
  app: {
    currentPage: "Opprett Aktivitet",
    notfications: false,
  },
  inputs: {
    header: {
      feed: false, //hvis man trykker på Sociomate-logoen tar den deg også til feeden.
      profile: false,
      activities: true,
      contact: false,
      search: "",
    },
    newActivity: {
      name: "", //input text
      description: "", //input text
      place: "", //input felt med auto complete
      time: null, //input number eller drop down?
      availableSpots: null, //input number eller drop down?
      price: null, //input number eller drop down?
      keywords: [], //input text separert med hashtags
      whoCanJoin: [venner, vennersVenner, offentlig], // radio btns
      age: {
        //input number eller drop down?
        min: null,
        max: null,
      },
      contactInfo: "", // input text
    },
    buttons: {
      create: false,
      back: false,
    },
  },
  // data
};



const model2 = {
  app: {
    currentPage: "Profil",
    notfications: false,
    currentUser: "users.id",
    addFriend: false,
    editProfile: false,
  },
  inputs: {
    header: {
      feed: false, //hvis man trykker på Sociomate-logoen tar den deg også til feeden.
      profile: true,
      activities: false,
      contact: false,
      search: "",
    },
    editProfileBtn: false,
    calendarHover: {
      busy: false,
      free: false,
      createActivity: false,
    },
    friends: {
      addFriend: false,
    },
    friendGroups: {
      createGroup: false,
    },
    editProfile: {
      //hvis man trykker på rediger profil-knapp
      img: "http://link",
      name: "",
      age: "",
      gender: "",
      hobbies: "",
      bio: "",
    },
  },
  data: {
    users: [
      {
        id: 1,
        img: "http://link",
        name: "john doe",
        age: "3",
        gender: "attack hellicopter",
        hobbies: ["dnd", "pokemon", "harry potter"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis.",
        friends: ["user.id2 data ", "user.id3 data ", "user.id8 data"],
        friendCircle: [
          {
            name: "dnd",
            friends: ["user.id8 data", "user.id2 data"],
          },
          {
            name: "close friends",
            friends: ["user.id2 data ", "user.id3 data ", "user.id8 data "],
          },
        ],
      },
      {
        id: 2,
        img: "http://link",
        name: "kåre oskar skjellsnes",
        age: "88",
        gender: "traktor",
        hobbies: ["dnd", "pokemon", "harry potter"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis.",
        myCalander: ["activites.id", "activites.id", "activites.id"],
        friends: ["users.id1 data", "users.id3 data", "users.id8 data"],
        friendCircle: [
          {
            name: "dnd",
            friends: ["user.id8 data", "user.id2 data"],
          },
          {
            name: "close friends",
            friends: ["user.id2 data", "user.id3 data", "user.id8 data"],
          },
        ],
      },
    ],
    calendar: {
      activities: [
        {
          id: 1,
          name: "Svømming",
          description: "Svømming med venner",
          place: "Domus Athletica Oslo",
          date: "22-03-2024",
          time: "10:30",
          availableSpots: 6,
          price: null,
          keywords: ["swimming", "sport"],
          whoCanJoin: [
            {
              venner: true,
              vennersVenner: false,
              offentlig: false,
            },
          ],
          age: {
            min: 16,
            max: 25,
          },
          contactInfo: "Ring meg på 12345678",
        },
        {
          id: 2,
          name: "fluggletitting",
          description: "look at goverment spies",
          place: "Domus Athletica Oslo",
          date: "22-03-2024",
          time: "10:30",
          availableSpots: 6,
          price: null,
          keywords: ["birb"],
          whoCanJoin: [
            {
              venner: true,
              vennersVenner: false,
              offentlig: false,
            },
          ],
          age: {
            min: 18,
            max: 25,
          },
          contactInfo: "Ring meg på 12345678",
        },
      ],
    },
  },
};

