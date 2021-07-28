import createWeatherItem from './createWeatherItem.js';

const convert = (num) => {
    let obj = [];
    for (var i = 0; i <= num; i++) {
        obj.push(createWeatherItem(i));
    }
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
        newArray.push(obj[i]);
    }
    return newArray;
}

export default convert;