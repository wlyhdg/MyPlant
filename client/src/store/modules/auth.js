import axios from 'axios'
// import router from '@/main.js'
const state = {
  isAuthenticated: null,
  isLoading: null,
  user: null
}

const getters = {
  authCheck: (state) => !!state.user
}

const actions = {
  login({commit, dispatch}, body) {
    return new Promise((resolve, reject) => {      
      axios.post('/api/auth/login/', body)
      .then(response => {
        if (!response.data.err) {
          commit('setUserData', response.data);
          commit('validateUser')
        }
        resolve(response);
      })
      .catch(err => {
        localStorage.removeItem('token')
        dispatch('toastError', err, {root: true})
        reject(err)
      })

    });
  },

  register({commit, dispatch}, body) {
    return new Promise((resolve, reject) => {
      axios.post('/api/user', body)
      .then(response => {
        if (!response.data.err) {
          commit('setUserData', response.data)
          commit('validateUser')
        }
        resolve(response);
      })
      .catch(err => {
        localStorage.removeItem('token')
        dispatch('toastError', err, {root: true})
        reject(err)
      })
    });
  },

  logout({commit}) {
    commit('logoutUser')
  }
}

const mutations = {
  setUserData: (state, userObj) => {
    localStorage.setItem('user', JSON.stringify(userObj));
    // state.token = token
    axios.defaults.headers['X-Auth-Token'] = userObj.token
    state.user = userObj.user
  },
  validateUser: (state) => state.isAuthenticated = true,
  logoutUser: (state) => {
    localStorage.removeItem('user')
    // location.reload()
    state.user = null
    // router.push('/')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}