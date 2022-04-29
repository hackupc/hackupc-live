import type { DateFormatsTypes } from '@/services/dates'

type MarkdownString = string // Accepts Markdown

export interface RawScheduleEvent {
  id: string
  title: string
  description?: MarkdownString
  physicalLocation?: PhysicalLocation
  onlineLocation?: OnlineLocation
  start: DateFormatsTypes['date-time']
  end?: DateFormatsTypes['date-time']
}

export interface PhysicalLocation {
  text: string
  mapId: 'indoors' | 'campus' | 'judging'
}
export interface OnlineLocation {
  text: string
  url: string
  icon: 'slack' | 'twitch' | 'other' | 'youtube'
}

export interface RawSchedule {
  countdownStart: DateFormatsTypes['date-time']
  countdownEnd: DateFormatsTypes['date-time']
  submitDeadline: DateFormatsTypes['date-time']
  events: RawScheduleEvent[]
}

export const schedule: RawSchedule = {
  countdownStart: '29/4/2022 17:00',
  countdownEnd: '1/5/2022 17:00',
  submitDeadline: '1/5/2022 9:00',
  events: [
    {
      id: 'checkin',
      physicalLocation: {
        text: 'A5-A6 Underground corridor',
        mapId: 'indoors',
      },
      title: 'Hacker Registration',
      start: '29/4/2022 17:00',
      end: '29/4/2022 18:45',
      description: /* markdown */ `
Register to the hackathon and get your swag! Make sure to have your ID ready
`,
    },
    {
      id: 'baggage',
      physicalLocation: {
        text: 'A5E',
        mapId: 'indoors',
      },
      title: 'Baggage Registration',
      start: '29/4/2022 17:00',
      description: /* markdown */ `
Bring your luggage or the stuff you don't need to be with you and we will store them securely.
`,
    },
    {
      id: 'opening',
      physicalLocation: {
        text: 'Vertex',
        mapId: 'campus',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      title: 'Opening Ceremony',
      start: '29/4/2022 19:00',
      end: '29/4/2022 21:00',
      description: /* markdown */ `
Join us on youtube & Vertex to be aware of everything that will be happening this weekend
`,
    },
    {
      id: 'hacking-starts',
      title: 'Hacking Starts!!!',
      start: '29/4/2022 21:00',
      description: /* markdown */ `
Hacking time is starting now!! 👨‍💻👩‍💻
`,
    },
    {
      id: 'biene-draw',
      title: 'Draw your Biene & Quackstions',
      onlineLocation: {
        text: 'Slack',
        url: 'https://hackupc2022.slack.com',
        icon: 'slack',
      },
      start: '29/4/2022 21:00',
      description: /* markdown */ `
Create your own remix of Biene!
You can also answer out quack-stions!
`,
    },

    {
      id: 'dinner',
      title: 'Dinner',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      start: '29/4/2022 21:00',
      end: '29/4/2022 23:00',
      description: /* markdown */ `
Tired? Recharge your energies here!

`,
    },
    {
      id: 'activity-team-building',
      title: 'Team Building',
      physicalLocation: {
        text: 'A4002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Slack',
        url: 'https://hackupc2022.slack.com',
        icon: 'slack',
      },
      start: '29/4/2022 22:00',
      end: '29/4/2022 23:00',
      description: /* markdown */ `
Are you looking for a team or for teammates?
Join us on the Team Building activity at #team-building
`,
    },
    {
      id: 'intro-git',
      title: '[Talk] Intro to Git and Github',
      start: '29/4/2022 22:30',
      end: '29/4/2022 23:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `
Introduction to git and GitHub, learn the most basic commands for git and collaborate with GitHub
`,
    },
    {
      id: 'talk-infojobs',
      title:
        '[Talk] Productionizing Machine Learning models to increase your Data Scientists performance.',
      start: '29/4/2022 22:30',
      end: '29/4/2022 23:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ `
This talk explains how, in infojobs, we have modified this process to free data scientists of this duty. Freed data scientists can go back to develop the following model.
`,
    },
    {
      id: 'talk-mundimoto',
      title: '[Talk] Interviewing a company. Hire o no hire',
      start: '29/4/2022 23:00',
      end: '29/4/2022 23:30',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `
Discover the key to choose your next company.
`,
    },
    {
      id: 'talk-infojobs-2',
      title: '[Talk] Ignorance Oriented Programming',
      start: '29/4/2022 23:00',
      end: '29/4/2022 23:30',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ `
Join us on twitch! All the information on the talk is found on the talks tab
`,
    },
    {
      id: 'talk-RestbAI',
      title: '[Talk] Deep Learning: breaking the ice',
      start: '29/4/2022 23:30',
      end: '30/4/2022 00:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `
In this hands-on workshop, we will train a Deep Learning model to classify images using Python, Keras and Tensorflow.
`,
    },
    {
      id: 'talk-tdd',
      title: '[Talk] Want to code faster? Try TDD!',
      start: '29/4/2022 23:30',
      end: '30/4/2022 00:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ `
Hop into this introductory session to familiarise yourself with it and clear any doubts.
`,
    },

    {
      id: 'Midnight-Snack',
      title: 'Midnight Snack',
      start: '30/4/2022 1:30',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      end: '30/4/2022 2:00',
      description: /* markdown */ `
Let's take a break and enjoy the power of snaks at night time 🌙
`,
    },
    {
      id: 'TheGame',
      title: 'TheGame',
      start: '30/4/2022 3:14',
      onlineLocation: {
        text: 'A5001',
        url: 'https://thegame.hackupc.com',
        icon: 'other',
      },
      description: /* markdown */ `
Enjoy, game is easy!
`,
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      start: '30/4/2022 8:00',
      end: '30/4/2022 9:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      description: /* markdown */ `
Good morning! Your meal is waiting 4 u ♥
`,
    },
    {
      id: 'showers',
      title: 'Showers',
      physicalLocation: {
        text: 'Gym',
        mapId: 'campus',
      },
      start: '30/4/2022 9:15',
      end: '30/4/2022 11:00',
      description: /* markdown */ `
Time to take a shower! 🚿 💧
`,
    },
    {
      id: 'talk-huawei',
      title: '[Talk] Make development easier with Huawei Mobile Service',
      start: '30/4/2022 10:00',
      end: '30/4/2022 10:30',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      /* markdown */
      description:
        'Discover some of the main functionalities of Huawei Mobile Services that allow you to develop an app with a great user experience.',
    },
    {
      id: 'talk-hp',
      title: '[Talk] HP Virtual & Augmented Reality applications.',
      start: '30/4/2022 10:30',
      end: '30/4/2022 11:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `
In this talk, we will explain how HP use VR & AR technology to make our life better.”
`,
    },
    {
      id: 'lunch',
      title: 'Lunch: Paellada',
      start: '30/4/2022 13:00',
      end: '30/4/2022 14:30',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'campus',
      },
      description: /* markdown */ `
Join us on twitch, we will be doing a draw with the participants of the photocall! 📷
`,
    },
    //         {
    //           id: 'activity-freehand',
    //           title: 'Find the Duck',
    //           startHour: '16:00',
    //           endHour: '17:00',
    //           description: /* markdown */ `

    // `,
    //         },
    {
      id: 'showers',
      title: 'Showers',
      physicalLocation: {
        text: 'Gym',
        mapId: 'campus',
      },
      start: '30/4/2022 17:00',
      end: '30/4/2022 19:00',
      description: /* markdown */ `
Time to take a shower! 🚿 💧
`,
    },
    {
      id: 'krunker',
      title: 'Krunker',
      onlineLocation: {
        text: 'Slack',
        url: 'https://hackupc2022.slack.com',
        icon: 'slack',
      },
      start: '30/4/2022 18:00',
      end: '30/4/2022 17:00',
      description: /* markdown */ `
Reload your gun... The cyber-battle begins!
`,
    },
    {
      id: 'lego',
      title: 'Lego Tournament',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      start: '30/4/2022 19:00',
      end: '30/4/2022 20:00',
      description: /* markdown */ `
Let your imagination fly and create amazing structures!
`,
    },
    {
      id: 'dinner-2',
      title: 'Dinner: Pizza 🍕',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'campus',
      },
      start: '30/4/2022 20:00',
      end: '30/4/2022 21:30',
      description: /* markdown */ `
The famous pizza dinner has arrived! Come and enjoy your favourite meal ;)
`,
    },
    {
      id: 'slideshare',
      title: 'Slideshare Show',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      start: '30/4/2022 22:00',
      end: '30/4/2022 23:00',
      description: /* markdown */ `
Want to laugh as you have never done? Come and discover it!
`,
    },

    {
      id: 'sticker',
      title: 'StickerXchange',
      start: '1/5/2022 0:00',
      end: '1/5/2022 1:00',
      physicalLocation: {
        text: 'Cafeteria (A5106)',
        mapId: 'indoors',
      },
      description: /* markdown */ `
The most intense sticker trading
`,
    },
    {
      id: 'snack-mid-2',
      title: 'Midnight Snack',
      start: '1/5/2022 1:00',
      end: '1/5/2022 2:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'campus',
      },
      description: /* markdown */ `
Charging batteries 🔋🔋🔋
`,
    },
    {
      id: 'nerf',
      title: 'EPIC NERF GUNS BATTLE',
      start: '1/5/2022 1:00',
      end: '1/5/2022 3:00',
      physicalLocation: {
        text: 'A4101 & A4102',
        mapId: 'indoors',
      },
      description: /* markdown */ `
Come and play a HackUPC classic: Nerf guns, 2 teams, a full classroom. Will you miss it?
`,
    },
    {
      id: 'thegame-end',
      title: 'TheGame ends',
      start: '1/5/2022 3:14',
      description: /* markdown */ `
ohh... The game just finished. But your skills leveled up!
`,
    },
    {
      id: 'draw-biene-end',
      title: 'Draw your Biene ends',
      start: '1/5/2022 4:00',
      description: /* markdown */ `
Let the public vote for the best Biene
`,
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      start: '1/5/2022 8:00',
      end: '1/5/2022 9:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'campus',
      },
      description: /* markdown */ `
Start the day with your energies at MAX level!
`,
    },
    {
      id: 'hacking-submissions',
      title: 'Hack Submissions',
      start: '1/5/2022 08:00',
      end: '1/5/2022 09:15',
      onlineLocation: {
        text: 'Devpost',
        icon: 'other',
        url: 'https://hackupc-2022.devpost.com/',
      },
      description: /* markdown */ `
Submit your project in our Devpost!
`,
    },
    {
      id: 'hacking-ends',
      title: 'Hacking Ends',
      start: '1/5/2022 09:15',
      onlineLocation: {
        text: 'Devpost',
        icon: 'other',
        url: 'https://hackupc-2022.devpost.com/',
      },
      description: /* markdown */ `
Remember to submit a valid project on devpost to be elegible for prizes 🏆, swag 🎁 or credits ECTS!
`,
    },
    {
      id: 'demos',
      title: 'Demo time',
      start: '1/5/2022 10:15',
      end: '1/5/2022 13:15',
      description: /* markdown */ `
Follow the instructions in order to demo your project for the sponsor and for the HackUPC team
`,
      physicalLocation: {
        text: 'A4',
        mapId: 'judging',
      },
    },
    {
      id: 'leo-boeck',
      title: 'Lunch',
      start: '1/5/2022 13:00',
      end: '1/5/2022 14:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'campus',
      },
      description: /* markdown */ `
Mmmmmmm... frankfurt...
`,
    },
    {
      id: 'closing',
      title: 'Closing ceremony',
      start: '1/5/2022 14:30',
      end: '1/5/2022 16:30',
      physicalLocation: {
        text: 'Vèrtex',
        mapId: 'campus',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `
Join us on twitch for the closing ceremony to be aware of the winners! 🥇🥈🥉
`,
    },
  ],
}
