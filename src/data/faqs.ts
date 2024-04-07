import {
  formatDateInTimezone,
  formatIntervalInTimezone,
} from '@/services/dates'

type MarkdownString = string // Accepts Markdown

export interface Faq {
  readonly title: string
  readonly description?: MarkdownString
  readonly size: 'big' | 'small'
}

export const faqs: Faq[] = [
  {
    title: 'Travel reimbursement',
    description: `
If you have been elected to receive a travel reimbursement, we will contact you after the hackathon to send it to you. You will receive a maximum that has been specified in the email, based on current travelling prices and distances. Requirements to receive travel reimbursement are as follows.
- Received an email with travel reimbursement amount.
- Travel reimbursement receipts submitted before the date specified by HackUPC Team.
- Project submitted to Devpost before due date.
- Demo your project in the HackUPC judging rooms.

The processing of travel reimbursements takes some time. Our schedule depends on our sponsors' schedule. We expect to have them sent out in a 1-2 months time period. Remember that you need to post a project before the deadline in order to get the reimbursement!`,
    size: 'big',
  },
  {
    title: 'When shall I arrive?',
    description: `Registration will start on ${formatDateInTimezone(
      'weekday-time',
      '12/5/2023 16:00:00'
    )}. The opening ceremony is at ${formatDateInTimezone(
      'time',
      '12/5/2023 19:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'When is HackUPC ending?',
    description: `The closing ceremony is expected to end on ${formatDateInTimezone(
      'weekday-time',
      '14/5/2023 17:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'What if I cannot make it in time?',
    description: `No problem. Just come to our [InfoDesk](/map/indoors) for a late check-in. If you are confused, please reach out to any volunteer (apricot t-shirts) or organizer (red t-shirts).`,
    size: 'small',
  },
  {
    title: "I'm not in Slack, how do I get in?",
    description: `Come to the [InfoDesk](/map/indoors) during the event or send us an email to [contact@hackupc.com](mailto:contact@hackupc.com)`,
    size: 'small',
  },
  {
    title: 'Can I leave HackUPC?',
    description: `Yes. However make sure you have your wristband in your wrist, otherwise we might not let you in when you come back.`,
    size: 'small',
  },
  {
    title: 'Can I sleep now?',
    description: `Yes, sure. You can find the [sleeping spaces](/map/indoors) in A3 building. Some matresses will be provided. Unfortunately, we don't have enough for everyone!`,
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
      '14/5/2023 9:00:00'
    )}. Submit your projects to [Devpost](https://hackupc-2023.devpost.com/).`,
    size: 'small',
  },
  {
    title: 'I have another question... Biene?',
    description: `If you have any other questions, and you can't find it here, make sure to pay us a visit at our [InfoDesk](/map/indoors) or ask at **#help** in Slack.`,
    size: 'big',
  },
]
