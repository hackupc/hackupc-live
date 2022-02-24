export type DiscordType = 'chat' | 'voice'
export interface DiscordLabelData {
  name: string
  description: string
  icon: DiscordType
}
interface DiscordChannelInfo {
  title: string
  channels: DiscordLabelData[]
}

export const discordChannels: DiscordChannelInfo[] = [
  {
    title: 'Basic information',
    channels: [
      {
        name: '👋 welcome',
        description:
          'Welcome to HackUPC 2021! Here you have the important basic information about the server.',
        icon: 'chat',
        },
      {
        name: '📢 announcements',
        description:
          'Be aware of this channel to not miss a thing of HackUPC: activities, talks, warnings... Eveything you need to know will be posted here, so stay tuned!',
        icon: 'chat',},
    ],
  },
  {
    title: 'General',
    channels: [
      {
        name: 'tech-problems',
        description:
          "Are you stuck with your project and don't know how to continue? Ask for help in this channel, so mentors or other hackers can help you.",
        icon: 'chat',},
      {
        name: 'help',
        description:
          "Do you have a problem with Discord? You don't know how to use the bot? Send your message on this channel and any organizer will help you with your problem as soon as possible!",
        icon: 'chat',},
      {
        name: 'general',
        description:
          'Main channel, feel free to say how you are living this hackathon!',
        icon: 'chat',},
    ],
  },
  {
    title: 'Cafeteria - Random',
    channels: [
      {
        name: 'photocall',
        description:
          'Channel where you can share photos of your HackUPC online experience! We would love to see whatever you want to share',
        icon: 'chat',},
      {
        name: 'memes',
        description:
          "Only memes are allowed! Send your funniest memes for other hackers to see and laugh until you can't stop with others memes.",
        icon: 'chat',},
      {
        name: 'random',
        description:
          'Share your thoughts, jokes… (Almost) everything is allowed here!',
        icon: 'chat',},
      {
        name: 'chill',
        description:
          'If you want to rest from your project or disconnect for a while, you can hang out here.',
        icon: 'voice',
      },
    ],
  },
  {
    title: 'Activities Area',
    channels: [
      {
        name: 'general-activities',
        description:
          'In this channel you can find all the information of all the activities of the event.',
        icon: 'chat',},
      {
        name: 'playground',
        description:
          'If you want to enjoy the activities all together, this is your channel!',
        icon: 'chat',},
      {
        name: 'rubber-duck',
        description:
          'Quack, quack... Will you be able to answer all the questions?',
        icon: 'chat',},
      {
        name: 'draw-your-biene',
        description:
          'Does it have a hat or maybe a mustache? Let your imagination run wild and create your own Biene!',
        icon: 'chat',},
      {
        name: 'playground',
        description:
          "Let's play together, sharing experiences and having a good time",
        icon: 'voice',
      },
    ],
  },
  {
    title: 'Sponsors',
    channels: [
      {
        name: 'Company Name',
        description:
          'Do you want to contact someone from Company name? Do you have any doubt? Feel free to ask!',
        icon: 'chat',},
      {
        name: 'Company name',
        description:
          'Voice channel to have easy communication with the sponsors',
        icon: 'voice',
      },
    ],
  },
]
