import type { DateFormatsTypes } from './services/dates'

interface Config {
  readonly fakeStartTime?: DateFormatsTypes['full-date-time']
  readonly disabled: boolean
  readonly hideChallengesAndPrizes: boolean
  readonly hideMission: boolean
  readonly hideCafeteriaSchedule: boolean
  readonly hideMeals: boolean
  readonly hideWifiConfig: boolean
}

const config: Config = {
  //fakeStartTime: '29/4/2022 21:59:55',
  disabled: false,
  hideChallengesAndPrizes: true,
  hideMission: true,
  hideCafeteriaSchedule: true,
  hideMeals: true,
  hideWifiConfig: true,
}

export default config
