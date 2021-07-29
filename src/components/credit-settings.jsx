import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {CreditType} from '../const';

const CreditSettings = (props) => {
  const {credit, creditType, creditData, setPrice, setTime, setDownpayment} = props;
  const {maxPrice, minPrice, priсeStep, minDownPaymentPercent, percentStep, minTime,  maxTime} = credit;

  const handleCalcButtonClick = (evt) => {
    const price = document.querySelector('.calculator__input');
    const label = document.querySelector('.calculator__form-container label');
    const currentValueMin = price.value - priсeStep;
    const currentValuePlus = Number(price.value) + priсeStep;
    const downpayment = document.querySelector('#contribution');

    // вынести в utils
    if (evt.target.id === 'minus') {
      if (currentValueMin < minPrice || currentValueMin > maxPrice) {
        price.value = currentValueMin;
        label.classList.add('calculator--error');
        setPrice(0);
        setDownpayment(0);
        downpayment.value = null;
        downpayment.disabled = true;
      } else {
        label.classList.remove('calculator--error');
        price.value = currentValueMin;
        setPrice(Number(price.value));
        downpayment.value = price.value * minDownPaymentPercent;
        setDownpayment(Number(downpayment.value));
        downpayment.disabled = false;
      }
    } else {
      if (currentValuePlus > maxPrice || currentValuePlus < minPrice) {
        label.classList.add('calculator--error');
        price.value = currentValuePlus;
        setPrice(0);
        setDownpayment(0);
        downpayment.value = null;
        downpayment.disabled = true;
      } else {
        label.classList.remove('calculator--error');
        price.value = currentValuePlus;
        setPrice(Number(price.value));
        downpayment.value = price.value * minDownPaymentPercent;
        setDownpayment(Number(downpayment.value));
        downpayment.disabled = false;
      }
    }
  }

  const handlePriceInput = (evt) => {
    const price = document.querySelector('.calculator__form-container label');
    const downpayment = document.querySelector('#contribution');

    if (Number(evt.target.value) < minPrice || Number(evt.target.value) > maxPrice ) {
      price.classList.add('calculator--error');
      setPrice(0);
      setDownpayment(0);
      downpayment.value = null;
      downpayment.disabled = true;
    } else {
      price.classList.remove('calculator--error');
      setPrice(Number(evt.target.value));
      downpayment.value = Number(evt.target.value * minDownPaymentPercent);
      setDownpayment(Number(downpayment.value));
      downpayment.disabled = false;
    }
  };

  const handleDownpaymentInput = (evt) => {
    const downpayment = document.querySelector('#contribution');
    const label = document.querySelector('.calculator__form-container label:nth-of-type(2)');

    if (downpayment.value < (creditData.price * minDownPaymentPercent)) {
      downpayment.value = creditData.price * minDownPaymentPercent;
      setDownpayment(Number(downpayment.value));
    } else if (downpayment.value > creditData.price) {
      label.classList.add('calculator--error');
      setDownpayment(0);
    } else {
      setDownpayment(Number(evt.target.value));
      label.classList.remove('calculator--error');
    }
  };

  const handleTimeInput = (evt) => {
    const time = document.querySelector('#time');
    const label = document.querySelector('.calculator__form-container label:nth-of-type(3)');

    if (time.value < minTime || time.value > maxTime) {
      label.classList.add('calculator--error');
      setTime(0);
    } else {
      label.classList.remove('calculator--error');
      setTime(Number(evt.target.value));
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
          <input id="downpayment" type="range" step={percentStep} defaultValue={minDownPaymentPercent * 100} min={minDownPaymentPercent * 100} max="100"/>
          <span>{minDownPaymentPercent * 100}%</span>
        </div>

        <label htmlFor="time">Срок кредитования</label>
        <input className="calculator__input" id="time" type="number" onInput={handleTimeInput}
        min={minTime} max={maxTime} placeholder={`${minTime} лет`}/>
        <div className="calculator__range">
          <input type="range" step="1" min={minTime} max={maxTime} defaultValue={minTime}/>
          <div>
            <span>{minTime} лет</span>
            <span>{maxTime} лет</span>
          </div>
        </div>  
        {creditType === CreditType.MORTGAGE ?
          <div className="calculator__checkbox">
            <input id="maternal-capital" type="checkbox"/>
            <label htmlFor="maternal-capital">Использовать материнский капитал</label>
         </div> :
          <div className="calculator__checkbox">
            <input id="kasko" type="checkbox"/>
            <label htmlFor="kasko">Оформить КАСКО в нашем банке</label>
            <br/>
            <input id="life-insurance" type="checkbox"/>
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
  setPrice: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setDownpayment: PropTypes.func.isRequired,
  };
  
const mapStateToProps = (state) => {
  return {
    creditType: state.creditType,
    creditData: state.creditData
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
});
  
export {CreditSettings};
export default connect(mapStateToProps, mapDispatchToProps)(CreditSettings);