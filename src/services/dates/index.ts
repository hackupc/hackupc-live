import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

const defaultTimezone = 'Europe/Madrid'
dayjs.tz.setDefault(defaultTimezone)
const userTimezone = dayjs.tz.guess()

export type DateFormat = keyof DateFormatsTypes

export const dateFormats: Record<DateFormat, string> = {
  hour: 'H',
  minute: 'mm',
  second: 'ss',
  time: 'H:mm',
  weekday: 'dddd',
  'weekday-time': 'dddd [at] H:mm',
  date: 'DD/MM/YYYY',
  'date-time': 'D/M/YYYY H:mm',
  'full-date-time': 'D/M/YYYY H:mm:ss',
}

export type DateFormatsTypes = {
  hour: `${number}`
  minute: `${number}`
  second: `${number}`
  time: `${number}:${number}`
  weekday: `${string}`
  'weekday-time': `${string} at ${number}:${number}`
  date: `${number}/${number}/${2024}`
  'date-time': `${number}/${number}/${2024} ${number}:${number}`
  'full-date-time': `${number}/${number}/${2024} ${number}:${number}:${number}`
}

export function formatDate(format: DateFormat, date: Dayjs): string {
  console.log(format, date, dateFormats[format])
  console.log(date.local().format(dateFormats[format]))
  return date.local().format(dateFormats[format])
}

export function formatInterval(dateStart: Dayjs, dateEnd: Dayjs): string {
  if (!dateEnd.isValid() || dateEnd.isSame(dateStart)) {
    return `${formatDate('weekday-time', dateStart)}`
  } else if (dateEnd.isSame(dateStart, 'day')) {
    return `${formatDate('weekday', dateStart)} from ${formatDate(
      'time',
      dateStart
    )} to ${formatDate('time', dateEnd)}`
  } else {
    return `from ${formatDate('weekday-time', dateStart)} to ${formatDate(
      'weekday-time',
      dateEnd
    )}`
  }
}

/**
 * Parses a date.
 * Note: if the input is wrong, returns an invalid date.
 */
export function parseSpanishDate(
  format: DateFormat,
  dateString?: string
): Dayjs {
  return dayjs
    .tz(dateString, dateFormats[format], defaultTimezone)
    .tz(userTimezone)
}

export function formatDateInTimezone(
  format: DateFormat,
  dateString: string
): string {
  return formatDate(format, parseSpanishDate('full-date-time', dateString))
}

export function formatIntervalInTimezone(
  dateStartString: string,
  dateEndString: string
): string {
  return formatInterval(
    parseSpanishDate('full-date-time', dateStartString),
    parseSpanishDate('full-date-time', dateEndString)
  )
}
