import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import App from './App.vue'
import './assets/home.css'
import store from './store'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(store)
app.use(vuetify)
app.mount('#app')
