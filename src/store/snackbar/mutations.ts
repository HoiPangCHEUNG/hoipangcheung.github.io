import { SnackbarState } from './interface'
import { getInitialState } from './state'

export default {
  SNACKBAR_SET_INITIALIZE_STATE(state: SnackbarState) {
    Object.assign(state, getInitialState())
  },
  SNACKBAR_SET_MESSAGE(state: SnackbarState, params: { message: string; timer: number }) {
    state.message = params.message
    state.timer = params.timer
  }
}
