import React, { createFactory } from 'react';

function Footer({ categories }) {
    return (
        <footer>
            <div className="footer__container _container">
                <div className="footer__body">
                    <div className="footer__content">
                        <nav className="footer__nav nav-footer">
                            <h3 className="nav-footer__title">НАВИГАЦИЯ</h3>
                            <ul className="nav-footer__list">
                                {categories.map((item, index) =>
                                    <li key={`${index}_${item.value}`} className="nav-footer__item">
                                        <a href={item.href} className="nav-footer__link">{item.value}</a>
                                    </li>
                                )}
                            </ul>

                        </nav>
                        <div className="footer__info">
                            <div className="footer__logo">
                                <span>LM</span>
                            </div>
                            <div className="footer__place">
                                <span>г. Анапа, Анапское шоссе, <br/> 30 Ж/К Черное море</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__sales">
                            <div className="footer__sales--red">Акция</div>
                            <div>Новинки</div>
                        </div>
                        <div className="footer__contacts">
                            <div className="footer__contact footer__contact--tel">
                                <span className="_icon-phone footer__icon   "></span>
                                <span>8 (964) 89 99 119</span>
                            </div>
                            <div className="footer__contact footer__contact--insta">
                                <span className="_icon-inst footer__icon"></span>
                                <span>INSTAGRAM</span>
                            </div>
                            <div className="footer__contact footer__contact--mail">
                                <span className="_icon-mail footer__icon"></span>
                                <span>mebel_loft_anapa@mail.ru</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
