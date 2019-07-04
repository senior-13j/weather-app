import sun from './../images/sun.png';
import rain from './../images/rain.png';
import cloud from './../images/cloud.png';
import getMonthDay from './getMonthDay.js';
import getMonthName from './getMonthName.js';
import getWeekDay from './getWeekDay.js';
import randomInteger from './randomInteger.js'

let createWeatherItem = (count) => {
  let data = `${getMonthDay(count)} ${getMonthName()}`;
  let array = ['Ясно, без осадков', 'Облачно, дождь', 'Облачно, без осадков'];
  let num = randomInteger(0, 2);
  let dTemp = randomInteger(12, 36);
  let nTemp = randomInteger(-10, 8);
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
  return {
    status: localstatus,
    date: data,
    iconObj: icon,
    cloudiness: chosen,
    dayTemp: dTemp,
    nightTemp: nTemp
  };
}
export default createWeatherItem;