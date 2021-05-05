<template>
  <div class="news">

    <div class="news__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
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
</template>

<script>
export default {
  data() {
    return {
      singleNew: {}
    }
  },
  mounted() {
    this.$axios.get('http://185.121.81.137/api/news/' + this.$route.params.id)
      .then(response => {
        this.singleNew = response.data
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }
}
</script>
