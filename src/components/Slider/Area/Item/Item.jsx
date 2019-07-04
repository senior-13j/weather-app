import React from 'react';
import style from './Item.module.css';

const Item = (props) => {
  return (
    <div className={style.Item}>
      <div className={style.content}>
        <p className={style.text1}>{(props.weather.status)[0].toUpperCase() + (props.weather.status).slice(1)}</p>
        <h2 className={style.text2}>{props.weather.date}</h2>
        <img src={props.weather.iconObj} alt='img' />
        <p className={style.text3}>днем {props.weather.dayTemp}<sup>°</sup></p>
        <p className={style.text4}>ночью {props.weather.nightTemp}<sup>°</sup></p>
        <p className={style.text5}>{props.weather.cloudiness}</p>
      </div>
    </div>
  );
}

export default Item;
