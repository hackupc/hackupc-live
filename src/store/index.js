/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Config from '@/config';

Vue.use(Vuex);

function getDateTimestamp(date) {
   var dateFormat = /([0-3]?\d)\W([0-1]?\d)\W(\d{4})(\W([0-2]?\d)\W([0-5]?\d)\W?([0-5]?\d)?)?/;
   var result = date.match(dateFormat);
   return Date.UTC(result[3], result[2] - 1, result[1], result[5] || 0, result[6] || 0, result[7] || 0) / 1000;
}

function getHourTimestamp(hour) {
   var hp = hour.split(':');
   return hp[0] * 60 * 60 + hp[1] * 60;
}

function dateStringToSeconds(date) {
   var dateFormat = /([0-3]?\d)\W([0-1]?\d)\W(\d{4})(\W([0-2]?\d)\W([0-5]?\d)\W?([0-5]?\d)?)?/;
   var result = date.match(dateFormat);
   return Date.UTC(result[3], result[2] - 1, result[1], result[5] || 0, result[6] || 0, result[7] || 0) / 1000;
}

export default new Vuex.Store({
   state: {
      subscribed: {},
      realStartDate: new Date(),
      currentTime: Date.now(),
      schedule: Config.schedule,
   },
   getters: { 
      countdownStart: (state) => {
         return dateStringToSeconds(state.schedule.countdownStart) + Config.baseTimeOffset;
      },
      currentTime: (state) => {
         const fakeTime = Config.fakeTime;
         if (fakeTime) {
            return (fakeTime.getTime() + state.currentTime - state.realStartDate.getTime()) / 1000;
         } else {
            return state.currentTime / 1000;
         }
      }
   },
   mutations: {
      toggleSubscribe (state, value) {
        if (value in state.subscribed) {
          state.subscribed[value] = !state.subscribed[value]
        } else {
          state.subscribed[value] = true
        }
        window.localStorage['subscribed'] = JSON.stringify(state.subscribed);
      },
      updateSchedule (state, value) {
        state.schedule = value
      },
      updateSubscribed (state, value) {
        state.subscribed = value
      },
      updateCurrentTime (state, value) {
        state.currentTime = value
      },
   },
   actions: {
      toggleSubscribe ({ commit }, value) {
         commit('toggleSubscribe', value)
      },
      updateCurrentTime ({ commit }, value) {
         commit('updateCurrentTime', value)
      },
      getSubscribed({ commit }) {
        const subscribed = JSON.parse(window.localStorage['subscribed'] || '{}');
        commit('updateSubscribed', subscribed)
      },
      getSchedule({ commit }, cb) {
         axios.get('/data/schedule.json?date=' + Date.now())
         .then((response) => {
            for (let i = 0; i < response.data.days.length; ++i) {
               const startDateTimestamp = getDateTimestamp(response.data.days[i].date) + Config.baseTimeOffset;
               response.data.days[i]["startTmsp"] = startDateTimestamp;
               response.data.days[i]["endTmsp"] = startDateTimestamp + 24 * 60 * 60;
               for (let j = 0; j < response.data.days[i].events.length; ++j) {
                  const startHourTimestamp = startDateTimestamp + getHourTimestamp(response.data.days[i].events[j].startHour);
                  response.data.days[i].events[j]["startTmsp"] = startHourTimestamp;
                  if (!response.data.days[i].events[j].endHour) {
                     response.data.days[i].events[j]["endTmsp"] = startHourTimestamp;
                  } else {
                     response.data.days[i].events[j]["endTmsp"] = startDateTimestamp + getHourTimestamp(response.data.days[i].events[j].endHour)
                  }
                  const event = response.data.days[i].events[j];
                  response.data.days[i].events[j].title = (event.talk ? '[Talk] ' : '') + (event.author ? (event.author + ': ') : '') + (event.title || '')
               }
            }
            if ('version' in this.state.schedule && this.state.schedule.version !== response.data.version) {
               console.log('Schedule updated with message: ' + response.data.message);
               cb(response.data.message);
            } else {
               console.log('Schedule up to date');
            }
            commit("updateSchedule", response.data);
         })
         .catch((error) => {
            console.log(error);
         });
     },
   },
});
