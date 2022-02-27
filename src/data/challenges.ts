type MarkdownString = string // Accepts Markdown
export interface Challenge {
  title: string
  company: string
  videoUrl?: string
  channel: string
  prize: string
  description?: MarkdownString
}

export const challenges: Challenge[] = [
  {
    title: 'Build your dreamed tech-InfoJobs Build your perfect job seeker',
    company: 'InfoJobs',
    videoUrl: 'https://youtu.be/IG_bN195bwI',
    prize:
      'TTTTEEEEESSSSTTTT A nintendo switch lite for each winning team member.',
    channel: '#infojobs',
  },
  {
    company: 'Typeform',
    title: 'Build an app with Typeform Developer Kit',
    videoUrl: 'https://youtu.be/oCBjbd9ATJk',
    prize: '250€ Amazon Voucher for each winning team member.',
    channel: '#typeform',
  },
  {
    company: 'IThinkUPC',
    title: 'Build the app everybody will love at your university',
    videoUrl: 'https://youtu.be/UIrA73wtBAY',
    prize:
      '1st Prize: 4 Google Nest Hub, 2nd Prize: 4 Amazon Fire TV stick 2021, 3rd Prize: 4 Google Nest Mini.',
    channel: '#ithinkupc',
  },
  {
    company: 'UPC-FIB',
    title: 'Inclusive STEAM Engagement',
    videoUrl: 'https://www.youtube.com/watch?v=20mE0Sl5h74',
    prize: '1 Amazon 100€ gift card for each winning team member.',
    channel: '#upc-fib',
  },
  {
    company: 'Floorfy',
    title: "Virtual tours, best usage of Floorfy's datasets",
    description: /* markdown */ `
[DataSet](https://mega.nz/folder/uzYWibST#7QY4JO5GWNof22euRnqTQA)
`,
    videoUrl: 'https://www.youtube.com/watch?v=KeG4q7_dLFo',
    prize: 'A Ricoh SC2 camera for each member of the team.',
    channel: '#floorfy',
  },
  {
    company: 'Thoughtworks',
    title: 'Edu4All',
    videoUrl: 'https://youtu.be/80k_JJcQfwo',
    prize: 'A projector for each member of the team.',
    channel: '#thoughtworks',
  },
]
