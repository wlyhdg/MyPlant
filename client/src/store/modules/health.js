import axios from "axios";

const state = {
  bmi: 0
}

const actions = {
  async updateBmi({commit}, newBmi) {
    let user = JSON.parse(localStorage.getItem('user'));
    commit('refreshBmi', newBmi)
    axios.patch("/api/user/bmi", {
      bmi: newBmi,
      user: user.user 
    })
    
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