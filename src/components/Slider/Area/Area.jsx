import React from 'react';
import style from './Area.module.css';


const Area = (props) => {
    return (
      <div className={style.Area} >
      {props.array}
      </div>);
    }

export default Area;