import React from 'react';
import Item from './../components/Slider/Area/Item/Item.jsx';

const toJSXobj = (obj) => {
    let newObj = obj.map((elem, index) => {
        return <Item key={index} weather={elem} />;
    });
    return newObj;
}

export default toJSXobj;