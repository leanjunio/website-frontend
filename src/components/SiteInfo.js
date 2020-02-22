import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SiteInfo = () => {
  const [project, setProject] = useState({});
  const [technology, setTechnology] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios('https://leanjunio.com/api/project/website');
        setProject(response.data);
        setTechnology(response.data.technology);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (!!project) {
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
                    {/* {technology} */}
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
          {/* <div className="is-divider-vertical" data-content="OR"></div>
          <div className="column">
            Column 2 <br />
            Note: divider stretches to parent's height.
          </div> */}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default SiteInfo;
