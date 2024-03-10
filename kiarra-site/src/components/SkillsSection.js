import React from 'react';

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1 className="page-title">Skills</h1>
      <div>
        <h2 className="section-title">Business Skills</h2>
        <ul className="skills-list">
          <li>Business-to-Business-Sales</li>
          <li>Business-Development</li>
          <li>Case-Study</li>
          <li>Financial-Analysis</li>
          <li>Strategic-Planning</li>
          <li>Goal-Orientation</li>
          <li>Results-Driven</li>
          <li>Client-Focus</li>
        </ul>
      </div>
      <div>
        <h2 className="section-title">Technical Skills</h2>
        <ul className="skills-list">
          <li>Database-Management</li>
          <li>Presentation</li>
          <li>Reporting</li>
          <li>Analysis</li>
          <li>Tech-Savviness</li>
        </ul>
      </div>
      <div>
        <h2 className="section-title">Soft Skills</h2>
        <ul className="skills-list">
          <li>Interpersonal</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Collaboration</li>
          <li>Problem-Solving</li>
          <li>Analytical-Thinking</li>
          <li>Organization</li>
          <li>Innovation</li>
          <li>Expertise-Seeking</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
