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
  countdownStart: '12/5/2023 21:00',
  countdownEnd: '14/5/2023 9:00',
  submitDeadline: '14/5/2023 9:00',
  events: [
    {
      id: 'checkin',
      physicalLocation: {
        text: 'A5-A6 Underground corridor',
        mapId: 'indoors',
      },
      title: 'Hacker Registration',
      start: '12/5/2023 16:00',
      end: '12/5/2023 18:45',
      description: /* markdown */ `
Register to the hackathon and get your swag! Make sure to have ready your **ID and your QR ticket**
`,
    },
    {
      id: 'baggage',
      physicalLocation: {
        text: 'A5E',
        mapId: 'indoors',
      },
      title: 'Baggage Registration',
      start: '12/5/2023 16:00',
      description: /* markdown */ `
Bring your luggage or the stuff you don't need to be with you and we will store them securely.
`,
    },
    {
      id: 'opening',
      physicalLocation: {
        text: 'Vertex auditorium',
        mapId: 'campus',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      title: 'Opening Ceremony',
      start: '12/5/2023 19:00',
      end: '12/5/2023 20:30',
      description: /* markdown */ `Join us on YouTube & Vertex auditorium to be aware of everything that will be happening this weekend`,
    },
    {
      id: 'dinner-1',
      title: 'Dinner: Poke',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      start: '12/5/2023 20:30',
      end: '12/5/2023 23:00',
      description: /* markdown */ `Tired? Recharge your energies here before start coding with one **poke bowl**!`,
    },
    {
      id: 'hacking-starts',
      title: 'Hacking Starts!!!',
      start: '12/5/2023 21:00',
      description: /* markdown */ `Hacking time starts now!! 👨‍💻👩‍💻`,
    },
    {
      id: 'biene-catcher',
      title: 'BieneCatcher',
      start: '12/5/2023 21:00',
      physicalLocation: {
        text: 'All the buildings',
        mapId: 'indoors',
      },
      description: /* markdown */ `Get ready to put your scavenger skills to the test in our exciting BieneCatcher game, where you'll hunt down hidden Bienes throughout the HackUPC venue. Will you be able to find them all before anyone else?`,
    },
    {
      id: 'activity-team-building',
      title: 'Team Building',
      physicalLocation: {
        text: 'A4002',
        mapId: 'indoors',
      },
      start: '12/5/2023 21:30',
      end: '12/5/2023 22:30',
      description: /* markdown */ `Are you looking for a team or for teammates? Join us on the Team Building activity to find someone to work with`,
    },
    {
      id: 'talk-optiver',
      title: 'Making Markets to Make a Change',
      start: '12/5/2023 22:30',
      end: '12/5/2023 23:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `Come to know more of the Optiver Challenge`,
    },
    {
      id: 'talk-bunge',
      title: 'Mission to Improve the Agribusiness Markets',
      start: '12/5/2023 22:30',
      end: '12/5/2023 23:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ `Come to know more of the Bunge Challenge`,
    },
    {
      id: 'talk-hp',
      title: 'HP Inventory & Sales Forecasting',
      start: '12/5/2023 23:00',
      end: '12/5/2023 23:30',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ `Come to know more of the HP Challenge`,
    },
    {
      id: 'talk-strands',
      title: 'Build the bank experience you need.',
      start: '12/5/2023 23:00',
      end: '12/5/2023 23:15',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ `Come to know more of the Strands Challenge`,
    },
    {
      id: 'talk-midokura',
      title: 'Fine-tuning Computer Vision models for edge AI applications',
      start: '12/5/2023 23:30',
      end: '13/5/2023 00:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'talk-restb',
      title: 'Deep Learning: breaking the ice',
      start: '13/5/2023 00:00',
      end: '14/5/2023 00:30',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'midnight-1',
      title: 'Midnight Snack',
      start: '13/5/2023 1:30',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      end: '13/5/2023 2:30',
      description: /* markdown */ `Let's take a break and enjoy the power of **waffles** at night time 🌙`,
    },
    {
      id: 'thegame-starts',
      title: 'TheGame',
      start: '13/5/2023 3:14',
      description: /* markdown */ `Enjoy, game is easy!`,
    },
    {
      id: 'breakfast-1',
      title: 'Breakfast',
      start: '13/5/2023 9:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      end: '13/5/2023 10:30',
      description: /* markdown */ `
Good morning! Your meal is waiting 4 u ♥
`,
    },
    {
      id: 'showers-1',
      title: 'Showers',
      start: '13/5/2023 9:30',
      physicalLocation: {
        text: 'Gym',
        mapId: 'indoors',
      },
      end: '13/5/2023 11:30',
      description: /* markdown */ `Time to take a shower! 🚿 💧`,
    },
    {
      id: 'workshop-optiver',
      title: 'How does technology impact trading?',
      start: '13/5/2023 10:00',
      end: '13/5/2023 11:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'workshop-hp',
      title:
        'Artificial Intelligence Project Portfolio at HP Large Format Printing',
      start: '13/5/2023 10:00',
      end: '13/5/2023 10:30',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'workshop-bunge',
      title: 'Digital revolution in Agribusiness',
      start: '13/5/2023 10:30',
      end: '13/5/2023 11:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'workshop-vueling',
      title: 'The Quanting Framework',
      start: '13/5/2023 11:00',
      end: '13/5/2023 11:30',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'workshop-ithinkupc',
      title: 'Build and AI powered APP',
      start: '13/5/2023 11:00',
      end: '13/5/2023 11:30',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'cup-stacking',
      title: 'Cup Stacking by MLH',
      start: '13/5/2023 11:30',
      end: '13/5/2023 12:30',
      physicalLocation: {
        text: 'A4105',
        mapId: 'indoors',
      },
      description: /* markdown */ `Are you ready to put your dexterity to the test? Join our Cup Stacking challenge, where you'll race against another team to build the tallest tower using only cups.`,
    },
    {
      id: 'lunch-1',
      title: 'Lunch: paellada',
      start: '13/5/2023 13:00',
      end: '13/5/2023 14:30',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      description: /* markdown */ `What a better way to recharge batteries than with a tasty **paella**! 🥘`,
    },
    {
      id: 'dodgeball',
      title: 'Dodgeball',
      start: '13/5/2023 16:00',
      end: '13/5/2023 17:00',
      physicalLocation: {
        text: 'Dodgeball battle field',
        mapId: 'indoors',
      },
      description: /* markdown */ `Are you ready to duck, dive and dodge? Come join our epic Dodge Ball tournament where you'll compete in 4 vs 4 matches. Bring your A-team and let the balls fly!`,
    },
    {
      id: 'optiver-area',
      title: 'Optiver Networking time',
      start: '13/5/2023 17:00',
      end: '13/5/2023 18:00',
      physicalLocation: {
        text: 'A4104',
        mapId: 'indoors',
      },
      description: /* markdown */ `_Secret content! Come after the opening ceremony_`,
    },
    {
      id: 'showers-2',
      title: 'Showers',
      start: '13/5/2023 17:00',
      physicalLocation: {
        text: 'Gym',
        mapId: 'indoors',
      },
      end: '13/5/2023 19:00',
      description: /* markdown */ `Time to take a shower! 🚿 💧`,
    },
    {
      id: 'hackathon-org',
      title: 'Hackathon Organizers MeetUp',
      start: '13/5/2023 18:00',
      end: '13/5/2023 19:00',
      physicalLocation: {
        text: 'A4105',
        mapId: 'indoors',
      },
      description: /* markdown */ `Are you planning to organize a hackathon or already organizing one? Meet them and share your thoughts!`,
    },
    {
      id: 'lego-tournment',
      title: 'Lego Tournament',
      start: '13/5/2023 19:00',
      end: '13/5/2023 20:00',
      physicalLocation: {
        text: 'A4105',
        mapId: 'indoors',
      },
      description: /* markdown */ `Get your Lego skills ready and come compete in our epic tournament where you'll both create and have a blast trying some seriously cool builds!`,
    },
    {
      id: 'dinner-2',
      title: 'Dinner: pizza time',
      start: '13/5/2023 20:00',
      end: '13/5/2023 21:30',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      description: /* markdown */ `The famous **pizza** dinner has arrived! 🍕🍕 Come and enjoy your favorite meal 😉`,
    },
    {
      id: 'slideshare-show',
      title: 'Slideshare Show',
      start: '13/5/2023 22:00',
      end: '13/5/2023 23:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      description: /* markdown */ `Come to the most unpredictable and hilarious activity of the night, where presenters will have to incorporate a surprise element into their presentations, and you get to choose the winner!`,
    },
    {
      id: 'sticker-xchange',
      title: 'StickerXchange',
      start: '14/5/2023 00:00',
      end: '14/5/2023 00:30',
      physicalLocation: {
        text: 'Cafeteria (A5106)',
        mapId: 'indoors',
      },
      description: /* markdown */ `Join us for our StickerXchange event, where you can trade stickers with other hackers and add some awesome new additions to your collection!`,
    },
    {
      id: 'nerf-gun',
      title: 'EPIC NERF GUNS BATTLE',
      start: '14/5/2023 00:30',
      end: '14/5/2023 03:00',
      physicalLocation: {
        text: 'A4101 & A4102',
        mapId: 'indoors',
      },
      description: /* markdown */ `Get ready to unleash your inner warrior in our ultimate Nerf Gun Battle, where you'll fight your opponents in a chaotic yet strategical war zone.`,
    },
    {
      id: 'midnight-2',
      title: 'Midnight Snack',
      start: '14/5/2023 00:30',
      end: '14/5/2023 02:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      description: /* markdown */ `Charging batteries 🔋🔋🔋. Come and try our **yoghurt** that will give you the energy to finish your project`,
    },
    {
      id: 'thegame-ends',
      title: 'TheGame ends',
      start: '14/5/2023 03:14',
      description: /* markdown */ `ohh... The game just finished. But your skills leveled up!`,
    },
    {
      id: 'breakfast-2',
      title: 'Breakfast',
      start: '14/5/2023 9:00',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      end: '14/5/2023 10:30',
      description: /* markdown */ `Start the day with your energies at MAX level!`,
    },
    {
      id: 'hacking-ends',
      title: 'Hacking ends',
      start: '14/5/2023 9:00',
      description: /* markdown */ `Remember to submit a valid project, on time, on Devpost to be eligible for prizes 🏆 or travel reimbursement ✈ !`,
    },
    {
      id: 'showers-3',
      title: 'Showers',
      start: '14/5/2023 9:00',
      physicalLocation: {
        text: 'Gym',
        mapId: 'indoors',
      },
      end: '13/5/2023 11:00',
      description: /* markdown */ `Time to take a shower! 🚿 💧`,
    },
    {
      id: 'demo',
      title: 'Demo time',
      start: '14/5/2023 10:15',
      end: '14/5/2023 13:15',
      physicalLocation: {
        text: 'A3 & A4 building',
        mapId: 'indoors',
      },
      description: /* markdown */ `Follow the instructions in order to demo your project for the sponsor and for the HackUPC team`,
    },
    {
      id: 'lunch-2',
      title: 'Lunch: Hot Dogs',
      start: '14/5/2023 13:45',
      end: '14/5/2023 14:45',
      physicalLocation: {
        text: 'A3 & A4 building',
        mapId: 'indoors',
      },
      description: /* markdown */ `Recovery all your energy!! Good job this weekend, you deserve this **hot dogs and hamburgers**`,
    },
    {
      id: 'closing',
      title: 'Closing ceremony',
      start: '14/5/2023 15:30',
      end: '14/5/2023 17:30',
      physicalLocation: {
        text: 'Vertex auditorium',
        mapId: 'campus',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      description: /* markdown */ `Join us on YouTube & Vèrtex auditorium for the closing ceremony, where we’ll wrap up HackUPC 2023 and the winners will be announced! 🥇🥈🥉🥇🥈🥉`,
    },
  ],
}
