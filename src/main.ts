import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faSlack,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBus,
  faCalendarDays,
  faCar,
  faChalkboardTeacher,
  faCircleQuestion,
  faCode,
  faEnvelope,
  faFileInvoiceDollar,
  faGavel,
  faGift,
  faGlobe,
  faHome,
  faHourglassHalf,
  faHourglassStart,
  faMapLocationDot,
  faMessage,
  faMicrochip,
  faMoneyBillWave,
  faPlane,
  faPlaneArrival,
  faThumbsUp,
  faTrainSubway,
  faUserSecret,
  faUtensils,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons'

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
  faLinkedin,
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
  faMoneyBillWave,
  faEnvelope,
  faGlobe,
  faCircle,
  faCircleDot
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
