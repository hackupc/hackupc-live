type MarkdownString = string // Accepts Markdown

import MissionCard from '@/assets/img/hardware/missioncard.png'

export interface Mission {
  readonly title: string
  readonly description?: MarkdownString
  readonly size: 'big' | 'small'
  readonly picture?: string
}

export const missions: Mission[] = [
  {
    title: 'Your Mission Card',
    description: `\n-(logo Talk) Learn new things going to a talk or workshop from our sponsors :speech_balloon:
\n-(slideshare) Have some laughs with our SlideShare Show Karaoke activity :circus_tent:
\n-(lego) Let your creativity flow with the Lego Tournament :magic_wand:
\n-(Find The Biene) Take a photo with at least 15 Bienes hidden through the venue :biene-default:
\n-(demo) Expose your challenge to the judges! :speaking_head_in_silhouette:
\n-(Photocall) Post a photo of you and your friends at the photocall! :camera_with_flash:
\n-(Dodgeball) Come join our epic Dodge Ball tournament :volleyball:
\n-(WikiRace) Show your detective skills in the WikiRace :mag_right:`,
    size: 'small',
    picture: MissionCard,
  },
  {
    title: 'Claiming your rewards',
    description: `
When you have a **line completed**, go to the infoDesk and claim your reward!
Don’t forget to **carry the mission card to all these events**! The organizer in charge of the activity will stamp it. If there isn't an organizer to stamp your card, you should go to the infoDesk (the same location as baggage) and **show a proof** that you have completed the task.
You can find more information on when the activities are happening in the **[Schedule section](https://live.hackupc.com/schedule)**.
    `,
    size: 'small',
  },
]
