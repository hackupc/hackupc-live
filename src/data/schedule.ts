type MarkdownString = string // Accepts Markdown

export interface RawScheduleEvent {
  id: string
  title: string
  description: MarkdownString
  startHour: string
  endHour?: string
  showLink?: boolean
}

export interface RawScheduleDay {
  date: string
  events: RawScheduleEvent[]
}

export interface RawSchedule {
  countdownStart: string
  countdownEnd: string
  submitDeadline: string
  days: RawScheduleDay[]
}

export const schedule: RawSchedule = {
  countdownStart: '14/5/2021 21:00',
  countdownEnd: '16/5/2021 9:00',
  submitDeadline: '16/5/2021 9:00',
  days: [
    {
      date: '14/5/2021',
      events: [
        {
          id: 'checkin',
          showLink: false,
          title: 'Hacker Registration',
          startHour: '17:00',
          endHour: '18:45',
          description: /* markdown */ `
--A5-A6 Underground corridor
`,
        },
        {
          id: 'baggage',
          showLink: false,
          title: 'Baggage Registration',
          startHour: '19:00',
          description: /* markdown */ `
Bring your pertenences to A5E, we will store them securely.
`,
        },
        {
          id: 'opening',
          showLink: true,
          title: 'Opening Ceremony',
          startHour: '19:00',
          endHour: '21:00',
          description: /* markdown */ `
Join us on twitch & Vertex to be aware of everything that will be happening this weekend
-- vertex
`,
        },
        {
          id: 'hacking-starts',
          title: 'Hacking Start!!!',
          startHour: '21:00',
          description: /* markdown */ `
Hacking time is starting now!! 👨‍💻👩‍💻
`,
        },
        {
          id: 'activity-team-building',
          title: 'Team Building',
          startHour: '22:00',
          endHour: '23:00',
          description: /* markdown */ `
Are you looking for a team or for teammates?
Join us on the Team Building activity at #team-building
`,
        },
        {
          id: 'dinner',
          title: 'Dinner',
          startHour: '21:00',
          endHour: '22:00',
          description: /* markdown */ `


`,
        },
        {
          id: 'talk-infojobs',
          showLink: true,
          title: 'A Deep Learning solution to improve match-making in InfoJobs',
          startHour: '21:30',
          endHour: '22:30',
          description: /* markdown */ `
Join us on twitch! All the information on the talk is found on the talks tab
`,
        },
        {
          id: 'talk-happyscribe',
          showLink: true,
          title: '*startup = &hackathon',
          startHour: '22:30',
          endHour: '23:00',
          description: /* markdown */ `
Join us on twitch! All the information on the talk is found on the talks tab
`,
        },
        {
          id: 'talk-typeform',
          showLink: true,
          title: 'Introduction to Typeform Developer Kit',
          startHour: '23:00',
          endHour: '23:30',
          description: /* markdown */ `
Join us on twitch! All the information on the talk is found on the talks tab
`,
        },
      ],
    },
    {
      date: '30/4/2022',
      events: [
        {
          id: 'Midnight-Snack',
          title: 'Midnight Snack',
          startHour: '1:30',
          endHour: '2:00',
          description: /* markdown */ `
Let's take a break and enjoy the power of snaks at night time 🌙
`,
        },
        {
          id: 'TheGame',
          title: 'TheGame',
          startHour: '3:14:15',
          description: /* markdown */ `
Enjoy game is easy!
`,
        },
        {
          id: 'breakfast',
          title: 'Breakfast',
          startHour: '8:00',
          endHour: '9:00',
          description: /* markdown */ `
Good morning! Your meal is waiting 4 u ♥
`,
        },
        {
          id: 'activity-slideshare',
          showLink: true,
          title: 'SlideShare Show',
          startHour: '18:00',
          endHour: '19:00',
          description: /* markdown */ `
Join us on twitch, or be part of the stream and let your imagination fly! 🎤
`,
        },
        {
          id: 'activity-draw-2',
          showLink: true,
          title: 'Draw',
          startHour: '20:00',
          endHour: '20:15',
          description: /* markdown */ `
Join us on twitch, we will be doing a draw with the participants of the photocall! 📷
`,
        },
        {
          id: 'activity-freehand',
          title: 'FreeHand activity',
          startHour: '22:00',
          endHour: '23:00',
          description: /* markdown */ `
Let's do some drawing! 🎨 Join us on #playground discord channel
`,
        },
      ],
    },
    {
      date: '16/5/2021',
      events: [
        {
          id: 'submisions',
          title: 'Hack submisions',
          startHour: '8:00',
          endHour: '9:15',
          description: /* markdown */ `
Time to submit your project on devpost! ⌛
`,
        },
        {
          id: 'hacking-ends',
          title: 'Hacking Ends',
          startHour: '09:00',
          description: /* markdown */ `
Remember to submit your project on devpost to be elegible for prizes 🏆, swag 🎁 or credits ECTS!
`,
        },
        {
          id: 'demos',
          title: 'Demo time',
          startHour: '10:15',
          endHour: '13:30',
          description: /* markdown */ `
Follow the instructions in order to demo your project for the sponsor and for HackUPC team
`,
        },
        {
          id: 'activity-draw-3',
          title: 'Draw',
          showLink: true,
          startHour: '13:30',
          endHour: '13:45',
          description: /* markdown */ `
Join us on twitch, we will be doing a draw with the participants of the photocall! 📷
Maybe you can win a pizza for lunch... 🍕
`,
        },
        {
          id: 'closing',
          showLink: true,
          title: 'Closing ceremony',
          startHour: '14:30',
          endHour: '16:30',
          description: /* markdown */ `
Join us on twitch for the closing ceremony to be aware of the winners! 🥇🥈🥉
`,
        },
      ],
    },
  ],
}
