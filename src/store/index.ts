import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/config'
import {
  parseSchedule,
  Schedule,
  getLattestSchedule,
  RawSchedule,
} from '../services/schedule'
import schedule from '../../public/data/schedule.json'
import { parseSpanishDate } from '@/services/dates'
import duration from 'dayjs/plugin/duration'
import dayjs from 'dayjs'

dayjs.extend(duration)

Vue.use(Vuex)

const parsedSchedule: Schedule = parseSchedule(schedule as RawSchedule)

const realStartTime = dayjs()
const fakeStartTime = config.fakeStartTime
  ? parseSpanishDate('full-date-time', config.fakeStartTime)
  : undefined

export default new Vuex.Store({
  state: {
    subscribed: {} as Record<string, boolean>,
    now: realStartTime,
    schedule: parsedSchedule,
    countdown: {
      start: parseSpanishDate('date-time', parsedSchedule.countdownStart),
      end: parseSpanishDate('date-time', parsedSchedule.countdownEnd),
    },
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
      if (value in state.subscribed) {
        state.subscribed[value] = !state.subscribed[value]
      } else {
        state.subscribed[value] = true
      }
      window.localStorage['subscribed'] = JSON.stringify(state.subscribed)
    },
    updateSchedule(state, value: Schedule) {
      state.schedule = value
    },
    updateSubscribed(state, value: Record<string, boolean>) {
      state.subscribed = value
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
    updateCurrentTime({ commit }, value) {
      commit('updateCurrentTime', value)
    },
    getSubscribed({ commit }) {
      const subscribed = JSON.parse(window.localStorage['subscribed'] || '{}')
      commit('updateSubscribed', subscribed)
    },
    async getSchedule({ commit }) {
      const schedule: Schedule = await getLattestSchedule()

      if (this.state.schedule.version !== schedule.version) {
        console.info('Schedule updated with message: ' + schedule.message)
        commit('updateSchedule', schedule)
      } else {
        console.info('Schedule up to date')
      }
    },
  },
})
