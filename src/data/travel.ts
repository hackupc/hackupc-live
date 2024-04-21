export interface Travel {
  readonly title: string
  readonly tag: string
  readonly description: string
  readonly emoji: string
  // readonly image: string
}

export const travels: Travel[] = [
  {
    title: 'Get accepted into HackUPC',
    tag: 'Invited to HackUPC',
    emoji: 'gift',
    description: `Congratulations! You have been accepted to HackUPC, once you confirm your attendance you will be able to **check if you need travel reimbursement**. Take into account that we provide: \n - **Up to** 50€ for people coming from Spain (outside Catalunya) \n - **Up to** 120€ for people coming from Europe \n - **Up to** 200€ for people coming from outside Europe. \n\n _**Note**: Due the high demand of reimbursement petitions we are only covering **up to** the 50% of the trip since we have a limited budget._`,
  },
  {
    title: 'Confirm your attendance',
    tag: 'Pending review',
    emoji: 'hourglass-start',
    description: `Now in your [MyHackUPC dashboard](https://my.hackupc.com/reimbursement/dash_board/), a new tab called **Travel** appears, you can see that you are **Pending review**. \n\n We are reviewing all your demands to be able to give something to everyone, to help you to come to HackUPC. \n\n We will let you know if your demand is accepted or not. \n\n **Please, be patient!**`,
  },
  {
    title: 'Submit your travel details',
    tag: 'Pending receipt submission',
    emoji: 'file-invoice-dollar',
    description: `You've been granted **up to** a certain amount!!!! Now it's time to submit your receipts to demonstrate your expenses at [MyHackUPC dashboard](https://my.hackupc.com/reimbursement/dash_board/). Remember that there are some rules: \n - Your full name should appear in your ticket \n - The total details of the price should appear, also with the total price \n - There should be a 2 way tickets, the way to barcelona and the way back home \n - The tickets should be between April 26th and May 10th \n - Only flight, bus or train tickets are allowed \n \n Remember to add your paypal account so we can be able to send you the money!`,
  },
  {
    title: 'Waiting for approval',
    tag: 'Pending receipt approval',
    emoji: 'hourglass-half',
    description: `We have your ticket! We will review that it's following all the rules and we'll let you know, depending on the demand and our budget, taking in account the ticket price how much we can give you. \n\n If your ticket it's not approved, you will receive a email with the reason. If you have any problem don't hesitate to contact us sending a email to [reimbursements@hackupc.com](mailto:reimbursements@hackupc.com). \n\n **Please, be patient!**`,
  },
  {
    title: 'Your travel has been approved',
    tag: 'Receipt approved',
    emoji: 'thumbs-up',
    description: `Now it's your turn!! We have approved your ticket so your travel reimbursement will be granted, if you follow the last steps: \n - Demo a valid project to our HackUPC judges. \n - Add your devpost link at [MyHackUPC dashboard](https://my.hackupc.com/reimbursement/dash_board/) \n\n Take in account the project should follow our rules, check them out in the [rules and judging section](/rules)`,
  },
  {
    title: 'You have completed all the steps!',
    tag: 'Travel granted',
    emoji: 'money-bill-wave',
    description: `We know that was a lot of steps and rules! But you've completed all of them!! **Congratulations!!** \n\n We will send you the money to your paypal account in the next 60 days after the event. \n\n If you have any problem don't hesitate to contact us sending a email to [reimbursements@hackupc.com](mailto:reimbursements@hackupc.com) \n\n **Thank you for coming to HackUPC!**`,
  },
]
