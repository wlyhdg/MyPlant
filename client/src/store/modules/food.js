const state = {
  menuClosed: true,
  foodList: []
}

const getters = {
  getModalState: (state) => state.menuClosed,
  absorbFood: (state) => state.foodList
}

const actions = {
  closeMenu({commit, state}) {
    if (!state.menuClosed) {
      commit('closeMenu')
    }
  },
  openMenu({commit, state}) {
    if (state.menuClosed) {
      commit('openMenu')
    }
  }

}

const mutations = {
  closeMenu: (state) => state.menuClosed = true,
  openMenu: (state) => state.menuClosed = false
};

export default {
  state,
  getters,
  actions,
  mutations
}