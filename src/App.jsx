import React, { useState, useCallback } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import Signup from './pages/Signup.page';
import Urls from './pages/Urls.page';
import AccountDetails from './pages/AccountDetails.page';

import AuthContext from './context/auth.context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/urls" component={Urls} />
        <Route path="/account-details" component={AccountDetails} />
        <Redirect to="/urls" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Navbar />
      {routes}
    </AuthContext.Provider>
  );
}

export default App;
