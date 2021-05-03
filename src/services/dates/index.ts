export function getDateTimestamp(date: string): number {
  const dateFormat = /([0-3]?\d)\W([0-1]?\d)\W(\d{4})(\W([0-2]?\d)\W([0-5]?\d)\W?([0-5]?\d)?)?/
  const matches = date.trim().match(dateFormat)
  if (!matches) throw new Error('Wrong date format')

  const [
    ,
    day,
    month,
    year,
    hour = 0,
    minute = 0,
    second = 0,
  ] = matches.map((n) => Number(n))

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error('Wrong date format')
  }

  return Date.UTC(year, month - 1, day, hour, minute, second) / 1000
}

export function getHourTimestamp(hourString: string): number {
  const [hour, minute = 0] = hourString
    .trim()
    .split(':')
    .map((n) => Number(n))

  if (isNaN(hour)) throw new Error('Wrong time format')

  return hour * 60 * 60 + minute * 60
}

export function dateStringToSeconds(date: string): number {
  const dateFormat = /([0-3]?\d)\W([0-1]?\d)\W(\d{4})(\W([0-2]?\d)\W([0-5]?\d)\W?([0-5]?\d)?)?/
  const result = date.match(dateFormat)?.map((n) => Number(n))
  if (!result) throw new Error('Wrong date format')
  return (
    Date.UTC(
      result[3],
      result[2] - 1,
      result[1],
      result[5] || 0,
      result[6] || 0,
      result[7] || 0
    ) / 1000
  )
}
