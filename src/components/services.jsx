import React, {useState, useEffect} from 'react';
import {useSwipeable} from "react-swipeable";

const Services = () => {
  const [currentService, setNewService] = useState('bank');

  useEffect(() => {
    const tabsContainer = document.querySelector(`.services__tabs`);
    const tabs = tabsContainer.querySelectorAll(`.services__tabs-item`);
    const services = document.querySelectorAll(`.services__item`);

    services.forEach((element) => {
      if (element.dataset.id !== currentService) {
        element.style.display = `none`;
      } else {
        element.style.display = `block` ;
      }  
    });
    
    tabs.forEach((element) => {
      if (element.id !== currentService) {
        element.classList.remove('services__tabs-item--active');
      } else {
        element.classList.add('services__tabs-item--active');
      }  
    });
  })

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

  const handleSectionButtonChange = (evt) => {
    setNewService(`${evt.target.id}`); 
  };

  return (
    <section className="services">
      <h2 className="visually-hidden">Услуги</h2>
      <div className="services__tabs">
        <button type="button" className="services__tabs-item" id="bank"
          onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>
          <svg width="34" height="33">
            <use xlinkHref="#vault"></use>
          </svg>
          Вклады
        </button>
        <button type="button" className="services__tabs-item" id="credit"
          onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>
          <svg width="34" height="30">
            <use xlinkHref="#cards"></use>
          </svg>
          Кредиты
        </button>
        <button type="button" className="services__tabs-item" id="insurance"
          onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>
          <svg width="28" height="34">
            <use xlinkHref="#security"></use>
          </svg>
          Страхование
        </button>
        <button type="button" className="services__tabs-item" id="online"
          onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>
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

export default Services;