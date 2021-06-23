<template>
    <div class="about">
      <div class="about__heading heading-fluid">
        <div class="heading-fluid__container">
          <div class="heading-fluid__path path-box">
            <nuxt-link tag="div" to="/" class="path-box__link">Главная</nuxt-link>
            <div class="path-box__link">О нас</div>
          </div>
          <h1 class="heading-fluid__title">О нас</h1>
        </div>
      </div>

      <div class="about__container">

        <div class="about__slider">

          <div class="swiper-container about__swiper-container">

            <div class="swiper-wrapper">

              <div class="swiper-slide about__slider-item" v-for="images in loadedAboutUs.about_us_images" :key="images.id">
                <div class="about__slider-inner">
                  <img :src="images.image" alt="">
                </div>
              </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination about__pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next about__next"></div>
            <div class="swiper-button-prev about__prev"></div>
          </div>

        </div>

        <div class="about__text">
          {{ loadedAboutUs.inside_text }}
        </div>
      </div>

      <img src="../assets/img/mountain-bg.png" alt="" class="about__bg">
    </div>
</template>

<script>
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

export default {
  data() {
    return {
      aboutUs: {},
      aboutUsSwiper: null
    }
  },
  computed: {
    loadedAboutUs() {
      return this.$store.getters.loadedAboutUs
    }
  },
  created() {

  },
  beforeCreate() {

  },

  beforeMount() {

  },

  mounted() {
    this.aboutUsSwiper = new Swiper('.about__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 56,
      navigation: {
        nextEl: '.about__next',
        prevEl: '.about__prev',
      },
      pagination: {
        el: '.about__pagination',
      },
    });
  },
}
</script>
