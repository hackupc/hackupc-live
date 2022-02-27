import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faMedium,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { createPinia } from 'pinia'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

console.log('main.ts')

const { updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegistered(registration) {
    console.log('on registered', registration)
    if (!registration) return

    setInterval(() => {
      console.log('sw update', registration)

      updateServiceWorker()
      registration.update()
    }, 10 * 1000)
  },
})

library.add(
  faTwitch,
  faDiscord,
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faGithub,
  faMedium
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
