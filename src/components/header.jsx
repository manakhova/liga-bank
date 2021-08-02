import React from 'react';
import {closeKeydownModal, openMenu, closeMenu} from '../utils'

const Header = () => {

  const handlePopupButtonClick = () => {
    const modal = document.querySelector(`.modal`);
    modal.style.display = `block`;
    modal.querySelector('#login').focus();
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
      {/* page-header__container--open */}
        <div className="page-header__main-container">
          <div className="page-header__logo-container">
            <button className="page-header__open-button" type="button"
            onClick={handleOpenMenuButtonClick}></button>
            <a href="index.html" className="page-header__logo">
              <img className="page-header__logo-image" src="./img/logo.svg" alt="Лига-Банк"/>
            </a>
          </div>
          <button className="page-header__close-button" type="button"
          onClick={handleCloseMenuButtonClick}></button>
        </div>
        <nav className="page-header__navigation">
          <ul className="navigation navigation--header"> 
          {/* navigation--open */}
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
        <button className="page-header__authorization authorization" href="/" onClick={handlePopupButtonClick}>
          {/* authorization--open */}
          <span>Войти в Интернет-банк</span> 
        </button>
      </div>
    </header>
  );
};

export default Header;