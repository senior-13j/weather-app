import React from 'react';
import './../App.css';
import left_arrow from './left_arrow.png';
import right_arrow from './right_arrow.png';
import Area from './Area';

const Slider = () => {
  return (
    <div className="Slider">
      <div className="arrows"><img src={left_arrow} alt="left arrow"/></div>
      <Area/>
     <div className="arrows"><img src={right_arrow} alt="right arrow"/></div> 
    </div>
  );
}

export default Slider;
