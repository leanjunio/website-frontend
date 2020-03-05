import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

const Contact = () => {
  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${process.env.API_URL}/email`, values)
        .then(res => {
          alert(`Thanks for reaching out! I'll get back to you ASAP!`);
          resetForm();
        })
        .catch(err => setError(true));
    },
  });
  return (
    <section className="section has-background-dark is-medium">
      <h1 className="title is-size-4 has-text-centered has-text-white">Let's Chat!</h1>
      <div className="columns is-centered">
        <div className="column is-two-fifths">
          <form onSubmit={formik.handleSubmit}>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      required
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field">
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Send message
                  </button>
                  {!!error && (
                    <div className="content">
                      <p className="help is-danger">An error occurred while trying to send your message :(</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
