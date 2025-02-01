import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.scss';
import Zentry from '../../assets/image/zentry.png';
import Reqops from '../../assets/image/reqops.png';
import Virtual from '../../assets/image/virtual.png';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    const projects = [
        { img: Zentry, link: 'https://zentry-rust-two.vercel.app/' },
        { img: Reqops, link: 'https://reqops.vercel.app/' },
        { img: Virtual, link: 'https://virtual-r-gamma-coral.vercel.app/' },
        { img: Zentry, link: 'https://virtual-r-gamma-coral.vercel.app/' }
    ];

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h1 className="title" data-aos="fade-up" data-aos-delay="200">My recent projects</h1>
                <div className="projects__content">
                    {projects.map((project, index) => (
                        <div className="projects__item" key={index} data-aos="fade-up" data-aos-delay={400 + index * 200}>
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