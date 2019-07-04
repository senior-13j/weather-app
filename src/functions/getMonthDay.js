import setDate from './setDate';

const getMonthDay = (number) => {
  const date = setDate();
  return (date.getDate() + number);
}

export default getMonthDay;