export const lastTenYears = () => {
  const currentDate = new Date().getFullYear();
  let i = currentDate;
  let lastTenYears = [];
  while (i >= (currentDate - 9)) {
    lastTenYears.push(i);
    i--;
  }
  return lastTenYears;
}

export const yearsDifference = (year) => {
  return new Date().getFullYear() - year;
}

export const priceMark = (mark) => {
  let increase = 1;
  switch (mark) {

  }
  switch (mark) {
    case ('europeo'):
      increase = 1.3;
      break;
    case ('americano'):
      increase = 1.15;
      break;
    case ('asiatico'):
      increase = 1.05;
      break;
    default:
      increase = 1;
      break;
  }
  return increase;
}

export const pricePlan = (plan) => {
  let increase = 1;
  switch (plan) {

  }
  switch (plan) {
    case ('basico'):
      increase = 1.2;
      break;
    case ('completo'):
      increase = 1.5;
      break;
    default:
      increase = 1;
      break;
  }
  return increase;
}

export const uppercaseFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}