import {
  RawSchedule,
  RawScheduleDay,
  RawScheduleEvent,
  Schedule,
  ScheduleDay,
  ScheduleEvent,
} from './types'

function getDateTimestamp(date: string): number {
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

function getHourTimestamp(hourString: string): number {
  const [hour, minute = 0] = hourString
    .trim()
    .split(':')
    .map((n) => Number(n))

  if (isNaN(hour)) throw new Error('Wrong time format')

  return hour * 60 * 60 + minute * 60
}

function parseScheduleEvent(
  event: RawScheduleEvent,
  dayTimestamp: number
): ScheduleEvent {
  const hourTimestamp = dayTimestamp + getHourTimestamp(event.startHour)

  return {
    ...event,
    startTmsp: hourTimestamp,
    endTmsp: event.endHour
      ? dayTimestamp + getHourTimestamp(event.endHour)
      : hourTimestamp,
  }
}

function parseScheduleDay(
  day: RawScheduleDay,
  baseTimeOffset: number
): ScheduleDay {
  const dayTimestamp = getDateTimestamp(day.date) + baseTimeOffset

  return {
    ...day,
    startTmsp: dayTimestamp,
    endTmsp: dayTimestamp + 24 * 60 * 60,
    events: day.events.map((event) => parseScheduleEvent(event, dayTimestamp)),
  }
}

export function parseSchedule(rawSchedule: RawSchedule): Schedule {
  const schedule: Schedule = {
    ...rawSchedule,
    days: rawSchedule.days.map((day) =>
      parseScheduleDay(day, rawSchedule.baseTimeOffset)
    ),
  }

  return schedule
}
