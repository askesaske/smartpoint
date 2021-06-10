import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sideBarState: false,
      loadedAboutUs: {},
      loadedAdvantages: [],
      loadedCommunities: [],
      loadedAdditionalServices: [],
      loadedNews: [],
      loadedInstImages: [],
      loadedCoworking: [],
      loadedEvent: []
    },
    mutations: {
      setAboutUs(state, info) {
        state.loadedAboutUs = info
      },
      setAdvantages(state, info) {
        state.loadedAdvantages = info
      },
      setAdditionalServices(state, info) {
        state.loadedAdditionalServices = info
      },
      setCommunities(state, info) {
        state.loadedCommunities = info
      },
      setNews(state, info) {
        state.loadedNews = info
      },
      setInstImages(state, info) {
        state.loadedInstImages = info
      },
      setCoworking(state, info) {
        state.loadedCoworking = info
      },
      setEvents(state, info) {
        state.loadedEvent = info
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

        const aboutUsResponse = await context.$axios.get(process.env.API_URL + 'about-us/')
        VuexContext.commit('setAboutUs', aboutUsResponse.data[0])

        const advantagesResponse = await context.$axios.get(process.env.API_URL + 'advantages/')
        VuexContext.commit('setAdvantages', advantagesResponse.data)

        const additionalServicesResponse = await context.$axios.get(process.env.API_URL + 'additional-services/')
        VuexContext.commit('setAdditionalServices', additionalServicesResponse.data)

        const communitiesResponse = await context.$axios.get(process.env.API_URL + 'community/')
        VuexContext.commit('setCommunities', communitiesResponse.data)

        const newsResponse = await context.$axios.get(process.env.API_URL + 'news/')
        VuexContext.commit('setNews', newsResponse.data)

        const coworkingResponse = await context.$axios.get(process.env.API_URL + 'coworking/')
        VuexContext.commit('setCoworking', coworkingResponse.data)

        const eventResponse = await context.$axios.get(process.env.API_URL + 'event/')
        VuexContext.commit('setEvents', eventResponse.data.filter(e => e.is_active === true))

        const instImagesResponse = await context.$axios.get('https://graph.instagram.com/me/media?access_token=' + process.env.INST_TOKEN + '&fields=media_url,media_type,caption,permalink')
        VuexContext.commit('setInstImages', instImagesResponse.data.data.filter(images => images.media_type !== 'VIDEO'))

      },

      setAboutUs(vuexContext, aboutUsInfo) {
        vuexContext.commit('setPosts', aboutUsInfo)
      },
      setAdvantages(vuexContext, advantagesInfo) {
        vuexContext.commit('setAdvantages', advantagesInfo)
      },
      setAdditionalServices(vuexContext, additionalServiceInfo) {
        vuexContext.commit('setAdditionalServices', additionalServiceInfo)
      },
      setCommunities(vuexContext, communityInfo) {
        vuexContext.commit('setCommunities', communityInfo)
      },
      setNews(vuexContext, newInfo) {
        vuexContext.commit('setNews', newInfo)
      },
      setCoworking(vuexContext, coworkingInfo) {
        vuexContext.commit('setCoworking', coworkingInfo)
      },
      setEvents(vuexContext, eventsInfo) {
        vuexContext.commit('setEvents', eventsInfo)
      },
      setInstImages(vuexContext, instImagesInfo) {
        vuexContext.commit('setInstImages', instImagesInfo)
      }
    },
    getters: {
      loadedAboutUs(state) {
        return state.loadedAboutUs
      },
      loadedAdvantages(state) {
        return state.loadedAdvantages
      },
      loadedAdditionalServices(state) {
        return state.loadedAdditionalServices
      },
      loadedCommunities(state) {
        return state.loadedCommunities
      },
      loadedNews(state) {
        return state.loadedNews
      },
      loadedCoworking(state) {
        return state.loadedCoworking
      },
      loadedEvents(state) {
        return state.loadedEvent
      },
      loadedInstImages(state) {
        return state.loadedInstImages
      }
    }
  })
}

export default createStore

export const state = () => ({})

export const mutations = {}
