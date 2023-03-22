import { createStore } from 'vuex'

import snackbarModule from './snackbar'

const store = createStore({
  modules: {
    snackbarModule
  }
})

export default store
