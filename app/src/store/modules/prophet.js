import http from '@/util/http'

const state = {
  img_data: '',
  components_img_data: '',
  is_loading: false
}

const getters = {
}

const actions = {
  img ({ commit }) {
    commit({
      type: 'loading',
      data: true
    })
    return http.get('/api/prophet')
      .then(({ data }) => {
        commit({
          type: 'img',
          data: data
        })
      })
      .catch(({ error }) => {
        console.log(error)
      })
      .then(() => {
        commit({
          type: 'loading',
          data: false
        })
      })
  }
}

const mutations = {
  img (state, payload) {
    state.img_data = payload.data.img_data
    state.components_img_data = payload.data.components_img_data
  },
  loading (state, payload) {
    state.is_loading = payload.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
