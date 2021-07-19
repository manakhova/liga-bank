import React from 'react';

const Popup = () => {
  return (
    <div className="popup" style={{display: "none"}}>
      <div className="popup__container">
        <button className="popup__button" type="button"></button>
        <h4 className="popup__title">
          Спасибо за обращение <br/> в наш банк.
        </h4>
        <p className="popup__text">
          Наш менеджер скоро свяжется <br/> с вами
          по указанному номеру телефона.
        </p>
      </div>
    </div>
  );
};

export default Popup;