import type { SnackbarState } from './interface'

export const getters = {
  getSnackbarMessage(state: SnackbarState) {
    return state.message
  }
}
