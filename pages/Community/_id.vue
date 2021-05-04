<template>
  <div class="community">

    <div class="community__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
          <div class="path-box__link">Комьюнити | {{ singleCommunity.company_name }}</div>
        </div>
        <h1 class="heading-fluid__title">Комьюнити | {{ singleCommunity.company_name }}</h1>
      </div>
    </div>

    <div class="community__container">
      <div class="community__row">

        <div class="community__info">

          <div class="community__text community__text--bordered">
            {{ singleCommunity.company_quote }}
          </div>

          <div class="community__text">
            {{ singleCommunity.company_about_text }}
          </div>

        </div>

        <img :src="singleCommunity.company_inside_image" alt="" class="community__img">

      </div>
    </div>

    <img src="../../assets/img/mountain-bg.png" alt="" class="community__bg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      singleCommunity: {}
    }
  },
  mounted() {
    this.$axios.get('http://185.121.81.137/api/community/' + this.$route.params.id)
      .then(response => {
        this.singleCommunity = response.data
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }
}
</script>
