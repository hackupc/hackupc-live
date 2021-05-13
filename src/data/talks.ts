export interface Talk {
  title: string
  description?: string // Accepts Markdown
  speaker: string
  videoUrl: string
}

export const talks: Talk[] = [
  {
    title: 'FAKE Avoiding unnecessary testing on children...',
    description: `
FAKE  _am a_ ~~tast~~ **test**.

New line`,
    speaker: 'Toni Soriano',
    videoUrl: 'https://www.youtube.com/embed/IN48ZgR0nGk',
  },
  {
    title: 'FAKE 2 Avoiding unnecessary testing on children... 2',
    description: `
FAKE  _am a_ ~~tast~~ **test**.

New line`,
    speaker: 'Toni Soriano',
    videoUrl: 'https://www.youtube.com/embed/IN48ZgR0nGk',
  },
]
