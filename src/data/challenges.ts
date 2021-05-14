export interface Challenge {
  title: string
  company: string
  videoUrl?: string
  channel: string
  prize: string
  description: string // Accepts Markdown
}

export const challenges: Challenge[] = [
  {
    company: '',
    title: '',
    description: `
All the challenge information will be available **after** the opening ceremony

Stay tunned you will be able to see all the information of the challenges and the prizes!
`,
    prize: '',
    channel: '',
  },
  /*{
    company: 'InfoJobs',
    title: 'Title challenge',
    description: `
FAKE  _am a_ ~~tast~~ **test**.

New line`,
    prize: 'Nintendo switch live',
    channel: '#infojobs',
  },
  {
    company: 'HappyScribe',
    title: 'Title challenge',
    description: `
FAKE  _am a_ ~~tast~~ **test**.

New line`,
    prize: '3D printed trphy',
    channel: 'acme',
  },*/
]
