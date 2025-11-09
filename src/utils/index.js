import Payment from 'payment';

const clearNumber = (value = '') => {
  return value.replace(/\D+/g, '');
};
export const validateName = (value = '') => {
  return value.replace(/[^a-zA-Z ]/g, ''); // Allows letters and spaces only
};
export const formatCreditCardNumber = value => {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10,
      )} ${clearValue.slice(10, 15)}`;
      break;
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10,
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8,
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
};

export const formatCVC = (value, allValues = {}) => {
  const clearValue = clearNumber(value);
  let maxLength = 3;

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
    if (issuer === 'amex') {
      maxLength = 4;
    }
  }

  return clearValue.slice(0, maxLength);
};

export const formatExpirationDate = (value, preValue) => {
  // const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  // if (value.match(regex) || value.length >= 3) {
  //   const [month, year] = value.split('/');
  //   const inputDate = new Date(`20${year}`, month - 1);

  //   const currentDate = new Date();
  //   currentDate.setDate(1);
  //   if (inputDate < currentDate) {
  //     return `${value.slice(0, 2)}/${value.slice(2, 4)}`;
  //   }
  // }
  // return value;

  let clearValue = value;

  clearValue = clearNumber(clearValue);

  if (clearValue?.length <= 2 && Number(clearValue) > 12) {
    return preValue;
  } else if (clearValue?.length === 3) {
    let clearValue1 =
      clearValue.slice(0, 2) > 12 ? '01' : clearValue.slice(0, 2);
    clearValue = `${clearValue1}/${clearValue.slice(2, 4)}`;
  } else if (value.length >= 4) {
    clearValue = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    let [month, year] = clearValue.split('/');
    if (month > 12) {
      return preValue;
    }
    const currentDate = new Date();
    currentDate.setDate(1);
    const expiryDate = new Date(`20${year}`, month - 1);
    if (expiryDate > currentDate) {
      return clearValue;
    } else {
      return preValue;
    }
  }

  return clearValue;
};
