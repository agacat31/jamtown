// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import * as firebase from 'firebase'
import VueFirebase from 'vue-firebase'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

// Config firebase project
const FBCONFIG = JSON.parse(process.env.VUE_APP_CONFIG).firebase 
Vue.use(VueFirebase, {firebase: firebase, config: FBCONFIG})

/* eslint-disable */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
