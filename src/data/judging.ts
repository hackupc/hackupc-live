import { formatIntervalInTimezone } from '@/services/dates'

type MarkdownString = string // Accepts Markdown

export interface Judging {
  readonly title: string
  readonly description: MarkdownString
  readonly size: 'big' | 'small'
}

export const judgings: Judging[] = [
  {
    title: 'How does judging work?',
    description: `
We will have a judging expo on **${formatIntervalInTimezone(
      '5/5/2024 10:15:00',
      '5/5/2024 13:15:00'
    )}**.
We will assign you a time slot to present your project (one for HackUPC + as many challenges as you participate), you need to go to in front of A3 building and an organizer will assign you to a queue and may give you an estimated time when you will present.

The presentation can only be **3 minutes** long and with **no slides**, Prezi's or any visual support except your hack. You can check out other projects at any judging room.

The top teams will move on to an additional round of panel judging in the Closing Ceremony.

If you participate in a challenge, you'll have to present at the specific sponsor room, which is independent of the HackUPC judging.`,
    size: 'big',
  },
  {
    title: 'Judging Criteria',
    description: `
Teams will be judged on these three criteria. Judges will weigh the criteria equally. During judging, participants should try to describe what they did for each criterion in their project.

- **Technology**: How technically impressive was the hack? Was the technical problem the team tackled difficult? Did it use a particularly clever technique or did it use many different components? Did the technology involved make you go “Wow”?
- **Idea & Innovation**: How good is the idea?, we want to see things that goes beyond a website that already exists, be creative! There are a lot of things that you can do.
- **Learning**: Did the team stretch themselves? Did they try to learn something new? What kind of projects have they worked on before? If a team which always does virtual reality projects decides to switch up and try doing a mobile app instead, that exploration should be rewarded. We also will be taking in count the design and the usability, so if your application does not look like a 90's website and it's intuitive at using it, extra points for you.

These criteria will guide judges but ultimately judges are free to make decisions based on their gut feeling of which projects are the most impressive and most deserving.

It's important to note that these judging criteria **do not include**:

- How good your code is. It doesn't matter if your code is messy, or not well commented, or uses inefficient algorithms. Hacking is about playing around, making mistakes, and learning new things. If your code isn't production ready, we're not going to mark you down.
- How well you pitch. Hacking is about building and learning, not about selling.
- How good the idea is. Again, Hackathons aren't about coming up with innovative ideas. It's about building and learning.
- How well the project solves a problem. You can build something totally useless and as long as you're learning and having fun, that's a good hack! Sometimes a pointless project is one of the best hacks! So don't worry about coming up with the next big idea or building the next Facebook. You'll have plenty of time for that outside the hackathon. just focus on learning, having fun, and making new friends. At the end of the day the skills you learn and the friends you make might lead to the next big thing—but you don't have to do that to win a hackathon.
`,
    size: 'big',
  },
  {
    title: 'Demos',
    description: `
After hacking finishes, teams will show their projects to each other and to the judges.

You are strongly encouraged to present a demo of what you have built. Pitches or presentations are discouraged. You are not judged on the quality of your pitch or the quality of your idea. As you are judged on what you built, you'll only hurt yourself by not showing a demo.

You are encouraged to present what you have done even if your hack is broken or you weren’t able to finish. It's okay if you didn't finish your hack—that happens all the time! Completion is not part of the judging criteria, so don't worry about not being finished. Also, demoing is not just about the competition. It's a chance to share with others what you learned and what you tried to build—that's what hacking's all about! For being courageous enough to demo, you'll receive a special "I Demoed" sticker—it doesn't matter how good the demo is! In the case that you don't have anything to demo, you can give a presentation about what you tried and what you learned. Hearing what other people learned is interesting and inspiring for other attendees.
`,
    size: 'small',
  },
  {
    title: '',
    description: `

## Remember
The competition is just a part of the hackathon. To make the most out of the event, try something new, teach other people, and make new friends!

Happy Hacking from the HackUPC team! 🚀
`,
    size: 'big',
  },
]
