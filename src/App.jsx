import React from "react";
import styles from "./App.module.css";
import { Title } from "./components/Title/Title.jsx";
import { Slider } from "./components/Slider/Slider.jsx";

export const App = () => {
  return (
    <div className={styles.App}>
      <Title />
      <Slider />
      <div className={styles.footer}>
        <p>
          Arkadiy Kotlyarov <sup>&copy;</sup> 2019
        </p>
      </div>
    </div>
  );
};
