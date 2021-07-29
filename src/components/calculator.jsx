import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import CreditSettings from './credit-settings';
import Warning from './warning';
import Offer from './offer';
import Total from './total';
import {CreditType, mortgage, carLoan, MIN_MORTGAGE, MIN_CAR_LOAN} from '../const';

const Calculator = (props) => {
  const {creditType, creditData, onCreditTypeButtonClick} = props;

  const getCreditSettingTemplate = (creditType) => {
    switch (creditType) {
      case CreditType.MORTGAGE:
        return <CreditSettings credit={mortgage}/>;
      case CreditType.CAR_LOAN:
        return <CreditSettings credit={carLoan}/>;
      default:
        return null;
    }  
  };

  const getCreditOfferTemplate = (creditData) => {
    const {price, downPayment, time} = creditData;
    const creditAmount = price - downPayment;
 
    if ((price && downPayment && time) !== 0) {
      switch (creditType) {
        case CreditType.MORTGAGE:
          if (creditAmount < MIN_MORTGAGE) {
            return <Warning credit={mortgage} creditType={creditType}/>;
          } else {
            return <Offer creditType={creditType} creditData={creditData}/>;
          };
        case CreditType.CAR_LOAN:
          if (creditAmount < MIN_CAR_LOAN) {
            return <Warning credit={carLoan} creditType={creditType}/>;
          } else {
            return <Offer creditType={creditType} creditData={creditData}/>;
          };
        default:
          return null;
      }  
    }
  }

  const handleCreditSelectClick = () => {
    const selectList = document.querySelector(`.calculator__form-type-options`);
    const select = document.querySelector(`.calculator__form-select`);

    if (selectList.style.display === `none`) {
      selectList.style.display = `block`;
      select.classList.add(`calculator__form-select--open`);
    } else {
      selectList.style.display = `none`;
      select.classList.remove(`calculator__form-select--open`);
    }
  };

  return (
    <section className="calculator" id="calculator">
      <h2 className="calculator__title title">Кредитный калькулятор</h2>
      <form className="calculator__form" action="" method="POST">
        <div className="calculator__form-main">
          <div className="calculator__form-main-steps">
            <div className="calculator__form-type">
              <h4 className="calculator__form-title">Шаг 1. Цель кредита</h4>
              <div className="calculator__form-select" onClick={handleCreditSelectClick}>{creditType}</div>
            </div>
            <ul className="calculator__form-type-options" style={{display: "none"}}>
              {Object.values(CreditType).map((type, i) => (
                <li key={type + i} data-id={type} onClick={onCreditTypeButtonClick}>
                  {type}
                </li>
                ))}
            </ul>
             {getCreditSettingTemplate(creditType)}
          </div>
          {getCreditOfferTemplate(creditData)}
        </div>
        <Total/>
      </form>
    </section>
  );
};

Calculator.propTypes = {
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

export {Calculator};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);