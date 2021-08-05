import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {CreditType, mortgage, carLoan, MIN_MORTGAGE, MIN_CAR_LOAN} from '../const';
import {closeSelect} from '../utils';

const CreditSettings = lazy(() => import('./credit-settings'));
const Warning = lazy(() => import('./warning'));
const Offer = lazy(() => import('./offer'));
const Total = lazy(() => import('./total'));

const Calculator = (props) => {
  const {creditType, creditData, offerData, onCreditTypeButtonClick} = props;

  const getCreditSettingTemplate = (creditType) => {
    switch (creditType) {
      case CreditType.MORTGAGE:
        return <Suspense fallback={<div>Loading...</div>}><CreditSettings credit={mortgage}/></Suspense>;
      case CreditType.CAR_LOAN:
        return <Suspense fallback={<div>Loading...</div>}><CreditSettings credit={carLoan}/></Suspense>;
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
            return <Suspense fallback={<div>Loading...</div>}><Warning credit={mortgage} creditType={creditType}/></Suspense>;
          } else {
            return <Suspense fallback={<div>Loading...</div>}><Offer creditType={creditType} creditData={creditData} offerData={offerData}/></Suspense>;
          };
        case CreditType.CAR_LOAN:
          if (creditAmount < MIN_CAR_LOAN) {
            return <Suspense fallback={<div>Loading...</div>}><Warning credit={carLoan} creditType={creditType}/></Suspense>;
          } else {
            return <Suspense fallback={<div>Loading...</div>}><Offer creditType={creditType} creditData={creditData} offerData={offerData}/></Suspense>;
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
      closeSelect();
    }
  };

  return (
    <section className="calculator" id="calculator">
      <h2 className="calculator__title title">Кредитный калькулятор</h2>
      <form className="calculator__form" action="" method="POST">
        <div className="calculator__form-main">
          <div className="calculator__form-main-steps">
            <div className="calculator__form-type">
              <h3 className="calculator__form-title">Шаг 1. Цель кредита</h3>
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
        <Suspense fallback={<div>Loading...</div>}><Total/></Suspense>
      </form>
    </section>
  );
};

Calculator.propTypes = {
  creditType: PropTypes.string.isRequired,
  offerData: PropTypes.object.isRequired,
  creditData: PropTypes.shape({
    price: PropTypes.number ,
    downPayment: PropTypes.number,
    time: PropTypes.number,
  })
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
  }
});

export {Calculator};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);