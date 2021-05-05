const spainTimezoneOffsetHours = -2 as const

function makeUTCDateString({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0,
  timezoneOffsetHours = spainTimezoneOffsetHours,
}: {
  year: number
  month: number
  day: number
  hour?: number
  minute?: number
  second?: number
  timezoneOffsetHours?: number
}): string {
  const date = `${Math.floor(year)}-${addLeadingZero(month)}-${addLeadingZero(
    day
  )}`
  const time = `${addLeadingZero(hour)}:${addLeadingZero(
    minute
  )}:${addLeadingZero(second)}.000`
  const offsetSign = Math.floor(timezoneOffsetHours) > 0 ? '+' : '-'
  const offset = `${offsetSign}${addLeadingZero(timezoneOffsetHours)}:00`

  return `${date}T${time}${offset}`
}

export function addLeadingZero(n: number): string {
  return ('0' + Math.floor(Math.abs(n))).slice(-2)
}

export function dateStringToSeconds(date: string): number {
  const dateFormat = /([0-3]?\d)\D([0-1]?\d)\D(\d{4})(\D([0-2]?\d)\D([0-5]?\d)\D?([0-5]?\d)?)?/
  const matches = date.trim().match(dateFormat)
  if (!matches) throw new Error('Wrong date format')

  const [, day, month, year, , hour, minute, second] = matches
    .map((n) => Number(n))
    .map((n) => (isNaN(n) ? undefined : n))

  if (year === undefined || month === undefined || day === undefined) {
    throw new Error('Wrong date format')
  }

  return Math.round(
    Date.parse(
      makeUTCDateString({
        year,
        month,
        day,
        hour,
        minute,
        second,
      })
    ) / 1000
  )
}

export function hourStringToSeconds(hourString: string): number {
  const [hour, minute = 0] = hourString
    .trim()
    .split(':')
    .map((n) => Number(n))
    .map((n) => (isNaN(n) ? undefined : n))

  if (hour === undefined) throw new Error('Wrong time format')

  return hour * 60 * 60 + (minute + spainTimezoneOffsetHours) * 60
}
