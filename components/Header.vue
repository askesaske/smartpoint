<template>
  <header class="header" :class=" { 'header--sidebar-open': sideBarState, 'header--static': headerStatic}">
    <div class="header__container">
      <nuxt-link tag="a" to="/" class="header__logo">
        <img src="../assets/img/logo-static.png" alt="" v-if="headerStatic">
        <img src="../assets/img/logo.png" alt="" v-else>
      </nuxt-link>

      <div class="header__items">

        <div class="header__location" v-click-outside="hideLocation" @click="toggleLocation">
          <svg width="20" height="20">
            <use href="../assets/img/icons.svg#map-pin"></use>
          </svg>

          <p>{{ this.location }}</p>

          <div class="header__location-dropdown" v-if="locationToggle">
            <p @click="changeLocation(city)" v-for="city in cities" :key="city">{{ city }}</p>
          </div>
        </div>

        <div class="header__lang-box" v-click-outside="hideLanguage" @click="toggleLanguage">
          {{ this.language }}
          <div class="header__lang-dropdown" v-if="languageToggle">
            <p @click="changeLanguage(language)" v-for="language in languages" :key="language">{{ language }}</p>
          </div>
        </div>

        <div class="header__user-box">
          <svg width="20" height="20">
            <use href="../assets/img/icons.svg#user"></use>
          </svg>
        </div>

        <svg class="header__burger" width="20" height="20" @click="openSideBar">
          <use href="../assets/img/icons.svg#burger"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  data() {
    return {
      locationToggle: false,
      location: "Алматы",
      cities: [
        "Алматы",
        "Атырау"
      ],
      languages: [
        "РУС",
        "ENG"
      ],
      language: "РУС",
      languageToggle: false
    };
  },
  directives: {
    ClickOutside
  },
  computed: {
    sideBarState() {
      return this.$store.state.sideBarState
    },
    headerStatic() {
      if(this.$route.path !== '/') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    openSideBar() {
      this.$store.commit('openSideBar')
    },
    changeLocation(city) {
      if (this.location !== city) {
        this.location = city;
        this.cities.reverse();
      }
      this.locationToggle = false;
    },
    toggleLocation() {
      this.locationToggle = !this.locationToggle;
    },
    hideLocation() {
      this.locationToggle = false;
    },
    changeLanguage(lang) {
      if (this.language !== lang) {
        this.language = lang;
        this.languages.reverse();
      }
      this.languageToggle = false;
    },
    toggleLanguage() {
      this.languageToggle = !this.languageToggle;
    },
    hideLanguage() {
      this.languageToggle = false;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
