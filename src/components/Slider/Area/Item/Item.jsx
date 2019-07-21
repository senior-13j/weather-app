import React from 'react';
import style from './Item.module.css';

const Item = (props) => {
  return (
    <div className={style.Item}>
      <span className={style.descr}>Прогноз на день: <br></br>
      <span>6:00 <span className={style.text}>{props.weather.currentDay.curDay6}<sup>°</sup></span><img src={props.weather.currentDay.img6} alt='img'></img></span>
      <span>10:00 <span className={style.text}>{props.weather.currentDay.curDay10}<sup>°</sup></span><img src={props.weather.currentDay.img10} alt='img'></img></span>
      <span>14:00 <span className={style.text}>{props.weather.currentDay.curDay14}<sup>°</sup></span><img src={props.weather.currentDay.img14} alt='img'></img></span>
      <span>18:00 <span className={style.text}>{props.weather.currentDay.curDay18}<sup>°</sup></span><img src={props.weather.currentDay.img18} alt='img'></img></span>
      <span>22:00 <span className={style.text}>{props.weather.currentDay.curDay22}<sup>°</sup></span><img src={props.weather.currentDay.img22} alt='img'></img></span> 
      </span>
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
