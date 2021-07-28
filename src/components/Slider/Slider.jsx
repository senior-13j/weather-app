import React from "react";
import styles from "./Slider.module.css";
import left_arrow from "./../../images/left_arrow.png";
import right_arrow from "./../../images/right_arrow.png";
import left_arrow_active from "./../../images/left_arrow_active.png";
import right_arrow_active from "./../../images/right_arrow_active.png";
import { Area } from "./Area/Area.jsx";
import { convert } from "./../../functions/convert.js";
import { toJSXobj } from "./../../functions/toJSXobj.js";

let srcArray = convert(16);
let newArray = [];
for (let i = 0; i < srcArray.length; i++) {
  if (srcArray[i].isShown === true) {
    newArray.push(srcArray[i]);
  }
}

export class Slider extends React.Component {
  constructor() {
    super();
    this.rightClick = this.rightClick.bind(this);
    this.state = {
      sArray: toJSXobj(newArray),
      left: left_arrow,
      right: right_arrow_active,
    };
  }
  rightClick(srcArray) {
    this.setState({ left: left_arrow_active });
    newArray = [];
    let firstElem = 0;
    let lastElem = 0;
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].isShown === true) {
        firstElem = i;
        break;
      }
    }
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i + 2] === undefined) {
        this.setState({
          left: left_arrow_active,
          right: right_arrow,
        });
      }
      if (srcArray[i + 1] === undefined) {
        return;
      }
      if (srcArray[i + 1].isShown === false && srcArray[i].isShown === true) {
        lastElem = i;
        break;
      }
    }
    for (let i = 0; i < srcArray.length; i++) {
      if (i === firstElem) {
        srcArray[i].isShown = false;
        break;
      }
    }
    for (let i = 0; i < srcArray.length; i++) {
      if (i === lastElem) {
        srcArray[i + 1].isShown = true;
        break;
      }
    }
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].isShown === true) {
        newArray.push(srcArray[i]);
      }
    }
    this.setState({ sArray: toJSXobj(newArray) });
  }
  leftClick(srcArray) {
    this.setState({ right: right_arrow_active });
    newArray = [];
    let firstElem = 0;
    let lastElem = 0;
    for (let i = srcArray.length - 1; i >= 0; i--) {
      if (srcArray[i].isShown === true) {
        lastElem = i;
        break;
      }
    }
    for (let i = srcArray.length - 1; i >= 0; i--) {
      if (srcArray[i - 2] === undefined) {
        this.setState({
          left: left_arrow,
          right: right_arrow_active,
        });
      }
      if (srcArray[i - 1] === undefined) {
        return;
      }
      if (srcArray[i].isShown === true && srcArray[i - 1].isShown === false) {
        firstElem = i;
        break;
      }
    }
    for (let i = srcArray.length - 1; i >= 0; i--) {
      if (i === lastElem) {
        srcArray[i].isShown = false;
        break;
      }
    }
    for (let i = srcArray.length - 1; i >= 0; i--) {
      if (i === firstElem) {
        srcArray[i - 1].isShown = true;
        break;
      }
    }
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].isShown === true) {
        newArray.push(srcArray[i]);
      }
    }
    this.setState({ sArray: toJSXobj(newArray) });
  }
  render() {
    return (
      <div className={styles.Slider}>
        <div
          className={styles.outerArrows}
          onClick={() => {
            this.leftClick(srcArray);
          }}
        >
          <div className={styles.arrows}>
            <img src={this.state.left} alt="left arrow" />
          </div>
        </div>
        <Area array={this.state.sArray} />
        <div
          className={styles.outerArrows}
          onClick={() => {
            this.rightClick(srcArray);
          }}
        >
          <div className={styles.arrows}>
            <img src={this.state.right} alt="right arrow" />
          </div>
        </div>
      </div>
    );
  }
}
