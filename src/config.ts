import type { DateFormatsTypes } from './services/dates'

interface Config {
  readonly fakeStartTime?: DateFormatsTypes['full-date-time']
  readonly disabled: boolean
  readonly hideChallengesAndPrizes: boolean
  readonly hideMission: boolean
  readonly hideCafeteriaSchedule: boolean
  readonly hideMeals: boolean
  readonly hideWifiConfig: boolean
  readonly hideActivities: boolean
  readonly workingDiscovery: boolean
  readonly hideMentors: boolean
}

const config: Config = {
  // fakeStartTime: '15/4/2024 21:59:55',
  disabled: false,
  hideChallengesAndPrizes: false,
  hideCafeteriaSchedule: false,
  hideMeals: false,
  hideWifiConfig: false,
  hideMission: false,
  hideActivities: false,
  workingDiscovery: true,
  hideMentors: true,
}

export default config
