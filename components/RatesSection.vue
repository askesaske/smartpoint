<template>
  <section class="main__section rates-section">
    <div class="rates-section__container">
      <h2 class="rates-section__heading heading-blue">
        <div class="heading-blue__bg">Тарифы</div>
        <div class="heading-blue__text">Тарифы</div>
      </h2>

      <div class="rates-section__row">
        <div class="rates-section__list">
          <div class="rates-section__item" v-for="(rate, i) in rates" :key="rate.id" @click="chooseRate(rate.id)">
            <div class="rates-section__row rates-section__row--mb8">
              <div class="rates-section__title">{{ rate.title }}</div>
              <div class="rates-section__checkbox"
                   :class="rate.checked ? 'rates-section__checkbox--checked' : ''"></div>
            </div>
            <div class="rates-section__text">
              {{ rate.text }}
            </div>
          </div>
          <img src="../assets/img/about-section-bg.png" alt="" class="rates-section__bg">
        </div>


        <div class="rates-section__info-wrapper">
          <transition-group name="fade" mode="out-in">
            <div :key="1" class="rates-section__info" v-show="rates[0].checked">
              <div class="rates-section__info-header">
                <div class="rates-section__title rates-section__title--mb12">50 000 тг</div>
                <div class="rates-section__text">
                  Количество посещений: <span>Месяц</span>
                </div>
              </div>

              <div class="rates-section__info-body">
                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#gift"></use>
                  </svg>
                  <div class="rates-section__text rates-section__text--mr20">Бонус для бронирования</div>
                  <div class="rates-section__text">6 000 KZT</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#printer"></use>
                  </svg>
                  <div class="rates-section__text rates-section__text--mr20">Бонус для печати</div>
                  <div class="rates-section__text">500 KZT</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#dumbbell"></use>
                  </svg>
                  <div class="rates-section__text">Спортивная зона/Душевые</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#home"></use>
                  </svg>
                  <div class="rates-section__text">Wi-Fi, ресепшн, мягкая зона, телефонные переговорки</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#calendar"></use>
                  </svg>
                  <div class="rates-section__text">Бесплатное посещение мероприятий “SmArt.Point”</div>
                </div>
              </div>

              <button class="rates-section__btn button">Купить</button>
            </div>

            <div :key="2" class="rates-section__info" v-show="rates[1].checked">
              <div class="rates-section__info-header">
                <div class="rates-section__title rates-section__title--mb12">50 000 тг</div>
                <div class="rates-section__text">
                  Количество посещений: <span>Месяц</span>
                </div>
              </div>

              <div class="rates-section__info-body">
                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#gift"></use>
                  </svg>
                  <div class="rates-section__text rates-section__text--mr20">Бонус для бронирования</div>
                  <div class="rates-section__text">6 000 KZT</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#printer"></use>
                  </svg>
                  <div class="rates-section__text rates-section__text--mr20">Бонус для печати</div>
                  <div class="rates-section__text">500 KZT</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#dumbbell"></use>
                  </svg>
                  <div class="rates-section__text">Спортивная зона/Душевые</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#home"></use>
                  </svg>
                  <div class="rates-section__text">Wi-Fi, ресепшн, мягкая зона, телефонные переговорки</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#calendar"></use>
                  </svg>
                  <div class="rates-section__text">Бесплатное посещение мероприятий “SmArt.Point”</div>
                </div>
              </div>

              <button class="rates-section__btn button">Купить</button>
            </div>

            <div :key="3" class="rates-section__info" v-show="rates[2].checked">
              <div class="rates-section__info-header">
                <div class="rates-section__title rates-section__title--mb12">3 000 тг</div>
                <div class="rates-section__text">
                  Количество посещений: <span>День</span>
                </div>
              </div>

              <div class="rates-section__info-body">
                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#suitcase"></use>
                  </svg>
                  <div class="rates-section__text">
                    Рабочее место в коворкинг зоне
                    (техника не предоставляется)
                  </div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#home"></use>
                  </svg>
                  <div class="rates-section__text">Wi-Fi, ресепшн, мягкая зона, телефонные переговорки</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#calendar"></use>
                  </svg>
                  <div class="rates-section__text">Доступ в коворкинг с 08:00 до 23:00</div>
                </div>
              </div>

              <button class="rates-section__btn button">Купить</button>
            </div>

            <div :key="4" class="rates-section__info" v-show="rates[3].checked">
              <div class="rates-section__info-header">
                <div class="rates-section__title rates-section__title--mb12">50 000 тг</div>
                <div class="rates-section__text">
                  Количество посещений: <span>Месяц</span>
                </div>
              </div>

              <div class="rates-section__info-body">
                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#gift"></use>
                  </svg>
                  <div class="rates-section__text rates-section__text--mr20">Бонус для бронирования</div>
                  <div class="rates-section__text">6 000 KZT</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#printer"></use>
                  </svg>
                  <div class="rates-section__text rates-section__text--mr20">Бонус для печати</div>
                  <div class="rates-section__text">500 KZT</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#dumbbell"></use>
                  </svg>
                  <div class="rates-section__text">Спортивная зона/Душевые</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#home"></use>
                  </svg>
                  <div class="rates-section__text">Wi-Fi, ресепшн, мягкая зона, телефонные переговорки</div>
                </div>

                <div class="rates-section__row rates-section__row--start">
                  <svg class="rates-section__icon" width="20" height="20">
                    <use href="../assets/img/icons.svg#calendar"></use>
                  </svg>
                  <div class="rates-section__text">Бесплатное посещение мероприятий “SmArt.Point”</div>
                </div>
              </div>

              <button class="rates-section__btn button">Купить</button>
            </div>
          </transition-group>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rates: [
        {
          id: 1,
          title: '50 000 тг',
          text: 'Коворкинг на месяц',
          checked: true
        },
        {
          id: 2,
          title: '30 000 тг',
          text: 'Коворкинг на 10 дней',
          checked: false
        },
        {
          id: 3,
          title: '3 000 тг',
          text: 'Коворкинг на 1 день',
          checked: false
        },
        {
          id: 4,
          title: '30 000 тг',
          text: 'Коворкинг пакет “корпоратив”',
          checked: false
        },
      ],
    }
  },
  methods: {
    chooseRate(id) {
      if (id === 1) {
        this.rates[0].checked = true;
        this.rates[1].checked = false;
        this.rates[2].checked = false;
        this.rates[3].checked = false;
      }
      if (id === 2) {
        this.rates[0].checked = false;
        this.rates[1].checked = true;
        this.rates[2].checked = false;
        this.rates[3].checked = false;
      }
      if (id === 3) {
        this.rates[0].checked = false;
        this.rates[1].checked = false;
        this.rates[2].checked = true;
        this.rates[3].checked = false;
      }
      if (id === 4) {
        this.rates[0].checked = false;
        this.rates[1].checked = false;
        this.rates[2].checked = false;
        this.rates[3].checked = true;
      }
    },
  }
}
</script>
