import setDate from './setDate';

const getWeekDay = (number) => {
  let date = setDate();
  let days = ['Воскресенье', 'Понедельник',
    'Вторник', 'Среда', 'Четверг',
    'Пятница', 'Суббота'];
  if (date.getDay() + number === days.length) {
    return days[0];
  }
  if (date.getDay() + number > days.length) {
    let differ = (date.getDay() + number) - days.length;
    return days[differ];
  }
  return days[date.getDay() + number];
}

export default getWeekDay;