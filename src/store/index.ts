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
import { askNotificationPermissions } from '@/services/notification'

dayjs.extend(duration)

const parsedSchedule: Schedule = parseSchedule(schedule)

const realStartTime = dayjs()
const fakeStartTime = config.fakeStartTime
  ? parseSpanishDate('full-date-time', config.fakeStartTime)
  : undefined

const subscribed: string[] = getPersistedSubscribed()

function getPersistedSubscribed(): string[] {
  const subscribedFromLocalStorage: unknown = JSON.parse(
    window.localStorage.getItem('subscribed') || '[]'
  )
  if (
    Array.isArray(subscribedFromLocalStorage) &&
    (subscribedFromLocalStorage.length === 0 ||
      typeof subscribedFromLocalStorage[0] === 'string')
  ) {
    return subscribedFromLocalStorage as string[]
  } else {
    window.localStorage.setItem('askedGetAllNotifications', '')
    return []
  }
}

function persistSubscribed(subscribed: string[]) {
  window.localStorage.setItem('subscribed', JSON.stringify(subscribed || []))
}

function removeItemFromArray<T>(value: T, list: T[]): void {
  const index = list.indexOf(value)
  if (index > -1) {
    list.splice(index, 1)
  }
}

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
    toggleSubscribe(state, id: string) {
      askNotificationPermissions()

      if (state.subscribed.includes(id)) {
        removeItemFromArray(id, state.subscribed)
      } else {
        state.subscribed.push(id)
      }

      persistSubscribed(state.subscribed)
    },
    setSubscribe(
      state,
      { id, isSubscribed }: { id: string; isSubscribed: boolean }
    ) {
      askNotificationPermissions()

      if (state.subscribed.includes(id)) {
        if (!isSubscribed) {
          removeItemFromArray(id, state.subscribed)
        }
      } else {
        if (isSubscribed) {
          state.subscribed.push(id)
        }
      }

      persistSubscribed(state.subscribed)
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
    removeSubscribe({ commit }, value) {
      commit('setSubscribe', { id: value, isSubscribed: false })
    },
    addSubscribe({ commit }, value) {
      commit('setSubscribe', { id: value, isSubscribed: true })
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
