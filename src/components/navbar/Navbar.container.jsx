import React from 'react';
import { useSelector } from 'react-redux';

import NavbarComponent from './Navbar.component';

function NavbarContainer() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  return <NavbarComponent isLoggedIn={isLoggedIn} />;
}

export default NavbarContainer;
