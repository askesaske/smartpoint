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
             :class="{ 'online-booking__tab--active' : chosenTab === 'sm1' }">
          Smart Point 1
        </div>
        <div class="online-booking__tab"
             @click="chooseSm('sm2')"
             :class="{ 'online-booking__tab--active' : chosenTab === 'sm2' }">
          Smart Point 2
        </div>
        <div class="online-booking__tab"
             @click="chooseSm('sm3')"
             :class="{ 'online-booking__tab--active' : chosenTab === 'sm3' }">
          Smart Point 3
        </div>
      </div>

      <div class="online-booking__content">

        <div class="online-booking__item" v-show="chosenTab === 'sm1'">
          <img src="../assets/img/sm1.png" alt="" class="online-booking__img">
          <div class="online-booking__overlay online-booking__overlay--1"></div>
          <div class="online-booking__overlay online-booking__overlay--2"></div>
          <div class="online-booking__overlay online-booking__overlay--3"></div>
          <div class="online-booking__overlay online-booking__overlay--4"></div>
          <div class="online-booking__overlay online-booking__overlay--5"></div>
          <div class="online-booking__overlay online-booking__overlay--6"></div>
          <div class="online-booking__overlay online-booking__overlay--7"></div>
          <div class="online-booking__overlay online-booking__overlay--8"></div>
          <div class="online-booking__overlay online-booking__overlay--9"></div>
          <div class="online-booking__overlay online-booking__overlay--10"></div>
          <div class="online-booking__overlay online-booking__overlay--11"></div>
          <div class="online-booking__overlay online-booking__overlay--12"></div>
          <div class="online-booking__overlay online-booking__overlay--13"></div>
          <div class="online-booking__overlay online-booking__overlay--14"></div>
          <div class="online-booking__overlay online-booking__overlay--15"></div>
          <div class="online-booking__overlay online-booking__overlay--16"></div>
          <div class="online-booking__overlay online-booking__overlay--17"></div>
          <div class="online-booking__overlay online-booking__overlay--18"></div>
          <div class="online-booking__overlay online-booking__overlay--19"></div>
          <div class="online-booking__overlay online-booking__overlay--20"></div>
          <div class="online-booking__overlay online-booking__overlay--21"></div>
          <div class="online-booking__overlay online-booking__overlay--22"></div>
          <div class="online-booking__overlay online-booking__overlay--23"></div>
          <div class="online-booking__overlay online-booking__overlay--24"></div>
          <div class="online-booking__overlay online-booking__overlay--25"></div>
          <div class="online-booking__overlay online-booking__overlay--26"></div>
          <div class="online-booking__overlay online-booking__overlay--27"></div>
          <div class="online-booking__overlay online-booking__overlay--28"></div>
          <div class="online-booking__overlay online-booking__overlay--29"></div>
          <div class="online-booking__overlay online-booking__overlay--30"></div>
        </div>

        <div class="online-booking__item" v-show="chosenTab === 'sm2'">
          <img src="../assets/img/sm2.png" alt="" class="online-booking__img">
        </div>

        <div class="online-booking__item" v-show="chosenTab === 'sm3'">
          <img src="../assets/img/sm3.png" alt="" class="online-booking__img">
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chosenTab: 'sm1'
    };
  },
  methods: {
    chooseSm(sm) {
      this.chosenTab = sm
    },
  }
}
</script>
