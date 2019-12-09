import Vue from 'vue'
import Vuex from 'vuex'
import weatherServices from '../services/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      name: '',
      country: ''
    },
    temp:{
      current: '',
      min: '',
      max: '',
      icon: ''
    },
    weather:{
      main:'',
      description: ''
    }
  },
  mutations: {
    setWeather(state, payload){
      state.city.name = payload.name;
      state.city.country = payload.sys.country;
      state.temp.current = payload.main.temp;
      state.temp.min = payload.main.temp_min;
      state.temp.max = payload.main.temp_max;
      state.temp.icon = `/img/${payload.weather[0].icon}@2x.png`
      state.weather.main = payload.weather[0].main;
      state.weather.description = payload.weather[0].description;
    }
  },
  actions: {
    getWeather(context){
      weatherServices.currentWeather().then(res => {
        context.commit('setWeather',res);
      });
    }
  },
  modules: {
  }
})
