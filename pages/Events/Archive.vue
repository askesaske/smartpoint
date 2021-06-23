<template>
  <div class="schedule-page">

    <div class="schedule-page__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <nuxt-link tag="div" to="/" class="path-box__link">Главная</nuxt-link>
          <div class="path-box__link">Архив</div>
        </div>

        <h1 class="heading-fluid__title">Архив</h1>
      </div>
    </div>

    <div class="schedule-page__container">

      <nuxt-link to="/Events/Schedule/" tag="button" class="schedule-page__btn button-white">Расписание мероприятий</nuxt-link>

      <div class="schedule-page__wrapper">

        <div class="schedule-page__month-box" v-for="(e, i) in loadedArchive" :key="e.id">

          <div class="schedule-page__title">{{ e.month + '.' + e.year }}</div>

          <div class="schedule-page__row">

            <div class="schedule-page__list">

              <div class="schedule-page__item"
                   v-for="(event, k) in e.events" :key="event.id">

                <div class="schedule-page__date">
                  <p>{{ new Date(event.start_date * 1000).toISOString() | moment("D.MM") }}</p>
                  <span>
                    {{ new Date(event.start_date * 1000).toISOString() | moment("HH:MM") }}
                    -
                    {{ new Date(event.end_date * 1000).toISOString() | moment("HH:MM") }}
                  </span>
                </div>

                <div class="schedule-page__name">
                  {{ event.title }}
                </div>

                <div class="schedule-page__desc">
                  Спикер: {{ event.speaker }}
                </div>

              </div>


            </div>

            <img :src="e.event_photo" alt="" class="schedule-page__img schedule-page__img--gray">

          </div>

        </div>

      </div>

    </div>

    <img src="../../assets/img/mountain-bg.png" alt="" class="schedule-page__bg">
  </div>
</template>

<script>
import moment from "moment";
import 'moment/locale/ru'

moment.locale('ru')

export default {
  data() {
    return {
    }
  },
  computed: {
    loadedArchive() {
      return this.$store.getters.loadedArchive
    }
  },
  mounted() {

  }
}
</script>
