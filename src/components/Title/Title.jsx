import React from 'react';
import style from './Title.module.css';

const Title = () => {
  return (
    <div className={style.Title}>
      <h1>Прогноз погоды</h1>
      <span>Самара, 2 июня, среда</span>
    </div>
  );
}

export default Title;
