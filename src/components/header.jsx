import React from 'react';
import {closeKeydownModal, openMenu, closeMenu} from '../utils'

const Header = () => {

  const handlePopupButtonClick = () => {
    const modal = document.querySelector(`.modal`);
    modal.style.display = `block`;
    modal.querySelector('#user-login').focus();
    document.addEventListener('keydown', closeKeydownModal);
  };

  const handleOpenMenuButtonClick = () => {
    openMenu();
  }

  const handleCloseMenuButtonClick = () => {
    closeMenu();
  }

  return (
    <header className="page__header page-header">
      <div className="page-header__container">
        <div className="page-header__main-container">
          <div className="page-header__logo-container">
            <button className="page-header__open-button" type="button" aria-label="Open modal button"
            onClick={handleOpenMenuButtonClick}></button>
            <a href="index.html" className="page-header__logo">
              <img className="page-header__logo-image" width="118px" height="17px" src="./img/logo.svg" alt="Лига-Банк"/>
            </a>
          </div>
          <button className="page-header__close-button" type="button" aria-label="Close button"
          onClick={handleCloseMenuButtonClick}></button>
        </div>
        <nav className="page-header__navigation">
          <ul className="navigation navigation--header"> 
            <li className="navigation__item">
              <a className="navigation__link" href="/">Услуги</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Рассчитать кредит</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Конвертер валют</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Контакты</a>
            </li>
          </ul>
        </nav>
        <button className="page-header__authorization authorization" href="/" onClick={handlePopupButtonClick} aria-label="Authorization button">
          <span>Войти в Интернет-банк</span> 
        </button>
      </div>
    </header>
  );
};

export default Header;