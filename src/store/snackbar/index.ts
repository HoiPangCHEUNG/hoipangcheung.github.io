import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { SnackbarState } from './interface'
import mutations from './mutations'
import state from './state'

const snackbarModule: Module<SnackbarState, any> = {
  actions,
  mutations,
  getters,
  state
}

export default snackbarModule
