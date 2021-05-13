import { createStore } from 'vuex'
import config from '@/config'
import {
  parseSchedule,
  Schedule,
  getLattestSchedule,
  areSameSchedule,
} from '../services/schedule'
import { schedule } from '@/data/schedule'
import { parseSpanishDate } from '@/services/dates'
import duration from 'dayjs/plugin/duration'
import dayjs from 'dayjs'

dayjs.extend(duration)

const parsedSchedule: Schedule = parseSchedule(schedule)

const realStartTime = dayjs()
const fakeStartTime = config.fakeStartTime
  ? parseSpanishDate('full-date-time', config.fakeStartTime)
  : undefined

const subscribed: Record<string, boolean> = JSON.parse(
  window.localStorage.getItem('subscribed') || '{}'
)

export default createStore({
  state: {
    subscribed,
    now: realStartTime,
    schedule: parsedSchedule,
  },
  getters: {
    now: (state) => {
      return fakeStartTime
        ? fakeStartTime.add(dayjs.duration(state.now.diff(realStartTime)))
        : state.now
    },
  },
  mutations: {
    toggleSubscribe(state, value: string) {
      state.subscribed[value] = !state.subscribed[value]

      window.localStorage.setItem(
        'subscribed',
        JSON.stringify(state.subscribed)
      )
    },
    updateSchedule(state, value: Schedule) {
      state.schedule = value
    },
    refreshTime(state) {
      state.now = dayjs()
    },
  },
  actions: {
    refreshTime({ commit }) {
      commit('refreshTime')
    },
    toggleSubscribe({ commit }, value) {
      commit('toggleSubscribe', value)
    },
    async refreshSchedule({ commit }) {
      const schedule = await getLattestSchedule()

      if (!schedule || areSameSchedule(this.state.schedule, schedule)) {
        return
      }

      commit('updateSchedule', schedule)
    },
  },
})
