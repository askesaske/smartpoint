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
          <div class="online-booking__overlay online-booking__overlay--31"></div>
          <div class="online-booking__overlay online-booking__overlay--32"></div>
          <div class="online-booking__overlay online-booking__overlay--33"></div>
          <div class="online-booking__overlay online-booking__overlay--34"></div>
          <div class="online-booking__overlay online-booking__overlay--35"></div>
          <div class="online-booking__overlay online-booking__overlay--36"></div>
          <div class="online-booking__overlay online-booking__overlay--37"></div>
          <div class="online-booking__overlay online-booking__overlay--38"></div>
          <div class="online-booking__overlay online-booking__overlay--39"></div>
          <div class="online-booking__overlay online-booking__overlay--40"></div>
          <div class="online-booking__overlay online-booking__overlay--41"></div>
          <div class="online-booking__overlay online-booking__overlay--42"></div>
          <div class="online-booking__overlay online-booking__overlay--43"></div>
          <div class="online-booking__overlay online-booking__overlay--44"></div>
          <div class="online-booking__overlay online-booking__overlay--45"></div>
          <div class="online-booking__overlay online-booking__overlay--46"></div>
          <div class="online-booking__overlay online-booking__overlay--47"></div>
          <div class="online-booking__overlay online-booking__overlay--48"></div>
          <div class="online-booking__overlay online-booking__overlay--49"></div>
          <div class="online-booking__overlay online-booking__overlay--50"></div>
          <div class="online-booking__overlay online-booking__overlay--51"></div>
          <div class="online-booking__overlay online-booking__overlay--52"></div>
          <div class="online-booking__overlay online-booking__overlay--53"></div>
          <div class="online-booking__overlay online-booking__overlay--54"></div>
          <div class="online-booking__overlay online-booking__overlay--55"></div>
          <div class="online-booking__overlay online-booking__overlay--56"></div>
          <div class="online-booking__overlay online-booking__overlay--57"></div>
          <div class="online-booking__overlay online-booking__overlay--58"></div>
          <div class="online-booking__overlay online-booking__overlay--59"></div>
        </div>

        <div class="online-booking__item" v-show="chosenTab === 'sm3'">
          <img src="../assets/img/sm3.png" alt="" class="online-booking__img">
          <div class="online-booking__overlay online-booking__overlay--60"></div>
          <div class="online-booking__overlay online-booking__overlay--61"></div>
          <div class="online-booking__overlay online-booking__overlay--62"></div>
          <div class="online-booking__overlay online-booking__overlay--63"></div>
          <div class="online-booking__overlay online-booking__overlay--64"></div>
          <div class="online-booking__overlay online-booking__overlay--65"></div>
          <div class="online-booking__overlay online-booking__overlay--66"></div>
          <div class="online-booking__overlay online-booking__overlay--67"></div>
          <div class="online-booking__overlay online-booking__overlay--68"></div>
          <div class="online-booking__overlay online-booking__overlay--69"></div>
          <div class="online-booking__overlay online-booking__overlay--70"></div>
          <div class="online-booking__overlay online-booking__overlay--71"></div>
          <div class="online-booking__overlay online-booking__overlay--72"></div>
          <div class="online-booking__overlay online-booking__overlay--73"></div>
          <div class="online-booking__overlay online-booking__overlay--74"></div>
          <div class="online-booking__overlay online-booking__overlay--75"></div>
          <div class="online-booking__overlay online-booking__overlay--76"></div>
          <div class="online-booking__overlay online-booking__overlay--77"></div>
          <div class="online-booking__overlay online-booking__overlay--78"></div>
          <div class="online-booking__overlay online-booking__overlay--79"></div>
          <div class="online-booking__overlay online-booking__overlay--80"></div>
          <div class="online-booking__overlay online-booking__overlay--81"></div>
          <div class="online-booking__overlay online-booking__overlay--82"></div>
          <div class="online-booking__overlay online-booking__overlay--83"></div>
          <div class="online-booking__overlay online-booking__overlay--84"></div>
          <div class="online-booking__overlay online-booking__overlay--85"></div>
          <div class="online-booking__overlay online-booking__overlay--86"></div>
          <div class="online-booking__overlay online-booking__overlay--87"></div>
          <div class="online-booking__overlay online-booking__overlay--88"></div>
          <div class="online-booking__overlay online-booking__overlay--89"></div>
          <div class="online-booking__overlay online-booking__overlay--90"></div>
          <div class="online-booking__overlay online-booking__overlay--91"></div>
          <div class="online-booking__overlay online-booking__overlay--92"></div>
          <div class="online-booking__overlay online-booking__overlay--93"></div>
        </div>

      </div>

      <a href="javascript:void(0)" onClick="SpaceinWidget.run('74f4d464-17b7-460a-be2e-7f7eee2193d8');">Отправить запрос</a>

      <div class="SpaceinWidget" id="SpaceinWidget"></div>

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
