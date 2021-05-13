export interface Talk {
  title: string
  description?: string // Accepts Markdown
  speaker: string
  videoUrl: string
  time: string
}

export const talks: Talk[] = [
  {
    title: '*startup = &hackathon',
    description: `
Why should you consider building a startup? Why is it easier than you think? After university, what paths can you take that nobody is telling you?`,
    speaker: 'HappyScribe',
    time: 'Friday from 10:30 PM to 11:00 PM (UTC+2)',
    videoUrl: 'https://www.youtube.com/embed/IN48ZgR0nGk',
  },
  {
    title: 'Introduction to Typeform Developer Kit',
    description: `
4 years ago we launched the version of APIs and Webhooks for Typeform, giving developers the tools necessary to build apps and automation around data collection. For HackUPC we are releasing a new tool that will let developers build apps directly inside Typeform UI. This workshop is an introduction to this new framework. No previous experience needed, first-timers welcome.`,
    speaker: 'Typeform',
    time: 'Friday from 11:00 PM to 11:30 PM (UTC+2)',
    videoUrl: 'https://www.youtube.com/embed/IN48ZgR0nGk',
  },
  {
    title: 'A Deep Learning solution to improve match-making in InfoJobs',
    description: `
TBD`,
    speaker: 'InfoJobs',
    time: 'Friday from 09:30 PM to 10:30 PM (UTC+2)',
    videoUrl: '',
  },
]
