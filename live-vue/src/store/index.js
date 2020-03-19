/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
   key: 'biene-hackupc',
   storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   canNotify: false,
   subscribed: {},
   askedSubscribeAll: false,
   currentTime: 1570820400, //Date.now() / 1000,
    days: [
         {
            "name":"Friday",
            "date":"11/10/2019",
            "events":[
               {
                  "id":"0",
                  "title":"Registration",
                  "startHour":"16:00",
                  "endHour":"18:45",
                  "locationId":"checkin",
                  "locationName":"A5-A6 Underground corridor",
                  "description":"Register to the hackathon and get your swag! Make sure to have your ID ready",
                  "startTmsp":1570802400,
                  "endTmsp":1570812300,
                  "subscribed":false
               },
               {
                  "id":"1",
                  "title":"Baggage check-in",
                  "startHour":"16:00",
                  "endHour":"18:45",
                  "locationId":"infodesk",
                  "locationName":"Info Desk",
                  "description":"Bring your baggage and we will store it for you",
                  "startTmsp":1570802400,
                  "endTmsp":1570812300,
                  "subscribed":false
               },
               {
                  "id":"2",
                  "title":"Opening Ceremony",
                  "startHour":"19:00",
                  "endHour":"21:00",
                  "locationId":"vertex",
                  "locationName":"Vèrtex",
                  "description":"Introductory talk. Meet our sponsors and discover the prizes",
                  "startTmsp":1570813200,
                  "endTmsp":1570820400,
                  "subscribed":false
               },
               {
                  "id":"3",
                  "title":"Hacking Starts",
                  "startHour":"21:00",
                  "locationId":"hacking",
                  "locationName":"Hacking rooms",
                  "description":"Ready. Set. GO!",
                  "startTmsp":1570820400,
                  "endTmsp":1570820400,
                  "subscribed":false
               },
               {
                  "id":"4",
                  "title":"Dinner",
                  "startHour":"21:00",
                  "endHour":"23:00",
                  "locationId":"meal",
                  "locationName":"Meal zone",
                  "description":"Enjoy our first meal",
                  "startTmsp":1570820400,
                  "endTmsp":1570827600,
                  "subscribed":false
               },
               {
                  "id":"5",
                  "title":"Team Building",
                  "startHour":"22:30",
                  "endHour":"23:30",
                  "locationId":"A4002",
                  "locationName":"A4002",
                  "description":"Looking for a team or new teammates?",
                  "startTmsp":1570825800,
                  "endTmsp":1570829400,
                  "subscribed":false
               },
               {
                  "id":"6",
                  "title":"[Talk] GitHub: Git & GitHub",
                  "talk":true,
                  "author":"GitHub",
                  "startHour":"22:30",
                  "endHour":"23:00",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Introduction to git and GitHub, learn the most basic commands for git and collaborate with GitHub",
                  "startTmsp":1570825800,
                  "endTmsp":1570827600,
                  "subscribed":false
               },
               {
                  "id":"7",
                  "title":"[Talk] Opentrends: Initial Brainstorming",
                  "talk":true,
                  "author":"Opentrends",
                  "startHour":"22:30",
                  "endHour":"23:00",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"Opentrends is helping you choose the right project. In our workshop we're going to implement design thinking methodologies to find your most appropiate challenge. Don't miss out!",
                  "startTmsp":1570825800,
                  "endTmsp":1570827600,
                  "subscribed":false
               },
               {
                  "id":"8",
                  "title":"[Talk] Everis: Data for good cities",
                  "talk":true,
                  "author":"Everis",
                  "startHour":"23:00",
                  "endHour":"23:30",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"More and more companies are attempting to become data-driven. Turning data into knowledge and knowledge into intelligent actions is crucial for digital transformation. Let's see some interesting examples of how to do it for a good purpose.",
                  "startTmsp":1570827600,
                  "endTmsp":1570829400,
                  "subscribed":false
               },
               {
                  "id":"9",
                  "title":"[Talk] Facebook: Crush your coding interview workshop",
                  "talk":true,
                  "author":"Facebook",
                  "startHour":"23:00",
                  "endHour":"23:30",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"Never experienced a technical interview before? Want to extra-prepare for your next one? Technical interviews are one of the major hurdles of landing an awesome internship or full time career. Open for currently enrolled University students, come learn about the common pitfalls and tips to help you crush your next coding interview! Learn how to put your best foot forward at this Crush Your Coding Interview Workshop.",
                  "startTmsp":1570827600,
                  "endTmsp":1570829400,
                  "subscribed":false
               },
               {
                  "id":"10",
                  "title":"[Talk] HP: The future of 3D Printing",
                  "talk":true,
                  "author":"HP",
                  "startHour":"23:30",
                  "endHour":"23:59",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Discover one of the most trend manufacturing technology with HP.",
                  "startTmsp":1570829400,
                  "endTmsp":1570831140,
                  "subscribed":false
               },
               {
                  "id":"11",
                  "title":"[Talk] Vueling: Are you Redis?",
                  "talk":true,
                  "author":"Vueling",
                  "startHour":"23:30",
                  "endHour":"23:59",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"You want to know how to improve your applications? Then cache could be a valid approach, learn how Redis is used in a big company like Vueling.",
                  "startTmsp":1570829400,
                  "endTmsp":1570831140,
                  "subscribed":false
               }
            ],
            "startTmsp":1570744800,
            "endTmsp":1570831200
         },
         {
            "name":"Saturday",
            "date":"12/10/2019",
            "events":[
               {
                  "id":"12",
                  "title":"[Talk] Typeform: APIs for first timers",
                  "talk":true,
                  "author":"Typeform",
                  "startHour":"00:00",
                  "endHour":"00:30",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Is this your first hackathon? You heard the word API or SDK prounounced many times during the opening ceremony but you have no idea what it means? Then you should come to this workshop to discover the beautiful world of APIs 🤩. In this talk we will cover the basic principles of APIs, how to call them, talk about security and showcase of examples of APIs you could use in your project.",
                  "startTmsp":1570831200,
                  "endTmsp":1570833000,
                  "subscribed":false
               },
               {
                  "id":"13",
                  "title":"[Talk] dasilvacontin: Programmatic Art & Online Multiplayer Gamedev 101",
                  "talk":true,
                  "author":"dasilvacontin",
                  "startHour":"00:30",
                  "endHour":"01:00",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"Visual journey through the creating an MOG. Some programmatic art tricks and techniques too. HTML+JS+Node.js",
                  "startTmsp":1570833000,
                  "endTmsp":1570834800,
                  "subscribed":false
               },
               {
                  "id":"14",
                  "title":"Midnight Snacks",
                  "startHour":"01:30",
                  "endHour":"02:30",
                  "locationId":"meal",
                  "locationName":"Meal Zone",
                  "description":"Feeling hungry? Come get some DIY yogurts",
                  "startTmsp":1570836600,
                  "endTmsp":1570840200,
                  "subscribed":false
               },
               {
                  "id":"15",
                  "title":"The Game starts",
                  "startHour":"03:14",
                  "description":"Hello dear Hacker",
                  "startTmsp":1570842840,
                  "endTmsp":1570842840,
                  "subscribed":false
               },
               {
                  "id":"16",
                  "title":"Breakfast",
                  "startHour":"08:00",
                  "endHour":"09:00",
                  "locationId":"meal",
                  "locationName":"Meal Zone",
                  "description":"Come get some energizing breakfast",
                  "startTmsp":1570860000,
                  "endTmsp":1570863600,
                  "subscribed":false
               },
               {
                  "id":"17",
                  "title":"Showers",
                  "startHour":"09:15",
                  "endHour":"11:00",
                  "locationId":"showers",
                  "locationName":"Sports Center",
                  "description":"Don't forget to bring your towel",
                  "startTmsp":1570864500,
                  "endTmsp":1570870800,
                  "subscribed":false
               },
               {
                  "id":"18",
                  "title":"[Talk] Skyscanner: Microservices at Scale",
                  "talk":true,
                  "author":"Skyscanner",
                  "startHour":"10:00",
                  "endHour":"10:30",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Building a world class engineering service up and running from scratch in less than 10 minutes, fancy having a look at how we do it?",
                  "startTmsp":1570867200,
                  "endTmsp":1570869000,
                  "subscribed":false
               },
               {
                  "id":"19",
                  "title":"[Talk] McKinsey & Company: Clean code for Analytics",
                  "talk":true,
                  "author":"McKinsey & Company",
                  "startHour":"11:00",
                  "endHour":"11:30",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Keeping solutions scalable is key, even if it is just a model to be run by others. This session will go about how to ensure anyone can understand what you code.",
                  "startTmsp":1570870800,
                  "endTmsp":1570872600,
                  "subscribed":false
               },
               {
                  "id":"19",
                  "title":"[Talk] McKinsey & Company: Implementing R projects as libraries",
                  "talk":true,
                  "author":"McKinsey & Company",
                  "startHour":"11:30",
                  "endHour":"12:00",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Learn how to structure a project as an R library by one of our expert coders!",
                  "startTmsp":1570872600,
                  "endTmsp":1570874400,
                  "subscribed":false
               },
               {
                  "id":"20",
                  "title":"Lunch",
                  "startHour":"13:00",
                  "endHour":"14:30",
                  "locationId":"meal",
                  "locationName":"Meal zone",
                  "description":"Come and get some delicious paella",
                  "startTmsp":1570878000,
                  "endTmsp":1570883400,
                  "subscribed":false
               },
               {
                  "id":"21",
                  "title":"[Talk] GitHub: Meetup Hacktoberfest",
                  "talk":true,
                  "author":"GitHub",
                  "startHour":"16:00",
                  "endHour":"17:00",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Cheers",
                  "startTmsp":1570888800,
                  "endTmsp":1570892400,
                  "subscribed":false
               },
               {
                  "id":"22",
                  "title":"[Talk] Hackers@UPC: How to organize your hackathon",
                  "talk":true,
                  "author":"Hackers@UPC",
                  "startHour":"17:00",
                  "endHour":"18:00",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"Would you like to organize a hackathon? Come listen some of our experiences and tips. Don't be shy, we're here to help you!",
                  "startTmsp":1570892400,
                  "endTmsp":1570896000,
                  "subscribed":false
               },
               {
                  "id":"23",
                  "title":"McKinsey & Company: Robot building",
                  "activity":true,
                  "author":"McKinsey & Company",
                  "startHour":"17:00",
                  "endHour":"17:30",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"Nothing to learn, just come for a fun time building a robot that won’t fall off a cliff!.",
                  "startTmsp":1570892400,
                  "endTmsp":1570894200,
                  "subscribed":false
               },
               {
                  "id":"24",
                  "title":"Itequia: Lego Tournament",
                  "author":"Itequia",
                  "startHour":"18:00",
                  "endHour":"18:30",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"Call to \"Master Builders\", capable of building anything from their imagination without instructions",
                  "startTmsp":1570896000,
                  "endTmsp":1570897800,
                  "subscribed":false
               },
               {
                  "id":"25",
                  "title":"iThinkUPC: Rubik Tournament",
                  "author":"iThinkUPC",
                  "startHour":"19:00",
                  "endHour":"20:30",
                  "locationId":"A5002",
                  "locationName":"A5002",
                  "description":"Show your skills solving Rubik cubes!",
                  "startTmsp":1570899600,
                  "endTmsp":1570905000,
                  "subscribed":false
               },
               {
                  "id":"26",
                  "title":"Dinner",
                  "startHour":"20:00",
                  "endHour":"21:30",
                  "locationId":"meal",
                  "locationName":"Meal Zone",
                  "description":"PIZZA TIME",
                  "startTmsp":1570903200,
                  "endTmsp":1570908600,
                  "subscribed":false
               },
               {
                  "id":"27",
                  "title":"Photocall: Join the last survivors",
                  "startHour":"21:30",
                  "endHour":"22:00",
                  "locationId":"infodesk",
                  "locationName":"Under Info Desk",
                  "description":"Have you already seen our photocall? Come and get a souvenir photo from our photographers.",
                  "startTmsp":1570908600,
                  "endTmsp":1570910400,
                  "subscribed":false
               },
               {
                  "id":"28",
                  "title":"SlideShare Show",
                  "startHour":"22:00",
                  "endHour":"23:00",
                  "locationId":"A5001",
                  "locationName":"A5001",
                  "description":"A hackers favourite game. Are you ready to improvise?",
                  "startTmsp":1570910400,
                  "endTmsp":1570914000,
                  "subscribed":false
               }
            ],
            "startTmsp":1570831200,
            "endTmsp":1570910400
         },
         {
            "name":"Sunday",
            "date":"13/10/2019",
            "events":[
               {
                  "id":"29",
                  "title":"Sticker Exchange",
                  "startHour":"00:00",
                  "endHour":"01:00",
                  "locationId":"A5105",
                  "locationName":"Cafeteria (A5105)",
                  "description":"You give stickers, you receive stickers. Ez pz",
                  "startTmsp":1570917600,
                  "endTmsp":1570921200,
                  "subscribed":false
               },
               {
                  "id":"30",
                  "title":"Midnight Snack",
                  "startHour":"01:00",
                  "endHour":"02:00",
                  "locationId":"meal",
                  "locationName":"Meal Zone",
                  "description":"It's been more than 24 hours. Get some sweet waffles to keep yourself motivated",
                  "startTmsp":1570921200,
                  "endTmsp":1570924800,
                  "subscribed":false
               },
               {
                  "id":"31",
                  "title":"EPIC NERF GUNS BATTLE",
                  "startHour":"01:00",
                  "endHour":"03:00",
                  "locationId":"A4101",
                  "locationName":"A4101/2",
                  "description":"Come and play a HackUPC classic. Nerf guns, 2 teams, a full classroom. Will you miss it?",
                  "startTmsp":1570921200,
                  "endTmsp":1570928400,
                  "subscribed":false
               },
               {
                  "id":"32",
                  "title":"The Game ends",
                  "startHour":"03:14",
                  "description":"You lost",
                  "startTmsp":1570929240,
                  "endTmsp":1570929240,
                  "subscribed":false
               },
               {
                  "id":"33",
                  "title":"Breakfast",
                  "startHour":"08:00",
                  "endHour":"09:00",
                  "locationId":"meal",
                  "locationName":"Meal Zone",
                  "description":"Come charge your energies for the last hours of hacking",
                  "startTmsp":1570946400,
                  "endTmsp":1570950000,
                  "subscribed":false
               },
               {
                  "id":"34",
                  "title":"Hack submissions",
                  "startHour":"08:00",
                  "endHour":"09:15",
                  "locationName":"Devpost",
                  "description":"Submit your project in our Devpost!",
                  "startTmsp":1570946400,
                  "endTmsp":1570950900,
                  "subscribed":false
               },
               {
                  "id":"35",
                  "title":"Hacking ends",
                  "startHour":"09:00",
                  "description":"SUBMIT YOUR PROJECT BEFORE IT'S TOO LATE",
                  "startTmsp":1570950000,
                  "endTmsp":1570950000,
                  "subscribed":false
               },
               {
                  "id":"36",
                  "title":"Showers",
                  "startHour":"09:15",
                  "endHour":"11:00",
                  "locationId":"showers",
                  "locationName":"Sports Center",
                  "description":"Relax a bit before the demos start",
                  "startTmsp":1570950900,
                  "endTmsp":1570957200,
                  "subscribed":false
               },
               {
                  "id":"37",
                  "title":"Hack Demos",
                  "startHour":"10:15",
                  "endHour":"13:15",
                  "locationId":"A4",
                  "locationName":"A3 & A4",
                  "description":"It's demo time!",
                  "startTmsp":1570954500,
                  "endTmsp":1570965300,
                  "subscribed":false
               },
               {
                  "id":"38",
                  "title":"Lunch",
                  "startHour":"13:00",
                  "endHour":"14:00",
                  "locationId":"meal",
                  "locationName":"Meal Zone",
                  "description":"Mmmmmmm... frankfurt...",
                  "startTmsp":1570964400,
                  "endTmsp":1570968000,
                  "subscribed":false
               },
               {
                  "id":"39",
                  "title":"Closing Ceremony",
                  "startHour":"15:30",
                  "endHour":"17:00",
                  "locationId":"vertex",
                  "locationName":"Vèrtex",
                  "description":"And the winners are... Come watch the finalists and winners!",
                  "startTmsp":1570973400,
                  "endTmsp":1570978800,
                  "subscribed":false
               },
               {
                  "id":"40",
                  "title":"Ciao Hackers",
                  "startHour":"17:00",
                  "description":"It's been a pleasure, see you next time",
                  "startTmsp":1570978800,
                  "endTmsp":1570978800,
                  "subscribed":false
               }
            ],
            "startTmsp":1570917600,
            "endTmsp":1570996800
         }
      ]
   },
   getters: {},
   mutations: {
      toggleSubscribe (state, value) {
         if (value in state.subscribed) {
            state.subscribed[value] = !state.subscribed[value]
         } else {
            state.subscribed[value] = true
         }
      },
      canNotify (state, value) {
         state.canNotify = value
      },
      isSubscribedAll (state, value) {
         state.askedSubscribeAll = value
      },
   },
   actions: {
      toggleSubscribe ({ commit }, value) {
         commit('toggleSubscribe', value)
      },
      canNotify ({ commit }, value) {
         commit('canNotify', value)
      },
      isSubscribedAll ({ commit }, value) {
         commit('isSubscribedAll', value)
      },
   },
   plugins: [vuexPersist.plugin],
});
