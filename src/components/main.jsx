import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {useEffect} from "react";
import Slider from './slider';
import Services from './services';
import Calculator from './calculator';
import Map from './map';
import {cleanAllCreditInputs, closeSelect} from '../utils';

const Main = (props) => {
  const {creditType, 
    setOfferData, 
    setCreditType, 
    setPrice, 
    setTime, 
    setDownpayment} = props;


  useEffect(() => {
    if (creditType !== 'Выберите цель кредитования') {
      cleanAllCreditInputs();
      closeSelect();
    }
  })

  const handleCreditTypeClick = (evt) => {
    if (creditType !== 'Выберите цель кредитования') {
      cleanAllCreditInputs();
    }
    setCreditType(evt.target.dataset.id);
    setPrice(0);
    setTime(0);
    setDownpayment(0);
    setOfferData({});
    document.querySelector('.calculator__form-select').innerHTML = creditType;
  };

  return (
    <main className="page__main">
      <h1 className="visually-hidden">Лига Банк</h1>
      <Slider/>
      <Services/>
      <Calculator onCreditTypeButtonClick={handleCreditTypeClick}/>
      <Map/>
    </main>
  );
};

Main.propTypes = {
  creditType: PropTypes.string.isRequired,
  setCreditType: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setDownpayment: PropTypes.func.isRequired,
  setOfferData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    creditType: state.creditType
  };
};

const mapDispatchToProps = (dispatch) => ({
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