type MarkdownString = string // Accepts Markdown

export interface Talk {
  readonly title: string
  readonly description?: MarkdownString
  readonly location: string
  readonly company?: string
  readonly speaker?: string
  readonly videoUrl?: string
  readonly start: string
  readonly end?: string
  readonly streamLink?: string
}

export const talks: Talk[] = [
  {
    title: 'Making Markets to Make a Change',
    description: '',
    location: 'A5001',
    company: 'Optiver',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 22:30',
    end: '12/5/2023 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Mission to Improve the Agribusiness Markets',
    description: '',
    location: 'A5002',
    company: 'Bunge',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 22:30',
    end: '12/5/2023 23:00',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
  },
  {
    title: 'HP Inventory & Sales Forecasting',
    description: '',
    location: 'A5001',
    company: 'HP',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 23:00',
    end: '12/5/2023 23:30',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Build the bank experience you need.',
    description: '',
    location: 'A5002',
    company: 'Strands',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 23:00',
    end: '12/5/2023 23:15',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
  },
  {
    title: 'Fine-tuning Computer Vision models for edge AI applications',
    description: '',
    location: 'A5001',
    company: 'Midokura',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 23:30',
    end: '13/5/2023 00:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Deep Learning: breaking the ice',
    description: '',
    location: 'A5002',
    company: 'Restb.ai',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '13/5/2023 00:00',
    end: '13/5/2023 00:30',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
  },
  {
    title: 'How does technology impact trading?',
    description: '',
    location: 'A5001',
    company: 'Optiver',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '13/5/2023 10:00',
    end: '13/5/2023 11:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title:
      'Artificial Intelligence Project Portfolio at HP Large Format Printing',
    description: '',
    location: 'A5002',
    company: 'HP',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '13/5/2023 10:00',
    end: '13/5/2023 10:30',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
  },
  {
    title: 'Digital revolution in Agribusiness',
    description: '',
    location: 'A5002',
    company: 'Bunge',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 10:30',
    end: '12/5/2023 11:00',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
  },
  {
    title: 'The Quanting Framework',
    description: '',
    location: 'A5001',
    company: 'Vueling',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 11:00',
    end: '12/5/2023 11:30',
    streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Build and AI powered APP',
    description: '',
    location: 'A5002',
    company: 'IThinkUPC',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '12/5/2023 11:00',
    end: '12/5/2023 11:30',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
  },
]
