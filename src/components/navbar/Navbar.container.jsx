import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NavbarComponent from './Navbar.component';

import { logout } from '../../redux/auth';

function NavbarContainer() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <NavbarComponent
      isLoggedIn={!!user}
      user={user}
      handleLogout={handleLogout}
    />
  );
}

export default NavbarContainer;
