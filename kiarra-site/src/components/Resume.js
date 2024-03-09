import React from 'react';

import '../App.css';
import experiences from './Projects';
import moreProjects from './MoreProjects'
import { useState } from 'react';

const Resume = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleMoreProjects = () => {
        setShowMore(!showMore);
    };

    const renderMoreProjects = () => {
        if (showMore) {
            return moreProjects.map((exp, index) => (
                <div className="experience" key={index}>
                    <div className="experience-header">
                        <img src={exp.logo} alt={exp.company} className="company-logo" />
                        <div className="experience-info">
                            <h2>{exp.company}</h2>
                            <p>
                                <span className="location">{exp.location}</span>
                                <span className="duration">({exp.duration})</span>
                            </p>

                        </div>
                    </div>
                    <ul className="experience-tasks">
                        {exp.description}
                    </ul>
                </div>
            ));
        }
        return null;
    };

    return (
        <div className="projects-container">
            <br />
            <h1 className="page-title">My Projects</h1>
            {experiences.map((exp, index) => (
                <div className="experience" key={index}>
                    <div className="experience-header">
                        <img src={exp.logo} alt={exp.company} className="company-logo" />
                        <div className="experience-info">
                            <h2>{exp.company}</h2>
                            <p>
                                <span className="location">{exp.location}</span>
                                <span className="duration">({exp.duration})</span>
                            </p>

                        </div>
                    </div>
                    <ul className="experience-tasks">
                        {exp.description}
                    </ul>
                </div>
            ))}

            {renderMoreProjects()}
            <button onClick={handleToggleMoreProjects} className="toggle-projects-button">
                {showMore ? 'Hide' : 'Show More Projects'}
            </button>
        </div>
    );
}

export default Resume;
