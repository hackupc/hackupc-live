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

The processing of travel reimbursements takes some time. Our schedule depends on our sponsors' schedule. We expect to have them sent out in a 1-2 months time period. Remember that you need to post a project before the deadline in order to get the reimbursement!`,
    size: 'big',
  },
  {
    title: 'How does judging work?',
    description: `
We will have a judging expo **on ${formatIntervalInTimezone(
      '14/5/2023 10:15:00',
      '14/5/2022 13:15:00'
    )}**.
We will assign you a time slot to present your project (one for HackUPC + as many challenges as you participate), you need to go to in front of A3 building and an organizer will assign you to a queue and may give you an estimated time when you will present.

The presentation can only be **3 minutes** long and with **no slides**, Prezi's or any visual support except expect your hack. You can check out other projects at any judging room.

The top teams will move on to an additional round of panel judging in the Closing Ceremony.

If you participate in a challenge, you'll have to present at the specific sponsor room, which is independent of the HackUPC judging.`,
    size: 'big',
  },
  {
    title: 'When shall I arrive?',
    description: `Registration will start on ${formatDateInTimezone(
      'weekday-time',
      '12/5/2022 16:00:00'
    )}. The opening ceremony is at ${formatDateInTimezone(
      'time',
      '12/5/2022 19:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'When is HackUPC ending?',
    description: `The closing ceremony is expected to end on ${formatDateInTimezone(
      'weekday-time',
      '14/5/2022 15:00:00'
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
    description: `Yes. However make sure you have your wristband with you, otherwise we might not let you in when you come back.`,
    size: 'small',
  },
  {
    title: 'Can I sleep now?',
    description: `Yes, sure. You can find the [sleeping spaces](/map/indoors) in A4 buildings. Some matresses will be provided. Unfortunately, we don't have enough for everyone!`,
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
      'time',
      '14/5/2022 9:00:00'
    )}. Submit your projects to [Devpost](https://hackupc-2022.devpost.com/).`,
    size: 'small',
  },
  {
    title: 'I have another question... Biene?',
    description: `If you have any other questions, and you can't find it here, make sure to pay us a visit at our [InfoDesk](/map/indoors) or ask at **#help** in Slack.`,
    size: 'big',
  },
]
