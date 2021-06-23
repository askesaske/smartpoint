<template>
  <section class="main__section inst-section">
    <div class="inst-section__container">

      <!--      <p style="font-size: 16px; margin-bottom: 30px">-->
      <!--        {{ loadedInstImages }}-->
      <!--      </p>-->
      <div class="inst-section__list">
        <div class="inst-section__item"
             :class="{ 'inst-section__item--first': hoverFirst }">
          <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
        </div>
        <div class="inst-section__item"
             v-for="(img, i) in loadedInstImages"
             v-if="i < 5"
             @mouseenter="hoverFirst = true"
             @mouseleave="hoverFirst = false">
          <img :src="img.media_url" alt="">
        </div>
      </div>

      <div class="inst-section__wrapper">
        <img src="../assets/img/sm-inst-name.png" alt="" class="inst-section__inst-name">
        <div class="inst-section__slider">
          <div class="swiper-container inst-section__swiper-container">
            <div class="swiper-wrapper inst-section__swiper-wrapper">
              <div class="swiper-slide inst-section__swiper-item" v-for="img in loadedInstImages" :key="img.id">
                <img :src="img.media_url" alt="">
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next inst-section__next"></div>
            <div class="swiper-button-prev inst-section__prev"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Swiper, {Navigation} from "swiper";

Swiper.use([Navigation]);

export default {
  data() {
    return {
      hoverFirst: false,
      hoverOther: false,
    };
  },
  computed: {
    loadedInstImages() {
      return this.$store.getters.loadedInstImages
    }
  },
  methods: {},
  mounted() {
    var swiper4 = new Swiper('.inst-section__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: '.inst-section__next',
        prevEl: '.inst-section__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });
  }
}
</script>
