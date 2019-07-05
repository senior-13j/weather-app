import setDate from './setDate.js';

const getWeekDay = (number) => {
  let date = setDate();
  let days = ['воскресенье', 'понедельник',
    'вторник', 'среда', 'четверг',
    'пятница', 'суббота'];
  if (date.getDay() + number === days.length) {
    return days[0];
  }
  if (date.getDay() + number > days.length) {
    let differ = ((date.getDay() + number) - days.length) % 7;
    return days[differ];
  }
  return days[date.getDay() + number];
}

export default getWeekDay;