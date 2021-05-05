<template>
  <div class="gallery">

    <div class="gallery__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
          <div class="path-box__link">Галерея</div>
        </div>
        <h1 class="heading-fluid__title">фотогалерея</h1>
      </div>
    </div>

    <div class="gallery__container">
      <nuxt-link tag="div" :to="'/Gallery/' + g.id" class="gallery__category" v-for="g in galleries" :key="g.id">
        <img :src="g.gallery_card_image" alt="">

        <div class="gallery__category-name">
          <p>
            {{ g.gallery_title }}
          </p>
        </div>
      </nuxt-link>
    </div>

    <img src="../../assets/img/mountain-bg.png" alt="" class="gallery__bg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleries: []
    }
  },
  mounted() {
    this.$axios.get('http://185.121.81.137/api/gallery/')
      .then(response => {
        this.galleries = response.data
      })
      .catch(e => console.log(e))
  }
}
</script>
