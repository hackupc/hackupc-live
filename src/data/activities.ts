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
    description: /* markdown */ `There are 10 bienes hidden in the venue. Find them, take a picture with them and show them on the InfoDesk to check your mission stamp!`,
    location: 'Hacking area',
    time: 'All weekend',
    isMission: true,
  },
  {
    title: 'Pins collection',
    description: /* markdown */ `We have 11 company boots, each one has a pin. Collect them all and show them on the InfoDesk to earn the last pin!`,
    location: 'Sponsors booths',
    time: 'All weekend',
  },
  {
    title: 'Wiki race',
    description: /* markdown */ `No se de que va aquesta activitat :) sorry lucia. Crec que era algo de buscar informació a la wikipedia pero no se explicarho`,
    location: 'A4105',
    time: 'Saturday 12:00h',
    isMission: true,
  },
  {
    title: 'Nerf Gun Battle',
    description: /* markdown */ `Compete with your friends in a nerf gun battle!`,
    location: 'A4101 & A4102',
    time: 'Sunday 00:00h',
  },
  {
    title: 'Sticker Xchange',
    description: /* markdown */ `Come to the cafeteria and change your hackathon stickers with other hackathon lovers!`,
    location: 'Cafeteria',
    time: 'Sunday 00:00h',
  },
  {
    title: 'Lego',
    description: /* markdown */ `Build whatever you can imagine with our lego pieces!`,
    location: 'A4105',
    time: 'Saturday 00:00h',
    isMission: true,
  },
  {
    title: 'Dodgeball',
    description: /* markdown */ `Relax a bit and play a dodgeball match with your friends!`,
    location: 'Dodgeball area',
    time: 'Saturday 00:00h',
    isMission: true,
  },
  {
    title: 'SlideShare show',
    description: /* markdown */ `Come to see the best slideshows of the hackathon!`,
    location: 'A5002',
    time: 'Saturday 00:00h',
    isMission: true,
  },
  {
    title: 'Rubber duck finding',
    description: /* markdown */ `Search the duck in the venue and show it on the InfoDesk to earn a prize!`,
    location: 'Hacking area',
    time: 'Saturday after lunch',
  },
  {
    title: 'Photocall',
    description: /* markdown */ `Take a picture in our cool Photocall, share it in the social media and come to InfoDesk to claim your stamp!`,
    location: 'Hacking area',
    time: 'All weekend',
    isMission: true,
  },
  {
    title: 'Cup stacking by MLH',
    description: /* markdown */ `How tall can you stack cups?!`,
    location: 'A4103',
    time: 'Saturday after lunch',
  },
]
