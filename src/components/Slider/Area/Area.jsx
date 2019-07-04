import React from 'react';
import style from './Area.module.css';
import Item from './Item/Item.jsx';
import createWeatherItem from './../../../functions/createWeatherItem.js';
const Area = () => {
  return (
    <div className={style.Area}>
      <Item weather={createWeatherItem(0)} />
      <Item weather={createWeatherItem(1)} />
      <Item weather={createWeatherItem(2)} />
      <Item weather={createWeatherItem(3)} />
    </div>
  );
}

export default Area;
