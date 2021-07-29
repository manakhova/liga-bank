const cleanAllInputs = () => {
  document.querySelector('#login').value = null;
  document.querySelector('#password').value = null;
};

export const cleanAllCreditInputs = () => {
  const creditCalculator = document.querySelector('.calculator__form-container')
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

export const closeModal = () => {
  const modal = document.querySelector('.modal');  

  cleanAllInputs();
  modal.style.display = `none`;
  document.removeEventListener('keydown', closeKeydownModal);
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

  cleanAllUserInputs();

  popup.style.display = `none`;
  total.style.display = `none`;
  document.removeEventListener('keydown', closeKeydownPopup);
}

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
  document.querySelector('.navigation--header').classList.add('navigation--open');
  document.querySelector('.authorization').classList.add('authorization--open');
};

export const closeMenu = () => { 
  document.querySelector('.page-header__container').classList.remove('page-header__container--open');
  document.querySelector('.navigation--header').classList.remove('navigation--open');
  document.querySelector('.authorization').classList.remove('authorization--open');
};

export const getCreditAmount = (price, downPayment) => {
  //const checkbox = document.querySelector('#maternal-capital');
  
  return price - downPayment;
};

export const getMortgageRate = (credit, price, downPayment) => {
  const downPaymentPercent = downPayment / price;

  if (downPaymentPercent < credit.breakpointPercent) {
    return credit.maxInterestRate * 100;
  } else {
    return credit.minInterestRate * 100;
  }
};

export const getCarLoanRate = (credit, price) => {
  
  if (price < credit.breakpointPrice) {
    return credit.maxInterestRate * 100;
  } else {
    return credit.minInterestRate * 100;
  }
}

export const getMonthlyPayment = (creditAmount, interestRate, time) => {
  return 
};
  
