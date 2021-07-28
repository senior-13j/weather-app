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
  let curDay6 = randomInteger(0, 6);
  let curDay10 = randomInteger(8, 15);
  let curDay14 = randomInteger(20, 27);
  let curDay18 = randomInteger(10, 15);
  let curDay22 = randomInteger(2, 6);
  let n;
  let img6;
  let img10;
  let img14;
  let img18;
  let img22;
    n = randomInteger(0, 2);
    if (n === 0) {
      img6 = sun;
    } else if (n === 1) {
      img6 = rain;
    } else if (n === 2) {
      img6 = cloud;
    }
    n = randomInteger(0, 2);
    if (n === 0) {
      img10 = sun;
    } else if (n === 1) {
      img10 = rain;
    } else if (n === 2) {
      img10 = cloud;
    }
    n = randomInteger(0, 2);
    if (n === 0) {
      img14 = sun;
    } else if (n === 1) {
      img14 = rain;
    } else if (n === 2) {
      img14 = cloud;
    }
    n = randomInteger(0, 2);
    if (n === 0) {
      img18 = sun;
    } else if (n === 1) {
      img18 = rain;
    } else if (n === 2) {
      img18 = cloud;
    }
    n = randomInteger(0, 2);
    if (n === 0) {
      img22 = sun;
    } else if (n === 1) {
      img22 = rain;
    } else if (n === 2) {
      img22 = cloud;
    }
  
  return {
    isShown: hide,
    status: localstatus,
    date: data,
    iconObj: icon,
    cloudiness: chosen,
    dayTemp: dTemp,
    nightTemp: nTemp,
    currentDay: {
      curDay6,
      curDay10,
      curDay14,
      curDay18,
      curDay22,
      img6,
      img10,
      img14,
      img18,
      img22
    }
  };
}
export default createWeatherItem;