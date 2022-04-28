type MarkdownString = string // Accepts Markdown

export interface Talk {
  readonly title: string
  readonly description?: MarkdownString
  readonly where: string
  readonly company: string
  readonly videoUrl?: string
  readonly start: string
  readonly end?: string
  readonly streamLink?: string
}

export const talks: Talk[] = [
  {
    title: 'Intro to Git and Github',
    description:
      'Are you new to git? Do you want to know about how to use GitHub?',
    where: 'A5001',
    company: 'HackUPC team',
    //videoUrl: 'https://www.youtube.com/watch?v=aYHEJwxAMBo&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Ignorance Oriented Programming',
    description: 'by Sergi Martinez',
    where: 'A5002',
    company: 'InfoJobs',
    //videoUrl: 'https://www.youtube.com/watch?v=h2lTZOoifM0',
    start: '29/4/2022 22:30',
    end: '29/4/2022 23:00',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Interviewing a company. Hire o no hire',
    description:
      'Choosing your next company decides where you invest your most valued resource, your time. Selecting a suitable workplace will affect your present life and shape your future as a software engineer, both in skills and future opportunities. However, we spend very little time speaking about how we should reason about this decision.\nJordi has worked as a software engineer for 15 years, both in Europe and California, in 8 different companies. He worked on projects like Instagram, Facebook crypto, Snapchat Infrastructure, and Tuenti. He’ll share his clues about how to choose your next company to decide where you want to be in 5 years.',
    where: 'A5001',
    company: 'Mundimoto',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 23:00',
    end: '29/4/2022 23:30',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title:
      'Productionizing Machine Learning models to increase your Data Scientists performance.',
    description: `Whenever a machine learning model is ready for deployment, data scientists and machine learning engineers still have a long path ahead collaborating to enable it for production. This talk explains how, in infojobs, we have modified this process to free data scientists of this duty. Freed data scientists can go back to develop the following model.`,
    where: 'A5002',
    company: 'Infojobs',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 23:00',
    end: '29/4/2022 23:30',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Deep Learning: breaking the ice',
    description: `In this hands-on workshop, we will train a Deep Learning model to classify images using Python, Keras and Tensorflow. Starting with the basics, we will navigate through some of the most common and interesting challenges one has to face while getting started in ML.
    Requirements:
    - Google account
    - Although can be very helpful, Python programming skills are not required - final solutions will be presented by the lecturers`,
    where: 'A5001',
    company: 'RestbAI',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 23:30',
    end: '29/4/2022 00:00',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Want to code faster? Try TDD!',
    description:
      'Test-Driven Development is a practice of extreme programming that fosters some of the best approaches to deliver high-quality software in production rapidly. Hop into this introductory session to familiarise yourself with it and clear any doubts.',
    where: 'A5002',
    company: 'Anyul Rivas',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '29/4/2022 23:30',
    end: '29/4/2022 00:00',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'Make development easier with Huawei Mobile Service',
    description:
      ' Discover some of the main functionalities of Huawei Mobile Services that allow you to develop an app with a great user experience. Learn the main advantages of publishing applications in the App Gallery: security, monetization, etc. Are you going to miss it?',
    where: 'A5001',
    company: 'Huawei',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '30/4/2022 10:00',
    end: '30/4/2022 10:30',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
  {
    title: 'HP Virtual & Augmented Reality applications.',
    description:
      'In this talk, we will explain how HP use VR & AR technology to make our life better, give an overview how this technology is evolving today, and what we can expect for the near future”',
    where: 'A5001',
    company: 'HP',
    //videoUrl: 'https://www.youtube.com/watch?v=AEz840YZZ1w&ab_channel=HackersUPCHackersUPC',
    start: '30/4/2022 10:30',
    end: '30/4/2022 11:00',
    // streamLink: 'https://www.twitch.tv/hackersupc',
  },
]
