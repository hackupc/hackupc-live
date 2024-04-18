import { formatDateInTimezone } from '@/services/dates'

type MarkdownString = string // Accepts Markdown

export interface Faq {
  readonly title: string
  readonly description?: MarkdownString
  readonly size: 'big' | 'small'
}

export const faqs: Faq[] = [
  {
    title: 'When shall I arrive?',
    description: `Registration will start on ${formatDateInTimezone(
      'weekday-time',
      '03/05/2024 16:00:00'
    )}. The opening ceremony is at ${formatDateInTimezone(
      'time',
      '03/05/2023 19:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'When is HackUPC ending?',
    description: `The closing ceremony is expected to end on ${formatDateInTimezone(
      'weekday-time',
      '05/05/2024 17:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'Can I leave during HackUPC?',
    description: `Yes. However make sure you have your wristband in your wrist, otherwise we might not let you in when you come back.`,
    size: 'small',
  },
  {
    title: 'What if I cannot make it in time?',
    description: `No problem. Send us a email to [contact@hackupc.com](mailto:contact@hackupc.com) to inform us and when you arrive, just come to our [InfoDesk](/map/indoors) for a late check-in. If you are confused, please reach out to any volunteer or organizer (you will recognize them for the back of the t-shirts).`,
    size: 'small',
  },
  {
    title: "I'm not in Slack, how do I get in?",
    description: `If you are invited and have confirmed your participation to HackUPC, check your email to find the invitation, if you don't have it be patient it will arrive, and if during the event or 2-3 days before you can not get in, come to the [InfoDesk](/map/indoors) during the event or send us an email to [contact@hackupc.com](mailto:contact@hackupc.com)`,
    size: 'small',
  },
  {
    title: 'Can I sleep in the venue?',
    description: `Yes, sure! You can use the [sleeping spaces](/map/indoors) in A3 building starting saturday 00:00h. Some mattresses will be provided. Unfortunately, we don't have enough for everyone! \n\n Please take only one and do not move it from the sleeping area. Once you've finished using it, don't leave your things, our staff will remove it.`,
    size: 'small',
  },
  {
    title: 'Something isn’t working!',
    description: `If something is not working, please come to our [InfoDesk](/map/indoors) and meet our awesome volunteers. They'll love to help you!`,
    size: 'small',
  },
  {
    title: 'Deadline for project submissions?',
    description: `The deadline for project submissions at ${formatDateInTimezone(
      'weekday-time',
      '05/05/2023 9:00:00'
    )}. Submit your projects to [Devpost](https://hackupc-2024.devpost.com/).`,
    size: 'small',
  },
  {
    title: 'I have another question... Biene?',
    description: `If you have any other questions, and you can't find it here, make sure to pay us a visit at our [InfoDesk](/map/indoors) or ask at **#help** in Slack.`,
    size: 'big',
  },
]
