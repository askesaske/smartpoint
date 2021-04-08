<template>
  <section class="main__section inst-section">
    <div class="inst-section__container">

      <div class="inst-section__list">
        <div class="inst-section__item"
             :class="{ 'inst-section__item--first': hoverFirst }">
          <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
        </div>
        <div class="inst-section__item"
             @mouseenter="hoverFirst = true"
             @mouseleave="hoverFirst = false">
          <img src="../assets/img/inst-2.png" alt="" class="inst-section__img">
        </div>
        <div class="inst-section__item"
             @mouseenter="hoverFirst = true"
             @mouseleave="hoverFirst = false">
          <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
        </div>
        <div class="inst-section__item"
             @mouseenter="hoverFirst = true"
             @mouseleave="hoverFirst = false">
          <img src="../assets/img/inst-2.png" alt="" class="inst-section__img">
        </div>
        <div class="inst-section__item"
             @mouseenter="hoverFirst = true"
             @mouseleave="hoverFirst = false">
          <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
        </div>
        <div class="inst-section__item"
             @mouseenter="hoverFirst = true"
             @mouseleave="hoverFirst = false">
          <img src="../assets/img/inst-2.png" alt="" class="inst-section__img">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hoverFirst: false,
      hoverOther: false
    };
  },
  methods: {

  }
}
</script>
