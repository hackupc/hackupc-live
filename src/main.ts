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
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

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

createApp(App).use(store).use(router).mount('#app')
