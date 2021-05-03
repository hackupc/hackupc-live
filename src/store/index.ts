import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/config'
import {
  parseSchedule,
  Schedule,
  getLattestSchedule,
} from '../services/schedule'
import schedule from '../../public/data/schedule.json'
import { dateStringToSeconds } from '@/services/dates'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subscribed: {} as Record<string, boolean>,
    realStartDate: new Date(),
    currentTime: Date.now(),
    schedule: parseSchedule(schedule),
  },
  getters: {
    countdownStart: (state) => {
      return (
        dateStringToSeconds(state.schedule.countdownStart) +
        state.schedule.baseTimeOffset
      )
    },
    currentTime: (state) => {
      const fakeTime = config.fakeTime
      if (fakeTime) {
        return (
          (fakeTime.getTime() +
            state.currentTime -
            state.realStartDate.getTime()) /
          1000
        )
      } else {
        return state.currentTime / 1000
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
    updateCurrentTime(state, value: number) {
      state.currentTime = value
    },
  },
  actions: {
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
