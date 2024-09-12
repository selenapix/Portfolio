import React from 'react';
import './Portfolio.css'; 

const applications = [
  {
    title: 'Book Buddies',
    image: '/images/app1.png',
    deployedUrl: 'https://book-buddies-h70u.onrender.com',
    githubUrl: 'https://github.com/selenapix/Book-Buddies'
  },
  {
    title: 'Project 3- Will update ',
    image: '/images/app2.png',
    githubUrl: 'https://github.com/user/app2'
  },
  {
    title: 'TBD- Will change when I have one',
    image: '/images/app2.png',
    deployedUrl: 'https://example.com/app2',
    githubUrl: 'https://github.com/user/app2'
  }
 ];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>My Applications</h2>
      <div className="portfolio-grid">
        {applications.map((app, index) => (
          <div key={index} className="portfolio-item">
            <img src={app.image} alt={app.title} className="portfolio-image" />
            <div className="portfolio-details">
              <h3>{app.title}</h3>
              <a href={app.deployedUrl} target="_blank" rel="noopener noreferrer" className="btn">View Deployed</a>
              <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">View GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

