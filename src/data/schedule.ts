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
      start: '12/5/2023 16:00',
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
      start: '12/5/2023 19:00',
      end: '12/5/2023 20:30',
      description: /* markdown */ `
Join us on youtube & Vertex to be aware of everything that will be happening this weekend
`,
    },
    {
      id: 'dinner',
      title: 'Dinner',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      start: '12/5/2023 20:30',
      end: '12/5/2023 23:00',
      description: /* markdown */ `
Tired? Recharge your energies here!

`,
    },
    {
      id: 'hacking-starts',
      title: 'Hacking Starts!!!',
      start: '12/5/2023 21:00',
      description: /* markdown */ `
Hacking time is starting now!! 👨‍💻👩‍💻
`,
    },
    {
      id: 'biene-catcher',
      title: 'BieneCatcher',
      onlineLocation: {
        text: 'Slack',
        url: 'https://hackupc2023.slack.com',
        icon: 'slack',
      },
      start: '12/5/2023 21:00',
      description: /* markdown */ `
Get ready to put your scavenger skills to the test in our exciting BieneCatcher game, where you'll hunt down hidden Bienes throughout the HackUPC venue. Will you be able to find them all before anyone else? 
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
        url: 'https://hackupc2023.slack.com',
        icon: 'slack',
      },
      start: '12/5/2023 21:30',
      end: '12/5/2023 22:30',
      description: /* markdown */ `
Are you looking for a team or for teammates?
Join us on the Team Building activity at #team-building
`,
    },
    {
      id: 'talk-optiver',
      title: '[Talk] Optiver',
      start: '12/5/2023 22:30',
      end: '12/5/2023 23:00',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'talk-bunge',
      title: '[Talk] Bunge',
      start: '12/5/2023 22:30',
      end: '12/5/2023 23:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'talk-hp',
      title: '[Talk] HP',
      start: '12/5/2023 23:00',
      end: '12/5/2023 23:30',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'talk-ithinkupc',
      title: '[Talk] IThinkUPC',
      start: '12/5/2023 23:00',
      end: '12/5/2023 23:30',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'talk-strands',
      title: '[Talk] Strands',
      start: '12/5/2023 23:30',
      end: '12/5/2023 23:45',
      physicalLocation: {
        text: 'A5001',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'talk-midokura',
      title: '[Talk] Midokura',
      start: '12/5/2023 23:30',
      end: '13/5/2023 00:00',
      physicalLocation: {
        text: 'A5002',
        mapId: 'indoors',
      },
      onlineLocation: {
        text: 'Youtube',
        url: 'https://www.youtube.com/c/HackersUPC',
        icon: 'other',
      },
      description: /* markdown */ ``,
    },
    {
      id: 'Midnight-Snack',
      title: 'Midnight Snack',
      start: '13/5/2023 1:30',
      physicalLocation: {
        text: 'Meal Zone',
        mapId: 'indoors',
      },
      end: '13/5/2023 2:30',
      description: /* markdown */ `
Let's take a break and enjoy the power of snaks at night time 🌙
`,
    },
    {
      id: 'TheGame',
      title: 'TheGame',
      start: '13/5/2023 3:14',
      onlineLocation: {
        text: 'A5001',
        url: 'https://thegame.hackupc.com',
        icon: 'other',
      },
      description: /* markdown */ `
Enjoy, game is easy!
`,
    },
  ],
}
