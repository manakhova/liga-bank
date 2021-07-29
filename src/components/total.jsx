import React from 'react';
import {CreditType} from '../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';

const Total = (props) => {
  const {creditType, creditData, setUserData, setNumber, setCreditType} = props;
  const {price, downPayment, time, number} = creditData;

  const handleTotalButtonClick = (evt) => {
    evt.preventDefault();

    const name = document.querySelector('#name');
    const telephone = document.querySelector('#telephone');
    const email = document.querySelector('#email');

    const userData = {
      name: `${name.value}`,
      telephone: `${telephone.value}`,
      email: `${email.value}`
    }

    localStorage['userData'] = JSON.stringify(userData);
    setUserData(userData);
    setNumber(number + 1);
    setCreditType('Выберите цель кредитования');

    document.querySelector('.popup').style.display = 'block';
  };

  return (
    <div className="calculator__form-total" id="total"  style={{display: "none"}}>
      <h4 className="calculator__form-title">Шаг 3. Оформление заявки</h4>
      <ul className="calculator__form-total-list">
        <li className="calculator__form-total-item">
          <span>Номер заявки</span>
          <span>№ 00{number}</span>
        </li>
        <li className="calculator__form-total-item">
          <span>Цель кредита</span>
          <span>{creditType === CreditType.MORTGAGE ? `Ипотека` : `Автокредит`}</span>
        </li>
        <li className="calculator__form-total-item">
          <span>Стоимость {creditType === CreditType.MORTGAGE ? `недвижимости` : `автомобиля`}</span>
          <span>{price} рублей</span>
        </li>
        <li className="calculator__form-total-item">
          <span>Первоначальный взнос</span>
          <span>{downPayment} рублей</span>
        </li>
        <li className="calculator__form-total-item">
          <span>Срок кредитования</span>
          <span>{time} лет</span>
        </li>
      </ul>
      <div className="calculator__form-total-user">
        <input id="name" name="name" type="text" placeholder="ФИО"/>
        <input id="telephone" name="tel" type="tel" placeholder="Телефон"/>
        <input id="email" name="email" type="email" placeholder="E-mail"/>
      </div>
      <button className="calculator__form-button button" type="submit" onClick={handleTotalButtonClick}>Отправить</button>
    </div>
  );
};

Total.propTypes = {
  creditType: PropTypes.string.isRequired,
  creditData: PropTypes.shape({
    price: PropTypes.number ,
    downPayment: PropTypes.number,
    time: PropTypes.number,
  }),
  setUserData: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired
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
  setCreditData(creditData) {
    dispatch(ActionCreator.setCreditData(creditData));
  },
  setUserData(userData) {
    dispatch(ActionCreator.setUserData(userData));
  },
  setNumber(number) {
    dispatch(ActionCreator.setNumber(number));
  },
});

export {Total};
export default connect(mapStateToProps, mapDispatchToProps)(Total);