import React from 'react';
import style from './Area.module.css';
import Item from './Item/Item.jsx';

const Area = () => {
  return (
    <div className={style.Area}>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  );
}

export default Area;
