import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineSection = ({ experience }) =>
  experience ? (
    <div>
      <h1 className="title is-size-4">Career Timeline</h1>
      <Timeline lineColor={'#ddd'}>
        {experience.map(e => (
          <TimelineItem
            key={e._id}
            dateText={e.duration}
            dateInnerStyle={{ background: e.type === 'academic' ? '#7fb592' : 'e86971' }}>
            <div className="content">
              <h3 className="has-text-weight-bold is-size-6">
                {e.position}, {e.companyName}
              </h3>
              <h4 className="is-size-6">{e.location}</h4>
            </div>
            <div className="content">
              <p className="is-size-6">{e.desc}</p>
            </div>
            <div className="tags">
              {e.technology.map((t, i) => (
                <span key={i} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  ) : (
    <div>Loading...</div>
  );
export default TimelineSection;
