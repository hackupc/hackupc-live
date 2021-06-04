export interface Talk {
  title: string
  description?: string // Accepts Markdown
  speaker: string
  videoUrl?: string
  start: string
  end?: string
}

export const talks: Talk[] = [
  {
    title: '*startup = &hackathon',
    description: /* markdown */ `
Why should you consider building a startup?
Why is it easier than you think?
After university, what paths can you take that nobody is telling you?
`,
    speaker: 'HappyScribe',
    videoUrl:
      'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '14/5/2021 22:30',
    end: '14/5/2021 23:00',
  },
  {
    title: 'Introduction to Typeform Developer Kit',
    description: /* markdown */ `
4 years ago we launched the version of APIs and Webhooks for Typeform, giving developers the tools
necessary to build apps and automation around data collection.
For HackUPC we are releasing a new tool that will let developers build apps directly inside Typeform UI.
This workshop is an introduction to this new framework. No previous experience needed, first-timers welcome.
`,
    speaker: 'Typeform',
    videoUrl: 'https://www.youtube.com/watch?v=h2lTZOoifM0',
    start: '14/5/2021 23:00',
    end: '14/5/2021 23:30',
  },
  {
    title: 'A Deep Learning solution to improve match-making in InfoJobs',
    description: /* markdown */ `
As the machine learning team of InfoJobs we developed a high-accuracy end-to-end system that
normalizes the "job title" field of job offers and résumée entries posted on our site.
The solution is based on a deep learning model that uses NLP and transfer learning methods.
The obtained solution has been crucial in increasing the matching between applicants and vacancies in our site.
`,
    speaker: 'InfoJobs',
    videoUrl:
      'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '14/5/2021 21:30',
    end: '14/5/2021 22:30',
  },
]
