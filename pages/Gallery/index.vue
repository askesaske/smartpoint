<template>
  <div class="gallery">

    <div class="gallery__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <nuxt-link tag="div" to="/" class="path-box__link">Главная</nuxt-link>
          <div class="path-box__link">Галерея</div>
        </div>
        <h1 class="heading-fluid__title">Фотогалерея</h1>
      </div>
    </div>

    <div class="gallery__container">
      <nuxt-link tag="div" :to="'/Gallery/' + g.id" class="gallery__category" v-for="g in loadedGallery" :key="g.id">
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

    }
  },

  computed: {
    loadedGallery() {
      return this.$store.getters.loadedGallery
    }
  },
  mounted() {

  }
}
</script>
