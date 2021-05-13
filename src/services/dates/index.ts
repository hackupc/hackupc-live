import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Duration } from 'dayjs/plugin/duration'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

export type DateFormat =
  | 'minute'
  | 'second'
  | 'time'
  | 'weekday'
  | 'weekday-time'
  | 'date'
  | 'date-time'
  | 'full-date-time'

export const dateFormats: Record<DateFormat, string> = {
  minute: 'mm',
  second: 'ss',
  time: 'H:mm',
  weekday: 'dddd',
  'weekday-time': 'dddd H:mm',
  date: 'D/M/YYYY',
  'date-time': 'D/M/YYYY H:mm',
  'full-date-time': 'D/M/YYYY H:mm:ss',
} as const

export function formatDate(format: DateFormat, date: Dayjs): string {
  return date.local().format(dateFormats[format])
}

export function formatDuration(format: DateFormat, date: Duration): string {
  return date.format(dateFormats[format])
}

export function parseSpanishDate(
  format: DateFormat,
  dateString: string
): Dayjs {
  return dayjs(dateString, dateFormats[format]).tz('Europe/Madrid')
}

export function parseTimeInDay(timeString: string, dayDate: Dayjs): Dayjs {
  const timeDate = dayjs(timeString, dateFormats['time'])
  return dayDate.hour(timeDate.hour()).minute(timeDate.minute())
}
