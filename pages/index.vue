<template>
  <div>

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


        <div class="welcome-section__scroll-box" v-scroll-to="{el:'#tagline', duration: 700,}">
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

    <section class="main__section tagline-section" id="tagline">

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
              <div class="benefit-card__side benefit-card__side--front">
                <svg class="benefit-card__icon" width="80" height="80">
                  <use href="../assets/img/icons.svg#community"></use>
                </svg>
                <div class="benefit-card__name">
                  Сообщество
                </div>
              </div>

              <div class="benefit-card__side benefit-card__side--back">
                <div class="benefit-card__title">Спорт и развитие</div>
                <div class="benefit-card__desc">
                  В SmArt.Point много креативных личностей, создающих деловые и культурные ценности для общества.
                  Общение между резидентами, бесплатный доступ к библеотеке
                  и игровой зоне
                </div>
              </div>
            </div>

            <div class="benefits__card benefit-card">
              <div class="benefit-card__side benefit-card__side--front">
                <svg class="benefit-card__icon" width="80" height="80">
                  <use href="../assets/img/icons.svg#virtual-office"></use>
                </svg>
                <div class="benefit-card__name">
                  Виртуальный офис
                </div>
              </div>

              <div class="benefit-card__side benefit-card__side--back">
                <div class="benefit-card__title">Виртуальный офис</div>
                <div class="benefit-card__desc">
                  Специальные пакеты для компаний и фрилансеров, которым не требуется постоянный офис, но в тоже время
                  нужно презентабельное место для встреч
                  и юридический адрес
                </div>
              </div>
            </div>

            <div class="benefits__card benefit-card">
              <div class="benefit-card__side benefit-card__side--front">
                <svg class="benefit-card__icon" width="80" height="80">
                  <use href="../assets/img/icons.svg#clock-24"></use>
                </svg>
                <div class="benefit-card__name">
                  Доступность 24/7
                </div>
              </div>

              <div class="benefit-card__side benefit-card__side--back">
                <div class="benefit-card__title">Доступность 24/7</div>
                <div class="benefit-card__desc">
                  Офисы, индивидуальное рабочее место, ресепшн, высокоскоростной интернет, принт-зона, специальные
                  пакеты для сотрудников
                  в командировке, включая размещение, длительное использование докеров и т.д.
                </div>
              </div>
            </div>

            <div class="benefits__card benefit-card">
              <div class="benefit-card__side benefit-card__side--front">
                <svg class="benefit-card__icon" width="80" height="80">
                  <use href="../assets/img/icons.svg#sport"></use>
                </svg>
                <div class="benefit-card__name">
                  Спорт и развитие
                </div>
              </div>

              <div class="benefit-card__side benefit-card__side--back">
                <div class="benefit-card__title">Спорт и развитие</div>
                <div class="benefit-card__desc">
                  Инвестируйте в здоровье
                  и в профессиональное развитие. Возможность проведения спортивных тренировки, курсов по йоге
                  и регулярные тренинги по повышению квалификации
                  и мастер классы
                </div>
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

    <booking-section></booking-section>

    <rates-section></rates-section>

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

    <space-section></space-section>

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

    <gallery-section></gallery-section>

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

                <svg class="team-section__icon team-section__icon--star1" width="23" height="23">
                  <use href="../assets/img/icons.svg#star"></use>
                </svg>

                <svg class="team-section__icon team-section__icon--star2" width="23" height="23">
                  <use href="../assets/img/icons.svg#star"></use>
                </svg>

                <svg class="team-section__icon team-section__icon--star3" width="23" height="23">
                  <use href="../assets/img/icons.svg#star"></use>
                </svg>

                <svg class="team-section__icon team-section__icon--hexagon1" width="24" height="29">
                  <use href="../assets/img/icons.svg#hexagon"></use>
                </svg>

                <svg class="team-section__icon team-section__icon--hexagon-lg" width="62" height="76">
                  <use href="../assets/img/icons.svg#hexagon-lg"></use>
                </svg>

                <svg class="team-section__icon team-section__icon--lightning" width="47" height="102">
                  <use href="../assets/img/icons.svg#lightning"></use>
                </svg>

                <svg class="team-section__icon team-section__icon--crown" width="60" height="60">
                  <use href="../assets/img/icons.svg#crown"></use>
                </svg>

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

    <inst-section></inst-section>

  </div>
</template>

<script>
import Swiper, {Navigation} from 'swiper';
import SpaceSection from "@/components/SpaceSection";
import BookingSection from "@/components/BookingSection";
import RatesSection from "@/components/RatesSection";
import GallerySection from "@/components/GallerySection";
import InstSection from "@/components/InstSection";

Swiper.use([Navigation]);

export default {
  components: {
    SpaceSection,
    BookingSection,
    RatesSection,
    GallerySection,
    InstSection
  },
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

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
