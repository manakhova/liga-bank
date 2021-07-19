import React from 'react';

const Header = () => {
  return (
    <header className="page__header page-header">
      <div className="page-header__container">
      {/* page-header__container--open */}
        <div className="page-header__main-container">
          <div className="page-header__logo-container">
            <button className="page-header__open-button" type="button"></button>
            <a href="index.html" className="page-header__logo">
              <img className="page-header__logo-image" src="./img/logo.svg" alt="Лига-Банк"/>
            </a>
          </div>
          <button className="page-header__close-button" type="button"></button>
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
        <a className="page-header__authorization authorization" href="/">
        {/* authorization--open */}
          <span>Войти в Интернет-банк</span> 
        </a>
      </div>
    </header>
  );
};

export default Header;