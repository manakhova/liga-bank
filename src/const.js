export const CreditType = {
  MORTGAGE: "Ипотечное кредитование",
  CAR_LOAN: "Автомобильное кредитование"
};

export const MIN_MORTGAGE = 500000;
export const MIN_CAR_LOAN = 200000;

export const mortgage = {
  minPrice:  1200000,
  maxPrice: 25000000,
  priсeStep: 100000,
  minDownPaymentPercent: 0.1,
  percentStep: 5,
  minCredit: `500 000`,
  minTime: 5,
  maxTime: 30,
  maternalCapital: 470000,
  minInterestRate: 0.085,
  maxInterestRate: 0.094,
  breakpointPercent: 0.15
};

export const carLoan = {
  minPrice:  500000,
  maxPrice: 5000000,
  priсeStep: 50000,
  minDownPaymentPercent: 0.2,
  percentStep: 5,
  minCredit: `200 000`,
  minTime: 1,
  maxTime: 5,
  minInterestRate: 0.15,
  maxInterestRate: 0.16,
  withOneInsuranceRate: 0.085,
  withBothInsuranceRate: 0.035,
  breakpointPrice: 2000000
};
