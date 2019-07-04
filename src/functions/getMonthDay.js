import setDate from './setDate.js';

const getMonthDay = (number) => {
  const date = setDate();
  return (date.getDate() + number);
}

export default getMonthDay;