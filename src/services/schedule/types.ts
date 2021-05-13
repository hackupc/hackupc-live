import { RawScheduleEvent, RawScheduleDay, RawSchedule } from '@/data/schedule'
import { Dayjs } from 'dayjs'

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
  countdown: {
    start: Dayjs
    end: Dayjs
  }
  submitDeadline: Dayjs
}
