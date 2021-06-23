<template>
  <section class="main__section space-section" id="space">
    <h2 class="space-section__heading heading-white">
      <div class="heading-white__bg">Пространство</div>
      <div class="heading-white__text">Пространство</div>
    </h2>

    <div class="space-section__container">
      <div class="space-section__wrapper">

        <div class="space-section__row">

          <div class="space-section__info" :key="'info'">

            <transition-group name="fade" mode="out-in">
              <div class="space-section__items" v-for="area in loadedArea" :key="area.id" v-show="area.id === count">

                <div class="space-section__item">
                  <div class="space-section__name">Название</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ area.area_name }}</div>
                    <div class="space-section__subtitle">
                      {{ area.area_description }}
                    </div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Тип</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ area.type_name }}</div>
                    <div class="space-section__subtitle">
                      {{ area.type_description }}
                    </div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Площадь</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ area.area }} м²</div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Оборудование</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ area.equipment }}</div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Вместимость</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">
                      Максимальная вместительность {{ area.maximum_capacity  }} чел. <br>
                      Рекомендуем для встречи {{ area.recomended_capacity }} чел.
                    </div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Цена</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ area.cost }} KZT/ч.</div>
                  </div>
                </div>

              </div>
            </transition-group>

          </div>

          <div class="space-section__img-box">
            <transition-group name="fade" mode="out-in">
              <img :src="area.main_photo" alt="" class="space-section__img"
                   v-for="area in loadedArea" :key="area.id" v-show="area.id === count">
            </transition-group>

            <div class="space-section__controls">
              <div class="space-section__index">{{ this.count + ' / ' + this.loadedArea.length }}</div>
              <svg class="space-section__prev" width="40" height="40" @click="prevSlide">
                <use href="../assets/img/icons.svg#arrow-left"></use>
              </svg>
              <svg class="space-section__next" width="40" height="40" @click="nextSlide">
                <use href="../assets/img/icons.svg#arrow-left"></use>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    nextSlide() {
      let len = this.loadedArea.length;
      if (this.count < len) {
        this.count++;
      } else {
        this.count = len;
      }
    },
    prevSlide() {
      if (this.count > 1) {
        this.count--;
      } else {
        this.count = 1;
      }
    }
  },
  computed: {
    loadedArea() {
      return this.$store.getters.loadedArea
    }
  },
  mounted() {

  }
}
</script>
