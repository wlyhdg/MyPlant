// import axios from "axios";

const state = {
  bmi: 0
}

const actions = {
  updateBmi({commit}, newBmi) {
    commit('refreshBmi', newBmi)
    // axios.post("/api/user/bmi", newBmi)
    // .then()
  }
};

const getters = {
  getBmi: (state) => state.bmi
};

const mutations = {
  refreshBmi: (state, newBmi) => (state.bmi = newBmi)
};

export default {
  state,
  actions,
  getters,
  mutations
}