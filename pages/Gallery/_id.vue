<template>
  <div class="gallery">

    <div class="gallery__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
          <div class="path-box__link">Галерея</div>
        </div>
        <h1 class="heading-fluid__title">День открытых дверей | 20 октября</h1>
      </div>
    </div>

    <div class="gallery__container gallery__container--images">
      <img src="../../assets/img/gallery-inside.png" alt="" class="gallery__img"
           v-for="i in 12"
           :key="i"
           @click="onClick(i - 1)">
    </div>

    <no-ssr>
      <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </no-ssr>

    <img src="../../assets/img/mountain-bg.png" alt="" class="gallery__bg">
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
      images: [
        "https://gorillaict.com/wp-content/uploads/2018/04/abstract-business-code-270348-1100x500.jpg",
        "https://images.theconversation.com/files/304839/original/file-20191203-67002-chsvk1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        "https://75276bc03af26d7c1f58-72b421883bb5b133f34e068afdd7cb11.ssl.cf3.rackcdn.com/2018/09/artificial-2970158_960_720.jpg",
        "https://gorillaict.com/wp-content/uploads/2018/04/abstract-business-code-270348-1100x500.jpg",
        "https://images.theconversation.com/files/304839/original/file-20191203-67002-chsvk1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        "https://75276bc03af26d7c1f58-72b421883bb5b133f34e068afdd7cb11.ssl.cf3.rackcdn.com/2018/09/artificial-2970158_960_720.jpg",
        "https://gorillaict.com/wp-content/uploads/2018/04/abstract-business-code-270348-1100x500.jpg",
        "https://images.theconversation.com/files/304839/original/file-20191203-67002-chsvk1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        "https://75276bc03af26d7c1f58-72b421883bb5b133f34e068afdd7cb11.ssl.cf3.rackcdn.com/2018/09/artificial-2970158_960_720.jpg",
        "https://gorillaict.com/wp-content/uploads/2018/04/abstract-business-code-270348-1100x500.jpg",
        "https://images.theconversation.com/files/304839/original/file-20191203-67002-chsvk1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        "https://75276bc03af26d7c1f58-72b421883bb5b133f34e068afdd7cb11.ssl.cf3.rackcdn.com/2018/09/artificial-2970158_960_720.jpg",
      ]
    };
  },
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
}
</script>
