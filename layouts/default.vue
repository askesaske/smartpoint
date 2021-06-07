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

        <div class="sidebar__list" v-if="this.$route.path === '/'">
          <nuxt-link tag="a"
                     to="/"
                     class="sidebar__link"
                     @click.native="closeSideBar"
                     v-scroll-to="{el: link.sectionId, duration: 700,}"
                     v-for="link in links"
                     :key="link.id">
            {{ link.title }}
          </nuxt-link>
        </div>

        <div class="sidebar__list" v-else>
          <nuxt-link tag="a"
                     :to="{ path: '/', hash: link.sectionId }"
                     class="sidebar__link"
                     @click.native="closeSideBar"
                     v-for="link in links"
                     :key="link.id">
            {{ link.title }}
          </nuxt-link>
        </div>

        <div class="sidebar__footer">
          <div class="sidebar__row">

            <svg class="sidebar__icon" width="20" height="20">
              <use href="../assets/img/icons.svg#phone"></use>
            </svg>

            <div class="sidebar__phones">
              <div class="sidebar__phone-box">
                <a href="tel: +7 (778) 200 20 50" class="sidebar__text">+7 (778) 200 20 50</a>
                <span>Аренда залов</span>
              </div>

              <div class="sidebar__phone-box">
                <a href="tel: +7 (777) 078 87 78" class="sidebar__text">+7 (777) 078 87 78</a>
                <span>Аренда рабочего места </span>
              </div>
            </div>

          </div>

          <div class="sidebar__row">

            <svg class="sidebar__icon" width="20" height="20">
              <use href="../assets/img/icons.svg#mail"></use>
            </svg>

            <div class="sidebar__text">
              hello@smartpoint.me
            </div>

          </div>

          <div class="sidebar__row">

            <svg class="sidebar__icon" width="20" height="20">
              <use href="../assets/img/icons.svg#map-pin"></use>
            </svg>

            <div class="sidebar__text">
              г. Алматы, ул. Байзакова, 280
            </div>

          </div>

          <div class="sidebar__socials">
            <a href="#" class="sidebar__social"><img src="../assets/img/icons/insta-2.png" alt=""></a>
            <a href="#" class="sidebar__social"><img src="../assets/img/icons/facebook-2.png" alt=""></a>
            <!--            <a href="#" class="footer__social"><img src="../assets/img/icons/telegram.png" alt=""></a>-->
          </div>

        </div>

        <!--          <nuxt-link tag="a" to="/" class="sidebar__link" @click.native="closeSideBar">Онлайн бронирование</nuxt-link>-->
        <!--          <nuxt-link tag="a" to="/" class="sidebar__link" @click.native="closeSideBar">Тарифы</nuxt-link>-->
        <!--          <nuxt-link tag="a" to="/" class="sidebar__link" @click.native="closeSideBar">Мероприятия</nuxt-link>-->
        <!--          <nuxt-link tag="a" to="/" class="sidebar__link" @click.native="closeSideBar">Пространство</nuxt-link>-->
        <!--          <nuxt-link tag="a" to="/" class="sidebar__link" @click.native="closeSideBar">Новости</nuxt-link>-->
        <!--          <nuxt-link tag="a" to="/Gallery" class="sidebar__link" @click.native="closeSideBar">Наша галерея</nuxt-link>-->
        <!--          <nuxt-link tag="a" to="/" class="sidebar__link" @click.native="closeSideBar">Наша команда</nuxt-link>-->

      </div>
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          sectionId: "#about",
          title: "О нас"
        },
        {
          id: 2,
          sectionId: "#community",
          title: "Комьюнити"
        },
        {
          id: 3,
          sectionId: "#booking",
          title: "Онлайн бронирование",
        },
        {
          id: 4,
          sectionId: "#rates",
          title: "Тарифы"
        },
        {
          id: 5,
          sectionId: "#events",
          title: "Мероприятия"
        },
        {
          id: 6,
          sectionId: "#space",
          title: "Пространство"
        },
        {
          id: 7,
          sectionId: "#news",
          title: "Новости"
        },
        {
          id: 8,
          sectionId: "#gallery",
          title: "Наша галерея"
        },
        {
          id: 9,
          sectionId: "#team",
          title: "Наша команда"
        }
      ]
    };
  },
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
