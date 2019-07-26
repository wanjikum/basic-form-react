import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UseReactOnlyForm from "./use-react-only/use-react-only";
import UseFormikForm from "./use-formic-only/use-formic-only";

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
    </ul>
    <hr />
    <Route path="/" exact component={WelcomeToBasicFormApp} />
    <Route path="/use-react-form" component={UseReactOnlyForm} />
    <Route path="/use-formik-form" component={UseFormikForm} />
  </Router>
);

export default App;
