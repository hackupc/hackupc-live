import { defineStore } from 'pinia'
import {
  parseSchedule,
  getLattestSchedule,
  areSameSchedule,
} from '../services/schedule'
import type { Schedule } from '../services/schedule'
import { schedule } from '@/data/schedule'

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
