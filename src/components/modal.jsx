import React from 'react';

const Modal = () => {
  return (
    <div className="modal" style={{display: "none"}}>
      <form className="modal__form" action="https://echo.htmlacademy.ru/" method="post">
        <div className="modal__container">
          <img className="modal__logo-image" src="./img/logo-modal.svg" alt="Лига-Банк"/>
          <button className="modal__button modal__button--close" type="button"></button>
        </div>
        <div className="modal__form-container">
          <label className="modal__label" htmlFor="login">Логин</label>
          <input id="login" className="modal__input" type="text"/>

          <label className="modal__label" htmlFor="password">Пароль</label>
          <input id="password" className="modal__input" type="password"/>
          <button className="modal__password-button" type="button"></button>
          <a className="modal__link" href="/">Забыли пароль?</a>
          <button className="modal__button button" type="submit">Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;