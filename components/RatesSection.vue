<template>
  <section class="main__section rates-section" id="rates">
    <div class="rates-section__container">
      <h2 class="rates-section__heading heading-blue">
        <div class="heading-blue__bg">Коворкинг пакеты</div>
        <div class="heading-blue__text">Коворкинг пакеты</div>
      </h2>

      <div class="rates-section__row rates-section__row--d-none-md">
        <div class="rates-section__list">
          <div class="rates-section__item" v-for="(c, i) in loadedCoworking" @click="chooseRate(i)">
            <div class="rates-section__row rates-section__row--mb8">
              <div class="rates-section__title">{{ c.price }} тг</div>
              <div class="rates-section__checkbox"
                   :class="{'rates-section__checkbox--checked' : i === rateIndex}"></div>
            </div>
            <div class="rates-section__text">
              {{ c.number_of_sessions }}
            </div>
          </div>
          <img src="../assets/img/about-section-bg.png" alt="" class="rates-section__bg">
        </div>


        <div class="rates-section__info-wrapper">
          <transition-group name="fade" mode="out-in">

            <div class="rates-section__info" v-show="i === rateIndex" v-for="(r, i) in loadedCoworking" :key="r.id">
              <div class="rates-section__info-header">
                <div class="rates-section__title rates-section__title--mb12">{{ r.price }} тг</div>
                <div class="rates-section__text">
                  Количество посещений: <span>{{ r.number_of_sessions }}</span>
                </div>
              </div>

              <div class="rates-section__info-body">
                <div class="rates-section__row rates-section__row--start" v-for="b in r.bonus">
                  <img :src="b.image" alt="" class="rates-section__icon">
                  <div class="rates-section__text rates-section__text--mr20">{{ b.text }}</div>
                  <div class="rates-section__text" v-show="b.price !== null">{{ b.price }} KZT</div>
                </div>
              </div>

              <button class="rates-section__btn button">Купить</button>
            </div>

          </transition-group>
        </div>


      </div>

      <div class="rates-section__slider">
        <div class="swiper-container rates-section__swiper-container">
          <div class="swiper-wrapper">

            <div class="swiper-slide rates-section__slider-info" v-for="(r, i) in loadedCoworking">
              <div class="rates-section__info-header">
                <div class="rates-section__title rates-section__title--mb12">{{ r.price }} тг</div>
                <div class="rates-section__text">
                  Количество посещений: <span>{{ r.number_of_sessions }}</span>
                </div>
              </div>

              <div class="rates-section__info-body">
                <div class="rates-section__row rates-section__row--start" v-for="b in r.bonus">
                  <img :src="b.image" alt="" class="rates-section__icon">
                  <div class="rates-section__text rates-section__text--mr20">{{ b.text }}</div>
                  <div class="rates-section__text" v-show="b.price !== null">{{ b.price }} KZT</div>
                </div>
              </div>

              <button class="rates-section__btn button">Купить</button>
            </div>

          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next rates-section__next"></div>
          <div class="swiper-button-prev rates-section__prev"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      rateIndex: 0
    }
  },
  methods: {
    chooseRate(idx) {
      this.rateIndex = idx
    }
  },
  computed: {
    loadedCoworking() {
      return this.$store.getters.loadedCoworking
    }
  },
  mounted() {
    var swiper1 = new Swiper('.rates-section__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: '.rates-section__next',
        prevEl: '.rates-section__prev',
      },
      // breakpoints: {
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   },
      //   1200: {
      //     slidesPerView: 4,
      //     spaceBetween: 20,
      //   }
      // }
    });
  }
}
</script>
