<template>
  <section class="main__section online-booking" id="booking">
    <h2 class="online-booking__heading heading-white">
      <div class="heading-white__bg">Онлайн бронирование</div>
      <div class="heading-white__text">Онлайн бронирование</div>
    </h2>
    <div class="online-booking__container">
      <div class="online-booking__tabs">
        <div class="online-booking__tab"
             @click="chooseSm('sm1')"
             :class="sm1 ? 'online-booking__tab--active' : ''">
          Smart Point 1
        </div>
        <div class="online-booking__tab"
             @click="chooseSm('sm2')"
             :class="sm2 ? 'online-booking__tab--active' : ''">
          Smart Point 2
        </div>
        <div class="online-booking__tab"
             @click="chooseSm('sm3')"
             :class="sm3 ? 'online-booking__tab--active' : ''">
          Smart Point 3
        </div>
      </div>

      <div class="online-booking__content">
        <div class="online-booking__item" v-show="sm1">
          <img src="../assets/img/structure.png" alt="" class="online-booking_img">
        </div>
        <div class="online-booking__item" v-show="sm2">
          <img src="../assets/img/structure.png" alt="" class="online-booking_img">
        </div>
        <div class="online-booking__item" v-show="sm3">
          <img src="../assets/img/structure.png" alt="" class="online-booking_img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sm1: true,
      sm2: false,
      sm3: false,
    };
  },
  methods: {
    chooseSm(sm) {
      if (sm === 'sm1') {
        this.sm1 = true;
        this.sm2 = false;
        this.sm3 = false;
      } else if (sm === 'sm2') {
        this.sm1 = false;
        this.sm2 = true;
        this.sm3 = false;
      } else if (sm === 'sm3') {
        this.sm1 = false;
        this.sm2 = false;
        this.sm3 = true;
      }
    },
  }
}
</script>
