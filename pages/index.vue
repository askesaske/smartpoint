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

    <section class="main__section rates-section">
      <div class="rates-section__container">
        <h2 class="rates-section__heading heading-blue">
          <div class="heading-blue__bg">Тарифы</div>
          <div class="heading-blue__text">Тарифы</div>
        </h2>

        <div class="rates-section__row">
          <div class="rates-section__list">
            <div class="rates-section__item" v-for="i in 4">
              <div class="rates-section__row rates-section__row--mb8">
                <div class="rates-section__title">50 000 тг</div>
                <div class="rates-section__checkbox rates-section__checkbox--checked"></div>
              </div>
              <div class="rates-section__text">
                Коворкинг на месяц
              </div>
            </div>
            <img src="../assets/img/about-section-bg.png" alt="" class="rates-section__bg">
          </div>

          <div class="rates-section__info">
            <div class="rates-section__info-header">
              <div class="rates-section__title rates-section__title--mb12">50 000 тг</div>
              <div class="rates-section__text">
                Количество посещений: <span>Месяц</span>
              </div>
            </div>

            <div class="rates-section__info-body">
              <div class="rates-section__row rates-section__row--start">
                <svg class="rates-section__icon" width="20" height="20">
                  <use href="../assets/img/icons.svg#gift"></use>
                </svg>
                <div class="rates-section__text">Бонус для бронирования</div>
                <div class="rates-section__text">6 000 KZT</div>
              </div>

              <div class="rates-section__row rates-section__row--start">
                <svg class="rates-section__icon" width="20" height="20">
                  <use href="../assets/img/icons.svg#printer"></use>
                </svg>
                <div class="rates-section__text">Бонус для печати</div>
                <div class="rates-section__text">500 KZT</div>
              </div>

              <div class="rates-section__row rates-section__row--start">
                <svg class="rates-section__icon" width="20" height="20">
                  <use href="../assets/img/icons.svg#dumbbell"></use>
                </svg>
                <div class="rates-section__text">Спортивная зона/Душевые</div>
              </div>

              <div class="rates-section__row rates-section__row--start">
                <svg class="rates-section__icon" width="20" height="20">
                  <use href="../assets/img/icons.svg#home"></use>
                </svg>
                <div class="rates-section__text">Wi-Fi, ресепшн, мягкая зона, телефонные переговорки</div>
              </div>

              <div class="rates-section__row rates-section__row--start">
                <svg class="rates-section__icon" width="20" height="20">
                  <use href="../assets/img/icons.svg#calendar"></use>
                </svg>
                <div class="rates-section__text">Бесплатное посещение мероприятий “SmArt.Point”</div>
              </div>
            </div>

            <button class="rates-section__btn button">Купить</button>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section events-section">
      <img src="../assets/img/events-bg.png" alt="" class="events-section__bg">

      <div class="events-section__container">
        <h2 class="events-section__heading heading-blue">
          <div class="heading-blue__bg">Тарифы</div>
          <div class="heading-blue__text">Тарифы</div>
        </h2>

        <div class="events-section__btn-group">
          <button class="events-section__btn button">Расписание событий</button>
          <button class="events-section__btn button-white">Архив</button>
        </div>

        <div class="events-section__list">
          <div class="events-section__row">
            <div class="events-section__date">МАРТ 5</div>

            <div class="events-section__main">
              <div class="events-section__img-box">
                <img src="../assets/img/event-1.png" alt="" class="events-section__img">
                <div class="events-section__tag">Платно</div>
              </div>

              <div class="events-section__info">
                <div class="events-section__title">
                  путь становление личности
                </div>

                <div class="events-section__subtitle">
                  <span>Спикер:</span> Карина Сыздыкова
                </div>
              </div>
            </div>
          </div>

          <div class="events-section__row">
            <div class="events-section__date">МАРТ 16</div>

            <div class="events-section__main">
              <div class="events-section__img-box">
                <img src="../assets/img/event-2.png" alt="" class="events-section__img">
                <div class="events-section__tag">Бесплатно</div>
              </div>

              <div class="events-section__info">
                <div class="events-section__title">
                  Челлендж 17/17/17. Мотивация, трудности, поддержание формы, восстановление
                </div>

                <div class="events-section__subtitle">
                  <span>Спикер:</span> Виктор Мальчиков
                </div>
              </div>
            </div>
          </div>

          <div class="events-section__row">
            <div class="events-section__date">МАРТ 25</div>

            <div class="events-section__main">
              <div class="events-section__img-box">
                <img src="../assets/img/event-3.png" alt="" class="events-section__img">
                <div class="events-section__tag">Бесплатно</div>
              </div>

              <div class="events-section__info">
                <div class="events-section__title">
                  Осознанно о красоте и здоровье
                </div>

                <div class="events-section__subtitle">
                  <span>Спикер:</span> Хади Шишкаева
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section space-section">
      <h2 class="space-section__heading heading-white">
        <div class="heading-white__bg">Пространство</div>
        <div class="heading-white__text">Пространство</div>
      </h2>

      <div class="space-section__container">
        <div class="space-section__wrapper">

          <div class="space-section__row">

            <div class="space-section__info">

              <div class="space-section__item">
                <div class="space-section__name">Название</div>
                <div class="space-section__desc">
                  <div class="space-section__title">Deep Purple</div>
                  <div class="space-section__subtitle">
                    Конференц зал отлично подходит для деловых встреч, семинаров или
                    конференций.
                  </div>
                </div>
              </div>

              <div class="space-section__item">
                <div class="space-section__name">Тип</div>
                <div class="space-section__desc">
                  <div class="space-section__title">Конференц зал</div>
                  <div class="space-section__subtitle">
                    Мебелированные конференц залы с возможностью почасовой аренды, прекрасно подходят для проведения
                    деловых встреч и переговоров.
                  </div>
                </div>
              </div>

              <div class="space-section__item">
                <div class="space-section__name">Площадь</div>
                <div class="space-section__desc">
                  <div class="space-section__title">52 м²</div>
                </div>
              </div>

              <div class="space-section__item">
                <div class="space-section__name">Оборудование</div>
                <div class="space-section__desc">
                  <div class="space-section__title">Проектор, интерактивная доска</div>
                </div>
              </div>

              <div class="space-section__item">
                <div class="space-section__name">Вместимость</div>
                <div class="space-section__desc">
                  <div class="space-section__title">
                    Максимальная вместительность 35 чел.
                    Рекомендуем для встречи 20 чел.
                  </div>
                </div>
              </div>

              <div class="space-section__item">
                <div class="space-section__name">Цена</div>
                <div class="space-section__desc">
                  <div class="space-section__title">8 000 KZT/ч.</div>
                </div>
              </div>

              <div class="space-section__controls">
                <div class="space-section__index">1 / 8</div>
                <svg class="space-section__prev" width="40" height="40">
                  <use href="../assets/img/icons.svg#arrow-left"></use>
                </svg>
                <svg class="space-section__next" width="40" height="40">
                  <use href="../assets/img/icons.svg#arrow-left"></use>
                </svg>
              </div>

            </div>

            <img src="../assets/img/deep-purple.png" alt="" class="space-section__img">

          </div>

        </div>
      </div>
    </section>

    <section class="main__section news-section">
      <div class="news-section__container">
        <h2 class="news-section__heading heading-blue">
          <div class="heading-blue__bg">Новости</div>
          <div class="heading-blue__text">Новости</div>
        </h2>

        <div class="news-section__list">

          <div class="news-section__item">
            <img src="../assets/img/news-1.png" alt="" class="news-section__img">
            <div class="news-section__date">2020-11-27</div>
            <div class="news-section__title">
              Идейные соображения высшего порядка
            </div>
            <div class="news-section__desc">
              Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют
              определения и уточнения дальнейших направлений развития.
            </div>
            <div class="news-section__more">
              <p>Читать больше</p>
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#arrow-sm"></use>
              </svg>
            </div>
          </div>

          <div class="news-section__item">
            <img src="../assets/img/news-2.png" alt="" class="news-section__img">
            <div class="news-section__date">2020-11-27</div>
            <div class="news-section__title">
              Идейные соображения высшего порядка
            </div>
            <div class="news-section__desc">
              Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют
              определения и уточнения дальнейших направлений развития.
            </div>
            <div class="news-section__more">
              <p>Читать больше</p>
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#arrow-sm"></use>
              </svg>
            </div>
          </div>

          <div class="news-section__item">
            <img src="../assets/img/news-3.png" alt="" class="news-section__img">
            <div class="news-section__date">2020-11-27</div>
            <div class="news-section__title">
              Идейные соображения высшего порядка
            </div>
            <div class="news-section__desc">
              Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют
              определения и уточнения дальнейших направлений развития.
            </div>
            <div class="news-section__more">
              <p>Читать больше</p>
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#arrow-sm"></use>
              </svg>
            </div>
          </div>

          <div class="news-section__item">
            <img src="../assets/img/news-4.png" alt="" class="news-section__img">
            <div class="news-section__date">2020-11-27</div>
            <div class="news-section__title">
              Идейные соображения высшего порядка
            </div>
            <div class="news-section__desc">
              Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют
              определения и уточнения дальнейших направлений развития.
            </div>
            <div class="news-section__more">
              <p>Читать больше</p>
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#arrow-sm"></use>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="main__section gallery-section">
      <div class="gallery-section__container">
        <h2 class="news-section__heading heading-blue">
          <div class="heading-blue__bg">Галерея</div>
          <div class="heading-blue__text">Галерея</div>
        </h2>

        <div class="gallery-section__list">

          <div class="gallery-section__item">
            <img src="../assets/img/gallery-1.png" alt="" class="gallery-section__img">

            <div class="gallery-section__magnifier">
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#magnifier"></use>
              </svg>
            </div>
          </div>

          <div class="gallery-section__item">
            <img src="../assets/img/gallery-2.png" alt="" class="gallery-section__img">

            <div class="gallery-section__magnifier">
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#magnifier"></use>
              </svg>
            </div>
          </div>

          <div class="gallery-section__item">
            <img src="../assets/img/gallery-3.png" alt="" class="gallery-section__img">

            <div class="gallery-section__magnifier">
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#magnifier"></use>
              </svg>
            </div>
          </div>

          <div class="gallery-section__item">
            <img src="../assets/img/gallery-4.png" alt="" class="gallery-section__img">

            <div class="gallery-section__magnifier">
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#magnifier"></use>
              </svg>
            </div>
          </div>

          <div class="gallery-section__more">
            Смотреть все
          </div>

        </div>
      </div>
    </section>

    <section class="main__section team-section">
      <h2 class="team-section__heading heading-white">
        <div class="heading-white__bg">Наша команда</div>
        <div class="heading-white__text">Наша команда</div>
      </h2>

      <div class="team-section__container">

        <div class="team-section__list">

          <div class="swiper-container team-section__swiper-container">
            <div class="swiper-wrapper">

              <div class="swiper-slide team-section__item">

                <img src="../assets/img/member-1.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Алия Турдиева</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

                <img src="../assets/img/member-2.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Сабина Юрченко</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

                <img src="../assets/img/member-3.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Аслан Карим</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

                <img src="../assets/img/member-1.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Алия Турдиева</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next team-section__next"></div>
            <div class="swiper-button-prev team-section__prev"></div>
          </div>

        </div>
      </div>
    </section>

    <section class="main__section inst-section">
      <div class="inst-section__container">

        <div class="inst-section__list">
          <div class="inst-section__item">
            <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
          </div>
          <div class="inst-section__item">
            <img src="../assets/img/inst-2.png" alt="" class="inst-section__img">
          </div>
          <div class="inst-section__item">
            <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
          </div>
          <div class="inst-section__item">
            <img src="../assets/img/inst-2.png" alt="" class="inst-section__img">
          </div>
          <div class="inst-section__item">
            <img src="../assets/img/inst-1.png" alt="" class="inst-section__img">
          </div>
          <div class="inst-section__item">
            <img src="../assets/img/inst-2.png" alt="" class="inst-section__img">
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

    var swiper2 = new Swiper('.team-section__swiper-container', {
      slidesPerView: 2,
      spaceBetween: 8,
      navigation: {
        nextEl: '.team-section__next',
        prevEl: '.team-section__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }
};
</script>

<style lang="scss">

</style>
