<template>
  <main class="main">
    <section class="main__section welcome-section">
      <div class="welcome-section__container">
        <div class="welcome-section__pentagon">
          <svg width="300" height="320">
            <use href="../assets/img/icons.svg#pentagon"></use>
          </svg>

          <p class="welcome-section__text">
            Пространство разумных <br>
            технологий <br>
            и креативных решений
          </p>
        </div>

        <img src="../assets/img/smartpoint-heading.png" alt="" class="welcome-section__heading">


        <div class="welcome-section__scroll-box">
          <svg class="welcome-section__scroll" width="14" height="34">
            <use href="../assets/img/icons.svg#scroll"></use>
          </svg>

          <svg class="welcome-section__scroll-line" width="2" height="5">
            <use href="../assets/img/icons.svg#scroll-line"></use>
          </svg>

          <div class="welcome-section__scroll-text">
            Листайте вниз
          </div>
        </div>
      </div>
    </section>

    <section class="main__section tagline-section">

      <div class="tagline-section__container">
        <div class="tagline-section__text">
          <span>Работайте 24/7 в комфортном</span> <br>
          <span>коворкинг пространстве</span>
        </div>

        <button class="tagline-section__btn button">
          Опробовать бесплатно
        </button>
      </div>
    </section>

    <section class="main__section about-section">
      <div class="about-section__container">
        <h2 class="about-section__heading heading-blue">
          <div class="heading-blue__bg">О нас</div>
          <div class="heading-blue__text">О нас</div>
        </h2>

        <div class="about-section__row">
          <div class="about-section__title">
            Добро пожаловать в коворкинг <br>
            <span>SmArt.Point</span>
          </div>

          <div class="about-section__info">
            <div class="about-section__text">
              МФК «Almaty Towers» с момента открытия ничем не привлекал жителей города. Хоть башни и позиционировались
              как
              место для работы и развлечений, все офисы и культурные мероприятия, проводившиеся там, не блистали высоким
              уровнем организованности. Комплекс оживал раз в один или два года, когда проводились образовательные
              выставки или один из проектов американского консульства. Ситуация изменилась с открытием нового коворкинга
              SmArt.Point.
            </div>

            <button class="about-section__btn button">
              Подробнее
            </button>

            <div class="about-section__row">
              <div class="about-section__number-box">
                <span>10 000 м²</span> <br>
                Площадь коворкинга
              </div>
              <div class="about-section__number-box">
                <span>900</span> <br>
                Рабочих мест
              </div>
            </div>

            <img src="../assets/img/about-section-bg.png" alt="" class="about-section__bg">
          </div>
        </div>

        <div class="about-section__benefits benefits">
          <h4 class="benefits__title">Преимущества</h4>

          <div class="benefits__cards">
            <div class="benefits__card benefit-card">
              <svg class="benefit-card__icon" width="80" height="80">
                <use href="../assets/img/icons.svg#community"></use>
              </svg>
              <div class="benefit-card__name">
                Сообщество
              </div>
            </div>
            <div class="benefits__card benefit-card">
              <svg class="benefit-card__icon" width="80" height="80">
                <use href="../assets/img/icons.svg#virtual-office"></use>
              </svg>
              <div class="benefit-card__name">
                Виртуальный офис
              </div>
            </div>
            <div class="benefits__card benefit-card">
              <svg class="benefit-card__icon" width="80" height="80">
                <use href="../assets/img/icons.svg#clock-24"></use>
              </svg>
              <div class="benefit-card__name">
                Доступность 24/7
              </div>
            </div>
            <div class="benefits__card benefit-card">
              <svg class="benefit-card__icon" width="80" height="80">
                <use href="../assets/img/icons.svg#sport"></use>
              </svg>
              <div class="benefit-card__name">
                Спорт и развитие
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section community-section">
      <div class="community-section__container">
        <h2 class="community-section__heading heading-blue">
          <div class="heading-blue__bg">Комьюнити</div>
          <div class="heading-blue__text">Комьюнити</div>
        </h2>

        <div class="community-section__slider">
          <div class="swiper-container community-section__swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide community-section__item">
                <img src="../assets/img/choco.png" alt="" class="community-section__img">
                <div class="community-section__name">
                  Chocofamily Holding
                </div>
              </div>
              <div class="swiper-slide community-section__item">
                <img src="../assets/img/petrel-ai.png" alt="" class="community-section__img">
                <div class="community-section__name">
                  Petrel Ai
                </div>
              </div>
              <div class="swiper-slide community-section__item">
                <img src="../assets/img/beeline.png" alt="" class="community-section__img">
                <div class="community-section__name">
                  Beeline
                </div>
              </div>
              <div class="swiper-slide community-section__item">
                <img src="../assets/img/urbo.png" alt="" class="community-section__img">
                <div class="community-section__name">
                  Urbo
                </div>
              </div>
              <div class="swiper-slide community-section__item">
                <img src="../assets/img/choco.png" alt="" class="community-section__img">
                <div class="community-section__name">
                  Chocofamily Holding
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next community-section__next"></div>
            <div class="swiper-button-prev community-section__prev"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section online-booking">
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
  </main>
</template>

<script>
import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

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
      if(sm === 'sm1') {
        this.sm1 = true;
        this.sm2 = false;
        this.sm3 = false;
      } else if(sm === 'sm2') {
        this.sm1 = false;
        this.sm2 = true;
        this.sm3 = false;
      } else if(sm === 'sm3') {
        this.sm1 = false;
        this.sm2 = false;
        this.sm3 = true;
      }
    }
  },
  mounted() {
    var swiper1 = new Swiper('.community-section__swiper-container', {
      slidesPerView: 2,
      spaceBetween: 8,
      navigation: {
        nextEl: '.community-section__next',
        prevEl: '.community-section__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }
    });
  }
};
</script>

<style lang="scss">

</style>
