import React from "react";
import { Item } from "./../components/Slider/Area/Item/Item.jsx";

export const toJSXobj = (obj) => {
  const newObj = obj.map((elem, index) => {
    return <Item key={index} weather={elem} />;
  });
  return newObj;
};
