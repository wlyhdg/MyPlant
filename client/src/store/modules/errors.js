const state = {
  toast: null
}
const getters = {
  toastMsg: (state) => state.toast
}

const actions = {
  toastError({commit}, error) {
    if (error.response.data.msg) {
      commit('updateError', error.response.data)
    }
  }
}

const mutations = {
  updateError: (state, errorMsg) => state.toast = errorMsg
}

export default {
  state,
  getters,
  actions,
  mutations
}