import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, withRouter } from 'react-router-dom';
// import { ErrorMessage, Formik } from 'formik';
// import * as Yup from 'yup';
// import './home.css';
// import { Container, Forms, Input, StyledErrorMessage, SubmitButton } from "./homePage-styled-component.js";
// import PropTypes from 'prop-types';
// import { homeRequest } from './actions';



const HomePage = () => {
  return (
  <div>
      <h1>Home page </h1>
      <ul>
            <li>
              <Link to="/content">Content Page</Link>
            </li>
          </ul>
  </div>
  );
};

export default HomePage;