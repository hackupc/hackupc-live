import { Dayjs } from 'dayjs'

export interface RawScheduleEvent {
  id: string
  title: string
  description: string
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

export interface ScheduleEvent extends RawScheduleEvent {
  start: Dayjs
  end: Dayjs
}

export interface ScheduleDay extends RawScheduleDay {
  start: Dayjs
  end: Dayjs
  events: ScheduleEvent[]
}

export interface Schedule extends RawSchedule {
  days: ScheduleDay[]
}
