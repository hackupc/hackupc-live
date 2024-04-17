type MarkdownString = string // Accepts Markdown
export interface Activity {
  readonly title: string
  readonly description: MarkdownString
  readonly time: string
  readonly location: string
  readonly isMission?: boolean
}

export const activities: Activity[] = [
  {
    title: 'Find a biene',
    description: /* markdown */ `There are 12 bienes 🐝 hidden in the venue! Find them, take a selfie and show it on the InfoDesk to check your mission stamp! \n\n Please don't remove them from their place.`,
    location: 'Hacking area',
    time: 'All weekend',
    isMission: true,
  },
  {
    title: 'Pins collection',
    description: /* markdown */ `We have 11 company booths, each one has a pin. Collect them all and show them at the InfoDesk to earn the last pin! \n\n There are limited pins, hurry up! Only one pin per hacker.`,
    location: 'Sponsors booths',
    time: 'All weekend',
  },
  {
    title: 'Wiki race',
    description: /* markdown */ `How fast can you be? Start in a wikipedia link and be the first person to reach the destination page using WikiLinks  \n\n Don't forget to bring your phone or laptop.`,
    location: 'A4101 & A4102',
    time: 'Saturday 12:00h',
    isMission: true,
  },
  {
    title: 'Nerf Gun Battle',
    description: /* markdown */ `Compete with your friends in the Nerf Gun Battle! \n \n There will be several 4 vs 4 rounds, so bring your team and show your skills!`,
    location: 'A4101 & A4102',
    time: 'Sunday 00:30h',
  },
  {
    title: 'Sticker Xchange',
    description: /* markdown */ `Want to improve your sticker collection? Come to the cafeteria and exchange your stickers with other hackathon lovers!`,
    location: 'Cafeteria',
    time: 'Sunday 00:00h',
  },
  {
    title: 'Lego',
    description: /* markdown */ `How creative can you be? Get your lego skills ready and build whatever you can imagine with our lego pieces and different topics.`,
    location: 'A4101 & A4102',
    time: 'Saturday 19:00h',
    isMission: true,
  },
  {
    title: 'Dodgeball',
    description: /* markdown */ `Want to stretch your legs? Relax from coding and play a 4 vs 4 dodgeball match. Don't forget to bring your friends!`,
    location: 'Dodgeball area',
    time: 'Saturday 16:00h',
    isMission: true,
  },
  {
    title: 'SlideShare show',
    description: /* markdown */ `Do you dare to present a slide presentation you have never seen before? Get some laughs in this activity watching hackers presenting random slides!`,
    location: 'A5002',
    time: 'Saturday 22:00h',
    isMission: true,
  },
  {
    title: 'Rubber duck finding',
    description: /* markdown */ `Quack 🦆! Oh, it looks like some ducks have gone missing. Can you help us find them? You can keep the one you find!`,
    location: 'Hacking area',
    time: 'Saturday after lunch',
  },
  {
    title: 'Photocall',
    description: /* markdown */ `Get a cool memory! Take a picture in our photocall, share it in social media tagging us (@hackupc) and come to the InfoDesk to claim your mission stamp!`,
    location: 'Photocall area',
    time: 'All weekend',
    isMission: true,
  },
  {
    title: 'Cup stacking by MLH',
    description: /* markdown */ `How many cups can you stack? Join the challenge, where you'll race against another team to build the tallest tower using only cups.`,
    location: 'A4103',
    time: 'Saturday 17:30h',
  },
]
