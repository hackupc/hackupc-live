type MarkdownString = string // Accepts Markdown

export interface Rule {
  readonly title: string
  readonly description: MarkdownString
  readonly size: 'big' | 'small'
}

export const rules: Rule[] = [
  {
    title: 'Hackathon Rules',
    description: /* markdown */ `
> You can find the full hackathon and submission rules in the [Terms and Conditions](https://legal.hackersatupc.org/hackupc/terms_and_conditions) and [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct).

These are some highlights of the HackUPC competition rules ⚖️ **Please read properly and if you have any doubt don't hesitate to contact us (in email or slack)!**
`,
    size: 'big',
  },
  {
    title: 'The spirit of the competition',
    description: `Remember that hackathons are like marathons. Some people go to compete but most people take part to better themselves and have fun. Whatever the reason is you're at a hackathon, make sure you're upholding the [hacker spirit](https://medium.com/@tfogo/the-spirit-of-hackathons-a0d81a65060a#.6cx5ac9t8) by collaborating with other teams, helping beginners, and having fun.`,
    size: 'big',
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
    size: 'big',
  },
]
