import React from 'react';
import './Projects.scss';
import Zentry from '../../assets/image/zentry.png';
import Reqops from '../../assets/image/reqops.png';
import Virtual from '../../assets/image/virtual.png';

const Projects = () => {
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
                            <div className="projects__item" key={index}>
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