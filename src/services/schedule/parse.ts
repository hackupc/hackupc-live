import type { RawSchedule, RawScheduleEvent } from '@/data/schedule'
import { formatDate, parseSpanishDate } from '@/services/dates'
import type { Schedule, ScheduleDay, ScheduleEvent } from './types'

function parseScheduleEvent(event: RawScheduleEvent): ScheduleEvent {
  const startDate = parseSpanishDate('date-time', event.start)

  return {
    ...event,
    start: startDate,
    end: event.end ? parseSpanishDate('date-time', event.end) : startDate,
  }
}

export function parseSchedule(rawSchedule: RawSchedule): Schedule {
  const events = rawSchedule.events.map((event) => parseScheduleEvent(event))

  const schedule: Schedule = {
    ...rawSchedule,
    days: makeDaysFromEvents(events),
    submitDeadline: parseSpanishDate('date-time', rawSchedule.submitDeadline),
    countdown: {
      start: parseSpanishDate('date-time', rawSchedule.countdownStart),
      end: parseSpanishDate('date-time', rawSchedule.countdownEnd),
    },
  }

  return schedule
}

function makeDaysFromEvents(events: ScheduleEvent[]): ScheduleDay[] {
  return Object.values(
    groupBy(events, (event) => formatDate('date', event.start))
  ).map((dayEvents) => {
    const startDate = dayEvents[0].start.startOf('date')

    return {
      start: startDate,
      end: startDate.add(1, 'day'),
      events: dayEvents,
    }
  })
}

// Polyphill for a new JS function, should be avilable in ES2022
const groupBy = <T, K extends string>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem)
    if (!previous[group]) previous[group] = []
    previous[group].push(currentItem)
    return previous
  }, {} as Record<K, T[]>)
