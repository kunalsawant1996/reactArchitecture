import React from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
// import { ErrorMessage, Formik } from 'formik';
// import * as Yup from 'yup';
// import './login.css';
// import { Container, Forms, Input, StyledErrorMessage, SubmitButton } from "./contentDetails-styled-component.js";
// import PropTypes from 'prop-types';
// import { loginRequest } from './actions';




const ContentDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>
      <h1>Content Details page </h1>
      <div onClick={() => {history.push('/content')}}>{id}</div>
      {id ? <Link to='/homePage'>Home</Link> : null}
      
    </div>
  );
};

export default ContentDetails;