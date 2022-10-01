// Render Prop
import React from "react";
import "../Styles/formik.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div className="basic">
    <p className="title">Make a new Event</p>
    <Formik
      initialValues={{ title: "", start_time: "", end_time: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        } else if (values.title.length < 4) {
          errors.title = "at least 1 word is required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <section className="title_div">
            <Field
              id="title"
              className="input__title"
              type="text"
              name="title"
            />
            <label className="label">Title</label>
          </section>
          <ErrorMessage name="title" component="div" />
          <section className="start_end">
            <section className="start_div">
              <label for="start">Start Time</label>
              <Field type="time" id="start" name="start time" />
              <ErrorMessage name="start_time" component="div" />
            </section>
            <p>-</p>
            <section>
              <label for="end">End Time</label>
              <Field type="time" id="end" name="end_time time" />
              <ErrorMessage name="end_time" component="div" />
            </section>
          </section>
          <button className="btn" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
