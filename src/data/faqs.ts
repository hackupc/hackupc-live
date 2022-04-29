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
If you have been elected to receive a travel reimbursement, we will contact you after the hackathon to send it to you. You will receive a maximum that has been specified on the email, based on current travelling prices and distances. Requirements to receive travel reimbursement are as follows.
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
      '31/4/2022 10:15:00',
      '31/4/2022 13:15:00'
    )}**.

- If you are hacking in-person, we'll assign you a classroom to present your project (one for HackUPC + as many challenges as you participate), you need to go there so that an organizer gives you a time to present.

- For online hackers, there will be a dedicated google meet room for you to enter and present your project, and we will release information very soon for the online sponsor judging.

The presentation can only be **3 minutes** long and with **no slides**, Prezi's or any visual support except expect your hack. You can check out other projects at any judging room.

The top teams will move on to an additional round of panel judging in the Closing Ceremony.

If you participate in a challenge, you'll have to present at the specific sponsor room, which is independent of the HackUPC judging.`,
    size: 'big',
  },
  {
    title: 'When shall I arrive?',
    description: `Registration will start on ${formatDateInTimezone(
      'weekday-time',
      '29/4/2022 17:00:00'
    )}. The opening ceremony is at ${formatDateInTimezone(
      'time',
      '29/4/2022 19:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'When is HackUPC ending?',
    description: `The closing ceremony is expected to end on ${formatDateInTimezone(
      'weekday-time',
      '31/4/2022 17:00:00'
    )}.`,
    size: 'small',
  },
  {
    title: 'What if I cannot make it in time?',
    description: `No problem. Just come to our [InfoDesk](/map/indoors) for a late check-in. If you are confused, please reach out to any volunteer (white t-shirts) or organizer (pink t-shirts).`,
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
]
