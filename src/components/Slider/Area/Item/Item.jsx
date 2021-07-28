import React from "react";
import styles from "./Item.module.css";

export const Item = (props) => {
  return (
    <div className={styles.Item}>
      <span className={styles.descr}>
        Daily Forecast: <br></br>
        <span>
          6 am{" "}
          <span className={styles.text}>
            {props.weather.currentDay.curDay6}
            <sup>°</sup>
          </span>
          <img src={props.weather.currentDay.img6} alt="img"></img>
        </span>
        <span>
          10 am{" "}
          <span className={styles.text}>
            {props.weather.currentDay.curDay10}
            <sup>°</sup>
          </span>
          <img src={props.weather.currentDay.img10} alt="img"></img>
        </span>
        <span>
          2 pm{" "}
          <span className={styles.text}>
            {props.weather.currentDay.curDay14}
            <sup>°</sup>
          </span>
          <img src={props.weather.currentDay.img14} alt="img"></img>
        </span>
        <span>
          6 pm{" "}
          <span className={styles.text}>
            {props.weather.currentDay.curDay18}
            <sup>°</sup>
          </span>
          <img src={props.weather.currentDay.img18} alt="img"></img>
        </span>
        <span>
          10 pm{" "}
          <span className={styles.text}>
            {props.weather.currentDay.curDay22}
            <sup>°</sup>
          </span>
          <img src={props.weather.currentDay.img22} alt="img"></img>
        </span>
      </span>
      <div className={styles.content}>
        <p className={styles.text1}>
          {props.weather.status[0].toUpperCase() +
            props.weather.status.slice(1)}
        </p>
        <h2 className={styles.text2}>{props.weather.date}</h2>
        <img src={props.weather.iconObj} alt="img" />
        <p className={styles.text3}>
          {props.weather.dayTemp}
          <sup>°</sup>
        </p>
        <p className={styles.text4}>
          {props.weather.nightTemp}
          <sup>°</sup> at night
        </p>
        <p className={styles.text5}>{props.weather.cloudiness}</p>
      </div>
    </div>
  );
};
