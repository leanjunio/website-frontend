import React from 'react';

const Contact = () => (
  <section className="section has-background-dark is-medium">
    <h1 className="title is-size-4 has-text-centered has-text-white">Let's Chat!</h1>
    <div className="columns is-centered">
      <div className="column is-two-fifths">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="Name" />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="email" placeholder="Email" />
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="Subject" />
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Message" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field">
            <div className="control">
              <button className="button is-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
