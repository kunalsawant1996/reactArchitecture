import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
// import './login.css';
import { Container, Forms, Input, StyledErrorMessage, SubmitButton } from "./login-styled-component.js";
import PropTypes from 'prop-types';
import { loginRequest } from './actions';
import { useDispatch } from 'react-redux';
import { LOGIN_REQUESTING } from '../../constants.js';


const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter valid Email').required('Email required'),
        password: Yup.string().required('Password Requred').min(5)
    });

    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        dispatch(loginRequest(values));
    }
    return (
        <Container >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Forms >
                    <label htmlFor='email'> Email</label>
                    <Input type='email' name='email' id='email' />
                    <ErrorMessage name="email">
                        {msg => (
                            <StyledErrorMessage>{msg}</StyledErrorMessage>
                        )}
                    </ErrorMessage>
                    <label htmlFor='pass'> Password</label>
                    <Input type='password' name='password' id='pass' />
                    <ErrorMessage name="password">
                        {msg => (
                            <StyledErrorMessage>{msg}</StyledErrorMessage>
                        )}
                    </ErrorMessage>
                    <SubmitButton type='submit'>Login</SubmitButton>
                </Forms>
            </Formik>

        </Container>
    );
}

// Login.propTypes = {

// };


export default Login;