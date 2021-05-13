import { Dayjs } from 'dayjs'

export interface RawScheduleEvent {
  id: string
  title: string
  description: string // Accepts Markdown
  startHour: string
  endHour?: string
  emoji?: string
}

export interface RawScheduleDay {
  date: string
  events: RawScheduleEvent[]
}

export interface RawSchedule {
  version: number
  message: string
  countdownStart: string
  countdownEnd: string
  days: RawScheduleDay[]
}

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
  'days' | 'countdownStart' | 'countdownEnd'
> & {
  days: ScheduleDay[]
  countdown: {
    start: Dayjs
    end: Dayjs
  }
}
