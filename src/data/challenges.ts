export interface Challenge {
  title: string
  company: string
  videoUrl?: string
  channel: string
  prize: string
  description: string
}

export const challenges: Challenge[] = [
  {
    company: 'McKinsey & Company',
    title: 'FAKE Hack the crash',
    description: 'FAKE Help us predict damage inflicted in traffic accidents',
    prize: 'Nintendo switch lite',
    channel: 'mckensey',
  },
  {
    company: 'HP',
    title: 'FAKE Talk to 3D Print!',
    description:
      'FAKE Are you able to create a 3D geometry that we can print by voice commands? Your creativity is welcomed, unleash your imagination to test your skills! Come to our booth A5 1st floor our through Slack',
    prize: '4 Soprocket',
    channel: 'hp',
  },
]
