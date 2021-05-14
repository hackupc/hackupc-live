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

<script lang="ts">
import { ScheduleDay, ScheduleEvent } from '@/services/schedule'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { notify } from '@/services/notification'
import { Dayjs } from 'dayjs'

const NOTIFY_MINUTES_BEFORE = 5

export default defineComponent({
  setup() {
    const store = useStore()

    const days = computed<ScheduleDay[]>(() => store.state.schedule.days)
    const now = computed<Dayjs>(() => store.getters.now)
    const subscribed = computed<string[]>(() => store.state.subscribed)

    const askedSubscribeAll = ref(
      window.localStorage.getItem('askedGetAllNotifications') === '1'
    )

    const lookForUpcoming = () => {
      for (const id of subscribed.value) {
        const event = getEvent(id)
        if (!event) {
          store.dispatch('removeSubscribe', id)
          continue
        }

        const remainingMinutes = now.value.diff(event.start, 'minutes', true)
        if (remainingMinutes > 0 && remainingMinutes <= NOTIFY_MINUTES_BEFORE) {
          notify({
            title: `Happening soon: ${event.title}`,
            body: event.description,
          })
          store.dispatch('removeSubscribe', id)
        }
      }
    }

    window.setInterval(lookForUpcoming, 1000)

    const subscribeAll = () => {
      for (const day of days.value) {
        for (const event of day.events) {
          store.dispatch('addSubscribe', event.id)
        }
      }
      neverAskAgainGetAllNotifications()
    }

    const neverAskAgainGetAllNotifications = () => {
      window.localStorage.setItem('askedGetAllNotifications', '1')
      askedSubscribeAll.value = true
    }

    const getEvent = function (id: string): ScheduleEvent | undefined {
      return days.value
        .flatMap((day) => day.events)
        .find((event) => event.id.toString() === id.toString())
    }

    return {
      askedSubscribeAll,
      subscribeAll,
      neverAskAgainGetAllNotifications,
    }
  },
})
</script>

<style lang="scss" scoped>
.prompt {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 110;
  backdrop-filter: blur(10px);

  &__box {
    color: $secondaryTextColor;
    background-color: $bgColor;
    padding: 20px;
    margin: 20px;
    max-width: 575px;
    border-radius: 5px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    h1 {
      margin: 0;
      padding: 0;
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
      color: $contrastColor;
      background-color: $primaryColor;
      cursor: pointer;
      border-radius: 5px;
      margin-left: 16px;
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
</style>
