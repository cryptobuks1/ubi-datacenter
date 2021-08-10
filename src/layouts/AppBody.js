import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Dashboard from '../components/dashboard/Dashboard';
import Library from '../components/library/Library';
import ProtectedRoute from '../helpers/ProtectedRoute';
import Container from '@material-ui/core/Container';

function AppBody() {
    return (
        <div>
            
            <Header />
            <SubHeader />
            
            
            <div className="page__body">
                <Container>
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
                </Container>
            </div>
            
        </div>
    )
}


export default AppBody
