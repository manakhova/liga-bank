import React from 'react';
import {CreditType} from '../const';

const Warning = (props) => {
  const {credit, creditType} = props;
  return (
    <div className="calculator__form-warning">
      <h4 className="calculator__form-title">
        Наш банк не выдаёт {creditType === CreditType.MORTGAGE ? `ипотечные` : `автомобильные`} <br/>
        кредиты <br/> меньше {credit.minCredit} рублей.
      </h4>
      <p className="calculator__form-text">
        Попробуйте использовать другие <br/> параметры для расчёта.
      </p>
    </div>
  );
};

export default Warning;
