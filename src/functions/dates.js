
const setDate = () => {
    return new Date();
}

const getMonthDay = (number) => {
    const date = setDate();
    return (date.getDate() + number);
  }

  const getMonthName = () => {
    const date = setDate();
    let months = ['января', 'февраля', 'марта', 'апреля',
      'мая', 'июня', 'июля', 'августа',
      'сентября', 'октября', 'ноября', 'декабря'];
    return months[date.getMonth()];
  }

  
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
  
export {getMonthDay};
export {getMonthName};
export {getWeekDay};