export interface Mentor {
  readonly title: string
  readonly description: string
  readonly slack: string
  readonly linkedin: string
}

export const mentors: Mentor[] = [
  {
    title: 'Mentor 1',
    description: `I am a mentor.`,
    slack: 'mentor1',
    linkedin: 'mentor1',
  },
  {
    title: 'Mentor 2',
    description: `I am a mentor.`,
    slack: 'mentor2',
    linkedin: 'mentor2',
  },
  {
    title: 'Mentor 3',
    description: `I am a mentor.`,
    slack: 'mentor3',
    linkedin: 'mentor3',
  },
]
