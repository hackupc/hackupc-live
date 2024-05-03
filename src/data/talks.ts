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
  readonly isSecret?: boolean
  readonly isWorkshop?: boolean
}

export const talks: Talk[] = [
  {
    title: 'Boost your project with GenAI and Vector Search',
    description: '',
    location: 'A5001',
    company: 'InterSystems',
    // videoUrl: '',
    start: '3/5/2024 22:30',
    end: '3/5/2024 23:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isSecret: true,
  },
  {
    title: 'Galileo Mastermind: Develop a platform for crowdsourcing GNSS data to analyse Galileo signals',
    description: '',
    location: 'A5002',
    company: 'ESA',
    // videoUrl: '',
    start: '3/5/2024 22:30',
    end: '3/5/2024 23:00',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
    isSecret: true,
  },
  {
    title: 'Building Better Hacks, Faster with GitHub Copilot',
    description: '',
    location: 'A5001',
    company: 'GitHub',
    // videoUrl: '',
    start: '3/5/2024 23:00',
    end: '3/5/2024 23:30',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isWorkshop: true,
    isSecret: true,
  },
  {
    title: 'IoT Observability with Grafana',
    //description: '',
    location: 'A5001',
    company: 'Grafana',
    // videoUrl: '',
    start: '3/5/2024 23:30',
    end: '4/5/2024 00:00',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
    isSecret: true,
  },
  {
    title: 'From Padawan to Jedi: Essential Tactics for First-Time Participants by a Jedi Master',
    description: '',
    location: 'A5002',
    company: 'BlueTab',
    // videoUrl: '',
    start: '3/5/2024 23:00',
    end: '3/5/2024 23:30',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isWorkshop: true,
    isSecret: true,
  },
  {
    title: 'Creating Meaningful Travel Encounters',
    //description: '',
    location: 'A5002',
    company: 'TravelPerk',
    // videoUrl: '',
    start: '3/5/2024 23:30',
    end: '4/5/2024 00:00',
    streamLink: 'https://www.youtube.com/c/HackersUPC',
    isSecret: true,
  },
  {
    title: 'AI Work Assistant. Don\'t click, tell me what you need.',
    description: '',
    location: 'A5001',
    company: 'Seidor',
    // videoUrl: '',
    start: '4/5/2024 00:00',
    end: '4/5/2024 00:30',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isSecret: true,
  },
  {
    title: 'AI-driven Clothing Similarity: Enhancing Fashion Ecommerce',
    //description: '',
    location: 'A5002',
    company: 'InditexTech',
    // videoUrl: '',
    start: '4/5/2024 00:00',
    end: '4/5/2024 00:30',
    isSecret: true,
  },
  {
    title: 'Scaping data for fun and profit',
    description: '',
    location: 'A5001',
    company: 'Flanks',
    // videoUrl: '',
    start: '4/5/2024 10:00',
    end: '4/5/2024 10:30',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isWorkshop: true,
    isSecret: true,
  },
  {
    title: 'Beyond the Code: Detecting AI Content',
    description: '',
    location: 'A5001',
    company: 'Vueling',
    // videoUrl: '',
    start: '4/5/2024 10:30',
    end: '4/5/2024 11:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isWorkshop: true,
    isSecret: true,
  },
  {
    title: 'Hands-on workshop on InterSystems IRIS Vector Search',
    description: '',
    location: 'A5001',
    company: 'InterSystems',
    // videoUrl: '',
    start: '4/5/2024 11:30',
    end: '4/5/2024 12:00',
    streamLink: 'https://www.twitch.tv/hackersupc',
    isWorkshop: true,
    isSecret: true,
  },
]
