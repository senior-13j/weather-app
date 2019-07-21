import React from 'react';
import style from './Title.module.css';
import {getMonthDay} from './../../functions/dates.js';
import {getWeekDay} from './../../functions/dates.js';
const Title = () => {
  return (
    <div className={style.Title}>
      <h1>Прогноз погоды</h1>
      <span>{`Самара, ${getMonthDay(0)}, ${getWeekDay(0)}`}</span>
    </div>
  );
}

export default Title;
