import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Utils from '../Utilities/Utils';
import constant from '../Utilities/Constant';
import CircularProgress from '@material-ui/core/CircularProgress';

function ProtectedRoute({component: Component, ...rest}) {
    const [auth, setAuth] = useState(false); 
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            const f = new URLSearchParams();
            f.append('token', token);
            f.append('request_by', localStorage.getItem('id'));
            axios.post(Utils._getApi(constant.validatetoken), f, {
                headers: ''
            }).then(response => {
                const status = response.data.status;
                if (status === 1) {
                    setAuth(true);
                    setLoading(false);
                }
            }).catch(err => {
                setAuth(false);
                localStorage.getItem('token');
            })
        } else {
            setLoading(false); 
        }
    }, []);

    if (isLoading) {
        return <div>
            <CircularProgress/>
        </div>
    }

    return (
        <Route
            {...rest}
            render={props => {
                return auth ? <Component {...props} /> : <Redirect to='/' />
            }}
        />
    )
}

export default ProtectedRoute
