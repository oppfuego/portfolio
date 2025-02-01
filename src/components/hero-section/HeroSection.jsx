import React, { useEffect, useState } from 'react';
import './HeroSection.scss';
import { ReactComponent as CodingImage } from '../../assets/image/coding-image.svg';

const HeroSection = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'front-end developer';
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(150);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isDeleting) {

                setTypedText((prev) => fullText.slice(0, index + 1));
                setIndex((prev) => prev + 1);

                if (index + 1 === fullText.length) {
                    setIsDeleting(true);
                    setDelay(150);
                }
            } else {
                setTypedText((prev) => fullText.slice(0, index - 1));
                setIndex((prev) => prev - 1);

                if (index - 1 === 0) {
                    setIsDeleting(false);
                    setDelay(150);
                }
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [index, isDeleting, delay, fullText]);

    return (
        <div className="hero-section">
            <div className="hero-section__wrapper">
                <div className="hero-section__left-container">
                    <h1 className="hero-section__title">
                        Hello There!
                        <span className="hand">👋🏻</span>
                    </h1>
                    <h2 className="hero-section__subtitle">
                        I'M <span className="hero-section__subtitle--mod">zaharenko illia</span>
                    </h2>
                    <p className="hero-section__typing">
                        {typedText}
                        <span className="cursor">|</span>
                    </p>
                </div>
                <div className="hero-section__right-container">
                    <CodingImage className="hero-section__coding-image"/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
