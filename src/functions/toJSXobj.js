import React from 'react';
import Item from './../components/Slider/Area/Item/Item.jsx';

const toJSXobj = (obj) => {
    let newObj = obj.map((elem) => {
        return <Item weather={elem} />;
    });
    return newObj;
}

export default toJSXobj;