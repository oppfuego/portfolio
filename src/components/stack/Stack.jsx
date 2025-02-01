import React, { useEffect } from 'react';
import './Stack.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS CSS
import {ReactComponent as ReactLogo} from '../../assets/icons/react-logo.svg';
import {ReactComponent as CssLogo} from '../../assets/icons/css-logo.svg';
import {ReactComponent as GitLogo} from '../../assets/icons/git-logo.svg';
import {ReactComponent as JsLogo} from '../../assets/icons/js-logo.svg';
import {ReactComponent as HtmlLogo} from '../../assets/icons/html-logo.svg';
import {ReactComponent as IntellijLogo} from '../../assets/icons/intellij-idea-logo.svg';
import {ReactComponent as MongoLogo} from '../../assets/icons/mongodb-logo.svg';
import {ReactComponent as NodeLogo} from '../../assets/icons/nodejs-logo.svg';
import {ReactComponent as PostgreesqlLogo} from '../../assets/icons/postgreesql-logo.svg';
import {ReactComponent as ReduxLogo} from '../../assets/icons/redux-logo.svg';
import {ReactComponent as TypescriptLogo} from '../../assets/icons/typescript-logo.svg';
import {ReactComponent as SaasLogo} from '../../assets/icons/saas-logo.svg';
import {ReactComponent as TailwindLogo} from '../../assets/icons/tailwind-css-logo.svg';
import {ReactComponent as FirebaseLogo} from '../../assets/icons/firebase.svg';

const Stack = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <div className="stack">
            <div className="stack__wrapper">
                <h1 className="title" data-aos="fade-up">I specialise in working with the following instruments</h1>
                <div className="stack__container">
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">React</span>
                        <ReactLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">HTML</span>
                        <HtmlLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">CSS</span>
                        <CssLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">Sass</span>
                        <SaasLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">Tailwind CSS</span>
                        <TailwindLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">JavaScript</span>
                        <JsLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">TypeScript</span>
                        <TypescriptLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">Node.js</span>
                        <NodeLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">Redux</span>
                        <ReduxLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">Git</span>
                        <GitLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">Firebase</span>
                        <FirebaseLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">MongoDB</span>
                        <MongoLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-right">
                        <span className="stack__label">PostgreSQL</span>
                        <PostgreesqlLogo className="stack__icon"/>
                    </div>
                    <div className="stack__item" data-aos="fade-left">
                        <span className="stack__label">IntelliJ IDEA</span>
                        <IntellijLogo className="stack__icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;
