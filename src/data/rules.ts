import { formatIntervalInTimezone } from '@/services/dates'

type MarkdownString = string // Accepts Markdown

export interface Rule {
  readonly title: string
  readonly description: MarkdownString
  readonly size: 'big' | 'small'
}

export const rules: Rule[] = [
  {
    title: 'How does judging work?',
    description: `
We will have a judging expo on **${formatIntervalInTimezone(
      '14/5/2023 10:15:00',
      '14/5/2023 13:15:00'
    )}**.
We will assign you a time slot to present your project (one for HackUPC + as many challenges as you participate), you need to go to in front of A3 building and an organizer will assign you to a queue and may give you an estimated time when you will present.

The presentation can only be **3 minutes** long and with **no slides**, Prezi's or any visual support except your hack. You can check out other projects at any judging room.

The top teams will move on to an additional round of panel judging in the Closing Ceremony.

If you participate in a challenge, you'll have to present at the specific sponsor room, which is independent of the HackUPC judging.`,
    size: 'big',
  },
  {
    title: 'Hackathon Rules',
    description: /* markdown */ `
> You can find the full hackathon and submission rules in the [Terms and Conditions](https://legal.hackersatupc.org/hackupc/terms_and_conditions) and [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct).

These are some highlights of the HackUPC competition rules.
`,
    size: 'big',
  },
  {
    title: 'The spirit of the competition',
    description: `Remember that hackathons are like marathons. Some people go to compete but most people take part to better themselves and have fun. Whatever the reason is you're at a hackathon, make sure you're upholding the [hacker spirit](https://medium.com/@tfogo/the-spirit-of-hackathons-a0d81a65060a#.6cx5ac9t8) by collaborating with other teams, helping beginners, and having fun.`,
    size: 'small',
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
    title: 'The rules of the competition',
    description: `
1. There is no minimum team size, however, the maximum size is 4 people. There will be 1 prize for each member of the team, independently of the team size.
2. Teams should be made up exclusively of students (or recent graduates within one year of having graduated) who are not organizers, judges, sponsors, or in any other privileged position at the event. Volunteers are allowed to participate in their free time, accepting the extra difficulty of hacking and volunteering at the same time, but their role won't give them any judging advantage in front of the rest of participants.
3. All team members should be present at the event. Leaving the venue for some time to hack elsewhere or sleep is fine.
4. Teams can of course gain advice and support from organizers, volunteers, sponsors, and others.
5. All work on a project should be done at the hackathon.
6. Teams can use an idea they had before the event.
7. Teams can work on ideas that have already been done. Hacks do not have to be “innovative”. If somebody wants to work on a common idea they should be allowed to do so and should be judged on the quality of their hack. These days it’s hard to find something that’s fully original and teams might not know an idea has been done before anyway.
8. Teams can work on an idea that they have worked on before (as long as they do not re-use code).
9. Teams can use libraries, frameworks, or open-source code in their projects. Working on a project before the event and open-sourcing it for the sole purpose of using the code during the event is against the spirit of the rules and is not allowed.
10. Adding new features to existing projects is allowed. Judges will only consider new functionality introduced or new features added during the hackathon in determining the winners.
11. Teams must stop hacking once the time is up. However, teams are allowed to debug and make small fixes to their programs after time is up. e.g. If during demoing your hack you find a bug that breaks your application and the fix is only a few lines of code, it's okay to fix that. Making large changes or adding new features is not allowed.
12. Participants who asked for a travel reimbursement need to post a project before the deadline in order to get the reimbursement.
13. Projects that violate the [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct) are not allowed.
14. Teams can be disqualified from the competition at the organizers' discretion. Reasons might include but are not limited to breaking the Competition Rules, breaking the [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct), or other unsporting behaviour.
    `,
    size: 'small',
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
