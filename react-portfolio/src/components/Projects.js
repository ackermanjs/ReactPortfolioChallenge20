import React from 'react';
import './projects.css';

function Projects() {
  const projects = [
    { id: 1, name: 'Project 1', image: 'https://picsum.photos/id/1/200/200' },
    { id: 2, name: 'Project 2', image: 'https://picsum.photos/id/2/200/200' },
    { id: 3, name: 'Project 3', image: 'https://picsum.photos/id/3/200/200' },
    { id: 4, name: 'Project 4', image: 'https://picsum.photos/id/4/200/200' },
    { id: 5, name: 'Project 5', image: 'https://picsum.photos/id/5/200/200' },
    { id: 6, name: 'Project 6', image: 'https://picsum.photos/id/6/200/200' },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
