import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {CreditType} from '../const';
import {getTime} from '../utils';

const CreditSettings = (props) => {
  const {credit, creditType, creditData, setPrice, setTime, setDownpayment, offerData, setOfferData} = props;
  const {maxPrice, minPrice, priсeStep, minDownPaymentPercent, percentStep, minTime,  maxTime} = credit;

  const downpayment = document.querySelector('#contribution');
  const downpaymentRange = document.querySelector('#downpayment');
  const downpaymentRangeValue = document.querySelector('#downpayment + span');

  const setNewDownpayment = (price) => {
    downpayment.value = Math.round(price * minDownPaymentPercent);
    setDownpayment(Number(downpayment.value));
    downpayment.disabled = false;
    downpaymentRange.value = minDownPaymentPercent * 100;
    downpaymentRange.disabled = false;
    downpaymentRangeValue.innerHTML = `${minDownPaymentPercent * 100}%`;
  };

  const resetDownpayment = () => {
    const downpayment = document.querySelector('#contribution');
    const downpaymentRange = document.querySelector('#downpayment');

    setDownpayment(0);
    downpayment.value = null;
    downpayment.disabled = true;

    if (downpaymentRange) {
      downpaymentRange.value = null;
      downpaymentRange.disabled = true;
    };
  };

  const resetPrice = (label) => {
    label.classList.add('calculator--error');
    setPrice(0);
    resetDownpayment();  
  };

  const setNewPrice = (label, price) => {
    label.classList.remove('calculator--error');
    setPrice(Number(price.value));
    setNewDownpayment(price.value);
  };

  const getInputValue = (currentValue, label, price) => {
    price.value = currentValue;
    if (currentValue < minPrice || currentValue > maxPrice) {
      resetPrice(label);
    } else {
      setNewPrice(label, price);  
    }
  };

  const handleCalcButtonClick = (evt) => {
    const price = document.querySelector('.calculator__input');
    const label = document.querySelector('.calculator__form-container label');
    const currentValueMin = price.value - priсeStep;
    const currentValuePlus = Number(price.value) + priсeStep;

    if (evt.target.id === 'minus') {
      getInputValue(currentValueMin, label, price);
    } else {
      getInputValue(currentValuePlus, label, price);
    }
  }

  const handlePriceInput = (evt) => {
    const price = document.querySelector('.calculator__form-container label');

    if (Number(evt.target.value) < minPrice || Number(evt.target.value) > maxPrice ) {
      resetPrice(price);
    } else {
      setNewPrice(price, evt.target);
    }
  };

  const handleDownpaymentInput = (evt) => {
    const label = document.querySelector('.calculator__form-container label:nth-of-type(2)');
    const currentPercent = Math.round((evt.target.value / creditData.price) * 100);

    if (downpayment.value < (creditData.price * minDownPaymentPercent)) {
      setNewDownpayment(creditData.price);
    } else if (downpayment.value > creditData.price) {
      label.classList.add('calculator--error');
      setDownpayment(0);
      downpaymentRange.value = null;
    } else {
      setDownpayment(Number(evt.target.value));
      downpaymentRange.value = currentPercent;
      downpaymentRangeValue.innerHTML = currentPercent;
      label.classList.remove('calculator--error');
    }
  };

  const handleTimeInput = (evt) => {
    const time = document.querySelector('#time');
    const timeRange = document.querySelector('#time-range');
    const label = document.querySelector('.calculator__form-container label:nth-of-type(3)');

    if (time.value < minTime) {
      time.value = minTime;
      setTime(time.value);
    } else if (time.value > maxTime) {
      time.value = maxTime;
      setTime(time.value);
    } else{
      label.classList.remove('calculator--error');
      timeRange.value = evt.target.value;
      setTime(Number(evt.target.value));
    }
  };

  const handleTimeRange = (evt) => {
    const time = document.querySelector('#time');

    time.value = evt.target.value;
    setTime(Number(evt.target.value));
  };

  const handleDownPaymentRange = (evt) => {
    const currentDownpayment = Math.round((evt.target.value / 100) * creditData.price)

    downpayment.value = currentDownpayment;
    downpaymentRange.value = evt.target.value ;
    downpaymentRangeValue.innerHTML = `${evt.target.value}%`;
    setDownpayment(Number(currentDownpayment));
  };

  const handleCheckboxChange = (evt) => {
    if (evt.target.checked) {
      setOfferData({...offerData, checkbox: true});
    } else {
      setOfferData({...offerData, checkbox: false});
    }
  };

  const handleCheckboxKaskoChange = (evt) => {
    if (evt.target.checked) {
      setOfferData({...offerData, checkboxKASKO: true});
    } else {
      setOfferData({...offerData, checkboxKASKO: false});
    }
  };

  const handleCheckboxLifeInsChange = (evt) => {
    if (evt.target.checked) {
      setOfferData({...offerData, checkboxLifeIns: true});
    } else {
      setOfferData({...offerData, checkboxLifeIns: false});
    }
  };

  return (
    <div className="calculator__form-container">
      <div className="calculator__form-params">
        <h4 className="calculator__form-title">Шаг 2. Введите параметры кредита</h4>

        <label htmlFor="cost">
          {creditType === CreditType.MORTGAGE ? `Cтоимость недвижимости` : `Стоимость автомобиля`}
        </label>
        <div className="calculator__form-credit">
          <button className="calculator__button" id="minus" type="button" onClick={handleCalcButtonClick}></button>
          <input className="calculator__input" id="cost" type="number" onInput={handlePriceInput}
           min={minPrice} max={maxPrice} placeholder={`${minPrice} рублей`}/>
          <button className="calculator__button" id="plus" type="button" onClick={handleCalcButtonClick}></button>
        </div>
        <span>От {minPrice} до {maxPrice} рублей</span>

        <label htmlFor="contribution">Первоначальный взнос</label>
        <input className="calculator__input" id="contribution" type="number" onInput={handleDownpaymentInput}
        min={minPrice * minDownPaymentPercent} max={creditData.price} placeholder={`${minPrice * minDownPaymentPercent} рублей`} disabled/>
        <div className="calculator__range">
          <input id="downpayment" type="range" step={percentStep} defaultValue={minDownPaymentPercent * 100} 
          min={minDownPaymentPercent * 100} max="100" onChange={handleDownPaymentRange} disabled/>
          <span>{minDownPaymentPercent * 100}%</span>
        </div>

        <label htmlFor="time">Срок кредитования</label>
        <input className="calculator__input" id="time" type="number" onInput={handleTimeInput}
        min={minTime} max={maxTime} placeholder={getTime(minTime)}/>
        <div className="calculator__range">
          <input id="time-range" type="range" step="1" min={minTime} max={maxTime} defaultValue={minTime} onChange={handleTimeRange}/>
          <div>
            <span>{getTime(minTime)}</span>
            <span>{getTime(maxTime)}</span>
          </div>
        </div>  
        {creditType === CreditType.MORTGAGE ?
          <div className="calculator__checkbox">
            <input id="maternal-capital" type="checkbox" onChange={handleCheckboxChange}/>
            <label htmlFor="maternal-capital">Использовать материнский капитал</label>
         </div> :
          <div className="calculator__checkbox">
            <input id="kasko" type="checkbox" onChange={handleCheckboxKaskoChange}/>
            <label htmlFor="kasko">Оформить КАСКО в нашем банке</label>
            <br/>
            <input id="life-insurance" type="checkbox" onChange={handleCheckboxLifeInsChange}/>
            <label htmlFor="life-insurance">Оформить Страхование жизни в нашем банке</label>
         </div>
        } 
      </div>
    </div>
  );
};

CreditSettings.propTypes = {
  creditType: PropTypes.string.isRequired,
  creditData: PropTypes.object.isRequired,
  offerData: PropTypes.object.isRequired,
  setPrice: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setDownpayment: PropTypes.func.isRequired,
  setOfferData: PropTypes.func.isRequired,
  };
  
const mapStateToProps = (state) => {
  return {
    creditType: state.creditType,
    creditData: state.creditData,
    offerData: state.offerData
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  setCreditType(creditType) {
    dispatch(ActionCreator.setCreditType(creditType));
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
  
export {CreditSettings};
export default connect(mapStateToProps, mapDispatchToProps)(CreditSettings);