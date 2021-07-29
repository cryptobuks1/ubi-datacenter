import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import {
    Route,
    useLocation
  } from "react-router-dom";
  
import Dashboard from '../components/dashboard/Dashboard';
import Library from '../components/library/Library';

function AppBody() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header />
            <SubHeader />

            <Route path="/dashboard"> <Dashboard/> </Route>
            <Route path="/libraries"> <Library/> </Route>
        </div>
    )
}

export default AppBody
