import { Dayjs } from 'dayjs'
import { parseSpanishDate, parseTimeInDay } from '@/services/dates'
import { Schedule, ScheduleDay, ScheduleEvent } from './types'
import { RawScheduleEvent, RawScheduleDay, RawSchedule } from '@/data/schedule'

function parseScheduleEvent(
  event: RawScheduleEvent,
  dayDate: Dayjs
): ScheduleEvent {
  const startDate = parseTimeInDay(event.startHour, dayDate)

  return {
    ...event,
    start: startDate,
    end: event.endHour ? parseTimeInDay(event.endHour, dayDate) : startDate,
  }
}

function parseScheduleDay(day: RawScheduleDay): ScheduleDay {
  const dayDate = parseSpanishDate('date', day.date)

  return {
    ...day,
    start: dayDate,
    end: dayDate.add(1, 'day'),
    events: day.events.map((event) => parseScheduleEvent(event, dayDate)),
  }
}

export function parseSchedule(rawSchedule: RawSchedule): Schedule {
  const schedule: Schedule = {
    ...rawSchedule,
    days: rawSchedule.days.map((day) => parseScheduleDay(day)),
    submitDeadline: parseSpanishDate('date-time', rawSchedule.submitDeadline),
    countdown: {
      start: parseSpanishDate('date-time', rawSchedule.countdownStart),
      end: parseSpanishDate('date-time', rawSchedule.countdownEnd),
    },
  }

  return schedule
}
