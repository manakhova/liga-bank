import React, {useState, useEffect} from 'react';
import {useSwipeable} from "react-swipeable";
import {getNewBullet} from '../utils';

const Slider = () => {
  const [currentSlide, setNewSlide] = useState(1);

  useEffect(() => {
    const slides = document.querySelectorAll('.slider__item');
    slides.forEach((element) => {
      if (Number(element.id) !== currentSlide) {
        element.style.display = `none`;
      } else {
        element.style.display = `block` ;
      }  
    });
  })

  const getNextSlide = () => {
    const lastSlideId = Number(document.querySelector('.slider__item:last-of-type').id);
    if (currentSlide === lastSlideId) {
      setNewSlide(1);
      getNewBullet(1);
    } else {
      setNewSlide(currentSlide + 1);
      getNewBullet(currentSlide + 1);
    } 
  };

  const getPrevSlide = () => {
    const firstSlideId = Number(document.querySelector('.slider__item:first-of-type').id);
    if (currentSlide === firstSlideId) {
      setNewSlide(3);
      getNewBullet(3);
    } else {
      setNewSlide(currentSlide - 1);
      getNewBullet(currentSlide - 1);
    } 
  };

  let timer = 0;
  const makeTimer = () => {
    clearTimeout(timer)
    timer = setTimeout(function(){
      getNextSlide();
    }, 4000);
  };
  makeTimer();


  const handlers = useSwipeable({
    onSwipedLeft: getNextSlide,
    onSwipedRight: getPrevSlide,
  });

  return (
    <section className="slider" {...handlers}>
      <h2 className="visually-hidden">Слайдер</h2>
      <ul className="slider__list">
        <li className="slider__item" id="1">
          <div className="slider__item-info" >
            <h1 className="slider__item-title">Лига Банк</h1>
            <p className="slider__item-slogan">Кредиты на любой случай</p>
            <a href="#calculator" className="slider__item-button button button--credit">Рассчитать кредит</a>
          </div>
        </li>
        <li className="slider__item" id="2">
          <div className="slider__item-info">
            <h1 className="slider__item-title">Лига Банк</h1>
            <p className="slider__item-slogan">Ваша уверенность <br/> в завтрашнем дне</p>
          </div>
        </li>
        <li className="slider__item" id="3">
          <div className="slider__item-info">
            <h1 className="slider__item-title">Лига Банк</h1>
            <p className="slider__item-slogan">Всегда рядом</p>
            <a href="#map" className="slider__item-button button">Найти отделение</a>
          </div>
        </li>
      </ul>
      <ul className="slider__bullets bullets">
        <li data-id="1" className="bullets__item">
          <span></span>
        </li>
        <li data-id="2" className="bullets__item">
          <span></span>
        </li>
        <li data-id="3" className="bullets__item">
          <span></span>
        </li>
      </ul>
    </section>
  );
};

export default Slider;