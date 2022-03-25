<script setup lang="ts">
import { notify } from '@/services/notification'
import type { ScheduleDay, ScheduleEvent } from '@/services/schedule'
import { useNotificationsStore } from '@/stores/notifications'
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'
import { useStorage } from '@vueuse/core'
import type { Dayjs } from 'dayjs'
import { computed, watch } from 'vue'

const NOTIFY_MINUTES_BEFORE = 5

const timeStore = useTimeStore()
const scheduleStore = useScheduleStore()
const notificationsStore = useNotificationsStore()

const days = computed<ScheduleDay[]>(() => scheduleStore.schedule.days)
const now = computed<Dayjs>(() => timeStore.now)
const subscriptions = computed<string[]>(() => notificationsStore.subscriptions)

const askedSubscribeAll = useStorage<boolean>('askedSubscribeAll', false)

watch(now, async () => {
  for (const id of subscriptions.value) {
    const event = getEvent(id)
    if (!event) {
      notificationsStore.removeSubscription(id)
      continue
    }

    const remainingMinutes = event.start.diff(now.value, 'minutes', true)
    if (remainingMinutes < 0) {
      notificationsStore.removeSubscription(id)
      continue
    }

    if (remainingMinutes <= NOTIFY_MINUTES_BEFORE) {
      notify({
        title: `Happening soon: ${event.title}`,
        body: event.description,
      })
      await notificationsStore.removeSubscription(id)
    }
  }
})

const subscribeAll = async () => {
  const ids = days.value.flatMap((day) => day.events.map((event) => event.id))

  await notificationsStore.addSubscription(...ids)
  neverAskAgainGetAllNotifications()
}

const neverAskAgainGetAllNotifications = () => {
  askedSubscribeAll.value = true
}

const getEvent = function (id: string): ScheduleEvent | undefined {
  return days.value
    .flatMap((day) => day.events)
    .find((event) => event.id.toString() === id.toString())
}
</script>

<template>
  <div v-if="!askedSubscribeAll" class="prompt">
    <div class="prompt__box">
      <h1>Notifications for upcoming events</h1>

      <p>Do you want to subscribe to all the events?</p>
      <p>You will receive a notification 2 minutes before something happens.</p>
      <p>
        <strong>We won't spam you:</strong> You can always choose to subscribe
        or unsubscribe by clicking individually on an event.
      </p>

      <div class="prompt__buttons">
        <div @click="subscribeAll">All right</div>
        <div @click="neverAskAgainGetAllNotifications">Nope</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prompt {
  position: fixed;
  z-index: 110;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  &__box {
    max-width: 575px;
    padding: 20px;
    margin: 20px;
    background-color: $bgColor;
    border-radius: 5px;
    box-shadow: 0 4px 24px rgb(0 0 0 / 30%);
    color: $secondaryTextColor;

    h1 {
      padding: 0;
      margin: 0;
    }

    p {
      margin: 16px 0;
    }
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;

    div {
      padding: 5px 10px;
      margin-left: 16px;
      background-color: $primaryColor;
      border-radius: 5px;
      color: $contrastColor;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1px;
    }

    #promptCancel {
      background-color: #ddd;
      color: #666;
      font-weight: normal;
      letter-spacing: 0;
    }
  }
}

strong {
  color: $highlightColor;
}
</style>
