export const state = () => ({
  sideBarState: false
})

export const mutations = {
  openSideBar(state) {
    state.sideBarState = true;
  },

  closeSideBar(state) {
    state.sideBarState = false;
  }
}
