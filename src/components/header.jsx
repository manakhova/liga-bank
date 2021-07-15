import React from 'react';

const Header = () => {
  return (
    <header className="page__header page-header">
      <div className="page-header__container">
        <a href="index.html" className="page-header__logo">
          <img className="page-header__logo-image" src="./img/logo.svg" alt="Лига-Банк"/>
        </a>
        <nav className="page-header__navigation">
          <ul className="navigation navigation--header">
            <li className="navigation__item">
              <a className="navigation__link" href="/">Услуги</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Рассчитать кредит</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link navigation__link--active" href="/">Конвертер валют</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Контакты</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Задать вопрос</a>
            </li>
          </ul>
        </nav>
        <a className="page-header__authorization authorization" href="/">
        Войти в Интернет-банк
        </a>
      </div>
    </header>
  );
};

export default Header;