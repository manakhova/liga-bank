import '../scss/App.scss';
import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Modal from './modal';
import Popup from './popup';

const App = () => {
  return (
    <div className="page__body">
      <Header/>
      <Main/>
      <Footer/>
      <Modal/>
      <Popup/>
    </div>
  );
};

export default App;