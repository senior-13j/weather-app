import React from 'react';
import style from './Title.module.css';
import getMonthDay from './../../functions/getMonthDay.js';
import getMonthName from './../../functions/getMonthName.js';
import getWeekDay from './../../functions/getWeekDay.js';

const Title = () => {
  return (
    <div className={style.Title}>
      <h1>Прогноз погоды</h1>
      <span>{`Самара, ${getMonthDay(0)} ${getMonthName()}, ${getWeekDay(0)}`}</span>
    </div>
  );
}

export default Title;
