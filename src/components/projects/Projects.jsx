import React, { useEffect } from 'react';
import './Projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Zentry from '../../assets/image/zentry.png';
import Reqops from '../../assets/image/reqops.png';
import Virtual from '../../assets/image/virtual.png';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h1 className="title">My recent projects</h1>
                <div className="projects__content">
                    {[{ img: Zentry, link: 'https://zentry-rust-two.vercel.app/' },
                        { img: Reqops, link: 'https://reqops.vercel.app/' },
                        { img: Virtual, link: 'https://virtual-r-gamma-coral.vercel.app/' },
                        { img: Zentry, link: 'https://virtual-r-gamma-coral.vercel.app/' }]
                        .map((project, index) => (
                            <div className="projects__item" key={index} data-aos="zoom-in">
                                <div className="projects__image-container">
                                    <img src={project.img} alt="project" className="projects__image"/>
                                    <div className="projects__overlay">
                                        <p className="projects__text">Project Description</p>
                                        <a className="projects__link" href={project.link} target="_blank" rel="noopener noreferrer">
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
