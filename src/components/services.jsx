import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <h2 className="visually-hidden">Услуги</h2>
      <ul className="services__tabs">
        <li className="services__tabs-item services__tabs-item--active">
          <span>Вклады</span>
        </li>
        <li className="services__tabs-item">
          <span>Кредиты</span>
        </li>
        <li className="services__tabs-item">
          <span>Страхование</span>
        </li>
        <li className="services__tabs-item">
          <span>Онлайн-сервисы</span>
        </li>
      </ul>
      <article className="services__item">
        <h3 className="services__item-title">
          Вклады Лига Банка – это выгодная инвестиция в свое будущее
        </h3>
        <ul className="services__item-list">
          <li className="services__item-list-point">
            Проценты по вкладам до 7%
          </li>
          <li className="services__item-list-point">
            Разнообразные условия
          </li>
          <li className="services__item-list-point">
            Возможность ежемесячной <br/> капитализации или вывод <br/> процентов на банковскую карту
          </li>
        </ul>
        <a className="services__item-button button" href="/">Узнать подробнее</a>
      </article>
      <article className="services__item" style={{display: "none"}}>
        <h3 className="services__item-title">
          Лига Банк выдает кредиты <br/> под любые цели
        </h3>
        <ul className="services__item-list">
          <li className="services__item-list-point">
            Ипотечный кредит
          </li>
          <li className="services__item-list-point">
            Автокредит
          </li>
          <li className="services__item-list-point">
            Потребительский кредит
          </li>
        </ul>
        <p className="services__item-info-main">
          Рассчитайте ежемесячный платеж <br/>
          и ставку по кредиту воспользовавшись нашим <a href="/">кредитным калькулятором</a>
        </p>
      </article>
      <article className="services__item" style={{display: "none"}}>
        <h3 className="services__item-title">
          Лига Страхование — застрахуем <br/> все что захотите
        </h3>
        <ul className="services__item-list">
          <li className="services__item-list-point">
            Автомобильное страхование
          </li>
          <li className="services__item-list-point">
            Страхование жизни и здоровья
          </li>
          <li className="services__item-list-point">
            Страхование недвижимости
          </li>
        </ul>
        <a className="services__item-button button" href="/">Узнать подробнее</a>
      </article>
      <article className="services__item" style={{display: "none"}}>
        <h3 className="services__item-title">
          Лига Банк — это огромное <br/> количество онлайн-сервисов <br/> для вашего удобства
        </h3>
        <ul className="services__item-list">
          <li className="services__item-list-point">
            Мобильный банк, <br/>
            который всегда под рукой
          </li>
          <li className="services__item-list-point">
            Приложение Лига-проездной <br/> позволит вам оплачивать <br/> билеты по всему миру
          </li>
        </ul>
        <a className="services__item-button button" href="/">Узнать подробнее</a>
      </article>
      <ul className="services__bullets bullets">
        <li className="bullets__item bullets__item--active">
          <span></span>
        </li>
        <li className="bullets__item">
          <span></span>
        </li>
        <li className="bullets__item">
          <span></span>
        </li>
        <li className="bullets__item">
          <span></span>
        </li>
      </ul>
    </section>
  );
};

export default Services;