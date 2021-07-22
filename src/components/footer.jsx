import React from 'react';

const Footer = () => {
  return (
    <footer className="page__footer page-footer">
      <div className="page-footer__container">
        <div className="page-footer__main">
          <a href="index.html" className="page-footer__logo">
            <img className="page-footer__logo-image" src="./img/logo.svg" alt="Лига-Банк"/>
          </a>
          <div className="page-footer__address">
          150015, г. Москва, ул. Московская, д. 32 <br/>
          Генеральная лицензия Банка России №1050 <br/>
          &copy; Лига Банк, 2019
          </div>
          <div className="page-footer__navigation">
            <ul className="navigation navigation--footer">
              <li className="navigation__item">
                <a className="navigation__link" href="/">Услуги</a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="/">Рассчитать кредит</a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="/">Контакты</a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="/">Задать вопрос</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-footer__contacts">
          <div className="page-footer__mobile">
            <span className="page-footer__mobile-main">*0904</span>
            <p className="page-footer__mobile-info">
            Бесплатно для абонентов <br/> 
            МТС, Билайн, Мегафон, Теле2
            </p>
          </div>
          <div className="page-footer__telephone">
            <a className="page-footer__telephone-main" href="tel:88001112233">8 800 111 22 33</a>
            <p className="page-footer__telephone-info">
            Бесплатный для всех <br/>
            городов России
            </p>
          </div>
          <div className="page-footer__social social">
            <h3 className="visually-hidden">Соцсети</h3>
            <ul className="social__list">
              <li className="social__item social__item--facebook">
                <a className="social__link" href="/">
                  <svg className="social__link-icon" width="9" height="16">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
              <li className="social__item social__item--instagram">
                <a className="social__link" href="/">
                  <svg className="social__link-icon" width="16" height="16">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="social__item social__item--twitter">
                <a className="social__link" href="/">
                  <svg className="social__link-icon" width="16" height="13">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="social__item social__item--yuotube">
                <a className="social__link" href="/">
                  <svg className="social__link-icon" width="16" height="13">
                    <use xlinkHref="#youtube"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
