import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/navbar';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import Signup from './pages/Signup.page';
import Urls from './pages/Urls.page';
import AccountDetails from './pages/AccountDetails.page';

function App() {
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user && !localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  let routes;

  if (user) {
    routes = (
      <Switch>
        <Route path="/urls" component={Urls} />
        <Route path="/user-details" component={AccountDetails} />
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
    <>
      <Navbar />
      {routes}
    </>
  );
}

export default App;
