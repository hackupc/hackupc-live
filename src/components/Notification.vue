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
        <div @click="toggleAskedSubscribeAll">Nope</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ScheduleDay, ScheduleEvent } from '@/services/schedule'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { notify, initPermissions } from '@/services/notification'

export default defineComponent({
  setup() {
    const store = useStore()

    const days = computed<ScheduleDay[]>(() => store.state.schedule.days)
    const nowInSeconds = computed<number>(() => store.getters.now.unix())
    const subscribed = computed<Record<string, boolean>>(
      () => store.state.subscribed
    )

    const askedSubscribeAll = ref(false)

    const lookForUpcoming = () => {
      for (const eventId in subscribed) {
        if (subscribed.value[eventId]) {
          const event = getEvent(eventId)
          if (event) {
            const offset = event.start.unix() - nowInSeconds.value
            const EVENT_NOTIF_OFFSET = 5 * 60
            if (offset <= EVENT_NOTIF_OFFSET && offset >= 0) {
              notify(event.description, `Happening soon: ${event.title}`)
              store.dispatch('toggleSubscribe', eventId)
            }
          }
        }
      }
    }

    onMounted(() => {
      askedSubscribeAll.value =
        window.localStorage.getItem('notifications') === '1'

      initPermissions()

      window.setInterval(lookForUpcoming, 1000)
    })

    const subscribeAll = () => {
      for (const day of days.value) {
        for (const event of day.events) {
          if (!subscribed.value[event.id]) {
            store.dispatch('toggleSubscribe', event.id)
          }
        }
      }
      toggleAskedSubscribeAll()
    }

    const toggleAskedSubscribeAll = () => {
      window.localStorage.setItem('notifications', '1')
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
      toggleAskedSubscribeAll,
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
