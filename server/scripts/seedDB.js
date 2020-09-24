const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");

// This file empties the Alert collection and inserts the alerts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ctanondb"
);


const alertSeed = 

[
  {
    line: "Red",
    station: 'Harrison',
    category: "Indecent Exposure",
    description: "I saw an ass crack at Harrison",
    votes: -8,
    cleared: 14,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Blue",
    station: 'Diversey',
    category: "John Wayne Gacy's Ghost",
    description: "I'm like 99% I just saw him at Diversey",
    votes: 122,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Red",
    station: 'Granville',
    category: "Delayed Train",
    description: "We've been standing at between Thorndale and Granville for 10 mins",
    votes: 10,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Blue",
    station: 'Rosemont',
    category: "Unwelcomed physical proximity",
    description: "Man in faded Bulls Jacket breathed down my next all the way from Jefferson Park to Rosemont",
    votes: 1,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Purple Express",
    station: 'Belmont',
    category: "Indecent exposure",
    description: "This woman exposed her ankles on the train",
    votes: -13,
    cleared: 14,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Green",
    station: 'Morgan',
    category: "Police Activity",
    description: "They tazed an angry Russian man on the steps Morgan",
    votes: 43,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Green",
    station: 'Pulaski',
    category: "Inappropriate or sexual comments",
    description: "This lady asked me if I wanted to 'dig her 'well' outside of Pulaski... yikes. Wearing pink sweatpants with 'JUICY' on the butt",
    votes: 2,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Brown",
    station: 'Southport',
    category: "Inappropriate or sexual comments",
    description: "I was asked by a guy at Southport if I liked the way he smelled!! What!",
    votes: 7,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Brown",
    station: 'Kimball',
    category: "Verbal or physical threat(s)",
    description: "A guy at Kimball threatened to stab me if I didn't give him my orange mocha frappacino",
    votes: 17,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Brown",
    station: 'Kimball',
    category: "Suspicious Activity",
    description: "Gasoline fight at Kimball",
    votes: 69,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Yellow",
    station: 'Oakton-Skokie',
    category: "Police Activity",
    description: "Massive bank heist occured and they hopped on the train. Police is frisking everyone >:[",
    votes: 20,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Yellow",
    station: 'Howard',
    category: "Passenger Incident",
    description: "Someone got trampled at the Howard stop",
    votes: 15,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Yellow",
    station: 'Dempster-Skokie',
    category: "Delayed Train",
    description: "At the skokie stop and trains like 20 mins late :/",
    votes: 2,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Pink",
    station: 'Kedzie',
    category: "Obscene gestures",
    description: "got the bird from a homeless guy at the kedzie stop",
    votes: -5,
    cleared: 14,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Purple Express",
    category: "Inappropriate or sexual comments",
    description: "bunch of high schoolers cat calling while going to the beach",
    votes: 5,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Purple Express",
    station: 'Clark/Lake',
    category: "Unwelcomed physical proximity",
    description: "classic purple line completely packed during rush hour. smells like pits out here.",
    votes: 52,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Purple",
    station: 'Noyes',
    category: "Inappropriate photographing/filming",
    description: "some kid took their parents phone and is going around taking pictures of everyone.",
    votes: -2,
    cleared: 13,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Purple",
    station: 'Howard',
    category: "Sexual advances",
    description: "middle of the afternoon and a homeless guy is blackout hitting on everyone in this train.",
    votes: 22,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Orange",
    station: 'Roosevelt',
    category: "Indecent exposure",
    description: "kids these day on the way to their beach are showing wayy too much ankle.",
    votes: 1,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  },
  {
    line: "Orange",
    station: 'Pulaski',
    category: "Police Activity",
    description: "not sure whats going down at midway but the all trains to midway have stopped short of there.",
    votes: 22,
    cleared: 0,
    dateTime: moment().format("YYYYMMDDHHmmss"),
    voted: false,
    hidden: false
  }
]




db.Alert
  .remove({})
  .then(() => db.Alert.collection.insertMany(alertSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




