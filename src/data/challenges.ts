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
    company: 'FAKE ACME',
    title: 'FAKE Hack the crash',
    description: 'FAKE  _am a_ ~~tast~~ **test**.\n\n New line',
    prize: '3D printed trphy',
    channel: 'acme',
  },
  {
    company: 'FAKE ACME 2',
    title: 'FAKE Hack the crash',
    description: 'FAKE  _am a_ ~~tast~~ **test**.\n\n New line',
    prize: '3D printed trphy',
    channel: 'acme',
  },
]
