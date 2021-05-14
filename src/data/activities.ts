export interface Activity {
  title: string
  description: string // Accepts Markdown
  image?: string
  start: string
  end?: string
  discordChannel: string
  where: string
}

export const activities: Activity[] = [
  {
    title: 'Draw your Biene',
    description: `
Biene is our mascot and we invite you to create your own personalized Biene 🐝. You can draw it by hand, digitally, on a cake... any form of art is welcome 😄

Upload a picture of your Biene on the discord channel or on a social network using the **#drawyourbiene** hashtag. There will be final voting between some of your submissions in order to find a winner.`,
    image: require('@/assets/img/activities/biene.png'),
    start: '14/05/2021 21:00',
    end: '16/05/2021 10:45',
    discordChannel: '#draw-your-biene',
    where: 'fab fa-discord',
  },
  {
    title: 'Photocall',
    description: `
We would love to receive photos from your HackUPC online experience! 📷 From you and your college coding, your pizza, anything you want to share with us!

You can upload them on photocall channel or on any social network using the hashtag **#HackUPC2021**. If your account is private, send us a screenshot via DM!

You will enter some amazing contests by participating! You can upload as many pictures as you want, every picture will count.`,
    image: require('@/assets/img/activities/photocall.png'),
    start: '14/05/2021 21:00',
    end: '16/05/2021 13:30',
    discordChannel: '#photocall',
    where: 'fab fa-discord',
  },
  {
    title: 'HackUphone',
    description: `
How weird can a sentence become? Let's play a Telephone Game! ☎️

Stay tuned to discord, there will be a message where you can react in order to participate, later on you will receive a picture or a sentence. If you receive a sentence, you will have to draw it; if you receive a picture you will have to write a sentence describing what the picture is about. You will have an hour to do it!`,
    image: require('@/assets/img/activities/hackuphone.png'),
    start: '14/05/2021 21:00',
    end: '16/05/2021 10:15',
    discordChannel: 'DM with organizers',
    where: 'fab fa-discord',
  },
  {
    title: 'Freehand',
    description: `
So... let's draw!🎨 We will tell you a topic and you have to draw in 3 minutes something inspired, related to the topic. You can use any medium to draw (by hand, paint, photoshop, illustrator…).

In order to participate in the activity, join the voice channel and later on upload your picture on the text channel. We are not Picasso, so we will not judge any draw, we only want to have fun. 😄`,
    image: require('@/assets/img/activities/freehand.png'),
    start: '15/05/2021 10:00',
    end: '15/05/2021 11:00',
    discordChannel: '#playground',
    where: 'fab fa-discord',
  },
  {
    title: 'NERF',
    description: `
Let's chill a little bit playing some Online Nerf rounds!

In HackUPC we always play NERF and in this online edition we will do it in a different way! We will play some 5-minute Krunker rounds. In order to play Krunker you only need to have a browser, no installation is needed. Stay tuned to the playground channel in order to join a round. Also, you can enter the voice channel to share the experience with the other players.`,
    image: require('@/assets/img/activities/nerf.png'),
    start: '15/05/2021 12:00',
    end: '15/05/2021 13:00',
    discordChannel: '#playground 🔊playground',
    where: 'fab fa-discord',
  },
  {
    title: 'SlideShare Show',
    description: `
The MYTHIC HackUPC activity is back: SLIDE SHARE SHOW! 🎤 This time, adapted into an online version. The activity will happen on our twitch channel! The details will be explained during the live… but if you don’t know about this activity long story short: someone will have to present some random slides. The topic of the slides will be chosen by the audience... So we need you to participate in both speaker and audience roles!!`,
    image: require('@/assets/img/activities/slideshare-show.png'),
    start: '15/05/2021 18:00',
    end: '15/05/2021 19:00',
    discordChannel: 'hackersupc',
    where: 'fab fa-twitch',
  },
  {
    title: 'Rubber Duck',
    description: `
The rubber duck search has begun! 🦆 During the hacking time, every 2 hours, 2 questions will be launched. If you get the answer right and it is one of the first 4 correct answers, then you will get the rubber duck (virtually)!`,
    image: require('@/assets/img/activities/rubber-duck.png'),
    start: '14/05/2021 21:00',
    end: '16/05/2021 10:15',
    discordChannel: '#rubber-duck',
    where: 'fab fa-discord',
  },
  {
    title: 'Yoga',
    description: `
After the first hacking night, only standing up to go to the bathroom and to grab some snacks... We thought that a good relaxed 30-min yoga session could help you to release some tiredness! Join us in discord and get relaxed! 🧘`,
    image: require('@/assets/img/activities/yoga.png'),
    start: '15/05/2021 10:00',
    end: '15/05/2021 11:00',
    discordChannel: '🔊playground',
    where: 'fab fa-discord',
  },
]
