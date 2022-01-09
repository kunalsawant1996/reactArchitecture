import React, {useState, useRef} from "react";
import { Link, withRouter } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ContentDetails from "../contentDetails/index";
// import { ErrorMessage, Formik } from 'formik';
// import * as Yup from 'yup';
// import './login.css';
// import { Container, Forms, Input, StyledErrorMessage, SubmitButton } from "./contentPage-styled-component.js";
// import PropTypes from 'prop-types';
// import { loginRequest } from './actions';

const ContentPage = () => {
  const [id, setId] = useState();
  const input = useRef();
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Content page </h1>
      <div>
      <input ref= {input} />
      <button onClick={() => setId(input.current.value)}>Dynamic change ID</button>
      {id ? <ul>
          <li>
            <Link to={`${url}/ ${id}`}>Content Details Page</Link>
          </li>
        </ul>
: null}
        <Switch>
          <Route exact path={`${path}/:id`}>
            <ContentDetails /> 
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ContentPage;
