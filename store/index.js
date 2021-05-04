import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sideBarState: false,
      loadedAboutUs: {},
      loadedCommunities: []
    },
    mutations: {
      setAboutUs(state, info) {
        state.loadedAboutUs = info
      },
      setCommunities(state, info) {
        state.loadedCommunities = info
      },
      openSideBar(state) {
        state.sideBarState = true;
      },

      closeSideBar(state) {
        state.sideBarState = false;
      }
    },
    actions: {
      async nuxtServerInit(VuexContext, context) {
        // return function () {
        //   context.app.$axios.$get('http://185.121.81.137/api/about-us/')
        //     .then(data => {
        //       VuexContext.commit('setAboutUs', data[0])
        //     })
        //     .catch(e => context.error(e))
        // }
        const aboutUsResponse = await context.$axios.get('http://185.121.81.137/api/about-us/')
        VuexContext.commit('setAboutUs', aboutUsResponse.data[0])

        const communitiesResponse = await context.$axios.get('http://185.121.81.137/api/community/')
        VuexContext.commit('setCommunities', communitiesResponse.data)

      },
      setAboutUs(vuexContext, aboutUsInfo) {
        vuexContext.commit('setPosts', aboutUsInfo)
      },
      setCommunities(vuexContext, communityInfo) {
        vuexContext.commit('setCommunities', communityInfo)
      }
    },
    getters: {
      loadedAboutUs(state) {
        return state.loadedAboutUs
      },
      loadedCommunities(state) {
        return state.loadedCommunities
      }
    }
  })
}

export default createStore

export const state = () => ({})

export const mutations = {}
