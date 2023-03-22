import type { ActionContext } from 'vuex'

import { SnackbarState } from './interface'

export const actions = {
  notify(context: ActionContext<SnackbarState, any>, params: { message: string }) {
    if (context.state.timer !== undefined) {
      window.clearTimeout(context.state.timer)
    }

    let timer = null
    timer = window.setTimeout(() => {
      context.commit('SNACKBAR_SET_INITIALIZE_STATE')
    }, 2000)

    context.commit('SNACKBAR_SET_MESSAGE', { message: params.message, timer })
  }
}
