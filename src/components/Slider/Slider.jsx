import React from 'react';
import style from './Slider.module.css';
import left_arrow from './../../images/left_arrow.png';
import right_arrow from './../../images/right_arrow.png';
import left_arrow_active from './../../images/left_arrow_active.png';
import right_arrow_active from './../../images/right_arrow_active.png';
import Area from './Area/Area.jsx';
import convert from './../../functions/convert.js';
import toJSXobj from './../../functions/toJSXobj.js';

const Slider = () => {
  ////////////////////////////////////////////////
  let right;
  let left;
  let srcArray = convert(6);
  if (srcArray.length > 4) {
    right = right_arrow_active;
  } else {
    right = right_arrow;
  }
  //////// Нужно потом заменить ноль на нормальный параметр
  if (srcArray.length > 0) {
    left = left_arrow;
  } else {
    left = left_arrow_active;
  }
  ////////////////////////////////////////////////
  let newArray = [];
  for (let i = 0; i < srcArray.length; i++) {
    if (srcArray[i].isShown === true) {
      newArray.push(srcArray[i]);
    }
  }
  //////////////////////////////////////////////
  return (
    <div className={style.Slider}>
      <div className={style.arrows}><img src={left} alt="left arrow" /></div>
      <Area array={toJSXobj(newArray)} />
      <div className={style.arrows}><img src={right} alt="right arrow" /></div>
    </div>
  );
}

export default Slider;
