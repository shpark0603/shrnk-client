import React, { useContext } from 'react';

import NavbarComponent from './Navbar.component';
import AuthContext from '../../context/auth.context';

function NavbarContainer() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return <NavbarComponent isLoggedIn={isLoggedIn} logout={logout} />;
}

export default NavbarContainer;
