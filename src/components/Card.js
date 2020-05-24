import React from 'react';

const Card = ({ project }) => (
  <div className="column is-two-fifths">
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className="title is-6">
            {project.link ? <a href={project.link}>{project.name}</a> : project.name}
          </h1>
          <p className="subtitle is-6">{project.desc}!</p>
        </div>
        <div className="content">
          <div className="tags">
            {project.technology.map((t, i) => (
              <span key={i} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
