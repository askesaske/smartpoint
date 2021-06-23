<template>
  <div>
    <div class="loader" v-if="!isLoaded">
      <img src="../../assets/img/icons/loader.svg" alt="">
    </div>

    <div class="gallery" v-else>

      <div class="gallery__heading heading-fluid">
        <div class="heading-fluid__container">
          <div class="heading-fluid__path path-box">
            <nuxt-link tag="div" to="/" class="path-box__link">Главная</nuxt-link>
            <div class="path-box__link">Галерея</div>
          </div>
          <h1 class="heading-fluid__title">{{ gallery.gallery_title }}</h1>
        </div>
      </div>

      <div class="gallery__container gallery__container--images">
        <img :src="g.image" alt="" class="gallery__img"
             v-for="(g, i) in gallery.gallery_image"
             :key="g.id"
             @click="onClick(i)">
      </div>

      <no-ssr>
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
      </no-ssr>

      <img src="../../assets/img/mountain-bg.png" alt="" class="gallery__bg">
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  components: {
    VueGallerySlideshow
  },
  data() {
    return {
      index: null,
      gallery: [],
      images: [],
      isLoaded: false
    };
  },
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
  mounted() {
    this.$axios.get(process.env.API_URL + 'gallery/' + this.$route.params.id)
      .then(response => {
        this.gallery = response.data
        for (var i = 0; i <= response.data.gallery_image.length; i++) {
          this.images.push(response.data.gallery_image[i].image)
        }
        this.isLoaded = true
      })
      .catch(e => console.log(e))
  }
}
</script>
