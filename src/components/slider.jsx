import React from 'react';

const Slider = () => {
  return (
    <section className="slider">
      <h2 className="visually-hidden">Слайдер</h2>
      <ul className="slider__list">
        <li className="slider__item">
          <div className="slider__item-info" >
            <h1 className="slider__item-title">Лига Банк</h1>
            <p className="slider__item-slogan">Кредиты на любой случай</p>
            <a href="#calculator" className="slider__item-button button button--credit">Рассчитать кредит</a>
          </div>
        </li>
        <li className="slider__item" style={{display: "none"}}>
          <div className="slider__item-info">
            <h1 className="slider__item-title">Лига Банк</h1>
            <p className="slider__item-slogan">Ваша уверенность <br/> в завтрашнем дне</p>
          </div>
        </li>
        <li className="slider__item" style={{display: "none"}}>
          <div className="slider__item-info">
            <h1 className="slider__item-title">Лига Банк</h1>
            <p className="slider__item-slogan">Всегда рядом</p>
            <a href="#map" className="slider__item-button button">Найти отделение</a>
          </div>
        </li>
      </ul>
      <ul className="slider__bullets bullets">
        <li className="bullets__item bullets__item--active">
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

export default Slider;