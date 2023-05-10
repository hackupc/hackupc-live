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
    // videoUrl: 'https://youtu.be/IG_bN195bwI',
    description: /* markdown */ `Join us in our mission to improve markets! Your challenge: develop a trading algorithm to stimulate investments in firms that help build a sustainable world. Your algorithm will compete against others on our simulated exchange in real time!

If we’re really serious about achieving sustainability, making the transition to green financial markets and supporting sustainable businesses is of vital importance. As a global market maker, Optiver is fully committed to improving the access and pricing of financial products in the environmental, societal, and governance (ESG) space. By providing liquidity for these products in exchanges around the world, we make it easier and more attractive for market participants to incorporate them into their investment strategies.
    
Join us in this mission at our HackUPC challenge. You’ll be competing in real time against other participants to create an algorithm that best improves ESG product prices and can handle the pressures of a constantly changing market. You’ll be doing this in our simulated exchange Optibook, which recreates the real-world complexity of trading on a modern exchange. It’s time to collaborate and drive the momentum needed to realise a more sustainable future.
    `,
    prize: '1st: An iPhone 13 for each member of the team',
    channel: '#optiver',
  },
  {
    companyEncrypted: 'TZABPAEwSHar7SLMqkDmuA',
    company: 'Bunge',
    title: '',
    //description: /* markdown */ ``,
    //videoUrl: '',
    description: /* markdown */ ``,
    prize: '',
    channel: '#bunge',
  },
  {
    companyEncrypted: 'OJ4LCmSBly+3JmL7P7/V1w',
    company: 'HP',
    title: 'HP Inventory & Sales Forecasting',
    //videoUrl: '',
    description: /* markdown */ `
Attention all students! Are you ready to put your problem-solving skills to the test and make a real impact on the world? Then join us at HP Inc's exciting hackathon event!


We're looking for bright minds who are up for the challenge of forecasting the sales and inventory of different products for the next 13 weeks. This is a real case problem that we're facing at HP and we need your help to solve it.


By participating in this hackathon, you will have the opportunity to showcase your talents to a leading company in the technology industry and learn a lot about time series forecasting. Plus, the top teams will have the chance to win amazing prizes!


So what are you waiting for? Sign up now and show us what you're made of! Let's tackle this challenge together and make a difference for HP Inc.
`,
    prize: '1st: 4 HP Laptop 15, 2nd: 4 Hyper X Keyboard, 3rd: 4 Omen Sweater',
    channel: '#hp',
  },
  {
    companyEncrypted: '8KmM/3LZtmAsuR4vnOPTvg',
    company: 'IThinkUPC',
    title: '',
    //videoUrl: '',
    description: /* markdown */ `
`,
    prize: '',
    channel: '#ithinkupc',
  },
  {
    companyEncrypted: 'OKOOYK8p3e6ixR3KQ05l8Q',
    company: 'Strands',
    title: '',
    //videoUrl: '',
    description: /* markdown */ `
`,
    prize: '',
    channel: '#strands',
  },
  {
    companyEncrypted: '+5CxQKLiDwgwXZEp3ePpFw',
    company: 'Vueling',
    title: '',
    //videoUrl: '',
    description: /* markdown */ `
`,
    prize:
      'The prize for the winners will be a round trip flight to any Vueling destination for the whole team',
    channel: '#vueling',
  },
  {
    companyEncrypted: 'MZHdrReJtUe0TWxiyNwFTA',
    company: 'Capchase',
    title: 'SQLillo Royale - Programmable Battle Royale',
    //videoUrl: '',
    description: /* markdown */ `
`,
    prize: '',
    channel: '#capchase',
  },
  {
    companyEncrypted: 'IXZ07J9j2ognub5PeUbefg',
    company: 'Restb.ai',
    title: 'Most innovative usage of our data',
    //videoUrl: '',
    description: /* markdown */ `
Take advantage of our 800k Real Estate properties dataset and create your project using the visual insights extracted from our Computer Vision solutions. Our data includes information obtained from our classification solutions, regression analysis, and a broad collection of object and feature detection models. In addition, you have free access to our APIs so you can be as creative as you wish! To get a free API key come to visit us at our booth; we promise we are really friendly and would love to chat with you about anything that comes to your mind! Spoiler: you'll get a free T-shirt if you come by.`,
    prize: 'Travel anywhere up to 200€ for each team member.',
    channel: '#restbai',
  },
]
