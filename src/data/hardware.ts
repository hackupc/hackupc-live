import ImageArduino from '@/assets/img/hardware/arduino.jpeg'
import ImageZenwatch2 from '@/assets/img/hardware/zenwatch2.jpeg'
import ImageGoogleHomeMini from '@/assets/img/hardware/homemini.jpeg'
import ImageGrove from '@/assets/img/hardware/GROVE.jpeg'
import ImageGrove2 from '@/assets/img/hardware/GROVE_2.jpeg'
import ImageEdison from '@/assets/img/hardware/edison.jpeg'
import ImageLeapMotion from '@/assets/img/hardware/leapmotion.png'
import ImageMergeVR from '@/assets/img/hardware/mergevr.jpeg'
import ImageMiBand2 from '@/assets/img/hardware/miband2.jpeg'
import ImageMyo from '@/assets/img/hardware/myo.jpeg'
import ImageOculus from '@/assets/img/hardware/oculus.jpeg'
import ImageRasberryPi3 from '@/assets/img/hardware/raspberry-pi-3-b-plus-heat-sink-starterkit.jpeg'
import ImageRasberryModules from '@/assets/img/hardware/Raspberry-Pi-3-Module-B-Sensor-Kit-37-Modules-in-1-Professional-Kit-for-Raspberry-Pi.jpeg'
import ImageSoldering from '@/assets/img/hardware/solder.png'
import ImageEcho from '@/assets/img/hardware/echo.jpeg'
import ImageRasberryPiZero from '@/assets/img/hardware/rasp pi zero w.png'

export interface Hardware {
  readonly title: string
  readonly picture?: string
  readonly quantity?: number
}

export const hardwares: Hardware[] = [
  { title: 'Arduino kit', picture: ImageArduino },
  { title: 'ASUS Zenwatch 2', picture: ImageZenwatch2 },
  { title: 'Google Home Mini', picture: ImageGoogleHomeMini },
  { title: 'Grove starter kit plus', picture: ImageGrove },
  { title: 'Grove starter kit plus gen2', picture: ImageGrove2 },
  { title: 'Intel edison', picture: ImageEdison },
  { title: 'Leap motion', picture: ImageLeapMotion },
  { title: 'Merge VR', picture: ImageMergeVR },
  { title: 'Mi band 2', picture: ImageMiBand2 },
  { title: 'Myo arm', picture: ImageMyo },
  { title: 'Oculus rift', picture: ImageOculus },
  { title: 'Raspberry Pi 3 kit', picture: ImageRasberryPi3 },
  { title: 'Raspberry modules', picture: ImageRasberryModules },
  { title: 'Raspberry Pi Zero', picture: ImageRasberryPiZero },
  { title: 'Soldering kit', picture: ImageSoldering },
  { title: 'Amazon echo dot', picture: ImageEcho },
]
