interface Config {
  readonly fakeStartTime?: string
  readonly disabled: boolean
  readonly hideChallengesAndPrizes: boolean
}

const config: Config = {
  // fakeStartTime: '29/4/2022 21:59:55',
  disabled: false,
  hideChallengesAndPrizes: true,
}

export default config
