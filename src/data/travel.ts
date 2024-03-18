export interface Travel {
  readonly title: string
  readonly description: string
}

export const travels: Travel[] = [
  {
    title: 'DISCOVER BCN',
    description: `We will provide you with a flight to start your journey.`,
  },
  {
    title: 'Hotel',
    description: `We will provide you with a hotel to keep you going through the day.`,
  },
  {
    title: 'Car',
    description: `We will provide you with a car to keep you going through the night.`,
  },
]
