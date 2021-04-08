<template>
  <div>
    <Header/>
    <main class="main" :class="sideBarState ? 'main--sidebar-open' : ''">
      <div class="sidebar" :class="sideBarState ? 'sidebar--open' : ''">
        <svg class="sidebar__close" width="16" height="16" @click="closeSideBar">
          <use href="../assets/img/icons.svg#close"></use>
        </svg>

        <div class="sidebar__heading">
          Меню
        </div>

        <div class="sidebar__list">
          <a href="#" class="sidebar__link">О нас</a>
          <a href="#" class="sidebar__link">Комьюнити</a>
          <a href="#" class="sidebar__link">Онлайн бронирование</a>
          <a href="#" class="sidebar__link">Тарифы</a>
          <a href="#" class="sidebar__link">Мероприятия</a>
          <a href="#" class="sidebar__link">Пространство</a>
          <a href="#" class="sidebar__link">Новости</a>
          <a href="#" class="sidebar__link">Наша галерея</a>
          <a href="#" class="sidebar__link">Наша команда</a>
        </div>

      </div>
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  computed: {
    sideBarState() {
      return this.$store.state.sideBarState
    }
  },
  methods: {
    closeSideBar() {
      this.$store.commit('closeSideBar')
    },
  },
}
</script>

<style lang="scss">
@import '../node_modules/swiper/swiper-bundle.css';
@import "../assets/scss/style";

@font-face {
  font-family: 'Gilroy';
  src: url('../assets/fonts/gilroy-bold.eot');
  src: local('☺'), url('../assets/fonts/gilroy-bold.woff') format('woff'), url('../assets/fonts/gilroy-bold.ttf') format('truetype'), url('../assets/fonts/gilroy-bold.svg') format('svg');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('../assets/fonts/gilroy-semibold.eot');
  src: local('☺'), url('../assets/fonts/gilroy-semibold.woff') format('woff'), url('../assets/fonts/gilroy-semibold.ttf') format('truetype'), url('../assets/fonts/gilroy-semibold.svg') format('svg');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('../assets/fonts/gilroy-medium.eot');
  src: local('☺'), url('../assets/fonts/gilroy-medium.woff') format('woff'), url('../assets/fonts/gilroy-medium.ttf') format('truetype'), url('../assets/fonts/gilroy-medium.svg') format('svg');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('../assets/fonts/gilroy-regular.eot');
  src: local('☺'), url('../assets/fonts/gilroy-regular.woff') format('woff'), url('../assets/fonts/gilroy-regular.ttf') format('truetype'), url('../assets/fonts/gilroy-regular.svg') format('svg');
  font-weight: 400;
  font-style: normal;
}
</style>
