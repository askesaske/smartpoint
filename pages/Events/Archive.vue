<template>
  <div class="schedule-page">

    <div class="schedule-page__heading heading-fluid">
      <div class="heading-fluid__container">
        <div class="heading-fluid__path path-box">
          <div class="path-box__link">Главная</div>
          <div class="path-box__link">Архив</div>
        </div>

        <h1 class="heading-fluid__title">Архив</h1>
      </div>
    </div>

    <div class="schedule-page__container">

      <button class="schedule-page__btn button-white">Расписание мероприятий</button>

      <div class="schedule-page__wrapper">

        <div class="schedule-page__month-box" v-for="i in 3">

          <div class="schedule-page__title">Март 2021</div>

          <div class="schedule-page__row">

            <div class="schedule-page__list">

              <div class="schedule-page__item">

                <div class="schedule-page__date">
                  <p>март 5</p>
                  <span>19:00 - 20:00</span>
                </div>

                <div class="schedule-page__name">
                  путь становление личности
                </div>

                <div class="schedule-page__desc">
                  Спикер: Карина Сыздыкова
                </div>

              </div>

              <div class="schedule-page__item">

                <div class="schedule-page__date">
                  <p>март 16</p>
                  <span>19:00 - 20:00</span>
                </div>

                <div class="schedule-page__name">
                  Челлендж 17/17/17. Мотивация, трудности, поддержание формы, восстановление
                </div>

                <div class="schedule-page__desc">
                  Спикер: Виктор Мальчиков
                </div>

              </div>

              <div class="schedule-page__item">

                <div class="schedule-page__date">
                  <p>март 25</p>
                  <span>19:00 - 20:00</span>
                </div>

                <div class="schedule-page__name">
                  Осознанно о красоте и здоровье
                </div>

                <div class="schedule-page__desc">
                  Спикер: Хади Саид
                </div>

              </div>

              <div class="schedule-page__item">

                <div class="schedule-page__date">
                  <p>март 25</p>
                  <span>19:00 - 20:00</span>
                </div>

                <div class="schedule-page__name">
                  Осознанно о красоте и здоровье
                </div>

                <div class="schedule-page__desc">
                  Спикер: Хади Саид
                </div>

              </div>

              <div class="schedule-page__item">

                <div class="schedule-page__date">
                  <p>март 25</p>
                  <span>19:00 - 20:00</span>
                </div>

                <div class="schedule-page__name">
                  Осознанно о красоте и здоровье
                </div>

                <div class="schedule-page__desc">
                  Спикер: Хади Саид
                </div>

              </div>

            </div>

            <img src="../../assets/img/schedule-1.png" alt="" class="schedule-page__img schedule-page__img--gray">

          </div>

        </div>

      </div>

    </div>

    <img src="../../assets/img/schedule-bg.png" alt="" class="schedule-page__bg">
  </div>
</template>
