import { RawSchedule } from '@/data/schedule'
import { parseSchedule } from '.'
import { Schedule } from './types'

export async function getLattestSchedule(): Promise<Schedule | undefined> {
  if (process.env.NODE_ENV !== 'production') return undefined

  try {
    const response = await fetch('/data/schedule.json?date=' + Date.now())
    const rawSchedule: RawSchedule = await response.json()
    return parseSchedule(rawSchedule)
  } catch (error) {
    console.error('Error fetching the schedule', error)
    return undefined
  }
}
