import Vuex from 'vuex'
import axios from 'axios'
import Vue from "vue";

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
      loadedEvent: [],
      loadedTeam: [],
      loadedGallery: [],
      loadedSchedule: [],
      loadedArchive: [],
      loadedArea: []
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
      setTeam(state, info) {
        state.loadedTeam = info
      },
      setGallery(state, info) {
        state.loadedGallery = info
      },
      setSchedule(state, info) {
        state.loadedSchedule = info
      },
      setArchive(state, info) {
        state.loadedArchive = info
      },
      setArea(state, info) {
        state.loadedArea = info
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

        const teamResponse = await context.$axios.get(process.env.API_URL + 'our-team/')
        VuexContext.commit('setTeam', teamResponse.data)

        const galleryResponse = await context.$axios.get(process.env.API_URL + 'gallery/')
        VuexContext.commit('setGallery', galleryResponse.data)

        const scheduleResponse = await context.$axios.get(process.env.API_URL + 'month/')
        VuexContext.commit('setSchedule', scheduleResponse.data)

        const archiveResponse = await context.$axios.get(process.env.API_URL + 'archieve/')
        VuexContext.commit('setArchive', archiveResponse.data)

        const areaResponse = await context.$axios.get(process.env.API_URL + 'area/')
        VuexContext.commit('setArea', areaResponse.data)

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
      setTeam(vuexContext, teamInfo) {
        vuexContext.commit('setTeam', teamInfo)
      },
      setGallery(vuexContext, galleryInfo) {
        vuexContext.commit('setGallery', galleryInfo)
      },
      setSchedule(vuexContext, scheduleInfo) {
        vuexContext.commit('setSchedule', scheduleInfo)
      },
      setArchive(vuexContext, archiveInfo) {
        vuexContext.commit('setArchive', archiveInfo)
      },
      setArea(vuexContext, areaInfo) {
        vuexContext.commit('setArea', areaInfo)
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
      loadedTeam(state) {
        return state.loadedTeam
      },
      loadedGallery(state) {
        return state.loadedGallery
      },
      loadedSchedule(state) {
        return state.loadedSchedule
      },
      loadedArchive(state) {
        return state.loadedArchive
      },
      loadedArea(state) {
        return state.loadedArea
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
