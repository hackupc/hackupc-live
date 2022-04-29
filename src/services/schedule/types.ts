import type { RawSchedule, RawScheduleEvent } from '@/data/schedule'
import type { Dayjs } from 'dayjs'

export type ScheduleEvent = Omit<RawScheduleEvent, 'start' | 'end'> & {
  readonly start: Dayjs
  readonly end: Dayjs
}

export type ScheduleDay = {
  readonly start: Dayjs
  readonly end: Dayjs
  readonly events: ScheduleEvent[]
}

export type Schedule = Omit<
  RawSchedule,
  'days' | 'countdownStart' | 'countdownEnd' | 'submitDeadline'
> & {
  readonly days: ScheduleDay[]
  readonly countdown: ScheduleCountdown
  readonly submitDeadline: Dayjs
}

export type ScheduleCountdown = {
  readonly start: Dayjs
  readonly end: Dayjs
}
