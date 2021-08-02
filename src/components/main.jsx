import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {useEffect} from "react";
import Slider from './slider';
import Services from './services';
import Calculator from './calculator';
import Map from './map';
import {cleanAllCreditInputs, closeSelect, getNewBullet} from '../utils';

const Main = (props) => {
  const {currentService, 
    currentSlide,
    setNewSlide,
    creditType, 
    setOfferData,
    setNewService, 
    setCreditType, 
    setPrice, 
    setTime, 
    setDownpayment} = props;


  useEffect(() => {
    const tabsContainer = document.querySelector(`.services__tabs`);
    const tabs = tabsContainer.querySelectorAll(`.services__tabs-item`);
    const services = document.querySelectorAll(`.services__item`);
    const slides = document.querySelectorAll('.slider__item');

    services.forEach((element) => {
      if (element.dataset.id !== currentService) {
        element.style.display = `none`;
      } else {
        element.style.display = `block` ;
      }  
    });
    
    slides.forEach((element) => {
      if (Number(element.id) !== currentSlide) {
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

    if (creditType !== 'Выберите цель кредитования') {
      cleanAllCreditInputs();
      closeSelect();
    }
    getNewBullet(currentSlide);
  })

  const handleSectionButtonChange = (evt) => {
    setNewService(`${evt.target.id}`); 
  };

  const handleCreditTypeClick = (evt) => {
    setCreditType(evt.target.dataset.id);
    setPrice(0);
    setTime(0);
    setDownpayment(0);
    setOfferData({});
    if (creditType !== 'Выберите цель кредитования') {
      cleanAllCreditInputs();
    }

    document.querySelector('.calculator__form-select').innerHTML = creditType;
  };

  return (
    <main className="page__main">
      <h1 className="visually-hidden">Лига Банк</h1>
      <Slider setNewSlide={setNewSlide} currentSlide={currentSlide}/>
      <Services onServiceButtonChange={handleSectionButtonChange} currentService={currentService} setNewService={setNewService} />
      <Calculator onCreditTypeButtonClick={handleCreditTypeClick} setCreditType={setCreditType}/>
      <Map/>
    </main>
  );
};

Main.propTypes = {
  currentService: PropTypes.string.isRequired,
  currentSlide: PropTypes.number.isRequired,
  creditType: PropTypes.string.isRequired,
  setNewService: PropTypes.func.isRequired,
  setCreditType: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setDownpayment: PropTypes.func.isRequired,
  setOfferData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    currentService: state.currentService,
    currentSlide: state.currentSlide,
    creditType: state.creditType
  };
};

const mapDispatchToProps = (dispatch) => ({
  setNewService(currentService) {
    dispatch(ActionCreator.setNewService(currentService));
  },
  setNewSlide(slide) {
    dispatch(ActionCreator.setNewSlide(slide));
  },
  setCreditType(type) {
    dispatch(ActionCreator.setCreditType(type));
  },
  setPrice(price) {
    dispatch(ActionCreator.setPrice(price));
  },
  setTime(time) {
    dispatch(ActionCreator.setTime(time));
  },
  setDownpayment(downpayment) {
    dispatch(ActionCreator.setDownpayment(downpayment));
  },
  setOfferData(data) {
    dispatch(ActionCreator.setOfferData(data));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);