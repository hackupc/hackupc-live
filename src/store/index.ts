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
import { dateStringToSeconds } from '@/services/dates'

Vue.use(Vuex)

const parsedSchedule: Schedule = parseSchedule(schedule as RawSchedule)

const realStartSeconds = Math.round(Date.now() / 1000)

export default new Vuex.Store({
  state: {
    subscribed: {} as Record<string, boolean>,
    nowInSeconds: realStartSeconds,
    schedule: parsedSchedule,
    countdown: {
      start: dateStringToSeconds(parsedSchedule.countdownStart),
      end: dateStringToSeconds(parsedSchedule.countdownEnd),
    },
  },
  getters: {
    nowInSeconds: (state) => {
      const fakeStartSeconds = config.fakeStartSeconds
      if (fakeStartSeconds) {
        return state.nowInSeconds + fakeStartSeconds - realStartSeconds
      } else {
        return state.nowInSeconds
      }
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
    refreshNowInSeconds(state) {
      state.nowInSeconds = Math.round(Date.now() / 1000)
    },
  },
  actions: {
    refreshNowInSeconds({ commit }) {
      commit('refreshNowInSeconds')
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
