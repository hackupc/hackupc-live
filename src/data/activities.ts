export interface Activity {
  title: string
  description: string // Accepts Markdown
  imageUrl?: string
}

export const activities: Activity[] = [
  {
    title: 'FAKE Nerf',
    description: 'FAKE  _am a_ ~~tast~~ **test**.\n\n New line',
  },
  {
    title: 'FAKE Nerf 2',
    description: 'FAKE  _am a_ ~~tast~~ **test**.\n\n New line',
  },
]
