import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

//Layouts
import AppBody from './layouts/AppBody';

//Pages
import Login from './components/auth/Login'


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <TransitionApp/>
        </>
      </Router>
    </div>
  );
}

function TransitionApp() {
  let location = useLocation();
  return (
    <div>
      <Switch location={location}>
        {/* Pages without layouts */}
        <Route exact path="/" component={Login} /> 

        {/* Pages with layouts */}
        <AppBody />
      </Switch>
    </div>
  );
}

export default App;
