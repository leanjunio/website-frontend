import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Error from './Error';

const Projects = () => {
  const [project, setProject] = useState({});
  const [technology, setTechnology] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(process.env.API_URL + '/project/website');
        setProject(response.data);
        setTechnology(response.data.technology);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (!error && !!project) {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">This website!</p>
                  <p className="subtitle is-6">{project.desc}!</p>
                </div>
                <div className="content">
                  <p className="is-6">Technologies used:</p>
                  <div className="tags">
                    {technology.map((t, i) => (
                      <span key={i} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default Projects;
