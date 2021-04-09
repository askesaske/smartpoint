<template>
  <section class="main__section gallery-section" id="gallery">
    <div class="gallery-section__container">
      <h2 class="news-section__heading heading-blue">
        <div class="heading-blue__bg">Галерея</div>
        <div class="heading-blue__text">Галерея</div>
      </h2>

      <div class="gallery-section__list">

        <div class="gallery-section__item">
          <img src="../assets/img/gallery-1.png" alt="" class="gallery-section__img">

          <div class="gallery-section__magnifier" @click="onClick(0)">
            <svg width="16" height="16">
              <use href="../assets/img/icons.svg#magnifier"></use>
            </svg>
          </div>
        </div>

        <div class="gallery-section__item">
          <img src="../assets/img/gallery-2.png" alt="" class="gallery-section__img">

          <div class="gallery-section__magnifier" @click="onClick(1)">
            <svg width="16" height="16">
              <use href="../assets/img/icons.svg#magnifier"></use>
            </svg>
          </div>
        </div>

        <div class="gallery-section__item">
          <img src="../assets/img/gallery-3.png" alt="" class="gallery-section__img">

          <div class="gallery-section__magnifier" @click="onClick(2)">
            <svg width="16" height="16">
              <use href="../assets/img/icons.svg#magnifier"></use>
            </svg>
          </div>
        </div>

        <div class="gallery-section__item">
          <img src="../assets/img/gallery-4.png" alt="" class="gallery-section__img">

          <div class="gallery-section__magnifier" @click="onClick(3)">
            <svg width="16" height="16">
              <use href="../assets/img/icons.svg#magnifier"></use>
            </svg>
          </div>
        </div>

        <no-ssr>
          <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        </no-ssr>

        <nuxt-link to="/Gallery" tag="div" class="gallery-section__more">
          Смотреть все
        </nuxt-link>

      </div>
    </div>
  </section>
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
