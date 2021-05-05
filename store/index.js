import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sideBarState: false,
      loadedAboutUs: {},
      loadedCommunities: [],
      loadedNews: [],
      loadedInstImages: []
    },
    mutations: {
      setAboutUs(state, info) {
        state.loadedAboutUs = info
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

        const newsResponse = await context.$axios.get('http://185.121.81.137/api/news/')
        VuexContext.commit('setNews', newsResponse.data)

        const instImagesResponse = await context.$axios.get('https://graph.instagram.com/me/media?access_token=IGQVJVaUQ4ZAXZAWSEpxakpWaDgxR0Y1N3NCVW42MS12VElDRm1PbHZAsRGQ4RldhMTUtU1A1Nm9xdzl3c0pKYmNBTzdsY3B6cVJPUUpsb3pYOEpHeTVGU216Ui02MzhXaEdKbDhRem9lNmpJbTduWjlxUgZDZD&fields=media_url,media_type,caption,permalink')
        VuexContext.commit('setInstImages', instImagesResponse.data.data.filter(images => images.media_type !== 'VIDEO'))

      },
      setAboutUs(vuexContext, aboutUsInfo) {
        vuexContext.commit('setPosts', aboutUsInfo)
      },
      setCommunities(vuexContext, communityInfo) {
        vuexContext.commit('setCommunities', communityInfo)
      },
      setNews(vuexContext, newInfo) {
        vuexContext.commit('setNews', newInfo)
      },
      setInstImages(vuexContext, instImagesInfo) {
        vuexContext.commit('setInstImages', instImagesInfo)
      }
    },
    getters: {
      loadedAboutUs(state) {
        return state.loadedAboutUs
      },
      loadedCommunities(state) {
        return state.loadedCommunities
      },
      loadedNews(state) {
        return state.loadedNews
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
