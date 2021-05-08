import { DiscordLabelData, DiscordType } from '@/components/DiscordLabel.vue'

interface DiscordChannelInfo {
  title: string
  channels: DiscordLabelData[]
}

export const discordChannels: DiscordChannelInfo[] = [
  {
    title: 'Principal Information',
    channels: [
      {
        name: 'welcome',
        description:
          'On this channel you will find the important information about the server.',
      },
      {
        name: 'rules',
        description:
          'Take a look on this channel, here you will find all the rules about the server.',
      },
      {
        name: 'announcements',
        description:
          'The organizers will post all the relevant announcements on this channel.',
      },
    ],
  },
  {
    title: 'General',
    channels: [
      {
        name: 'search-team',
        description:
          "You don't have team or you are looking for some more members for your team? This is your channel.",
      },
      {
        name: 'mentors',
        description:
          "Do you need help in some generic problem? Don't worry and ask in this channel.",
      },
      {
        name: 'mentors',
        description:
          'You prefer to ask the question by voice? Here you have some place to do it.',
        icon: DiscordType.voice,
      },
      {
        name: 'help',
        description:
          'Do you have any problem? Ask here for some help and a organizer will help you.',
      },
    ],
  },
  {
    title: 'Chill Time',
    channels: [
      { name: 'memes', description: 'Post here your memes!!' },
      {
        name: 'random',
        description:
          'Here you can talk about something random. Be free like a bird!',
      },
      {
        name: 'play-voice',
        description:
          'This voice channel will be used to play! But only in play time!',
        icon: DiscordType.voice,
      },
    ],
  },
  {
    title: 'Challenges',
    channels: [
      {
        name: 'similar-patients',
        description:
          'Channel to solve your problems and doubts about the challenge',
      },
      {
        name: 'similar-patients',
        description: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        name: 'pediatric-age',
        description:
          'Channel to solve your problems and doubts about the challenge',
      },
      {
        name: 'pediatric-age',
        description: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        name: 'covid-caught',
        description:
          'Channel to solve your problems and doubts about the challenge',
      },
      {
        name: 'covid-caught',
        description: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        name: 'tracking-campus',
        description:
          'Channel to solve your problems and doubts about the challenge',
      },
      {
        name: 'tracking-campus',
        description: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        name: 'tracking-primary-health',
        description:
          'Channel to solve your problems and doubts about the challenge',
      },
      {
        name: 'tracking-primary-health',
        description: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
    ],
  },
  {
    title: 'Sponsors',
    channels: [
      {
        name: 'hipeac',
        description:
          'Are you looking for some job oportunities take a look on hipeac',
      },
      {
        name: 'hipeac',
        description: 'Channel to talk with hipeac members',
        icon: DiscordType.voice,
      },
    ],
  },
]
