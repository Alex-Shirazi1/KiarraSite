import React, { Profiler, useEffect, useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Resume';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Portfolio from './components/Portfolio';
import SkillsSection from './components/SkillsSection';

const App = () => {

  const [activeSection, setActiveSection] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const handleScroll = () => {
    const sections = ['about', 'resume', 'portfolio'];
    const scrollY = window.scrollY + window.innerHeight / 2;
    const currentSection = sections.reverse().find(section => {
      const element = document.getElementById(section);
      return element && element.offsetTop <= scrollY; // Ensure element exists before checking offsetTop
    });
  
    setActiveSection(currentSection || 'about');
  };
  

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav>
        <a onClick={toggleProfile} className="profile-symbol">
        <FontAwesomeIcon icon={faBars}/>
        </a>
        <a onClick={() => scrollToElement('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</a>

        <a onClick={() => scrollToElement('resume')} className={activeSection === 'resume' ? 'active' : ''}>Projects</a>
      </nav>

      <div className="contact-card">
        <div className={`profile-slide ${isProfileOpen ? 'open' : ''}`}>
          <Contact />
        </div>
      </div>

      <div id="about"><AboutMe /></div>
      <div id = "skills"><SkillsSection/></div>
      <div id="resume"><Portfolio /></div>

      <Footer />
    </div>
  );
};

export default App;
