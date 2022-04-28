type MarkdownString = string // Accepts Markdown

export interface Rule {
  readonly title: string
  readonly description: MarkdownString
}

export const rules: Rule[] = [
  {
    title: 'Hackathon Rules',
    description: /* markdown */ `
> You can find the hackathon and submission rules in the [Terms and Conditions](https://legal.hackersatupc.org/hackupc/terms_and_conditions) and [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct).

Just in case, remember that:
1. There is no minimum team size, however, the maximum size is 4 people. There will be 1 prize for each member of the team, independently of the team size.
1. Teams should be made up exclusively of students (or recent graduates within one year of having graduated) who are not organizers, judges, sponsors, or in any other privileged position at the event.
1. Teams can, of course, gain advice and support from organizers, sponsors, and others.
1. All work on a project should be done at the hackathon.
1. Teams can use an idea they had before the event.
1. Teams can work on ideas that have already been done. Hacks do not have to be "innovative". If somebody wants to work on a common idea they should be allowed to do so and should be judged on the quality of their hack.
1. Teams can work on an idea that they have worked on before (as long as they do not re-use code).
1. Teams can use libraries, frameworks, or open-source code in their projects. Working on a project before the event and open-sourcing it for the sole purpose of using the code during the event is against the spirit of the rules and is not allowed.
1. Adding new features to existing projects is allowed. Judges will only consider new functionality introduced or new features added during the hackathon in determining the winners.
1. Teams must stop hacking once the time is up. However, teams are allowed to debug and make small fixes to their programs after time is up. e.g. If during demoing your hack you find a bug that breaks your application and the fix is only a few lines of code, it's okay to fix that. Making large changes or adding new features is not allowed.
1. Projects that violate the [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct) are not allowed.
1. Teams can be disqualified from the competition at the organizers' discretion. Reasons might include but are not limited to breaking the Competition Rules, breaking the Code of Conduct, or other unsporting behaviors.
1. In order to present the project to our judges the participants must be previously accepted by the organization team.
`,
  },
  {
    title: 'Server Rules',
    description: /* markdown */ `
> You can find the hackathon rules in the [Code of Conduct](https://legal.hackersatupc.org/hackupc/code_of_conduct).

Just in case, remember that:
1. Harassment and toxic attitudes are prohibited.
1. Be polite and friendly, respect each other.
1. Adding a new member that doesn't want to join your team is prohibited and we will ban this type of behaviour
1. Spam of memes or random things outside #random and #memes is prohibited.
1. ASCII or advertising suspicious links is prohibited.
1. Do not abuse mentioning other users, staff or support roles.
1. Discord accounts with disturbing images or with violent, racist, sexist, homophobic or hate-provoking content will be expelled from the hackathon without prior notice.
1. Multi-account is prohibited.
`,
  },
  {
    title: '',
    description: /* markdown */ `
If you break any of the rules you will be expelled from the server and depending on the level of your infraction you won't be able to participate in future editions of HackUPC.
`,
  },
]
