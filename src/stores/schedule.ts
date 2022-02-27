import { schedule } from '@/data/schedule'
import { defineStore } from 'pinia'
import type { Schedule } from '../services/schedule'
import {
  areSameSchedule,
  getLattestSchedule,
  parseSchedule,
} from '../services/schedule'

const parsedSchedule: Schedule = parseSchedule(schedule)

export const useScheduleStore = defineStore({
  id: 'schedule',

  state: () => ({
    schedule: parsedSchedule,
  }),

  getters: {},

  actions: {
    async refreshSchedule(): Promise<void> {
      const lattestSchedule = await getLattestSchedule()

      if (!lattestSchedule || areSameSchedule(this.schedule, lattestSchedule)) {
        return
      }

      this.schedule = lattestSchedule
    },
  },
})
