import React from 'react';
import {CreditType, mortgage, carLoan} from '../const';
import {getCreditAmount, getMortgageRate, getCarLoanRate, getMonthlyPayment, getRequiredIncome} from '../utils';

const Offer = (props) => {
  const {creditType, creditData, offerData} = props;
  const {price, downPayment, time} = creditData;

  const handleOfferButtonClick = () => {
    const total = document.querySelector('.calculator__form-total');
    total.style.display = 'flex';
  };

  const creditAmount = getCreditAmount(price, downPayment, offerData.checkbox);
  const interestRateMortgage = getMortgageRate(mortgage,  price, downPayment);
  const interestRateCarLoan = getCarLoanRate(carLoan, price, offerData.checkboxKASKO, offerData.checkboxLifeIns);
  const mortgageMonthlyPayment = getMonthlyPayment(creditAmount, interestRateMortgage, time);
  const carLoanMonthlyPayment = getMonthlyPayment(creditAmount, interestRateCarLoan, time);

  return (
    <div className="calculator__form-offer">
      <h4 className="calculator__form-title">Наше предложение</h4>
      <ul className="calculator__form-offer-list">
        <li className="calculator__form-offer-item">
          <span>{creditAmount} рублей</span>
          <span>{creditType === CreditType.MORTGAGE ? `Сумма ипотеки` : `Сумма автокредита`}</span>
        </li>
        <li className="calculator__form-offer-item">
          <span>{creditType === CreditType.MORTGAGE ? interestRateMortgage : interestRateCarLoan}%</span>
          <span>Процентная ставка</span>
        </li>
        <li className="calculator__form-offer-item">
          <span>{creditType === CreditType.MORTGAGE ? mortgageMonthlyPayment : carLoanMonthlyPayment} рублей</span>
          <span>Ежемесячный платеж</span>
        </li>
        <li className="calculator__form-offer-item">
          <span>{creditType === CreditType.MORTGAGE ? getRequiredIncome(mortgageMonthlyPayment) : 
          getRequiredIncome(carLoanMonthlyPayment)} рублей</span>
          <span>Необходимый доход</span>
        </li>
      </ul>
      <a className="calculator__form-button button" href="#total" onClick={handleOfferButtonClick}>Оформить заявку</a>
    </div>
  );
};

export default Offer;
