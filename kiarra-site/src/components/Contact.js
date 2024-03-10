import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Contact = () => {
    return (
<div className='contact-component'>
            <div className="image-container">
                <img src="/profile.png" alt="Profile" className="profile-image" />
            </div>
            <div className="contact-container">
                <h2 className='section-title'>Contact Me</h2>
                <div className="contact-icons">
                    <div className="icon-item email-icon-item">
                        <FontAwesomeIcon icon={faEnvelope} size="4x" className="icon email" />
                        <p>kiarraysabelpuzon@yahoo.com</p>
                    </div>
                    <a href="https://www.linkedin.com/in/kiarra-ysabel-p-puzon-1b14351ab/" target="_blank" rel="noopener noreferrer" className="icon-item">
                        <FontAwesomeIcon icon={faLinkedin} size="4x" className="icon linkedin" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
            <div className="resume-download-container">
                <div className="resume-icon">
                    <a href="/Kiarra%20Puzon%20Resume.pdf" download target="_blank" rel="noopener noreferrer" className="icon-item">
                        <FontAwesomeIcon icon={faDownload} size="4x" className="icon download" />
                        <p>Download CV</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
