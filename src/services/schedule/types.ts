export interface RawScheduleEvent {
  id: string
  title: string
  description: string
  startHour: string
  endHour?: string
  emoji?: string
}

export interface RawScheduleDay {
  name: string
  date: string
  events: RawScheduleEvent[]
}

export interface RawSchedule {
  version: number
  message: string
  baseTimeOffset: number
  countdownStart: string
  days: RawScheduleDay[]
}

export interface ScheduleEvent extends RawScheduleEvent {
  startTmsp: number
  endTmsp: number
}

export interface ScheduleDay extends RawScheduleDay {
  startTmsp: number
  endTmsp: number
  events: ScheduleEvent[]
}

export interface Schedule extends RawSchedule {
  days: ScheduleDay[]
}
