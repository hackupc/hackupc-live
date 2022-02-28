import type { Schedule } from './types'

export function areSameSchedule(
  schedule1: Schedule,
  schedule2: Schedule
): boolean {
  return JSON.stringify(schedule1) === JSON.stringify(schedule2)
}
