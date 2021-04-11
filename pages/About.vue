<template>
  <div class="about">
    <div class="about__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
          <div class="path-box__link">О нас</div>
        </div>
        <h1 class="heading-fluid__title">О нас</h1>
      </div>
    </div>

    <div class="about__container">

      <div class="about__slider">

        <div class="swiper-container about__swiper-container">

          <div class="swiper-wrapper">

            <div class="swiper-slide about__slider-item">
              <img src="../assets/img/about-slider.png" alt="">
            </div>

            <div class="swiper-slide about__slider-item">
              <img src="../assets/img/about-slider.png" alt="">
            </div>

            <div class="swiper-slide about__slider-item">
              <img src="../assets/img/about-slider.png" alt="">
            </div>

            <div class="swiper-slide about__slider-item">
              <img src="../assets/img/about-slider.png" alt="">
            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination about__pagination"></div>
          <!-- Add Arrows -->
          <div class="swiper-button-next about__next"></div>
          <div class="swiper-button-prev about__prev"></div>
        </div>

      </div>

      <div class="about__text">
        МФК «Almaty Towers» с момента открытия ничем не привлекал жителей города. Хоть башни и позиционировались как
        место для работы и развлечений, все офисы и культурные мероприятия, проводившиеся там, не блистали высоким
        уровнем организованности. Комплекс оживал раз в один или два года, когда проводились образовательные выставки
        или один из проектов американского консульства. Ситуация изменилась с открытием нового коворкинга SmArt.Point.

        <br><br>

        В Алматы открылось новое рабочее пространство – SmArt.Point. Оно появилось на месте сгоревшего в прошлом году
        кинотеатра в Almaty Towers. Центр устроен по принципу
        огромного дружелюбного коворкинга и объединяет под одной крышей людей разных
        профессий и сфер.

        <br><br>

        20 октября 2017 г. состоялось официальное открытие SmArt.Point с участием генерального директора Mercury
        Properties, посла США в Казахстане, представителей посольства
        Британии, топ-менеджмента компании Шеврон, представителей СМИ и ИТ-сектора.
        Также открытие проекта посетили вице-министр образования РК, бизнесмены Арманжан
        Байтасов, Ерлан Стамбеков, Маргулан Сейсембаев, глава АО «Национальное агентство по технологическому развитию»,
        известные журналисты, и т.д.
      </div>
    </div>

    <img src="../assets/img/mountain-bg.png" alt="" class="about__bg">
  </div>
</template>

<script>
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

export default {

  mounted() {
    var swiper = new Swiper('.about__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 56,
      navigation: {
        nextEl: '.about__next',
        prevEl: '.about__prev',
      },
      pagination: {
        el: '.about__pagination',
      },
    });
  }
}
</script>
