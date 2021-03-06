import {ActionType} from './action';

const initialState = {
  currentService: `bank`,
  loginData: {},
  creditType: 'Выберите цель кредитования',
  creditData: {
    price: 0,
    downPayment: 0,
    time: 0,
    number: 1
  },
  offerData: {
    checkbox: false
  },
  userData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SERVICE:
      return {
        ...state,
        currentService: action.payload
    };
    case ActionType.CHANGE_SLIDE:
      return {
        ...state,
        currentSlide: action.payload
    };
    case ActionType.SET_LOGIN_DATA:
      return {
        ...state,
        loginData: action.payload
    };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
    };
    case ActionType.SET_OFFER_DATA:
      return {
        ...state,
        offerData: action.payload
    };
    case ActionType.SET_CREDIT_TYPE:
      return {
        ...state,
        creditType: action.payload
    };
    case ActionType.SET_PRICE:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          price: action.payload
        }
    };
    case ActionType.SET_DOWNPAYMENT:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          downPayment: Math.round(action.payload)
        }
    };
    case ActionType.SET_TIME:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          time: action.payload
        }
    };
    case ActionType.SET_NUMBER:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          number: action.payload
        }
    };
    default:
      return state;
  }
};


export {reducer};