import React from 'react';
import '../App.css';
import projects from './certificationsData';

const Certifications = () => {
    return (
        <div className="certifications-container">
            <br />
            <h1 className="page-title" >Certifications</h1>
            <br />
            <div className="certifications">
                {projects.map((project, index) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-link">
                        <div className="project">
                            <h2>{project.title}</h2>
                            <div className="project-box">
                            </div>
                            <ul>
                                {project.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}

export default Certifications;
