import type { DateFormatsTypes } from './services/dates'

interface Config {
  readonly fakeStartTime?: DateFormatsTypes['full-date-time']
  readonly disabled: boolean
  readonly hideChallengesAndPrizes: boolean
}

const config: Config = {
  // fakeStartTime: '29/4/2022 21:59:55',
  disabled: false,
  hideChallengesAndPrizes: false,
}

export default config
