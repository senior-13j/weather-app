import sun from './../images/sun.png';
import rain from './../images/rain.png';
import cloud from './../images/cloud.png';
import randomInteger from './randomInteger.js'
import {getMonthDay} from './dates.js';
import {getWeekDay} from './dates.js';

var counter = -1;
let createWeatherItem = (count) => {
  var hide = true;
  let data = `${getMonthDay(count)}`;
  let array = ['Ясно, без осадков', 'Облачно, дождь', 'Облачно, без осадков'];
  let num = randomInteger(0, 2);
  let dTemp = randomInteger(12, 28);
  let nTemp = randomInteger(1, 8);
  let chosen = array[num];
  let localstatus;
  let icon;
  if (count === 0) {
    localstatus = 'Сегодня';
  } else {
    localstatus = getWeekDay(count);
  }
  if (num === 0) {
    icon = sun;
  } else if (num === 1) {
    icon = rain;
  } else if (num === 2) {
    icon = cloud;
  }
  counter++;
  if (counter > 3) {
    hide = false;
  }
  return {
    isShown: hide,
    status: localstatus,
    date: data,
    iconObj: icon,
    cloudiness: chosen,
    dayTemp: dTemp,
    nightTemp: nTemp
  };
}
export default createWeatherItem;