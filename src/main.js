import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './../node_modules/bulma/css/bulma.css'

library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(axios)

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
