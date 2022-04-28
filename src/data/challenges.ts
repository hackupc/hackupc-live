type MarkdownString = string // Accepts Markdown
export interface Challenge {
  readonly title: string
  readonly company: string
  readonly videoUrl?: string
  readonly channel: string
  readonly prize: string
  readonly description?: MarkdownString
}

export const challenges: Challenge[] = [
  {
    title: 'TBD',
    company: 'InfoJobs',
    // videoUrl: 'https://youtu.be/IG_bN195bwI',
    description: 'TBD',
    prize: 'TBD',
    channel: '#infojobs',
  },
  {
    company: 'HP',
    title: 'TBD',
    //videoUrl: 'https://youtu.be/oCBjbd9ATJk',
    description: 'TBD',
    prize: 'TBD',
    channel: '#hp',
  },
  {
    company: 'Mundimoto',
    title: 'TBD',
    //videoUrl: 'https://youtu.be/UIrA73wtBAY',
    description: 'TBD',
    prize: 'TBD',
    channel: '#mundimoto',
  },
  {
    company: 'McKinsey & company',
    title: 'TBD',
    //videoUrl: 'https://www.youtube.com/watch?v=20mE0Sl5h74',
    description: 'TBD',
    prize: 'TBD',
    channel: '#mckinsey',
  },
  {
    company: 'IThinkUPC',
    title: 'TBD',
    //description: /* markdown */ `[DataSet](https://mega.nz/folder/uzYWibST#7QY4JO5GWNof22euRnqTQA)`,
    //videoUrl: 'https://www.youtube.com/watch?v=KeG4q7_dLFo',
    description: 'TBD',
    prize: 'TBD',
    channel: '#ithinkupc',
  },
  {
    company: 'RestB',
    title: 'TBD',
    //videoUrl: 'https://youtu.be/80k_JJcQfwo',
    description: 'TBD',
    prize: 'TBD',
    channel: '#restb',
  },
  {
    company: 'Huawei',
    title: 'TBD',
    //videoUrl: 'https://youtu.be/80k_JJcQfwo',
    description: 'TBD',
    prize: 'TBD',
    channel: '#huawei',
  },
  {
    company: 'Capchase',
    title: 'TBD',
    //videoUrl: 'https://youtu.be/80k_JJcQfwo',
    description: 'TBD',
    prize: 'TBD',
    channel: '#capchase',
  },
]
