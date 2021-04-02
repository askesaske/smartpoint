<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link tag="a" to="/" class="header__logo">
        <img src="../assets/img/logo.png" alt="">
      </nuxt-link>

      <div class="header__items">
        <div class="header__location">
          <svg width="20" height="20">
            <use href="../assets/img/icons.svg#map-pin"></use>
          </svg>

          <p>Алматы</p>
        </div>

        <div class="header__lang-box">
          РУС
        </div>

        <div class="header__user-box">
          <svg width="20" height="20">
            <use href="../assets/img/icons.svg#user"></use>
          </svg>
        </div>

        <svg class="header__burger" width="20" height="20">
          <use href="../assets/img/icons.svg#burger"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
