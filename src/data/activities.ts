export interface Activity {
  title: string
  description: string // Accepts Markdown
  imageUrl?: string
}

export const activities: Activity[] = [
  {
    title: 'Draw your Biene',
    description:
      'Biene is our mascot and we invite you to create your own personalized Biene. You can draw it by hand, digitally, on a cake... any form of art is welcome 😄\n\n Upload a picture of your Biene on the discord channel or on a social network using the **#drawyourbiene** hashtag. There will be final voting between some of your submissions in order to find a winner.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71yqHJPpkBL.png',
  },
  {
    title: 'Photocall',
    description:
      'We would love to receive photos from your HackUPC online experience! 📷 From you and your college coding, your pizza, anything you want to share with us!\n\n You can upload them on this channel or on any social network using the hashtag **#HackUPC2021**. If your account is private, send us a screenshot via DM!\n\n You will enter some amazing contests by participating! If you upload your photo on the discord channel you will have 1 spot on the contest, but if you post the image on your social media you will have 2 spots on the contest. You can upload as many pictures as you want, every picture will count.',
  },
  {
    title: 'HackUphone',
    description:
      "How weird can a sentence become? Let's play a Telephone Game! ☎️\n\n Stay tuned to discord, there will be a message where you can react in order to participate, later on you will receive a picture or a sentence. If you receive a sentence, you then will need to draw it, if you receive a picture you will need to write a sentence describing what the picture is. You will have an hour to do it!",
    imageUrl:
      'https://qph.fs.quoracdn.net/main-qimg-fede4f40c289a930f26a505009d647cb',
  },
  {
    title: 'Freehand',
    description:
      "So... let's draw!🎨 We will tell you a topic and you have to draw in 3 minutes something inspired, related to the topic. You can use any medium to draw (by hand, paint, photoshop, illustrator…).\n\n In order to participate in the activity, join the voice channel and later on upload your picture on the text channel, remember that we are not picasso so we will not judge any draw, we only want to have fun.",
    imageUrl:
      'https://i1.wp.com/shareicon.net/data/2015/09/15/641226_pencil_512x512.png',
  },
  {
    title: 'NERF',
    description:
      "Let's chill a little bit playing some Online Nerf rounds! \n\n In HackUPC we always play NERF and in this online edition we will do it in a different way! We will play some 5-minute Krunker rounds. In order to play Krunker you only need to have a browser, no installation is needed. Stay tuned to discord in order to join a round and also enter the voice channel to share the experience with the other players.",
    imageUrl:
      'https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/75513512_976132102760848_6887804117331214336_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=RySX4uSmCwAAX8OGPJF&_nc_ht=scontent-frt3-1.xx&oh=a8b530816b590b5414436bafaec227f2&oe=60C17492',
  },
  {
    title: 'SlideShare Show',
    description:
      'The MYTHIC HackUPC activity is back: SLIDE SHARE SHOW!  This time, adapted into an online version. The activity will happen on our twitch channel! The details will be explained during the live… but if you don’t know about this activity long story short: someone will have to present some random slides. The topic of the slides will be chosen by the audience... So we need you to participate in both speaker and audience roles!!',
    imageUrl:
      'https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/76654208_976127582761300_6894369524598964224_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=tCTGJ58exHoAX_jGAnZ&_nc_ht=scontent-frt3-2.xx&oh=f0875ecee5c3f74965bbf17b75dba1f4&oe=60C39291',
  },
  {
    title: 'Rubber Duck',
    description:
      'The rubber duck search has begun! 🦆 During the hacking time, every 2 hours, 2 questions will be launched. If you get the answer right and it is one of the first 4 correct answers, then you will get the rubber duck (virtually)!',
    imageUrl:
      'https://lilalu-shop.com/media/image/66/85/19/lilalu-quietscheente-gelb-yellow-rubber-duck-F_600x600.webp',
  },
  {
    title: 'Yoga',
    description:
      'After the first hacking night, only standing up to go to the bathroom and to grab some snacks... We thought that a good relaxed 30-min yoga session could help you to release some tiredness! Join us in discord and get relaxed! 🧘',
    imageUrl:
      'https://freesvg.org/img/Gerald_G_Yoga_Poses_%28stylized%29_1.png',
  },
  // {
  //   title: 'FAKE Nerf 2',
  //   description: 'FAKE  _am a_ ~~tast~~ **test**.\n\n New line',
  // },
]
