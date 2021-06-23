<template>
  <div>
    <div class="loader" v-if="!isLoaded">
      <img src="../../assets/img/icons/loader.svg" alt="">
    </div>

    <div class="news" v-else>

      <div class="news__heading heading-fluid">
        <div class="heading-fluid__container">
          <div class="heading-fluid__path path-box">
            <nuxt-link tag="div" to="/" class="path-box__link">Главная</nuxt-link>
            <div class="path-box__link">Новости</div>
          </div>
          <h1 class="heading-fluid__title">новости</h1>
        </div>
      </div>

      <div class="news__container">

        <img :src="singleNew.main_photo" alt="" class="news__img">

        <p class="news__date">{{ singleNew.created_at }}</p>

        <h4 class="news__title">
          {{ singleNew.title }}
        </h4>

        <div class="news__text">
          {{ singleNew.text }}
        </div>
      </div>

      <img src="../../assets/img/mountain-bg.png" alt="" class="news__bg">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singleNew: {},
      isLoaded: false
    }
  },
  mounted() {
    this.$axios.get(process.env.API_URL + 'news/' + this.$route.params.id)
      .then(response => {
        this.singleNew = response.data
        this.isLoaded = true
      })
      .catch(e => console.log(e))
  }
}
</script>
