import sun from './../components/Slider/Area/Item/sun.png';
import rain from './../components/Slider/Area/Item/rain.png';
import c from './../components/Slider/Area/Item/cloud.png';
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
  let cloud = array[num];
  let first;
  let icon;
  if (count === 0) {
    first = 'Сегодня';
  } else {
    first = getWeekDay(count);
  }
  if (num === 0) {
    icon = sun;
  } else if (num === 1) {
    icon = rain;
  } else if (num === 2) {
    icon = c;
  }
  return {
    status: first,
    date: data,
    iconObj: icon,
    cloudiness: cloud,
    dayTemp: dTemp,
    nightTemp: nTemp
  };
}
export default createWeatherItem;