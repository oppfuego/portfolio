import React from 'react';
import './Footer.scss';
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";

const Footer = () => {
    return (
        <div id = "contacts" className="footer">
            <div className="footer__wrapper">
                <div className="footer__top-container">
                    <div className="footer__head">
                        <h1 className="footer__logo">{`{ILLIA.dev}`}</h1>
                        <h2>"Code. Create. Inspire." ✨</h2>
                    </div>
                    <div className="footer__contact">
                        <div className="footer__contact-data">
                            <p className="footer__number">
                                +380 97 623 44 74
                            </p>
                            <p className="footer__email">
                                @zaharenkoila19@gmail.com
                            </p>
                        </div>

                        <div className="footer__social">
                            <a href="https://github.com/oppfuego"><FaGithub className="footer__icon"/></a>
                            <a href="https://www.linkedin.com/in/illia-zaharenko/"><FaLinkedin
                                className="footer__icon"/></a>
                            <a href="https://t.me/oppfuego"><FaTelegram className="footer__icon"/></a>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer__bottom-container">
                    <p className="footer__text">
                        Designed & Developed with ❤️ by <span className="footer__text footer__text--mod">ILLIA.dev</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;