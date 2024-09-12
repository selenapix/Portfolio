import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <img src="/images/Profile.JPG" alt="Selena Pixton" className="avatar" />
      <div className="about-text">
        <h2>About Me <i class="bi bi-emoji-smile-fill"></i></h2>
        <p>
          Hi, I'm Selena Pixton, a driven full-stack developer from Texas with a recent graduation from the full-stack coding bootcamp at UTSA. At 24, I've built a solid foundation in both front-end and back-end technologies, including React, Node.js, MongoDB, and Express. 
        </p>
        <p>
          My journey into web development began with a fascination for how things work behind the scenes on the web. 
          I've since developed a strong foundation in JavaScript, HTML, and CSS, and I'm excited to dive deeper into building scalable applications.
        </p>
        <p>
          I'm constantly learning and improving my skills, eager to take on new challenges and contribute to innovative projects. 
          When I'm not coding, you can find me exploring new tech trends, working on personal projects, or listening to music.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

