import Vue from 'vue'
import Vuex from 'vuex'
import Config from '@/config'

Vue.use(Vuex)

function getDateTimestamp(date: string): number {
  const dateFormat = /([0-3]?\d)\W([0-1]?\d)\W(\d{4})(\W([0-2]?\d)\W([0-5]?\d)\W?([0-5]?\d)?)?/
  const result = date.match(dateFormat)?.map((r) => Number(r))
  if (!result) throw new Error('Wrong date format')
  return (
    Date.UTC(
      result[3],
      result[2] - 1,
      result[1],
      result[5] || 0,
      result[6] || 0,
      result[7] || 0
    ) / 1000
  )
}

function getHourTimestamp(hour: string): number {
  const hp = hour.split(':').map((h) => Number(h))
  return hp[0] * 60 * 60 + hp[1] * 60
}

function dateStringToSeconds(date: string): number {
  const dateFormat = /([0-3]?\d)\W([0-1]?\d)\W(\d{4})(\W([0-2]?\d)\W([0-5]?\d)\W?([0-5]?\d)?)?/
  const result = date.match(dateFormat)?.map((r) => Number(r))
  if (!result) throw new Error('Wrong date format')
  return (
    Date.UTC(
      result[3],
      result[2] - 1,
      result[1],
      result[5] || 0,
      result[6] || 0,
      result[7] || 0
    ) / 1000
  )
}

export default new Vuex.Store({
  state: {
    subscribed: {} as Record<string, boolean>,
    realStartDate: new Date(),
    currentTime: Date.now(),
    schedule: Config.schedule,
  },
  getters: {
    countdownStart: (state) => {
      return (
        dateStringToSeconds(state.schedule.countdownStart) +
        Config.baseTimeOffset
      )
    },
    currentTime: (state) => {
      const fakeTime = Config.fakeTime
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
    updateSchedule(state, value) {
      state.schedule = value
    },
    updateSubscribed(state, value) {
      state.subscribed = value
    },
    updateCurrentTime(state, value) {
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
    async getSchedule({ commit }, cb) {
      const response = await fetch('/data/schedule.json?date=' + Date.now())
      const data = await response.json()
      for (let i = 0; i < data.days.length; ++i) {
        const startDateTimestamp =
          getDateTimestamp(data.days[i].date) + Config.baseTimeOffset
        data.days[i]['startTmsp'] = startDateTimestamp
        data.days[i]['endTmsp'] = startDateTimestamp + 24 * 60 * 60
        for (let j = 0; j < data.days[i].events.length; ++j) {
          const startHourTimestamp =
            startDateTimestamp +
            getHourTimestamp(data.days[i].events[j].startHour)
          data.days[i].events[j]['startTmsp'] = startHourTimestamp
          if (!data.days[i].events[j].endHour) {
            data.days[i].events[j]['endTmsp'] = startHourTimestamp
          } else {
            data.days[i].events[j]['endTmsp'] =
              startDateTimestamp +
              getHourTimestamp(data.days[i].events[j].endHour)
          }
          const event = data.days[i].events[j]
          data.days[i].events[j].title =
            (event.talk ? '[Talk] ' : '') +
            (event.author ? event.author + ': ' : '') +
            (event.title || '')
        }
      }
      if (
        'version' in this.state.schedule &&
        this.state.schedule.version !== data.version
      ) {
        console.log('Schedule updated with message: ' + data.message)
        cb(data.message)
      } else {
        console.log('Schedule up to date')
      }
      commit('updateSchedule', data)
    },
  },
})
