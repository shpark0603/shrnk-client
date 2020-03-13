import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-main.svg';
import styles from './Navbar.module.scss';

NavbarComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

function NavbarComponent({ isLoggedIn }) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__brand}>
            <Link to="/">
              <img src={logo} alt="shrnk logo" />
            </Link>
          </div>
          <ul className={styles.navbar__list}>
            {isLoggedIn ? (
              <>
                <li>
                  <button type="button">log out</button>
                </li>
                {/* <li>
                <Link to='/user-details'></Link>
              </li> */}
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/signup" className={styles.navbar__border}>
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
