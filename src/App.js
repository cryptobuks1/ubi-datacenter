import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

//Layouts
import AppBody from './layouts/AppBody';

//Pages
import Login from './components/auth/Login'


function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="app">
      <Router>
        <>
          <Route path="*">
            <TransitionApp/>
          </Route>
        </>
      </Router>
    </div>
  );
}

function TransitionApp() {
  let location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          
          <Switch location={location}>
            {/* Pages without layouts */}
            <Route path="/" exact> <Login/> </Route>

            {/* Pages with layouts */}
            <AppBody />

          </Switch>

        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
