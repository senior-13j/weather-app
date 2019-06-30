import React from 'react';
import style from './Item.module.css';
import sun from './sun.png';

const Item = () => {
  return (
    <div className={style.Item}>
      <div className={style.content}>
        <p className={style.text1}>Сегодня</p>
        <h2 className={style.text2}>2 июня</h2>
        <img src={sun} alt="sun img"/>
        <p className={style.text3}>днем +26<sup>°</sup></p>
        <p className={style.text4}>ночью +18<sup>°</sup></p>
        <p className={style.text5}>ясно,<br/>без осадков</p>
      </div>
    </div>
  );
}

export default Item;
