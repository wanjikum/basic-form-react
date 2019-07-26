import React from "react";
import { Formik, Form, Field } from "formik";

import "../App.css";

const handleSubmit = values => {
  console.log("valuees>>>>", values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

// Synchronous validation function for field level validation
const validate = value => {
  let errorMessage;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

// Async validation function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validateAsync = value => {
  console.log("value>>>", value);
  return sleep(20).then(() => {
    if (["red", "green"].includes(value)) {
      throw "Good guess!!";
    }
  });
};

const UseFormikField = () => (
  <div className="parentDiv">
    <h1>Hello there am using Formik</h1>
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ errors, touched }) => {
        console.log("errorrss>>>", errors, touched);
        return (
          <Form className="formicField">
            <label>
              Email:
              <Field
                type="text"
                name="email"
                placeholder={"mickey.mikee@gmail.com"}
                validate={validate}
              />
            </label>
            <hr />
            <hr />
            <label>
              Password:
              <Field type="password" name="password" />
            </label>
            <hr />
            <hr />
            <label>
              Guess one of our favourite colors?
              <Field component="select" name="color" validate={validateAsync}>
                <option value="">Please select</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              {errors.color && touched.color ? (
                <div className="correctGuess">{errors.color}</div>
              ) : null}
            </label>
            <hr />
            <hr />
            <hr />
            <hr />
            <button type="submit">Submit</button>
            <hr />
            <hr />
            <input type="reset" />
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default UseFormikField;
