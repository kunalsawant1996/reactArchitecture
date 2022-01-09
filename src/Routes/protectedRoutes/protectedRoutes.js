import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const Auth = localStorage.getItem('user');
    return ( <
        Route {...rest }
        render = {
            props =>
            Auth.successful ? < Component {...props }
            /> :  <
            Redirect to = {
                {
                    pathname: '/',
                    state: {
                        from: props.location
                    }
                }
            }
            /> 
        }
        />
    )
}

export default ProtectedRoute;