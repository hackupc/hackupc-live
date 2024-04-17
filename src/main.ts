import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faSlack,
  faTiktok,
  faTwitch,
  faTwitter,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBookOpen,
  faBus,
  faCalendarDays,
  faCar,
  faChalkboardTeacher,
  faCircleQuestion,
  faCode,
  faDice,
  faEnvelope,
  faFileInvoiceDollar,
  faGavel,
  faGift,
  faGlobe,
  faHome,
  faHourglassHalf,
  faHourglassStart,
  faLocationDot,
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
import {
  faCircle,
  faCircleDot,
  faClock,
} from '@fortawesome/free-regular-svg-icons'

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
  faCircleDot,
  faDice,
  faClock,
  faLocationDot,
  faBookOpen,
  faTiktok,
  faXTwitter
)

function loadClarity() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ;(function (c, l, a, r, i, t, y) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    c[a] =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      c[a] ||
      function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t = l.createElement(r)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.async = 1
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.src = `https://www.clarity.ms/tag/${i}`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    y = l.getElementsByTagName(r)[0]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', 'lx4watt9a4')
}

loadClarity()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
