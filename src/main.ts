import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faMedium,
  faSlack,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

registerSW({
  immediate: true,
  onRegistered(registration) {
    if (!registration) return

    setInterval(() => {
      registration.update()
    }, 60 * 1000) // 1 minute
  },
})

library.add(
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faMedium,
  faSlack,
  faTwitch,
  faTwitter,
  faYoutube
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
