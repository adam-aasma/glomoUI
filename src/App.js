import React, {useContext, Fragment} from 'react';
import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import Banner from './Components/Banner/Banner';
import {AuthContext} from './Context/Auth-context';
import Register from './Components/Register';
import Home from './Components/Home/Home';
import UserHistory from './Components/UserHistory/UserHistory';

const App = () => {
  const { isAuth} = useContext(AuthContext);
  return (
    <Fragment>
      <Banner/>
      <section className="main">
        <Switch>
          <PrivateRoute exact path="/" isAuth={isAuth}>
            <Home/>
          </PrivateRoute>
          <PrivateRoute exact path="/history" isAuth={isAuth}>
            <UserHistory/>
          </PrivateRoute>
          <Register/>
        </Switch>
      </section>
    </Fragment>
  );
}

function PrivateRoute({ children,isAuth, ...rest }) {
  return ( <Route {...rest} render={({ location }) => isAuth ? (children) : 
        (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
