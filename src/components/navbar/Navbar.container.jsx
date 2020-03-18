import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NavbarComponent from './Navbar.component';

import { logout } from '../../redux/auth';

function NavbarContainer() {
  const isLoggedIn = !!useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <NavbarComponent isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
  );
}

export default NavbarContainer;
