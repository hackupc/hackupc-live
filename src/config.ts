import schedule from '../public/data/schedule.json'

interface Config {
	fakeTime?: Date
	disabled: boolean
	notificationTitle: string
	notificationIcon: string
	baseTimeOffset: number
	hackathon_duration_hours: number
	schedule: typeof schedule
}

const config: Config = {
	// If you don't want to test, just comment the fakeTime field
	// fakeTime: new Date('2021-05-14 20:59:55'), // year, month, day, time
	disabled: false,
	notificationTitle: 'HackUPC 2021',
	notificationIcon: 'favicon.ico',
	baseTimeOffset: -60 * 60,
	hackathon_duration_hours: 41,
	schedule: schedule,
}

export default config
