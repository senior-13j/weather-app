import React from 'react';
import style from './Area.module.css';
import Item from './Item/Item.jsx';
import sun from './Item/sun.png';
import rain from './Item/rain.png';
import c from './Item/cloud.png';

const Area = () => {
  const DATE = new Date(2020,3,7);
//functions

const randomInteger = (min, max) => {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

const getMonthDay = (number) => {
  const date = DATE;
  return date.getDate() + number;
}

const getMonthName = () => {
  const date = DATE;
  let months = ['января', 'февраля', 'марта', 'апреля',
      'мая', 'июня', 'июля', 'августа',
      'сентября', 'октября', 'ноября', 'декабря'];
  return months[date.getMonth()];
}

const getWeekDay = (number) => {
  let date = DATE;
  let days = ['Воскресенье', 'Понедельник',
    'Вторник', 'Среда', 'Четверг',
    'Пятница', 'Суббота'];
    if (date.getDay() + number == days.length) {
      return days[0];
    }
    if (date.getDay() + number > days.length) {
      let differ = (date.getDay() + number) - days.length;
      return days[differ];
  }
  return days[date.getDay()+ number];
}

let createWeatherItem = (count) => {
  let month = getMonthName();
  let data = `${getMonthDay(count)} ${month}`;
  let array = ['Ясно, без осадков', 'Облачно, дождь', 'Облачно, без осадков'];
  let num = randomInteger(0,2);
  let dTemp = randomInteger(12,36);
  let nTemp = randomInteger(-10,8);
  // if (month > ){

  // }
  let cloud = array[num];
  let first;
  let icon;
  if (count == 0){
    first = 'Сегодня';
  } else {
    first = getWeekDay(count);
  }
  if (num == 0) {
    icon = sun;
  } else if(num == 1){
    icon = rain;
  }  else if (num == 2){
    icon = c;
  }
  return {
    status : first,
    date : data,
    iconObj : icon,
    cloudiness : cloud,
    dayTemp : dTemp,
    nightTemp :nTemp
  };
}

  return (
    <div className={style.Area}>
      <Item weather = {createWeatherItem(0)}/>
      <Item weather = {createWeatherItem(1)}/>
      <Item weather = {createWeatherItem(2)}/>
      <Item weather = {createWeatherItem(3)}/>
    </div>
  );
}

export default Area;
