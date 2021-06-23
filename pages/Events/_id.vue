<template>
  <div>
    <div class="loader" v-if="!isLoaded">
      <img src="../../assets/img/icons/loader.svg" alt="">
    </div>

    <div class="event">

      <div class="event__heading heading-fluid">
        <div class="heading-fluid__container">
          <div class="heading-fluid__path path-box">
            <nuxt-link tag="div" to="/" class="path-box__link">Главная</nuxt-link>
            <div class="path-box__link">{{ event.title }}</div>
          </div>
          <h1 class="heading-fluid__title">{{ event.title }}</h1>
        </div>
      </div>

      <div class="event__container">
        <div class="event__row">

          <div class="event__info">
            <img :src="event.main_photo" alt="" class="event__img">

            <div class="event__desc event__desc--d-none-md">
              <h2 class="event__title">описание:</h2>
              <p class="event__text">
                {{ event.description }}
              </p>
            </div>
          </div>

          <div class="event__date-box">

            <div class="event__overlay"></div>

            <div class="event__item">
              <div class="event__title">
                Дата:
              </div>

              <div class="event__date">
                <div class="event__text event__text--upperLetter">
                  {{ dateC }}
                </div>
                <div class="event__text">
                  {{ startDate | moment("HH:MM") }} - {{ endDate | moment("HH:MM") }}
                </div>
              </div>
            </div>

            <div class="event__item">
              <div class="event__title">
                спикер:
              </div>

              <div class="event__date">
                <div class="event__text">
                  {{ event.speaker }}
                </div>
              </div>
            </div>

            <button class="event__btn button">
              Зарегистрироваться
            </button>

          </div>

          <div class="event__desc event__desc--d-none-lg">
            <h2 class="event__title">описание:</h2>
            <p class="event__text">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>

      <img src="../../assets/img/mountain-bg.png" alt="" class="event__bg">
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      event: {},
      startDate: "",
      endDate: "",
      isLoaded: false
    }
  },
  computed: {
    dateC() {
      // const year = this.date.split('-')[0]
      // const month = this.date.split('-')[1]
      // const day = this.date.split('-')[2]
      //
      // let monthText = ""
      //
      // if(month === '05') {
      //   monthText = "Май"
      // }
      //
      // return monthText + ' ' + day + ', ' + year

      let ruDate = moment(this.startDate)
      ruDate.locale('ru')
      return ruDate.format('MMMM DD, YYYY')
    }
  },
  methods: {},
  mounted() {
    this.$axios.get(process.env.API_URL + 'event/' + this.$route.params.id)
      .then(response => {
        this.event = response.data
        this.startDate = new Date(response.data.start_date * 1000).toISOString()
        this.endDate = new Date(response.data.end_date * 1000).toISOString()
        this.isLoaded = true
      })
      .catch(e => console.log(e))
  }
}
</script>
