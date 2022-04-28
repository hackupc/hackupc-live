import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { Duration } from 'dayjs/plugin/duration'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

export type DateFormat =
  | 'hour'
  | 'minute'
  | 'second'
  | 'time'
  | 'weekday'
  | 'weekday-time'
  | 'date'
  | 'date-time'
  | 'full-date-time'

export const dateFormats: Record<DateFormat, string> = {
  hour: 'H',
  minute: 'mm',
  second: 'ss',
  time: 'H:mm',
  weekday: 'dddd',
  'weekday-time': 'dddd [at] H:mm',
  date: 'D/M/YYYY',
  'date-time': 'D/M/YYYY H:mm',
  'full-date-time': 'D/M/YYYY H:mm:ss',
}

export function formatDate(format: DateFormat, date: Dayjs): string {
  return date.local().format(dateFormats[format])
}

export function formatDuration(format: DateFormat, date: Duration): string {
  return date.format(dateFormats[format])
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
  return dayjs(dateString, dateFormats[format]).tz('Europe/Madrid')
}

export function parseTimeInDay(timeString: string, dayDate: Dayjs): Dayjs {
  const timeDate = dayjs(timeString, dateFormats['time'])
  return dayDate.hour(timeDate.hour()).minute(timeDate.minute())
}
