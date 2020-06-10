import Vue from 'vue'
import Vuex from 'vuex'
import cats from '@/data/cats'
import dogs from '@/data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs],
    breeds: [
      'tuxedo',
      'tabby',
      'bombay'
    ],
    genders: [
      'male',
      'female'
    ],
    species: [
      'dog',
      'cat'
    ]
  },
  mutations: {
    appendPet (state, { spec, pet }) {
      state[spec].push(pet)
    }
  },
  actions: {
    addPet ({ commit }, payload) {
      commit('appendPet', payload)
    }
  },
  getters: {
    animalsCount: (state) => {
      return state.pets.length
    }
  },
  modules: {
  }
})
