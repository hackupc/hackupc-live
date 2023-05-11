type MarkdownString = string // Accepts Markdown

export interface Mission {
  readonly title: string
  readonly description?: MarkdownString
  readonly size: 'big' | 'small'
}

export const missions: Mission[] = [
  {
    title: 'The Mission',
    description: `We want your experience at HackUPC to be more than just creating a project, we want you to have a great time attending talks and workshops, meeting new people and having fun with the activities that we have prepared for you.

To achieve that, we have created a mission for you to complete. So, let's get to it! To start the mission, you will need:

- **The mission card** that you will find in your swag bag received at check-in.
- Your own copy of **the tracking spreadsheet** that you will find **[here](https://docs.google.com/spreadsheets/d/16M5zLWoqDwzYZNwg1gOq-D0h3x5SEdXao2RQlP5UMc0/)**.

In the mission card, you will find the tasks that you can complete during the event. Each task has a different amount of points, and you can complete them in any order you want. You can also find a list of activities that you can participate in. These activities will be announced during the event, and you will have to complete them in order to get the points. You can find more information on when the activities are happening in the **[Schedule section](https://live.hackupc.com/schedule)**.`,
    size: 'big',
  },
  {
    title: 'Your Mission Card',
    description: `Keep in mind that in order to get the points for each mission task, you must show the card to the organizer in charge of the activity so that they can stamp it.
    If there isn't an organizer to stamp your card, you should go to the infoDesk (the same location as baggage) and show a proof that you have completed the task, and they will take care of it.`,
    size: 'small',
  },
  {
    title: 'Claiming your rewards',
    description: `
As you complete the tasks, you will earn points. The more points you earn, the higher your tier will be.
There are 2 tiers in total:
\n-**Tier 1**: 190 points
\n-**Tier 2**: 250 points
\nWith each tier, **Special prizes** are waiting for you!

Remember, you can check your tier completion in your Tracking spreadsheet, and once you reach it you can go to the infoDesk and claim your reward! Don't forget to bring your card with you to verify your points.
    `,
    size: 'small',
  },
]
