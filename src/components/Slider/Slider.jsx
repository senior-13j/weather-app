import React from 'react';
import style from './Slider.module.css';
import left_arrow from './../../images/left_arrow.png';
import right_arrow from './../../images/right_arrow.png';
import Area from './Area/Area.jsx';

const Slider = () => {
  return (
    <div className={style.Slider}>
      <div className={style.arrows}><img src={left_arrow} alt="left arrow" /></div>
      <Area />
      <div className={style.arrows}><img src={right_arrow} alt="right arrow" /></div>
    </div>
  );
}

export default Slider;
