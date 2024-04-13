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
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPlaneArrival,
  faTrainSubway,
  faWheelchair,
  faCar,
  faBus,
  faHome,
  faCalendarDays,
  faMapLocationDot,
  faUserSecret,
  faUtensils,
  faPlane,
  faCircleQuestion,
  faGavel,
  faMessage,
  faCode,
  faChalkboardTeacher,
  faMicrochip,
  faGift,
  faHourglassStart,
  faFileInvoiceDollar,
  faHourglassHalf,
  faThumbsUp,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

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
  faYoutube,
  faWheelchair,
  faTrainSubway,
  faPlaneArrival,
  faCar,
  faBus,
  faHome,
  faCalendarDays,
  faMapLocationDot,
  faUserSecret,
  faUtensils,
  faPlane,
  faCircleQuestion,
  faGavel,
  faMessage,
  faCode,
  faChalkboardTeacher,
  faMicrochip,
  faGift,
  faLinkedin,
  faHourglassStart,
  faHourglassHalf,
  faThumbsUp,
  faFileInvoiceDollar,
  faMoneyBillWave
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
