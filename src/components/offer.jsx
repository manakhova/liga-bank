import React from 'react';
import {getCreditAmount, getMortgageRate, getCarLoanRate} from '../utils';
import {CreditType, mortgage, carLoan} from '../const';

const Offer = (props) => {
  const {creditType, creditData} = props;
  const {price, downPayment, time} = creditData;

  const handleOfferButtonClick = () => {
    const total = document.querySelector('.calculator__form-total');
    total.style.display = 'flex';
  };

  return (
    <div className="calculator__form-offer">
      <h4 className="calculator__form-title">Наше предложение</h4>
      <ul className="calculator__form-offer-list">
        <li className="calculator__form-offer-item">
          <span>{getCreditAmount(price, downPayment)} рублей</span>
          <span>{creditType === CreditType.MORTGAGE ? `Сумма ипотеки` : `Сумма автокредита`}</span>
        </li>
        <li className="calculator__form-offer-item">
          <span>{creditType === CreditType.MORTGAGE ? getMortgageRate(mortgage, price, downPayment) :
          getCarLoanRate(carLoan, price)}%</span>
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
      <a className="calculator__form-button button" href="#total" onClick={handleOfferButtonClick}>Оформить заявку</a>
    </div>
  );
};

export default Offer;
