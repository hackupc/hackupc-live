import { askNotificationPermissions } from '@/services/notification'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

function removeItemFromArray<T>(value: T, list: T[]): void {
  const index = list.indexOf(value)
  if (index > -1) {
    list.splice(index, 1)
  }
}

export const useNotificationsStore = defineStore({
  id: 'notifications',

  state: () => ({
    subscriptions: useStorage<string[]>('subscriptions', []),
  }),

  getters: {},

  actions: {
    async toggleSubscription(...ids: string[]): Promise<void> {
      if (!(await askNotificationPermissions())) return

      for (const id of ids) {
        if (this.subscriptions.includes(id)) {
          removeItemFromArray(id, this.subscriptions)
        } else {
          this.subscriptions.push(id)
        }
      }
    },

    async removeSubscription(...ids: string[]): Promise<void> {
      if (!(await askNotificationPermissions())) return

      for (const id of ids) {
        if (this.subscriptions.includes(id)) {
          removeItemFromArray(id, this.subscriptions)
        }
      }
    },

    async addSubscription(...ids: string[]): Promise<void> {
      if (!(await askNotificationPermissions())) return

      for (const id of ids) {
        if (!this.subscriptions.includes(id)) {
          this.subscriptions.push(id)
        }
      }
    },
  },
})
