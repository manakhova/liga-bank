export const ActionType = {
    CHANGE_SERVICE: `changeService`,
    CHANGE_SLIDE: `changeSlide`,
    SET_LOGIN_DATA: `setLoginData`,
    SET_USER_DATA: `setUserData`,
    SET_OFFER_DATA: `setOfferData`,
    SET_CREDIT_TYPE: `setCreditType`,
    SET_PRICE: `setPrice`,
    SET_TIME: `setTime`,
    SET_DOWNPAYMENT: `setDownPayment`,
    SET_NUMBER: `setNumber`
  };
  
  
export const ActionCreator = {
  setNewService: (service) => ({
    type: ActionType.CHANGE_SERVICE,
    payload: service
  }),
  setNewSlide: (slide) => ({
    type: ActionType.CHANGE_SLIDE,
    payload: slide
  }),
  setLoginData: (data) => ({
    type: ActionType.SET_LOGIN_DATA,
    payload: data
  }),
  setUserData: (data) => ({
    type: ActionType.SET_USER_DATA,
    payload: data
  }),
  setOfferData: (data) => ({
    type: ActionType.SET_OFFER_DATA,
    payload: data
  }),
  setCreditType: (credit) => ({
    type: ActionType.SET_CREDIT_TYPE,
    payload: credit
  }),
  setPrice: (price) => ({
    type: ActionType.SET_PRICE,
    payload: price
  }),
  setTime: (time) => ({
    type: ActionType.SET_TIME,
    payload: time
  }),
  setDownpayment: (downPayment) => ({
    type: ActionType.SET_DOWNPAYMENT,
    payload: downPayment
  }),
  setNumber: (number) => ({
    type: ActionType.SET_NUMBER,
    payload: number
  }),
};