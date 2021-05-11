<template>
  <div class="schedule-page">

    <div class="schedule-page__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
          <div class="path-box__link">Расписание событий</div>
        </div>

        <h1 class="heading-fluid__title">Расписание событий</h1>
      </div>
    </div>

    <div class="schedule-page__container">

      <nuxt-link to="/Events/Archive/" tag="button" class="schedule-page__btn button-white">Архив</nuxt-link>

      <div class="schedule-page__wrapper">

        <div class="schedule-page__month-box" v-for="(e, i) in events" :key="e.id">

          <div class="schedule-page__title">{{ e.month + ' ' + e.year}}</div>

          <div class="schedule-page__row">

            <div class="schedule-page__list">

              <nuxt-link :to="'/Events/' + event.id" tag="div" class="schedule-page__item" v-for="(event, k) in e.events" :key="event.id">

                <div class="schedule-page__date">
                  <p>{{ event.start_date | moment("D, MMMM")}}</p>
                  <span>{{ event.start_date | moment("HH:MM") }} - {{ event.end_date | moment("HH:MM") }}</span>
                </div>

                <div class="schedule-page__name">
                  {{ event.title }}
                </div>

                <div class="schedule-page__desc">
                  Спикер: {{ event.speaker }}
                </div>

              </nuxt-link>


            </div>

            <img :src="e.event_photo" alt="" class="schedule-page__img">

          </div>

        </div>

      </div>

    </div>

    <img src="../../assets/img/mountain-bg.png" alt="" class="schedule-page__bg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: []
    }
  },
  mounted() {
    this.$axios.get('http://185.121.81.137/api/month/')
      .then(response => {
        this.events = response.data
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }
}
</script>
