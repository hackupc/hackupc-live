type MarkdownString = string // Accepts Markdown

export interface Talk {
  title: string
  description?: MarkdownString
  where: string
  speaker: string
  videoUrl?: string
  start: string
  end?: string
  streamLink?: string
}

export const talks: Talk[] = [
  {
    title: 'Intro to Git and Github',
    description: 'TBD',
    where: 'TBD',
    speaker: 'HackUPC team',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'InfoJobs',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    /*description: /* markdown */ /*`
4 years ago we launched the version of APIs and Webhooks for Typeform, giving developers the tools
necessary to build apps and automation around data collection.
For HackUPC we are releasing a new tool that will let developers build apps directly inside Typeform UI.
This workshop is an introduction to this new framework. No previous experience needed, first-timers welcome.
`,*/
    description: 'TBD',
    where: 'TBD',
    speaker: 'InfoJobs',
    //videoUrl: 'https://www.youtube.com/watch?v=h2lTZOoifM0',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'HP',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'MundiMoto',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'RestB',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'Huawei',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'TBD',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'TBD',
    description: 'TBD',
    where: 'TBD',
    speaker: 'TBD',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
]
