// import { dateStringToSeconds } from '@/services/dates'

interface Config {
  readonly fakeStartSeconds?: number
  readonly disabled: boolean
}

const config: Config = {
  // If you don't want to test, just comment the fakeStartSeconds field
  // fakeStartSeconds: dateStringToSeconds('14/05/2021 19:00:00'), // year, month, day, time
  disabled: false,
}

export default config
