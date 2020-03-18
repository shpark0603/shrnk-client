import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-main.svg';
import styles from './Navbar.module.scss';

NavbarComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object
};

NavbarComponent.defaultProps = {
  user: null
};

function NavbarComponent({ isLoggedIn, handleLogout, user }) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__brand}>
            {isLoggedIn ? (
              <Link to="/urls">
                <img src={logo} alt="shrnk logo" />
              </Link>
            ) : (
              <Link to="/">
                <img src={logo} alt="shrnk logo" />
              </Link>
            )}
          </div>
          <ul className={styles.navbar__list}>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/user-details">{user.name}</Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className={styles.navbar__logout}
                  >
                    로그아웃
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/signup" className={styles.border}>
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className={styles.navbar__space} />
    </>
  );
}

export default NavbarComponent;
