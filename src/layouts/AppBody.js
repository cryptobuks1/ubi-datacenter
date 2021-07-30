import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Dashboard from '../components/dashboard/Dashboard';
import Library from '../components/library/Library';
import ProtectedRoute from '../helpers/ProtectedRoute';
import { Route, useLocation } from 'react-router-dom';

function AppBody(props) {
    console.log(props)
    return (
        <div>
            
            <Header />
            <SubHeader />

            <ProtectedRoute 
                exact
                path="/dashboard"
                component={Dashboard}
            />
            <ProtectedRoute 
                exact
                path="/libraries"
                component={Library}
            />
        </div>
    )
}


export default AppBody
