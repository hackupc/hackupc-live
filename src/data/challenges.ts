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
    title:
      'Create solutions that make InfoJobs a more attractive job portal for IT profiles',
    company: 'InfoJobs',
    // videoUrl: 'https://youtu.be/IG_bN195bwI',
    description: /* markdown */ `
We encourage you to develop a solution that would make InfoJobs a more attractive job portal for IT profiles, by mixing state of art technology and using a dataset consisting of job offers and applications. We want to change the user perception and become a portal that is considered as both innovative and efficient.

Our challenge is that we are a generalist portal and we are currently offering the same product to all users (whether you are a software developer or a truck driver). Our product is not customized according to the user characteristics (apart from our "recommended offers" which are based on the user's previous behavior on the site). Help us to change this generalist perception with innovative and daring ideas that make InfoJobs a portal for a professional like you.
`,
    prize:
      '1st  Drone with 4k camera\n2nd, streaming set: Professional microphone, gamer headset and ring light.\n3rd, €50 Amazon voucher',
    channel: '#infojobs',
  },
  {
    company: 'IThinkUPC',
    title: "Let's PLAY",
    //description: /* markdown */ `[DataSet](https://mega.nz/folder/uzYWibST#7QY4JO5GWNof22euRnqTQA)`,
    //videoUrl: 'https://www.youtube.com/watch?v=KeG4q7_dLFo',
    description: /* markdown */ `
Something that helps people in future hackathons to take a break from their
coding work and have some fun.

_No rules. Free topic._

What are we looking for:
- Something simple
- As said, any kind of game works. But better if based on resolving a
challenging problem or situation.
- With a short play time
- A web based application, to play mostly from your phone

What we don't need (although you can use it if you want):
- Sophisticated interfaces or graphic engines
- Keeping profiles, scores or any other
- Any specific technology or framework. Use what you feel comfortable with.

What would be nice:
- Some kind of collaborative or one-vs-one feature
`,
    prize:
      '1st Amazon Voucher 100€, 2nd Amazon Voucher 50€, 3rd Amazon Voucher 30 € (for each team member) ',
    channel: '#ithinkupc',
  },
  {
    company: 'Mundimoto',
    title: 'The best use for our dataset!',
    //videoUrl: 'https://youtu.be/UIrA73wtBAY',
    description: /* markdown */ `
You will have a list of tons of motorbikes and their information; we expect you to create something amazing. For example, a bot that recommends similar bikes to the one you already like; A neural network that prices motorbikes based on the brand, model, and kilometers; An algorithm to identify a motorbike's brand and model based on an image. These are some ideas you can implement, but we welcome and appreciate any ideas on what you can do with the dataset we provide!
`,
    prize: '1st price: iPad, 2nd price: Electric Scooter',
    channel: '#mundimoto',
  },
  {
    company: 'McKinsey & company',
    title: 'When science meets business - The reality of a Data Scientist',
    //videoUrl: 'https://www.youtube.com/watch?v=20mE0Sl5h74',
    description: /* markdown */ `
In this challenge you will become a Data Scientist at McKinsey and you will resolve a real-life problem by applying state-of-art Machine Learning techniques to solve a very challenging issue. You will go far beyond data and aim to find real solutions that you will have to present as if you were presenting it to a client
`,
    prize:
      "Travel with your team! You'll have the chance to win a 3-day trip to one of the European capitals (travel and hotel covered for all the team members).",
    channel: '#mckinsey',
  },
  {
    company: 'HP',
    title:
      'Create a virtual collaboration environment, unleash your imagination!',
    //videoUrl: 'https://youtu.be/oCBjbd9ATJk',
    description: /* markdown */ `
We encourage you to create a Collaboration environment or virtual communication app using VR (Virtual Reality) or AR(Augmented Reality) or any type of device you can imagine. The idea is that you can create a virtual collaboration platform/environment that enables remote meetings.

Avatars are welcome, Unleash your imagination!
`,
    prize: 'HP Sprocket for each team member',
    channel: '#hp',
  },
  {
    company: 'Restb.ai',
    title: 'Most disruptive use of Restb.ai API',
    //videoUrl: 'https://youtu.be/80k_JJcQfwo',
    description: /* markdown */ `
Build your project using one (or more) of our available AI Computer Vision APIs. From Real Estate CV classification solutions to a broad collection of object and features detection models. Our API is waiting for you!
To get a free API key come visit us at our booth; we promise we are really friendly and would love to chat with you about anything that comes to your mind! For more details, please check our [Github](https://github.com/restbai/hackupc-2022).
`,
    prize: '1 Xiaomi Redmi Watch 2 Lite GL for each team member.',
    channel: '#restb',
  },
  {
    company: 'Huawei',
    title: 'Hack app development with Huawei HMS',
    //videoUrl: 'https://youtu.be/80k_JJcQfwo',
    description: /* markdown */ `
In Huawei, we love innovation in hardware and software. Thanks to HMS, we set the app development to the next level. Are you keen on developing apps? How fast can you develop an app with analytics and push notifications? Do you master app monetization using ads? Do you know how to use voice recognition, maps, and location? We challenge you to create an app using at least 2 features but not limited to them.
`,
    prize:
      '1st prize:  HUAWEI GT2PRO*2 Y HUAWEI FREEBUDS STUDIO *2. (Team members choose which one they want, only one prize per participant.)\n2nd prize: HUAWEI FREEBUDS PRO*4\n3rd prize: HUAWEI BAND 6*4',
    channel: '#huawei',
  },
  {
    company: 'Capchase',
    title: 'Code the SQLillo!',
    //videoUrl: 'https://youtu.be/80k_JJcQfwo',
    description: /* markdown */ `
There's a grid. There's you and your code. Your objective? Paint it, but there's me, and I will paint too. Who will win?
`,
    prize:
      '1st prize:  3D printer\n2nd prize: Arduino Kit\n3rd prize: 100€ amazon voucher',
    channel: '#capchase',
  },
]
