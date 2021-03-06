import React from 'react';
import {closePopup} from '../utils';

const Popup = () => {

  const handleCloseButtonClick = () => {
    closePopup();
  };

  return (
    <div className="popup" style={{display: "none"}}>
      <div className="popup__container">
        <button className="popup__button" type="button" onClick={handleCloseButtonClick}></button>
        <h4 className="popup__title">
          Спасибо за обращение <br/> в наш банк.
        </h4>
        <p className="popup__text">
          Наш менеджер скоро свяжется <br/> с вами <br/>
          по указанному номеру телефона.
        </p>
      </div>
    </div>
  );
};

export default Popup;