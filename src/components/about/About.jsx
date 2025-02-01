import React from 'react';
import './About.scss';
import photo from '../../assets/image/photo.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about__wrapper">
                <h1 className="title">
                    About me
                </h1>
                <div className="about__content">
                    <img src={photo} alt="About me" className="about__photo"/>
                    <div className="about__right-container">
                        <div className="about__text-container">
                            <p className="about__text">
                                I am a frontend developer with 1.5 years of experience in commercial projects,
                                specializing in React, TypeScript, and Firebase. I build intuitive and high-performance
                                web applications, focusing on optimization, interactivity, and user experience.
                            </p>
                            <p className="about__text">
                                Experienced in state management (Redux, Zustand), working with REST APIs and Firestore,
                                implementing complex logic, and creating interactive UI components. I strive to develop
                                flexible
                                and
                                scalable solutions that are easy to maintain and expand.
                            </p>
                            <p className="about__text">
                                I constantly improve my skills, explore new technologies, and stay up to date with
                                modern
                                web
                                development approaches. I am open to exciting projects and ready for new challenges.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;