import type { DateFormatsTypes } from '@/services/dates'

type MarkdownString = string // Accepts Markdown

export interface RawScheduleEvent {
  id: string
  title: string
  description?: MarkdownString
  physicalLocation?: PhysicalLocation
  onlineLocation?: OnlineLocation
  start: DateFormatsTypes['date-time']
  end?: DateFormatsTypes['date-time']
}

export interface PhysicalLocation {
  text: string
  mapId: 'indoors' | 'campus' | 'judging'
}
export interface OnlineLocation {
  text: string
  url: string
  icon: 'slack' | 'twitch' | 'other' | 'youtube'
}

export interface RawSchedule {
  countdownStart: DateFormatsTypes['date-time']
  countdownEnd: DateFormatsTypes['date-time']
  submitDeadline: DateFormatsTypes['date-time']
  events: RawScheduleEvent[]
}

export const schedule: RawSchedule = {
  countdownStart: '03/05/2024 21:00',
  countdownEnd: '05/05/2024 09:00',
  submitDeadline: '05/05/2024 09:00',
  events: [
    {
      id: 'checkin',
      physicalLocation: {
        text: 'A5-A6 Underground corridor',
        mapId: 'indoors',
      },
      title: 'Hacker Registration',
      start: '03/05/2024 16:00',
      end: '03/05/2024 18:45',
      description: /* markdown */ ` Register to the hackathon and get your swag! Make sure to have ready your **ID and your QR ticket**`,
    },
  ],
}
