import React, { useEffect } from 'react';
import './About.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../../assets/image/photo.jpg';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 600 });
        AOS.refresh();

    }, []);

    return (
        <div id="about" className="about">
            <div className="about__wrapper">
                <h1 className="title" data-aos="fade-down" data-aos-delay="200">
                    About me
                </h1>
                <div className="about__content">
                    <img src={photo} alt="My photo" className="about__photo" data-aos="zoom-in" />
                    <div className="about__right-container">
                        <div className="about__text-container">
                            <p className="about__text" data-aos="fade-right" data-aos-delay="300">
                                I am a frontend developer specializing in React, TypeScript, and Firebase. I build
                                intuitive and high-performance web applications, focusing on optimization,
                                interactivity, and user experience.
                            </p>
                            <p className="about__text" data-aos="fade-right" data-aos-delay="400">
                                Experienced in state management (Redux, Zustand), working with REST APIs and Firestore,
                                implementing complex logic, and creating interactive UI components. I strive to develop
                                flexible and scalable solutions that are easy to maintain and expand.
                            </p>
                            <p className="about__text" data-aos="fade-right" data-aos-delay="500">
                                I constantly improve my skills, explore new technologies, and stay up to date with
                                modern web development approaches. I am open to exciting projects and ready for new
                                challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;