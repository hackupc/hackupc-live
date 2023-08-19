type MarkdownString = string // Accepts Markdown
export interface Challenge {
  readonly title: string
  readonly companyEncrypted: string
  readonly company: string
  readonly videoUrl?: string
  readonly channel: string
  readonly prize: string
  readonly description?: MarkdownString
}

export const challenges: Challenge[] = [
  {
    title: 'Making Markets to Make a Change',
    companyEncrypted: 'FpDvGOwa9WVr4riRPXIFmg',
    company: 'Optiver',
    videoUrl: 'https://youtu.be/R2B7QNEAH3c',
    //description: /* markdown */ ``,
    prize: '1st: An iPhone 13 for each member of the team',
    channel: 'optiver',
  },
  {
    companyEncrypted: 'OJ4LCmSBly+3JmL7P7/V1w',
    company: 'HP',
    title: 'HP Inventory & Sales Forecasting',
    videoUrl: 'https://youtu.be/BDkC4cb-bb8',
    //description: /* markdown */ ``,
    prize: '1st: 4 HP Laptop 15, 2nd: 4 Hyper X Keyboard, 3rd: 4 Omen Sweater',
    channel: 'hp',
  },
  {
    companyEncrypted: 'TZABPAEwSHar7SLMqkDmuA',
    company: 'Bunge',
    title: 'Mission to Improve the Agribusiness Markets',
    //description: /* markdown */ ``,
    videoUrl: 'https://youtu.be/pSKdCW41170',
    prize: 'Each member wins a Meta Quest 2',
    channel: 'bunge',
  },
  {
    companyEncrypted: 'IXZ07J9j2ognub5PeUbefg',
    company: 'Restb.ai',
    title: 'Most innovative usage of our data',
    videoUrl: 'https://youtu.be/r-G4yDL2ZpA',
    //description: /* markdown */ ``,
    prize: 'Travel anywhere up to 200€ for each team member.',
    channel: 'restbai',
  },
  {
    companyEncrypted: 'OKOOYK8p3e6ixR3KQ05l8Q',
    company: 'Strands',
    title: 'Build the bank experience you need.',
    videoUrl: 'https://youtu.be/GkmVmZwSygo',
    //description: /* markdown */ ``,
    prize:
      '1 Windows 11 Pro, 12GB RAM 256GB ROM Ιntel Celeron J4125 Mini, 2 New Kindle Paperwhite, 3 Amazon voucher 100€',
    channel: 'strands',
  },
  {
    companyEncrypted: '+5CxQKLiDwgwXZEp3ePpFw',
    company: 'Vueling',
    title: 'Flight Fest',
    videoUrl: 'https://youtu.be/AlECmra8YAo',
    //description: /* markdown */ ``,
    prize:
      'The prize for the winners will be a round trip flight to any Vueling destination for the whole team',
    channel: 'vueling',
  },
  {
    companyEncrypted: 'MZHdrReJtUe0TWxiyNwFTA',
    company: 'Capchase',
    title: 'SQLillo Royale',
    videoUrl: 'https://youtu.be/dMfcT_hs_rU',
    //description: /* markdown */ ``,
    prize: '1. Impresora 3D, 2. Set Arduino, 3. Amazon Voucher 100EUR',
    channel: 'capchase',
  },
  {
    companyEncrypted: '8KmM/3LZtmAsuR4vnOPTvg',
    company: 'IThinkUPC',
    title: 'Build an AI Powered App',
    videoUrl: 'https://youtu.be/QmfVvugVLjA',
    //description: /* markdown */ ``,
    prize:
      '1rt Amazon Voucher 100€, 2nd Amazon Voucher 50€, 3rd Amazon Voucher 30€',
    channel: 'ithinkupc',
  },
]
