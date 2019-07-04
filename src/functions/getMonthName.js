import setDate from './setDate.js';

const getMonthName = () => {
  const date = setDate();
  let months = ['января', 'февраля', 'марта', 'апреля',
    'мая', 'июня', 'июля', 'августа',
    'сентября', 'октября', 'ноября', 'декабря'];
  return months[date.getMonth()];
}

export default getMonthName;