import type { RawScheduleEvent, RawScheduleDay, RawSchedule } from '@/data/schedule'
import type { Dayjs } from 'dayjs'

export type ScheduleEvent = Omit<RawScheduleEvent, 'startHour' | 'endHour'> & {
  start: Dayjs
  end: Dayjs
}

export type ScheduleDay = Omit<RawScheduleDay, 'date' | 'events'> & {
  start: Dayjs
  end: Dayjs
  events: ScheduleEvent[]
}

export type Schedule = Omit<
  RawSchedule,
  'days' | 'countdownStart' | 'countdownEnd' | 'submitDeadline'
> & {
  days: ScheduleDay[]
  countdown: ScheduleCountdown
  submitDeadline: Dayjs
}

export type ScheduleCountdown = {
  start: Dayjs
  end: Dayjs
}
