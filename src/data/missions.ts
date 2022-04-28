type MarkdownString = string // Accepts Markdown

export interface Talk {
  title: string
  description?: MarkdownString
  isWider?: boolean
  videoUrl?: string
  streamLink?: string
}

export const talks: Talk[] = [
  {
    title: 'The Mission',
    description:
      'HackUPC is more than just creating a project, it is a whole experience with activities, talks and meeting new people. We have created a mission to accomplish that goal. You will be given some tasks you have to complete. If you complete each task, you will earn points and when you reach a certain amount of points, you will be rewarded with prizes. If you complete The Mission, you will win an exclusive prize. You have more details regarding the way you are participating.',
    isWider: true,
  },
  {
    title: 'Face-to-face',
    /*description: /* markdown */ /*`
4 years ago we launched the version of APIs and Webhooks for Typeform, giving developers the tools
necessary to build apps and automation around data collection.
For HackUPC we are releasing a new tool that will let developers build apps directly inside Typeform UI.
This workshop is an introduction to this new framework. No previous experience needed, first-timers welcome.
`,*/
    description:
      'Those who are face-to-face, will receive a card with in their swag bag. When you attend to an activity, you should show the card to the organizer in charge and he/she will stamp the card. If you want to keep track of the number of points earned, we have prepared a spreadsheet. You should create a copy of it , and then you can check which activities you took part and the tiers where prizes are given.  Once you reach a tier, you can go to the infodesk (same location than baggage) and claim your reward! Don’t forget to bring your card to show your attendance. If there isn’t an organizer to stamp your card, you should go to the infodesk and show a proof that you have completed the task.',
  },
  {
    title: 'Online',
    description:
      'For those who are online, when you take part in any task, you have to send a DM to @mission-tracker on Slack and show a proof that you have completed the task and for the first time you DM it you should add the mail that you used at my.hackupc.com, so we can track your progress and receive the prizes. How can I prove that I completed a task? If the task is done by organizers, they will tell you what to do. Otherwise, if you are attending a talk, you have to take a screenshot at the ending of it and send it to the @mission-tracker. Some activities have a specific instruction in their description to complete it.',
  },
]
