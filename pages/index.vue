<template>
  <div>

    <section class="main__section welcome-section">

      <div class="welcome-section__video-wrapper">
        <video src="../assets/videos/bg-video.mp4" autoplay muted loop class="welcome-section__video-bg"></video>
      </div>

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
          Тест драйв SmArt.Point
        </button>
      </div>
    </section>

    <section class="main__section about-section" id="about">
      <div class="about-section__container">
        <h2 class="about-section__heading heading-blue">
          <div class="heading-blue__bg">О нас</div>
          <div class="heading-blue__text">О нас</div>
        </h2>

        <div class="about-section__row">
          <div class="about-section__title">
            Добро пожаловать в пространство <br>
            разумных технологий и креативных <br>
            решений – <br>
            <span>SmArt.Point</span>
          </div>

          <div class="about-section__info">
            <div class="about-section__text">
              <!--              {{ loadedAboutUs.text }}-->
              В коворкинге работают более 70 успешных компаний в сфере IT, финтех, онлайн-торговли, разработки ПО,
              кибербезопасности, блокчейн, ИТ-образования, онлайн-образования, медиа, автоматизированной логистики,
              искусственного интеллекта, робототехники, телекоммуникации, digital-маркетинга и дизайна, с совокупным
              количеством сотрудников более 800 человек.
            </div>

            <nuxt-link to="/About" tag="button" class="about-section__btn button">
              Подробнее
            </nuxt-link>

            <div class="about-section__stat-row">
              <div class="about-section__number-box">
                <!--                <span>{{ loadedAboutUs.coworking_area }} м²</span> <br>-->
                <span>12 000 м²</span> <br>
                Площадь коворкинга
              </div>
              <div class="about-section__number-box">
                <!--                <span>{{ loadedAboutUs.working_place }}</span> <br>-->
                <span>1 000</span> <br>
                Рабочих мест
              </div>
            </div>

            <div class="about-section__stat-row">
              <div class="about-section__number-box">
                <!--                <span>{{ loadedAboutUs.coworking_area }} м²</span> <br>-->
                <span>500 мб/с</span> <br>
                Интернет Wi-Fi
              </div>
              <div class="about-section__number-box">
                <!--                <span>{{ loadedAboutUs.working_place }}</span> <br>-->
                <span>24/7</span> <br>
                Доступ
              </div>
            </div>

            <img src="../assets/img/about-section-bg.png" alt="" class="about-section__bg">
          </div>
        </div>

        <div class="about-section__benefits benefits">
          <h4 class="benefits__title">Преимущества</h4>

          <div class="benefits__cards">

            <!--            <div class="benefits__card benefit-card" v-for="adv in advantages" :key="adv.id">-->
            <div class="benefits__card benefit-card" v-for="adv in 3" :key="adv.id">
              <div class="benefit-card__side benefit-card__side--front">
                <img :src="adv.card_image" alt="" class="benefit-card__icon">
                <div class="benefit-card__name">
                  {{ adv.card_title }}
                </div>
              </div>

              <div class="benefit-card__side benefit-card__side--back">
                <!--                <div class="benefit-card__title">{{ adv.inside_card_title }}</div>-->
                <div class="benefit-card__title">Инфраструктура</div>
                <ul class="benefit-card__desc">
                  <li>Кафетерии и зоны питания</li>
                  <li>Библиотека</li>
                  <li>Коллаборационные зоны</li>
                  <li>Лаундж зоны</li>
                  <li>Брейншторминг споты</li>
                  <li>Аптека</li>
                  <li>Нотариус</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="main__section community-section" id="community">
      <div class="community-section__container">
        <h2 class="community-section__heading heading-blue">
          <div class="heading-blue__bg">Комьюнити</div>
          <div class="heading-blue__text">Комьюнити</div>
        </h2>

        <div class="community-section__slider">
          <div class="swiper-container community-section__swiper-container">
            <div class="swiper-wrapper">

              <nuxt-link :to="'/Community/' + community.id"
                         tag="div"
                         class="swiper-slide community-section__item"
                         v-for="community in loadedCommunities"
                         :key="community.id">
                <img :src="community.company_card_image" alt="" class="community-section__img">
                <div class="community-section__name">
                  {{ community.company_name }}
                </div>
              </nuxt-link>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next community-section__next"></div>
            <div class="swiper-button-prev community-section__prev"></div>
          </div>
        </div>
      </div>
    </section>

    <booking-section></booking-section>

    <service-offices></service-offices>

    <rates-section></rates-section>

    <section class="main__section additional-services">
      <h2 class="additional-services__heading heading-white">
        <div class="heading-white__bg">Пространство</div>
        <div class="heading-white__text">Пространство</div>
      </h2>

      <div class="additional-services__container">

        <div class="additional-services__item">
          <svg class="additional-services__icon" width="60" height="60">
            <use href="../assets/img/icons.svg#suitcase-2"></use>
          </svg>

          <div class="additional-services__title">
            Аренда юридического адреса
          </div>

          <div class="additional-services__price">
            25 000 тг/месяц
          </div>
        </div>

        <div class="additional-services__item">
          <svg class="additional-services__icon" width="60" height="60">
            <use href="../assets/img/icons.svg#parking"></use>
          </svg>

          <div class="additional-services__title">
            Аренда парковочных мест
          </div>

          <div class="additional-services__price">
            25 000 тг/месяц
          </div>
        </div>

        <div class="additional-services__item">
          <svg class="additional-services__icon" width="60" height="60">
            <use href="../assets/img/icons.svg#key"></use>
          </svg>

          <div class="additional-services__title">
            Аренда складского помещения
          </div>

          <div class="additional-services__price">
            25 000 тг/месяц
          </div>
        </div>

        <div class="additional-services__item">
          <svg class="additional-services__icon" width="60" height="60">
            <use href="../assets/img/icons.svg#printer-2"></use>
          </svg>

          <div class="additional-services__title">
            Услуги принтинга
          </div>

          <div class="additional-services__price">
            25 000 тг/месяц
          </div>
        </div>

        <div class="additional-services__item">
          <svg class="additional-services__icon" width="60" height="60">
            <use href="../assets/img/icons.svg#shout"></use>
          </svg>

          <div class="additional-services__title">
            Рекламные площади
          </div>

          <div class="additional-services__price">
            25 000 тг/месяц
          </div>
        </div>

        <div class="additional-services__item">
          <svg class="additional-services__icon" width="60" height="60">
            <use href="../assets/img/icons.svg#camera"></use>
          </svg>

          <div class="additional-services__title">
            Локации для съемок
          </div>

          <div class="additional-services__price">
            25 000 тг/месяц
          </div>
        </div>
      </div>

    </section>

    <section class="main__section events-section" id="events">
      <img src="../assets/img/events-bg.png" alt="" class="events-section__bg">

      <div class="events-section__container">
        <h2 class="events-section__heading heading-blue">
          <div class="heading-blue__bg">Мероприятия</div>
          <div class="heading-blue__text">Мероприятия</div>
        </h2>

        <div class="events-section__btn-group">
          <nuxt-link to="/Events/Schedule/" tag="button" class="events-section__btn button">Расписание событий
          </nuxt-link>
          <nuxt-link to="/Events/Archive/" tag="button" class="events-section__btn button-white">Архив</nuxt-link>
        </div>

        <div class="events-section__list">
          <nuxt-link to="/Events/1" tag="div" class="events-section__row"
                     v-for="(e, i) in events"
                     :key="e.id"
                     v-if="i < 3">
            <div class="events-section__date">{{ e.start_date | moment("d, MMMM, YYYY") }}</div>

            <div class="events-section__main">
              <div class="events-section__img-box">
                <img :src="e.main_photo" alt="" class="events-section__img">
                <div class="events-section__tag" v-if="e.is_for_free">Бесплатно</div>
                <div class="events-section__tag" v-else>Платно</div>
              </div>

              <div class="events-section__info">
                <div class="events-section__title">
                  {{ e.title }}
                </div>

                <div class="events-section__subtitle">
                  <span>Спикер:</span> {{ e.speaker }}
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <space-section></space-section>

    <section class="main__section news-section" id="news">
      <div class="news-section__container">
        <h2 class="news-section__heading heading-blue">
          <div class="heading-blue__bg">Новости</div>
          <div class="heading-blue__text">Новости</div>
        </h2>

        <div class="news-section__list">

          <nuxt-link :to="'/News/' + n.id"
                     tag="div"
                     class="news-section__item"
                     v-for="n in loadedNews"
                     :key="n.id">
            <img :src="n.main_photo" alt="" class="news-section__img">
            <div class="news-section__date">{{ n.created_at }}</div>
            <div class="news-section__title">
              {{ n.title }}
            </div>
            <div class="news-section__desc">
              {{ n.text }}
            </div>
            <div class="news-section__more">
              <p>Читать больше</p>
              <svg width="16" height="16">
                <use href="../assets/img/icons.svg#arrow-sm"></use>
              </svg>
            </div>
          </nuxt-link>

        </div>

        <div class="news-section__slider">
          <div class="swiper-container news-section__swiper-container">
            <div class="swiper-wrapper">
              <nuxt-link :to="'/News/' + n.id"
                         tag="div"
                         class="swiper-slide news-section__item"
                         v-for="n in loadedNews"
                         :key="n.id">
                <img :src="n.main_photo" alt="" class="news-section__img">
                <div class="news-section__date">{{ n.created_at }}</div>
                <div class="news-section__title">
                  {{ n.title }}
                </div>
                <div class="news-section__desc">
                  {{ n.text }}
                </div>
                <div class="news-section__more">
                  <p>Читать больше</p>
                  <svg width="16" height="16">
                    <use href="../assets/img/icons.svg#arrow-sm"></use>
                  </svg>
                </div>
              </nuxt-link>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next news-section__next"></div>
            <div class="swiper-button-prev news-section__prev"></div>
          </div>
        </div>

      </div>
    </section>

    <gallery-section></gallery-section>

    <section class="main__section team-section" id="team">
      <h2 class="team-section__heading heading-white">
        <div class="heading-white__bg">Наша команда</div>
        <div class="heading-white__text">Наша команда</div>
      </h2>

      <div class="team-section__container">

        <div class="team-section__list">

          <div class="swiper-container team-section__swiper-container">
            <div class="swiper-wrapper">

              <div class="swiper-slide team-section__item">

<!--                <svg class="team-section__icon team-section__icon&#45;&#45;crown" width="60" height="60">-->
<!--                  <use href="../assets/img/icons.svg#crown"></use>-->
<!--                </svg>-->

                <img src="../assets/img/member-1.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Алия Турдиева</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

<!--                <svg class="team-section__icon team-section__icon&#45;&#45;chat" width="52" height="52">-->
<!--                  <use href="../assets/img/icons.svg#chat"></use>-->
<!--                </svg>-->

                <img src="../assets/img/member-2.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Сабина Юрченко</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

<!--                <svg class="team-section__icon team-section__icon&#45;&#45;glasses" width="90" height="90">-->
<!--                  <use href="../assets/img/icons.svg#glasses"></use>-->
<!--                </svg>-->

                <img src="../assets/img/member-3.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Аслан Карим</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

<!--                <svg class="team-section__icon team-section__icon&#45;&#45;crown" width="60" height="60">-->
<!--                  <use href="../assets/img/icons.svg#crown"></use>-->
<!--                </svg>-->

                <img src="../assets/img/member-4.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Алия Турдиева</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>


              </div>

              <div class="swiper-slide team-section__item">

                <!--                <svg class="team-section__icon team-section__icon&#45;&#45;crown" width="60" height="60">-->
                <!--                  <use href="../assets/img/icons.svg#crown"></use>-->
                <!--                </svg>-->

                <img src="../assets/img/member-5.png" alt="" class="team-section__img">

                <div class="team-section__info">
                  <div class="team-section__name">Алия Турдиева</div>
                  <div class="team-section__occupation">Проектный менеджер</div>
                </div>

              </div>

              <div class="swiper-slide team-section__item">

                <!--                <svg class="team-section__icon team-section__icon&#45;&#45;crown" width="60" height="60">-->
                <!--                  <use href="../assets/img/icons.svg#crown"></use>-->
                <!--                </svg>-->

                <img src="../assets/img/member-6.png" alt="" class="team-section__img">

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

    <!--    <inst-section></inst-section>-->
  </div>
</template>

<script>
import Swiper, {Navigation} from 'swiper';
import SpaceSection from "@/components/SpaceSection";
import BookingSection from "@/components/BookingSection";
import RatesSection from "@/components/RatesSection";
import GallerySection from "@/components/GallerySection";
import InstSection from "@/components/InstSection";
import ServiceOffices from "~/components/ServiceOffices";
import VueMoment, {moment} from 'vue-moment';

Swiper.use([Navigation]);

export default {
  components: {
    SpaceSection,
    BookingSection,
    RatesSection,
    GallerySection,
    InstSection,
    ServiceOffices
  },
  data() {
    return {
      advantages: {},
      events: []
    };
  },
  computed: {
    loadedAboutUs() {
      return this.$store.getters.loadedAboutUs
    },
    loadedCommunities() {
      return this.$store.getters.loadedCommunities
    },
    loadedNews() {
      return this.$store.getters.loadedNews
    },
  },
  methods: {},
  created() {
  },
  mounted() {
    var swiper1 = new Swiper('.community-section__swiper-container', {
      slidesPerView: 1,
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
      slidesPerView: 1,
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

    var swiper3 = new Swiper('.news-section__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: '.news-section__next',
        prevEl: '.news-section__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 198,
        },
      }
    });

    this.$axios.get('http://185.121.81.137/api/advantages/')
      .then(response => {
        this.advantages = response.data
      })
      .catch(e => console.log(e))

    this.$axios.get('http://185.121.81.137/api/event/')
      .then(response => {
        this.events = response.data.filter(e => e.is_active === true)
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }
};
</script>

<style lang="scss">

</style>
