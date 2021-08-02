import React from 'react';
import PropTypes from 'prop-types';
import {useSwipeable} from "react-swipeable";

const Services = (props) => {
  const {onServiceButtonChange, currentService, setNewService} = props;

  const getNextService = () => {
    const servicesId = Array.from(document.querySelectorAll('.services__item')).map(elem => elem.dataset.id);

    if (currentService === servicesId[servicesId.length - 1]) {
      return;
    } else {
      setNewService(servicesId[servicesId.indexOf(currentService) + 1]);
    } 
  };

  const getPrevService = () => {
    const servicesId = Array.from(document.querySelectorAll('.services__item')).map(elem => elem.dataset.id);

    if (currentService === servicesId[0]) {
      return;
    } else {
      setNewService(servicesId[servicesId.indexOf(currentService) - 1]);
    } 
  };

  const handlers = useSwipeable({
    onSwipedLeft: getNextService,
    onSwipedRight: getPrevService
  });

  return (
    <section className="services">
      <h2 className="visually-hidden">Услуги</h2>
      <div className="services__tabs">
        <button type="button" className="services__tabs-item" id="bank"
          onClick={onServiceButtonChange} onFocus={onServiceButtonChange}>
          <svg width="34" height="33">
            <use xlinkHref="#vault"></use>
          </svg>
          Вклады
        </button>
        <button type="button" className="services__tabs-item" id="credit"
          onClick={onServiceButtonChange} onFocus={onServiceButtonChange}>
          <svg width="34" height="30">
            <use xlinkHref="#cards"></use>
          </svg>
          Кредиты
        </button>
        <button type="button" className="services__tabs-item" id="insurance"
          onClick={onServiceButtonChange} onFocus={onServiceButtonChange}>
          <svg width="28" height="34">
            <use xlinkHref="#security"></use>
          </svg>
          Страхование
        </button>
        <button type="button" className="services__tabs-item" id="online"
          onClick={onServiceButtonChange} onFocus={onServiceButtonChange}>
          <svg width="20" height="34">
            <use xlinkHref="#phone-blue"></use>
          </svg>
          Онлайн-сервисы
        </button>
      </div>
      <div className="services__container">
        <div className="services__slider" {...handlers}>
          <article className="services__item" data-id="bank">
            <h3 className="services__item-title">
              Вклады Лига Банка – это выгодная <br/> инвестиция в свое будущее
            </h3>
            <ul className="services__item-list">
              <li className="services__item-list-point">
                Проценты по вкладам до 7%
              </li>
              <li className="services__item-list-point">
                Разнообразные условия
              </li>
              <li className="services__item-list-point">
                Возможность ежемесячной <br/> капитализации <br/> или вывод <br/> процентов на банковскую карту
              </li>
            </ul>
            <a className="services__item-button button" href="/">Узнать подробнее</a>
          </article>
          <article className="services__item" data-id="credit">
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
              и ставку по кредиту воспользовавшись <br/> нашим <a href="/">кредитным калькулятором</a>
            </p>
          </article>
          <article className="services__item" data-id="insurance">
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
          <article className="services__item" data-id="online">
            <h3 className="services__item-title">
              Лига Банк — это огромное <br/> количество <br/> онлайн-сервисов <br/> для вашего удобства
            </h3>
            <ul className="services__item-list">
              <li className="services__item-list-point">
                Мобильный банк, <br/>
                который всегда под рукой
              </li>
              <li className="services__item-list-point">
                Приложение Лига-проездной <br/> позволит <br/> вам оплачивать <br/> билеты по всему миру
              </li>
            </ul>
            <a className="services__item-button button" href="/">Узнать подробнее</a>
          </article>
        </div>
      </div>
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

Services.propTypes = {
  onServiceButtonChange: PropTypes.func.isRequired,
};

export default Services;