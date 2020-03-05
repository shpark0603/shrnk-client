import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import Signup from './pages/Signup.page';
import Urls from './pages/Urls.page';
import AccountDetails from './pages/AccountDetails.page';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/urls" component={Urls} />
      <Route path="/account-details" component={AccountDetails} />
    </>
  );
}

export default App;
