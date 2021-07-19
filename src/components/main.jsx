import React from 'react';
import Slider from './slider';
import Services from './services';
import Calculator from './calculator';
import Map from './map';

const Main = () => {
  return (
    <main className="page__main">
      <h1 className="visually-hidden">Лига Банк</h1>
      <Slider/>
      <Services/>
      <Calculator/>
      <Map/>
    </main>
  );
};

export default Main;