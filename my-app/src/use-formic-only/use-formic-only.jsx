import React from "react";
import { Formik } from "formik";

const handleSubmit = values => {
  console.log("valuees>>>>", values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

const UseFormikForm = () => (
  <div>
    <h1>Hello there am using Formik</h1>
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ handleChange, values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder={"mickey.mikee@gmail.com"}
              value={values.email}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </label>
          <button type="submit">Submit </button>
        </form>
      )}
    </Formik>
  </div>
);

export default UseFormikForm;
