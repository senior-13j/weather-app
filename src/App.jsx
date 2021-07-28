import React from 'react';
import './App.css';
import Title from './components/Title/Title.jsx';
import Slider from './components/Slider/Slider.jsx';


const App = () => {
  return (
    <div className="App">
      <Title />
      <Slider />
      <div className="footer">
        <p>Аркадий Котляров <sup>&copy;</sup> 2019</p>
      </div>
    </div>
  );
}

export default App;
