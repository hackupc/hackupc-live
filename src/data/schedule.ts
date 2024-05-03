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
  countdownStart: '03/05/2024 21:00',
  countdownEnd: '05/05/2024 09:00',
  submitDeadline: '05/05/2024 09:00',
  events: [
    {
      id: 'checkin',
      physicalLocation: {
        text: 'Check-in zone (A5/A6)',
        mapId: 'campus',
      },
      title: '📝 Check in',
      start: '03/05/2024 16:00',
      end: '03/05/2024 18:45',
      description: /* markdown */ ` Register to the hackathon and get your swag! Make sure to have ready your **ID and your QR ticket** to be fast!`,
    },
    {
      id: 'baggage-drop',
      physicalLocation: {
        text: 'InfoDesk',
        mapId: 'indoors',
      },
      title: '🛄 Baggage registration',
      start: '03/05/2024 16:00',
      description: /* markdown */ `Bring your luggage or the stuff you don't need to be with you and we will store them securely. You can pick them up at any time during the event.`,
    },
    {
      id: 'opening',
      physicalLocation: {
        text: 'Vertex',
        mapId: 'campus',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      title: '🗣️ Opening ceremony',
      start: '03/05/2024 19:00',
      end: '03/05/2024 20:30',
      description: /* markdown */ `Do you want to know everything what will happen during the weekend? Come to the Vertex, if there is no place in the Auditorium, we have an overflow room but you can also watch it online! Don't miss it!`,
    },
    {
      id: 'dinner1',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🥪 Dinner',
      start: '03/05/2024 20:30',
      end: '03/05/2024 22:30',
      description: /* markdown */ `Are you hungry? We have prepared a delicious **warm bocadillos** for you! [More information](/meals)`,
    },
    {
      id: 'hacking-starts',
      title: '🚀 Hacking starts',
      start: '03/05/2024 21:00',
      description: /* markdown */ `The countdown starts now! You have 36 hours to develop whatever you want!`,
    },
    {
      id: 'find-the-bienes',
      physicalLocation: {
        text: 'Hacking area',
        mapId: 'indoors',
      },
      title: '🐝 Find The Biene',
      start: '03/05/2024 21:00',
      description: /* markdown */ `You can start looking for bienes around the venue! There are 24 hidden bienes. [More information](/talks)`,
    },
    {
      id: 'team-building',
      physicalLocation: {
        text: 'A4002',
        mapId: 'indoors',
      },
      title: '🫂 Team building',
      start: '03/05/2024 21:30',
      end: '03/05/2024 22:30',
      description: /* markdown */ `Are you looking for a team or for teammates? Join us on the Team Building activity to find someone to work with.`,
    },
    {
      id: 'challenge-talk-1',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ InterSystems talk',
      start: '03/05/2024 22:30',
      end: '03/05/2024 23:00',
      description: /* markdown */ `Come to discover more about the challenge! [More information](/talks)`,
    },
    {
      id: 'challenge-talk-2',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      title: '🗣️ ESA talk',
      start: '03/05/2024 22:30',
      end: '03/05/2024 23:00',
      description: /* markdown */ `Come to discover more about the challenge! [More information](/talks)`,
    },
    {
      id: 'photocall',
      physicalLocation: {
        text: 'Photocall',
        mapId: 'indoors',
      },
      title: '📸️ Take a picture in the photocall',
      start: '03/05/2024 23:00',
      description: /* markdown */ `Our photographers will be there for some time to take you the best picture! [More information](/activities) Don't worry, it will be available for you all weekend!`,
    },
    {
      id: 'workshop-1',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ Workshop Github!',
      start: '03/05/2024 23:00',
      end: '03/05/2024 23:30',
      description: /* markdown */ `Learn about cool stuff in this workshop! [More information](/talks)`,
    },
    {
      id: 'challenge-talk-3',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      title: '🗣️ Grafana talk',
      start: '03/05/2024 23:00',
      end: '03/05/2024 23:30',
      description: /* markdown */ `Come to discover more about the challenge! [More information](/talks)`,
    },
    {
      id: 'workshop-2',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ Workshop BlueTab!',
      start: '03/05/2024 23:30',
      end: '04/05/2024 00:00',
      description: /* markdown */ `Learn about cool stuff in this workshop! [More information](/talks)`,
    },
    {
      id: 'challenge-talk-4',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      title: '🗣️ TravelPerk talk',
      start: '03/05/2024 23:30',
      end: '04/05/2024 00:00',
      description: /* markdown */ `Come to discover more about the challenge! [More information](/talks)`,
    },
    {
      id: 'challenge-talk-5',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ Seidor talk',
      start: '04/05/2024 00:00',
      end: '04/05/2024 00:30',
      description: /* markdown */ `Come to discover more about the challenge! [More information](/talks)`,
    },
    {
      id: 'challenge-talk-6',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      title: '🗣️ InditexTech talk',
      start: '04/05/2024 00:00',
      end: '04/05/2024 00:30',
      description: /* markdown */ `Come to discover more about the challenge! [More information](/talks)`,
    },
    {
      id: 'midnight-snack1',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🧇 Midnight snack',
      start: '04/05/2024 01:30',
      end: '04/05/2024 02:30',
      description: /* markdown */ `Take a break and enjoy the power of the *waffles* at night time!! [More information](/meals)`,
    },
    {
      id: 'the-game',
      title: '🧑🏽‍💻 THE GAME',
      start: '04/05/2024 03:14',
      description: /* markdown */ `Enjoy, the game is easy!`,
    },
    {
      id: 'breakfast1',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🥐 Breakfast',
      start: '04/05/2024 09:00',
      end: '04/05/2024 10:30',
      description: /* markdown */ `Rise and shine!! Breakfast is ready for you! [More information](/meals)`,
    },
    {
      id: 'shower1',
      physicalLocation: {
        text: 'Gym',
        mapId: 'campus',
      },
      title: '🚿 Shower time',
      start: '04/05/2024 09:30',
      end: '04/05/2024 11:30',
      description: /* markdown */ `Hard night of coding? Take a shower, feel fresh and continue with a good work!`,
    },
    {
      id: 'workshop-3',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ Flanks Workshop!',
      start: '04/05/2024 10:00',
      end: '04/05/2024 10:30',
      description: /* markdown */ `Learn about cool stuff in this workshop! [More information](/talks)`,
    },
    {
      id: 'workshop-4',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ Vueling Workshop!',
      start: '04/05/2024 10:30',
      end: '04/05/2024 11:00',
      description: /* markdown */ `Learn about cool stuff in this workshop! [More information](/talks)`,
    },
    {
      id: 'workshop-5',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Twitch',
        url: 'https://www.twitch.tv/hackersupc',
        icon: 'twitch',
      },
      title: '🗣️ InterSystems Workshop!',
      start: '04/05/2024 11:00',
      end: '04/05/2024 11:30',
      description: /* markdown */ `Learn about cool stuff in this workshop! [More information](/talks)`,
    },
    {
      id: 'workshop-6',
      physicalLocation: {
        text: 'A4101-102',
        mapId: 'indoors',
      },
      title: '🏆 WikiRace',
      start: '04/05/2024 12:00',
      end: '04/05/2024 13:00',
      description: /* markdown */ `How fast can you be? Join us in the WikiRace! [More information](/activities)`,
    },
    {
      id: 'lunch1',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🥘 Lunch',
      start: '04/05/2024 13:00',
      end: '04/05/2024 14:30',
      description: /* markdown */ `Recharge your batteries with a delicious **paella**!  [More information](/meals)`,
    },
    {
      id: 'dodgeball',
      physicalLocation: {
        text: 'Dodgeball battlefield',
        mapId: 'indoors',
      },
      title: '🏐 Dodgeball',
      start: '04/05/2024 16:00',
      end: '04/05/2024 17:00',
      description: /* markdown */ `Want to stretch your legs? Join us in the dodgeball battlefield! [More information](/activities)`,
    },
    {
      id: 'find-the-ducks',
      physicalLocation: {
        text: 'Hacking area',
        mapId: 'indoors',
      },
      title: '🦆 Rubber duck finding',
      start: '04/05/2024 16:00',
      description: /* markdown */ `Quack! [More information](/activities)`,
    },
    {
      id: 'shower2',
      physicalLocation: {
        text: 'Gym',
        mapId: 'campus',
      },
      title: '🚿 Shower time',
      start: '04/05/2024 17:00',
      end: '04/05/2024 19:00',
      description: /* markdown */ `Hard day of coding? Take a shower and feel fresh and continue with a good work!`,
    },
    {
      id: 'cup-stacking',
      physicalLocation: {
        text: 'A4103',
        mapId: 'indoors',
      },
      title: '🥤Cup stacking',
      start: '04/05/2024 17:30',
      end: '04/05/2024 18:30',
      description: /* markdown */ `Join MLH and build the tallest tower of cups! [More information](/activities)`,
    },
    {
      id: 'lego',
      physicalLocation: {
        text: 'A4101-102',
        mapId: 'indoors',
      },
      title: '🏗️ Lego',
      start: '04/05/2024 19:00',
      end: '04/05/2024 20:00',
      description: /* markdown */ `How creative can you be with random legos? Join us in the Lego battle! [More information](/activities)`,
    },
    {
      id: 'dinner2',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🍕 Dinner',
      start: '04/05/2024 20:00',
      end: '04/05/2024 21:30',
      description: /* markdown */ `Hard day? It's normal after 24 hours coding... you deserve a really good dinner! **PIZZA TIME** [More information](/meals)`,
    },
    {
      id: 'slideshare-show',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      title: '🎤 Slideshare show',
      start: '04/05/2024 22:00',
      end: '04/05/2024 23:00',
      description: /* markdown */ `Do you dare to present a slide presentation you have never seen before? [More information](/activities)`,
    },
    {
      id: 'slideshare-show',
      physicalLocation: {
        text: 'Cafeteria (A5106)',
        mapId: 'indoors',
      },
      title: '🤝🏼 StickerXchange',
      start: '05/05/2024 00:00',
      end: '05/05/2024 00:30',
      description: /* markdown */ `Want to find new stickers for your laptop? Come to met new people at the cafeteria! [More information](/activities)`,
    },
    {
      id: 'nerf-gun',
      physicalLocation: {
        text: 'A4101-102',
        mapId: 'indoors',
      },
      title: '🔫 Nerf gun battle',
      start: '05/05/2024 00:30',
      end: '05/05/2024 03:00',
      description: /* markdown */ `Our most famous game is here! Fight time at Nerf battlefield [More information](/activities)`,
    },
    {
      id: 'midnight-snack2',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🥣 Midnight snack',
      start: '05/05/2024 00:30',
      end: '04/05/2024 02:00',
      description: /* markdown */ `Come one! Last night! Last sprint! Recharge your batteries with a energetic **yogurt**! [More information](/meals)`,
    },
    {
      id: 'the-game-ends',
      title: '🧑🏽‍💻 THE GAME ENDS',
      start: '05/05/2024 03:14',
      description: /* markdown */ `Ohh... The game just finished. But your skills leveled up!`,
    },
    {
      id: 'hacking-ends',
      title: '😮‍💨 Hacking ends',
      start: '05/05/2024 09:00',
      description: /* markdown */ `Remember to submit a valid project, on time, on Devpost to be eligible for prizes 🏆 or travel reimbursement 🛫`,
    },
    {
      id: 'breakfast2',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🥐 Breakfast',
      start: '05/05/2024 09:00',
      end: '05/05/2024 10:30',
      description: /* markdown */ `Rise and shine!! The last breakfast is ready for you before demoing your project! [More information](/meals)`,
    },
    {
      id: 'shower3',
      physicalLocation: {
        text: 'Gym',
        mapId: 'campus',
      },
      title: '🚿 Shower time',
      start: '05/05/2024 09:00',
      end: '05/05/2024 11:00',
      description: /* markdown */ `Coding time it's over! Take a shower and feel fresh to do a great demo!`,
    },
    {
      id: 'demo-fair',
      physicalLocation: {
        text: 'A3 & A4 buildings',
        mapId: 'judging',
      },
      title: '🧑🏽‍⚖️ Demo time',
      start: '05/05/2024 10:15',
      end: '05/05/2024 13:15',
      description: /* markdown */ `Show our judges what you have been working on! Follow the instructions on slack to know where to go! [More information](/rules/judging)`,
    },
    {
      id: 'lunch2',
      physicalLocation: {
        text: 'Meals zone',
        mapId: 'indoors',
      },
      title: '🌭 Lunch',
      start: '05/05/2024 13:45',
      end: '05/05/2024 14:45',
      description: /* markdown */ `All is done!! Enjoy the **frankfurts** as the last lunch of the event before going to the closing ceremony! [More information](/meals)`,
    },
    {
      id: 'closing',
      physicalLocation: {
        text: 'Vertex',
        mapId: 'campus',
      },
      onlineLocation: {
        text: 'YouTube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'youtube',
      },
      title: '🗣️ Closing ceremony',
      start: '05/05/2024 15:30',
      end: '05/05/2024 17:30',
      description: /* markdown */ `Want to know how the event went? Just join us on YouTube & Vèrtex auditorium for the closing ceremony, where we’ll wrap up HackUPC 2023 and the winners will be announced! 🥇🥈🥉`,
    },
    {
      id: 'goodbye',
      title: '👋🏼 See you soon!',
      start: '05/05/2024 17:30',
      description: /* markdown */ `Hope you had a great time at HackUPC! We hope to see you soon in future editions! 🚀`,
    },
  ],
}
