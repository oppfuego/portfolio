import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Stack.scss';
import { ReactComponent as ReactLogo } from '../../assets/icons/react-logo.svg';
import { ReactComponent as CssLogo } from '../../assets/icons/css-logo.svg';
import { ReactComponent as GitLogo } from '../../assets/icons/git-logo.svg';
import { ReactComponent as JsLogo } from '../../assets/icons/js-logo.svg';
import { ReactComponent as HtmlLogo } from '../../assets/icons/html-logo.svg';
import { ReactComponent as IntellijLogo } from '../../assets/icons/intellij-idea-logo.svg';
import { ReactComponent as MongoLogo } from '../../assets/icons/mongodb-logo.svg';
import { ReactComponent as NodeLogo } from '../../assets/icons/nodejs-logo.svg';
import { ReactComponent as PostgreesqlLogo } from '../../assets/icons/postgreesql-logo.svg';
import { ReactComponent as ReduxLogo } from '../../assets/icons/redux-logo.svg';
import { ReactComponent as TypescriptLogo } from '../../assets/icons/typescript-logo.svg';
import { ReactComponent as SaasLogo } from '../../assets/icons/saas-logo.svg';
import { ReactComponent as TailwindLogo } from '../../assets/icons/tailwind-css-logo.svg';
import { ReactComponent as FirebaseLogo } from '../../assets/icons/firebase.svg';

const stackItems = [
    { label: 'React', Icon: ReactLogo },
    { label: 'HTML', Icon: HtmlLogo },
    { label: 'CSS', Icon: CssLogo },
    { label: 'Sass', Icon: SaasLogo },
    { label: 'Tailwind CSS', Icon: TailwindLogo },
    { label: 'JavaScript', Icon: JsLogo },
    { label: 'TypeScript', Icon: TypescriptLogo },
    { label: 'Node.js', Icon: NodeLogo },
    { label: 'Redux', Icon: ReduxLogo },
    { label: 'Git', Icon: GitLogo },
    { label: 'Firebase', Icon: FirebaseLogo },
    { label: 'MongoDB', Icon: MongoLogo },
    { label: 'PostgreSQL', Icon: PostgreesqlLogo },
    { label: 'IntelliJ IDEA', Icon: IntellijLogo }
];

const Stack = () => {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <div className="stack">
            <div className="stack__wrapper" data-aos="fade-up" data-aos-delay="200">
                <h1 className="title" data-aos="fade-up" data-aos-delay="300">I specialise in working with the following instruments</h1>
                <div className="stack__container" data-aos="fade-up" data-aos-delay="400">
                    {stackItems.map(({ label, Icon }) => (
                        <div key={label} className="stack__item" data-aos="fade-up" data-aos-delay="800">
                            <span className="stack__label">{label}</span>
                            <Icon className="stack__icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stack;