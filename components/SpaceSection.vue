<template>
  <section class="main__section space-section">
    <h2 class="space-section__heading heading-white">
      <div class="heading-white__bg">Пространство</div>
      <div class="heading-white__text">Пространство</div>
    </h2>

    <div class="space-section__container">
      <div class="space-section__wrapper">

        <div class="space-section__row">

          <div class="space-section__info" :key="'info'">

            <transition-group name="fade" mode="out-in">
              <div class="space-section__items" v-for="space in spaces" :key="space.id" v-show="space.id === count">

                <div class="space-section__item">
                  <div class="space-section__name">Название</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ space.name }}</div>
                    <div class="space-section__subtitle">
                      {{ space.nameDesc }}
                    </div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Тип</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ space.type }}</div>
                    <div class="space-section__subtitle">
                      {{ space.typeDesc }}
                    </div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Площадь</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ space.area }}</div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Оборудование</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ space.equipment }}</div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Вместимость</div>
                  <div class="space-section__desc">
                    <div class="space-section__title" v-html="space.capacity"></div>
                  </div>
                </div>

                <div class="space-section__item">
                  <div class="space-section__name">Цена</div>
                  <div class="space-section__desc">
                    <div class="space-section__title">{{ space.price }}</div>
                  </div>
                </div>

              </div>
            </transition-group>

            <div class="space-section__controls">
              <div class="space-section__index">{{ this.count + ' / ' + this.spaces.length }}</div>
              <svg class="space-section__prev" width="40" height="40" @click="prevSlide">
                <use href="../assets/img/icons.svg#arrow-left"></use>
              </svg>
              <svg class="space-section__next" width="40" height="40" @click="nextSlide">
                <use href="../assets/img/icons.svg#arrow-left"></use>
              </svg>
            </div>

          </div>

          <div class="space-section__img-box">
            <transition-group name="fade" mode="out-in">
              <img :src="require('../assets/img/' + space.img)" alt="" class="space-section__img"
                   v-for="space in spaces" :key="space.id" v-show="space.id === count">
            </transition-group>
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
      spaces: [
        {
          id: 1,
          name: "Deep Purple",
          nameDesc: "Конференц зал отлично подходит для деловых встреч, семинаров или конференций.",
          type: "Конференц зал",
          typeDesc: "Мебелированные конференц залы с возможностью почасовой аренды, прекрасно подходят для проведения деловых встреч и переговоров.",
          area: "52 м²",
          equipment: "Проектор, интерактивная доска",
          capacity: "Максимальная вместительность 35 чел." + "<br>" +
            "Рекомендуем для встречи 20 чел.",
          price: "8 000 KZT/ч.",
          img: "deep-purple.png"
        },
        {
          id: 2,
          name: "Амфитеатр",
          nameDesc: "Новый формат сцены и зрительской посадки. Возможность видеоконференц связи. Разнообразные сидячие места: амфитеатр, рабочие столы и мягкие места. Удобный сервис онлайн бронирования и оплаты. Акустическая система, звукоизоляция. Постоянная уборка помещений.",
          type: "Большой зал",
          typeDesc: "Конференц залы, Expo-зона и амфитеатр для формата выступлений TED.",
          area: "52 м²",
          equipment: "Проектор, экран, колонки, радиомикрофоны",
          capacity: "Максимальная вместительность 200 чел." + "<br>" +
            "Рекомендуем для встречи 150 чел.",
          price: "18 000 KZT/ч.",
          img: "amphitheater.png"
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      var len = this.spaces.length;
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
  }
}
</script>
