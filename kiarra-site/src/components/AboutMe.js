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
                    <h2>Bussines Graduate from Menlo College</h2>
                    <ul className="bio">
                        <li>
                            <strong>Personalized TV, Profile Driven Interface Design:</strong> Specializing in creating customized viewing experiences based on user profiles and preferences.
                        </li>
                        <li>
                            <strong>PVR Services, ITV, User Interface, Social Network Applications:</strong> Expertise in developing user-friendly interfaces for PVR and ITV services, integrating social media functionalities.
                        </li>
                        <li>
                            <strong>Virtual Reality, Videogames and Public Installations:</strong> Innovating in VR and gaming, bringing immersive experiences to public installations and home entertainment.
                        </li>
                    </ul>
                    <p className="bio">
                        My prior work encompasses interactive design, prototype and product development, strategic planning, user interface, consumer research, and fostering the growth of early phase companies.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
