import React from 'react';
import {CreditType} from '../const';

const Calculator = () => {
  return (
    <section className="calculator">
      <h2 className="calculator__title title">Кредитный калькулятор</h2>
      <form className="calculator__form" action="" method="POST">
        <div className="calculator__form-type">
          <h4 className="calculator__form-title">Шаг 1. Цель кредита</h4>
          <div>Выберите цель кредита</div>
        </div>
        <ul className="calculator__form-type-options" style={{display: "none"}}>
          {Object.values(CreditType).map((type, i) => (
            <li key={type + i}>
              {type}
            </li>
            ))}
        </ul>
        <div className="calculator__form-container">
          <div className="calculator__form-params">
            <h4 className="calculator__form-title">Шаг 2. Введите параметры кредита</h4>

            <label htmlFor="cost">Стоимость недвижимости</label>
            <div className="calculator__form-credit">
              <button className="calculator__button" type="button"></button>
              <input className="calculator__input" id="cost" type="number" min="1 200 000" max="25 000 000" placeholder="1 200 000 рублей"/>
              <button className="calculator__button" type="button"></button>
            </div>

            <label htmlFor="contribution">Первоначальный взнос</label>
            <input className="calculator__input" id="contribution" type="number" min="200 000" max="25 000 000" placeholder="200 000 рублей"/>
            <div className="calculator__range">
              <input type="range" min="10" max="100" value="10"/>
              <span>10%</span>
            </div>

            <label htmlFor="time">Срок кредитования</label>
            <input className="calculator__input" id="time" type="number" min="5" max="30" placeholder="5 лет"/>
            <div className="calculator__range">
              <input type="range" min="5" max="30" value="5"/>
              <div>
                <span>5 лет</span>
                <span>30 лет</span>
              </div>
            </div>
            
            
            <div className="calculator__checkbox">
              <input id="checkbox" type="checkbox"/>
              <label htmlFor="checkbox">Использовать материнский капитал</label>
            </div>
          </div>
          <div className="calculator__form-offer">
            <h4 className="calculator__form-title">Наше предложение</h4>
            <ul className="calculator__form-offer-list">
              <li className="calculator__form-offer-item">
                <span>1 330 000 рублей</span>
                <span>Сумма ипотеки</span>
              </li>
              <li className="calculator__form-offer-item">
                <span>9,40%</span>
                <span>Процентная ставка</span>
              </li>
              <li className="calculator__form-offer-item">
                <span>27 868 рублей</span>
                <span>Ежемесячный платеж</span>
              </li>
              <li className="calculator__form-offer-item">
                <span>61 929 рублей</span>
                <span>Необходимый доход</span>
              </li>
            </ul>
            <button className="calculator__form-button button" type="button">Оформить заявку</button>
          </div>
          <div className="calculator__form-warning" style={{display: "none"}}>
            <h4 className="calculator__form-title">
              Наш банк не выдаёт ипотечные
              кредиты <br/> меньше 200 000 рублей.
            </h4>
            <p className="calculator__form-text">
              Попробуйте использовать другие параметры для расчёта.
            </p>
          </div>
        </div>
        <div className="calculator__form-total">
          <h4 className="calculator__form-title">Шаг 3. Оформление заявки</h4>
          <ul className="calculator__form-total-list">
            <li className="calculator__form-total-item">
              <span>Номер заявки</span>
              <span>№ 0010</span>
            </li>
            <li className="calculator__form-total-item">
              <span>Цель кредита</span>
              <span>Ипотека</span>
            </li>
            <li className="calculator__form-total-item">
              <span>Стоимость недвижимости</span>
              <span>2 000 000 рублей</span>
            </li>
            <li className="calculator__form-total-item">
              <span>Первоначальный взнос</span>
              <span>200 000 рублей</span>
            </li>
            <li className="calculator__form-total-item">
              <span>Срок кредитования</span>
              <span>5 лет</span>
            </li>
          </ul>
          <div className="calculator__form-total-user">
            <input id="name" type="text" placeholder="ФИО"/>
            <input id="telephone" type="tel" placeholder="Телефон"/>
            <input id="email" type="email" placeholder="E-mail"/>
          </div>
          <button className="calculator__form-button button" type="submit">Отправить</button>
        </div>
      </form>
    </section>
  );
};

export default Calculator;