import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../Utilities/Auth';

function ProtectedRoute({component: Component, ...rest}) {
    return (
        <Route
        
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    alert(1);
                    return <Component {...props} />;
                } else {
                    alert(2);
                    return <Redirect 
                        to={{ 
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                         }}
                    />
                }
            }}

        />
    )
}

export default ProtectedRoute
