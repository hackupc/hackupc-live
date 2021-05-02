import { parseSchedule } from '.'
import { RawSchedule, Schedule } from './types'

export async function getLattestSchedule(): Promise<Schedule> {
  const response = await fetch('/data/schedule.json?date=' + Date.now())
  const rawSchedule: RawSchedule = await response.json()

  return parseSchedule(rawSchedule)
}
