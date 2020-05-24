import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Sentry from '@sentry/browser';

import Card from './Card';
import Error from './Error';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(process.env.API_URL + '/project');
        setProjects(response.data);
      } catch (error) {
        Sentry.captureException(error);
        setError(true);
      }
    })();
  }, []);

  if (!error && !!projects) {
    return (
      <div className="container">
        <div className="columns is-centered">
          {projects.map((project, i) => (
            <Card key={i} project={project} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default Projects;
