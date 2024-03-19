export interface Meals {
  readonly title: string
  readonly description: string
}

export const meals: Meals[] = [
  {
    title: 'Breakfast',
    description: `We will provide you with a breakfast to start the day with energy.`,
  },
  {
    title: 'Lunch',
    description: `We will provide you with a lunch to keep you going through the day.`,
  },
  {
    title: 'Dinner',
    description: `We will provide you with a dinner to keep you going through the night.`,
  },
]
