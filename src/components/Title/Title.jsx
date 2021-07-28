import React from "react";
import styles from "./Title.module.css";
import { getMonthDay } from "./../../functions/dates.js";
import { getWeekDay } from "./../../functions/dates.js";
export const Title = () => (
  <div className={styles.Title}>
    <h1>Weather Forecast</h1>
    <span>{`Samara, ${getMonthDay(0)}`}</span>
  </div>
);
