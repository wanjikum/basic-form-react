import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UseReactOnlyForm from "./use-react-only/use-react-only";
import UseFormikForm from "./use-formic-only/use-formic-only";
import UseFormikField from "./use-formic-only/use-formic-field";

import "./App.css";

const WelcomeToBasicFormApp = () => <h1>Hello there it's react</h1>;

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/use-react-form">React Form</Link>
      </li>
      <li>
        <Link to="/use-formik-form">Formik Form</Link>
      </li>
      <li>
        <Link to="/use-formik-field">Formik Field</Link>
      </li>
    </ul>
    <hr />
    <Route path="/" exact component={WelcomeToBasicFormApp} />
    <Route path="/use-react-form" component={UseReactOnlyForm} />
    <Route path="/use-formik-form" component={UseFormikForm} />
    <Route path="/use-formik-field" component={UseFormikField} />
  </Router>
);

export default App;
