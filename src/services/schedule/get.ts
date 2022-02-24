import type { RawSchedule } from '@/data/schedule'
import { parseSchedule } from '.'
import type { Schedule } from './types'

export async function getLattestSchedule(): Promise<Schedule | undefined> {
  if (import.meta.env.DEV) return undefined

  try {
    const response = await fetch(`/data/schedule.json?date=${Date.now()}`)
    const rawSchedule: RawSchedule = await response.json()
    return parseSchedule(rawSchedule)
  } catch (error) {
    console.error('Error fetching the schedule', error)
    return undefined
  }
}
