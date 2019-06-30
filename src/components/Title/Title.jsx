import React from 'react';
import style from './Title.module.css';

const Title = () => {
  const DATE = new Date(2020,3,7);
  const getMonthDay = () => {
    const date = DATE;
    return date.getDate();
}

  const getMonthName = () => {
  const date = DATE;
  let months = ['января', 'февраля', 'марта', 'апреля',
      'мая', 'июня', 'июля', 'августа',
      'сентября', 'октября', 'ноября', 'декабря'];
  return months[date.getMonth()];
}

const getWeekDay = () => {
  const date = DATE;
  let days = ['воскресенье', 'понедельник',
    'вторник', 'среда', 'четверг',
    'пятница', 'суббота'];
  return days[date.getDay()];
}

  return (
    <div className={style.Title}>
      <h1>Прогноз погоды</h1>
      <span>{`Самара, ${getMonthDay()} ${getMonthName()}, ${getWeekDay()}`}</span>
    </div>
  );
}

export default Title;
