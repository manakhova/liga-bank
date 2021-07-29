import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {closeModal, togglePassword} from '../utils'

const Modal = (props) => {
  const {setLoginData} = props;

  const handleCloseButtonClick = () => {
    closeModal();
  };

  const handleShowPasswordButton = () => {
    togglePassword();
  }

  const handleLoginButtonClick = (evt) => {
    evt.preventDefault();

    const login = document.querySelector('#login');
    const password = document.querySelector('#password');

    const loginData = {
      login: `${login.value}`,
      password: `${password.value}`
    }

    localStorage['loginData'] = JSON.stringify(loginData);

    setLoginData(loginData);
    closeModal();
  };

  return (
    <div className="modal" style={{display: "none"}}>
      <form className="modal__form" action="https://echo.htmlacademy.ru/" method="post">
        <div className="modal__container">
          <img className="modal__logo-image" src="./img/logo-modal.svg" alt="Лига-Банк"/>
          <button className="modal__button modal__button--close" 
          type="button" onClick={handleCloseButtonClick} tabIndex="4"></button>
        </div>
        <div className="modal__form-container">
          <label className="modal__label" htmlFor="login">Логин</label>
          <input id="login" className="modal__input" type="email" tabIndex="1" required/>

          <label className="modal__label" htmlFor="password">Пароль</label>
          <input id="password" className="modal__input" type="password" tabIndex="2" required/>
          <button className="modal__password-button" type="button"
          onClick={handleShowPasswordButton}></button>
          <a className="modal__link" href="/">Забыли пароль?</a>
          <button className="modal__button button" type="submit" tabIndex="3"
          onClick={handleLoginButtonClick}>Войти</button>
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  setLoginData: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setLoginData(review) {
    dispatch(ActionCreator.setLoginData(review));
  },
});

export {Modal};
export default connect(null, mapDispatchToProps)(Modal);