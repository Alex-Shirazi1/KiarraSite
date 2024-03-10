import React from 'react';
import '../App.css';
import Contact from './Contact';

const AboutMe = () => {
    return (
        <div className="about-container">
            <div className="profile-section">
                <div className="contact-mobile-hidden">
                    <Contact />
                </div>
            </div>
            <div className="info-section">
                <div className="bio-section">
                    <h1 className="section-title">Kiarra Ysabel P. Puzon</h1>
                    <h2>Greetings,</h2>
                    <p className="bio">
                        I am an entrepreneur and recent graduate from Menlo College, attaining a B.S. in Marketing and Finance. My scholastic background has bestowed upon me both theoretical knowledge and practical skills, empowering me to confront real-world challenges with confidence. My areas of interest encompass business development, operations, management, marketing, financial technology, and financial business. Throughout my educational journey, I have refined my problem-solving prowess, evolving into a detail-oriented and analytical professional.
                    </p>
                    <p className="bio">
                    I ardently embrace the concept of lifelong learning, consistently seeking avenues to refine and acclimate my skills. The ever-evolving nature of the business realm propels me to remain abreast of emerging trends and innovations. Each challenge becomes a catalyst for personal and professional advancement, while every project presents an opportunity to devise meaningful and efficient digital solutions.
                    </p>
                    <p className="bio">
                    As I embark upon my professional odyssey, my aspiration is to contribute to projects that seamlessly integrate the latest tools, resources, and methodologies, fostering positive impacts for clients and society at large. I am impassioned by the convergence of business, innovation, and problem-solving, eagerly anticipating the myriad opportunities that lie ahead.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default AboutMe;
