import React from 'react';
import './../App.css';
import sun from './sun.png';
const Item = () => {
  return (
    <div className="Item">
      <div className="content">
        <p className="text1">Сегодня</p>
        <h2 className="text2">2 июня</h2>
        <img src={sun} alt="sun img"/>
        <p className="text3">днем +26<sup>°</sup></p>
        <p className="text4">ночью +18<sup>°</sup></p>
        <p className="text5">ясно,<br/>без осадков</p>
      </div>
    </div>
  );
}

export default Item;
