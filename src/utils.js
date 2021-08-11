import {mortgage} from './const';

const cleanAllInputs = () => {
  document.querySelector('#login').value = null;
  document.querySelector('#password').value = null;
};

export const cleanAllCreditInputs = () => {
  const creditCalculator = document.querySelector('.calculator__form-container');

  creditCalculator.querySelectorAll('input').forEach((elem) => {
    elem.value = null;
  });
  creditCalculator.querySelectorAll('input[type=checkbox]').forEach((elem) => {
    elem.checked = false;
  });
};

export const cleanAllUserInputs = () => {
  const total = document.querySelector('.calculator__form-total')
  total.querySelectorAll('input').forEach((elem) => {
    elem.value = null;
  });
};

export const closeSelect = () => {
  const selectList = document.querySelector(`.calculator__form-type-options`);
  const select = document.querySelector(`.calculator__form-select`);

  selectList.style.display = `none`;
  select.classList.remove(`calculator__form-select--open`);
};

export const closeModal = () => {
  const modal = document.querySelector('.modal');  

  cleanAllInputs();
  modal.style.display = `none`;
  document.removeEventListener('keydown', closeKeydownModal);
  document.querySelector(`body`).style.overflow = `scroll`;
  document.querySelector('#password').setAttribute('type', 'password');
};

export const closeKeydownModal = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeModal();
  }
};

export const closeKeydownPopup = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closePopup();
  }
};

export const closePopup = () => {
  const popup = document.querySelector('.popup');
  const total = document.querySelector('#total');
  const selectList = document.querySelector(`.calculator__form-type-options`);
  const select = document.querySelector(`.calculator__form-select`);

  cleanAllUserInputs();

  popup.style.display = `none`;
  total.style.display = `none`;
  document.removeEventListener('keydown', closeKeydownPopup);
  selectList.style.display = `none`;
  select.classList.remove(`calculator__form-select--open`);
  document.querySelector(`body`).style.overflow = `scroll`;
};

export const togglePassword = () => {
  const password = document.querySelector('#password');
   if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }
};

export const openMenu = () => { 
  document.querySelector('.page-header__container').classList.add('page-header__container--open');
  document.querySelector('.page-header').classList.add('page-header--open');
  document.querySelector('.navigation--header').classList.add('navigation--open');
  document.querySelector('.authorization').classList.add('authorization--open');

  document.querySelector(`body`).style.overflow = `hidden`;
  document.querySelector(`.page-header`).style.overflow = `scroll`;
};

export const closeMenu = () => { 
  document.querySelector('.page-header__container').classList.remove('page-header__container--open');
  document.querySelector('.page-header').classList.remove('page-header--open');
  document.querySelector('.navigation--header').classList.remove('navigation--open');
  document.querySelector('.authorization').classList.remove('authorization--open');

  document.querySelector(`body`).style.overflow = `scroll`;
};

export const getCreditAmount = (price, downPayment, checkbox) => {
  if (checkbox) {
    return price - downPayment - mortgage.maternalCapital;
  } else {
    return price - downPayment;
  }
};

export const getMortgageRate = (credit, price, downPayment) => {
  const downPaymentPercent = downPayment / price;

  if (downPaymentPercent < credit.breakpointPercent) {
    return credit.maxInterestRate * 100;
  } else {
    return credit.minInterestRate * 100;
  }
};

export const getCarLoanRate = (credit, price, checkbox1, checkbox2) => {
  if (checkbox1 !== checkbox2) {
    return credit.withOneInsuranceRate * 100;
  } else if (checkbox1 && checkbox2) {
    return (credit.withBothInsuranceRate * 100).toFixed(1);
  } else {
    if (price < credit.breakpointPrice) {
      return credit.maxInterestRate * 100;
    } else {
      return credit.minInterestRate * 100;
    }
  } 
};

export const getMonthlyPayment = (creditAmount, interestRate, time) => {
  const monthCount = time * 12;
  const monthlyRate = Number(((interestRate / 100) / 12).toFixed(5));
  
  return Math.round((creditAmount * monthlyRate) / (1 - (1 / Math.pow(1 + monthlyRate, monthCount))));
};

export const getRequiredIncome = (monthlyPayment) => {
  return Math.round((monthlyPayment * 100) / 45); 
};

export const getTime = (time) => {
  if (time === 1 || time === 21) {
    return `${time} год`;
  } else if (time === 2 || time === 3 || time === 4 || time === 22 || time === 23 || time === 24) {
    return `${time} года`;
  } else {
    return `${time} лет`;
  }
};

export const getTimeText = (time) => {
  const text = document.querySelector('.calculator__input-text');
  if (time === 1 || time === 21) {
    return `год`;
  } else if (time === 2 || time === 3 || time === 4 || time === 22 || time === 23 || time === 24) {
    text.style.marginRight = '-5px';
    return `года`;
  } else {
    return `лет`;
  }
};

export const getNewBullet = (currentSlide) => {
  const bullets = document.querySelectorAll('.bullets__item');

  bullets.forEach((element) => {
    if (Number(element.dataset.id) === currentSlide) {
      element.classList.add('bullets__item--active');
    } else {
      element.classList.remove('bullets__item--active');
    }  
  });
};
  
