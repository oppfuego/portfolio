import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';
import photo from '../../assets/image/photo.jpg';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <div id="about" className="about">
            <div className="about__wrapper" data-aos="fade-up" data-aos-delay="200">
                <h1 className="title" data-aos="fade-up" data-aos-delay="400">
                    About me
                </h1>
                <div className="about__content">
                    <img src={photo} alt="About me" className="about__photo" data-aos="fade-right" data-aos-delay="600"/>
                    <div className="about__right-container" data-aos="fade-left" data-aos-delay="800">
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