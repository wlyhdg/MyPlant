import axios from "axios";

const state = {
  bmi: 0
}

const actions = {
  async fetchDbBmi({commit}) {
    await axios.get('/api/user/bmi')
    .then(fetchedBmi => {
      commit('setFetchedBmi', fetchedBmi)
    })
    .catch(err => console.log(err))
  },
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
  refreshBmi: (state, newBmi) => (state.bmi = newBmi),
  setFetchedBmi: (state, fetchedBmi) => state.bmi = fetchedBmi.data.bmi
};

export default {
  state,
  actions,
  getters,
  mutations
}