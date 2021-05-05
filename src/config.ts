interface Config {
  readonly fakeTime?: Date
  readonly disabled: boolean
  readonly hackathon_duration_hours: number
}

const config: Config = {
  // If you don't want to test, just comment the fakeTime field
  // fakeTime: new Date('2021-05-14 20:59:55'), // year, month, day, time
  disabled: false,
  hackathon_duration_hours: 41,
}

export default config
