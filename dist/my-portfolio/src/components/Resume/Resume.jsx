import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume-section">
      <a href="/Selena_Resume.pdf" download className="download-link">
      Download Resume <i class="bi bi-download"></i>
      </a>
      <h2>Proficiencies</h2>
      <ul className="proficiencies-list">
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Node.js</li>
        
      </ul>
    </section>
  );
}

export default Resume;

