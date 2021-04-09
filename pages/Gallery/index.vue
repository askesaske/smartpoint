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
      <nuxt-link tag="div" to="/Gallery/1" class="gallery__category" v-for="i in 8" :key="i">
        <img src="../../assets/img/gallery-category.png" alt="">

        <div class="gallery__category-name">
          <p>
            День открытых дверей | 20 октября
          </p>
        </div>
      </nuxt-link>
    </div>

    <img src="../../assets/img/mountain-bg.png" alt="" class="gallery__bg">
  </div>
</template>
