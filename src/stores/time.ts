import config from '@/config'
import { parseSpanishDate } from '@/services/dates'
import dayjs, { type Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { defineStore } from 'pinia'

dayjs.extend(duration)

const realStartTime: Dayjs = dayjs()
const fakeStartTime: Dayjs | undefined = config.fakeStartTime
  ? parseSpanishDate('full-date-time', config.fakeStartTime)
  : undefined

export const useTimeStore = defineStore({
  id: 'time',

  state: () => ({
    realNow: realStartTime,
  }),

  getters: {
    now: (state): Dayjs => {
      return fakeStartTime
        ? fakeStartTime.add(dayjs.duration(state.realNow.diff(realStartTime)))
        : state.realNow
    },
  },

  actions: {
    refreshTime(): void {
      this.realNow = dayjs()
    },
  },
})
