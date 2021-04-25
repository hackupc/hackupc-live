/* eslint-disable */
import schedule from '../public/data/schedule.json';

export default {
  // If you don't want to test, just comment the fakeTime field
  // fakeTime: new Date('2021-05-14 20:59:55'), // year, month, day, time
  disabled: false,
  notificationTitle: 'HackUPC 2021',
  notificationIcon: 'favicon.ico',
  baseTimeOffset: -120 * 60,
  hackathon_duration_hours: 36,
  schedule: schedule,
};
